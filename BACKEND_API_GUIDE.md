# Backend API Guide - Contact Form Integration with Mailgun

## Overview
This guide provides instructions for implementing a backend API endpoint to handle contact form submissions and send emails via Mailgun.

## API Endpoint Specification

### Endpoint Details
- **URL**: `https://api.banatalk.com/api/v1/contact/send`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'm interested in working with you..."
}
```

### Request Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Sender's full name |
| `email` | string | Yes | Sender's email address (must be valid email format) |
| `subject` | string | No | Email subject line (defaults to "Contact from Portfolio" if not provided) |
| `message` | string | Yes | Message content from the contact form |

### Response Format

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "messageId": "mailgun-message-id-here"
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation error message",
  "errors": {
    "email": "Invalid email format",
    "name": "Name is required"
  }
}
```

#### Error Response (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Failed to send email. Please try again later."
}
```

## Implementation Steps

### 1. Install Required Dependencies

#### For Node.js/Express:
```bash
npm install express cors dotenv mailgun.js
# or
yarn add express cors dotenv mailgun.js
```

#### For Python/Django:
```bash
pip install django djangorestframework mailgun2
```

#### For Java/Spring Boot:
Add to `pom.xml`:
```xml
<dependency>
    <groupId>net.sargue</groupId>
    <artifactId>mailgun</artifactId>
    <version>1.10.0</version>
</dependency>
```

### 2. Environment Variables
Set up the following environment variables:

```env
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
MAILGUN_FROM_EMAIL=noreply@your-domain.com
MAILGUN_FROM_NAME=Portfolio Contact Form
RECIPIENT_EMAIL=fmutalipov7@gmail.com
```

### 3. Example Implementation

#### Node.js/Express Example:
```javascript
const express = require('express');
const cors = require('cors');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

app.post('/api/v1/contact/send', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
        errors: {
          name: !name ? 'Name is required' : null,
          email: !email ? 'Email is required' : null,
          message: !message ? 'Message is required' : null,
        }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
        errors: { email: 'Invalid email format' }
      });
    }

    // Prepare email content
    const emailSubject = subject || 'Contact from Portfolio';
    const emailText = `
Name: ${name}
Email: ${email}
Subject: ${emailSubject}

Message:
${message}
    `.trim();

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${emailSubject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email via Mailgun
    const mailgunResponse = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `${process.env.MAILGUN_FROM_NAME} <${process.env.MAILGUN_FROM_EMAIL}>`,
      to: [process.env.RECIPIENT_EMAIL],
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      'h:Reply-To': email, // Allow direct reply to sender
    });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        messageId: mailgunResponse.id
      }
    });

  } catch (error) {
    console.error('Mailgun error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Python/Django Example:
```python
# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import mailgun2
import os
import re

@api_view(['POST'])
def send_contact_email(request):
    name = request.data.get('name')
    email = request.data.get('email')
    subject = request.data.get('subject', 'Contact from Portfolio')
    message = request.data.get('message')

    # Validation
    if not all([name, email, message]):
        return Response({
            'success': False,
            'message': 'Name, email, and message are required',
            'errors': {
                'name': 'Name is required' if not name else None,
                'email': 'Email is required' if not email else None,
                'message': 'Message is required' if not message else None,
            }
        }, status=status.HTTP_400_BAD_REQUEST)

    # Email validation
    email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    if not re.match(email_regex, email):
        return Response({
            'success': False,
            'message': 'Invalid email format',
            'errors': {'email': 'Invalid email format'}
        }, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Send email via Mailgun
        mg = mailgun2.Mailgun(
            api_key=os.getenv('MAILGUN_API_KEY'),
            domain=os.getenv('MAILGUN_DOMAIN')
        )

        email_text = f"""
Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
        """.strip()

        email_html = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>{message.replace(chr(10), '<br>')}</p>
        """

        response = mg.send_message(
            from_email=os.getenv('MAILGUN_FROM_EMAIL'),
            to=[os.getenv('RECIPIENT_EMAIL')],
            subject=subject,
            text=email_text,
            html=email_html,
            reply_to=email
        )

        return Response({
            'success': True,
            'message': 'Message sent successfully',
            'data': {
                'messageId': response.get('id')
            }
        }, status=status.HTTP_200_OK)

    except Exception as e:
        print(f'Mailgun error: {e}')
        return Response({
            'success': False,
            'message': 'Failed to send email. Please try again later.'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
```

#### Java/Spring Boot Example:
```java
@RestController
@RequestMapping("/api/v1")
public class ContactController {

    @Value("${mailgun.api.key}")
    private String mailgunApiKey;

    @Value("${mailgun.domain}")
    private String mailgunDomain;

    @Value("${mailgun.from.email}")
    private String fromEmail;

    @Value("${mailgun.from.name}")
    private String fromName;

    @Value("${recipient.email}")
    private String recipientEmail;

    @PostMapping("/contact/send")
    public ResponseEntity<?> sendContactEmail(@RequestBody ContactRequest request) {
        // Validation
        if (request.getName() == null || request.getName().isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                false, "Name is required", Map.of("name", "Name is required")
            ));
        }

        if (request.getEmail() == null || request.getEmail().isEmpty() || 
            !isValidEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                false, "Valid email is required", Map.of("email", "Invalid email format")
            ));
        }

        if (request.getMessage() == null || request.getMessage().isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                false, "Message is required", Map.of("message", "Message is required")
            ));
        }

        try {
            // Send email via Mailgun
            String subject = request.getSubject() != null && !request.getSubject().isEmpty()
                ? request.getSubject() : "Contact from Portfolio";

            String emailText = String.format(
                "Name: %s\nEmail: %s\nSubject: %s\n\nMessage:\n%s",
                request.getName(), request.getEmail(), subject, request.getMessage()
            );

            String emailHtml = String.format(
                "<h2>New Contact Form Submission</h2>" +
                "<p><strong>Name:</strong> %s</p>" +
                "<p><strong>Email:</strong> %s</p>" +
                "<p><strong>Subject:</strong> %s</p>" +
                "<hr><p><strong>Message:</strong></p>" +
                "<p>%s</p>",
                request.getName(), request.getEmail(), subject,
                request.getMessage().replace("\n", "<br>")
            );

            // Use Mailgun Java client
            Mailgun mailgun = Mailgun.create(mailgunApiKey);
            MessageResponse response = mailgun.messages()
                .from(fromName + " <" + fromEmail + ">")
                .to(recipientEmail)
                .subject(subject)
                .text(emailText)
                .html(emailHtml)
                .replyTo(request.getEmail())
                .send();

            return ResponseEntity.ok(new SuccessResponse(
                true, "Message sent successfully",
                Map.of("messageId", response.getId())
            ));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse(false, "Failed to send email. Please try again later."));
        }
    }

    private boolean isValidEmail(String email) {
        return email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    }
}
```

### 4. CORS Configuration
Ensure CORS is properly configured to allow requests from your frontend domain:

```javascript
// Node.js/Express
app.use(cors({
  origin: ['https://firdavs.dev', 'http://localhost:5173'], // Add your domains
  credentials: true
}));
```

### 5. Rate Limiting (Recommended)
Implement rate limiting to prevent abuse:

```javascript
// Using express-rate-limit
const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many contact requests, please try again later.'
});

app.post('/api/v1/contact/send', contactLimiter, async (req, res) => {
  // ... handler code
});
```

### 6. Security Considerations

1. **Input Sanitization**: Sanitize all user inputs to prevent XSS attacks
2. **Rate Limiting**: Implement rate limiting to prevent spam
3. **Honeypot Fields**: Consider adding hidden honeypot fields to catch bots
4. **CAPTCHA**: Consider adding reCAPTCHA for additional protection
5. **HTTPS**: Always use HTTPS in production
6. **API Key Security**: Never expose Mailgun API key in frontend code

### 7. Testing

Test the endpoint with curl:

```bash
curl -X POST https://api.banatalk.com/api/v1/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### 8. Error Handling

Ensure proper error handling for:
- Network failures
- Mailgun API errors
- Invalid email addresses
- Missing required fields
- Rate limit exceeded

## Mailgun Setup

1. Sign up at https://www.mailgun.com/
2. Verify your domain or use sandbox domain for testing
3. Get your API key from the dashboard
4. Configure domain DNS records (for production)
5. Test sending emails from the Mailgun dashboard

## Additional Notes

- The frontend expects the API to be available at: `https://api.banatalk.com/api/v1/contact/send`
- Make sure to handle CORS properly for cross-origin requests
- Consider adding logging for debugging and monitoring
- Set up email templates for better formatting
- Consider storing form submissions in a database for record-keeping

## Support

If you encounter any issues:
1. Check Mailgun dashboard for delivery status
2. Verify API keys and domain configuration
3. Check server logs for error messages
4. Test Mailgun API directly using their API console

