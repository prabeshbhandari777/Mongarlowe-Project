import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function User() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.slice(1); // Remove the leading slash

  const getTitle = () => {
    switch (currentPath) {
      case 'signup':
        return { title: 'Sign Up', subtitle: 'Create your account' };
      case 'forgot-password':
        return { title: 'Reset Password', subtitle: 'Enter your email to reset password' };
      default:
        return { title: 'Login', subtitle: 'Welcome back!' };
    }
  };

  const { title, subtitle } = getTitle();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form className="space-y-6">
            {currentPath !== 'forgot-password' && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>
            )}

            {currentPath === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            {currentPath !== 'forgot-password' && (
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 pr-10 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            )}

            {currentPath === 'login' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-green-600 hover:text-green-500">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400 hover:from-teal-600 hover:via-emerald-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                {currentPath === 'signup' ? 'SIGN UP' : currentPath === 'forgot-password' ? 'RESET PASSWORD' : 'LOGIN'}
              </button>
            </div>

            {currentPath !== 'forgot-password' && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600">
                  <p>Signup with social account</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    {/* Facebook */}
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-gray-300 rounded-full hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>

                    {/* Instagram */}
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-gray-300 rounded-full hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </button>

                    {/* Google */}
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-gray-300 rounded-full hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="text-center text-sm text-gray-600">
              {currentPath === 'login' ? (
                <>
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
                    SIGN UP
                  </Link>
                </>
              ) : currentPath === 'signup' ? (
                <>
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                    LOGIN
                  </Link>
                </>
              ) : (
                <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                  Back to Login
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
