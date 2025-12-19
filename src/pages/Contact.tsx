// src/pages/ContactPage.tsx

import { Github, Globe, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLanguage } from '../context/languageContext';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API endpoint for sending email via Mailgun
      const API_BASE_URL = 'https://api.banatalk.com/api/v1';
      const response = await fetch(`${API_BASE_URL}/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact from Portfolio',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error response from API
        const errorMessage = data.error || data.message || 'Failed to send message';
        throw new Error(errorMessage);
      }

      // Success - show success notification
      if (data.success) {
        toast.success(
          language === 'ko' 
            ? '메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.' 
            : 'Message sent successfully! I\'ll get back to you soon.',
          {
            duration: 5000,
            icon: '✅',
            style: {
              background: '#10b981',
              color: '#fff',
              fontSize: '16px',
              padding: '16px',
            },
          }
        );
        
        // Reset form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      // Handle different types of errors
      let errorMessage = 'Something went wrong. Please try again or contact me directly.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
        
        // Handle specific error cases
        if (errorMessage.includes('rate limit') || errorMessage.includes('Too many')) {
          errorMessage = language === 'ko'
            ? '요청이 너무 많습니다. 15분 후에 다시 시도해주세요.'
            : 'Too many requests. Please try again after 15 minutes.';
        } else if (errorMessage.includes('email') || errorMessage.includes('Email')) {
          errorMessage = language === 'ko'
            ? '유효한 이메일 주소를 입력해주세요.'
            : 'Please enter a valid email address.';
        } else if (errorMessage.includes('required') || errorMessage.includes('필수')) {
          errorMessage = language === 'ko'
            ? '모든 필수 항목을 입력해주세요.'
            : 'Please fill in all required fields.';
        }
      }
      
      toast.error(errorMessage, {
        duration: 5000,
        icon: '❌',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontSize: '16px',
          padding: '16px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      value: 'fmutalipov7@gmail.com',
      href: 'mailto:fmutalipov7@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+82-10-8277-3725',
      href: 'tel:+82-10-8277-3725',
      color: 'green'
    },
    {
      icon: MapPin,
      title: t.contact.location,
      value: 'Seoul, South Korea',
      href: 'https://maps.google.com/?q=Seoul,South+Korea',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/firdavs9777',
      color: 'gray'
    },
    {
      icon: Globe,
      name: 'Portfolio',
      url: 'https://firdavs.dev',
      color: 'blue'
    }
  ];

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{t.contact.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind,
                want to discuss potential partnerships, or just want to say hello, feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColorClasses(item.color)} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColorClasses(social.color)} hover:scale-110 transition-transform`}
                      title={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none dark:bg-gray-700 dark:text-white"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Response Time</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I typically respond to messages within 24-48 hours. For urgent inquiries,
              feel free to reach out via phone or connect with me on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
