// src/components/common/ErrorBoundary.tsx

import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You can log to an error reporting service here
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center mb-6">
                <AlertCircle className="w-16 h-16 text-red-500 dark:text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page or return to the home page.
              </p>
              {this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Error details
                  </summary>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-xs overflow-auto text-gray-900 dark:text-gray-100">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh Page
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

