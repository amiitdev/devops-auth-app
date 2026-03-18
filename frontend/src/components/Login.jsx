import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiGithub,
  FiTwitter,
  FiArrowRight,
} from 'react-icons/fi';
import { FaGoogle, FaApple, FaMicrosoft, FaDiscord } from 'react-icons/fa';
import toast from 'react-hot-toast';
import useAuthStore from '../store/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    const result = await login({ email, password });

    if (result.success) {
      toast.success('Welcome back 🚀');
      navigate('/profile');
    } else {
      toast.error(result.error || 'Login failed');
    }
  };

  const handleSocialLogin = (provider) => {
    toast.success(`Login with ${provider} coming soon! ✨`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-md">
        {/* Gradient Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>

        {/* Card Content */}
        <div className="relative bg-[#0B1120] p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  A
                </span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome back
            </span>
          </h2>

          <p className="text-center text-gray-400 text-sm mb-8">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-medium text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text hover:from-pink-400 hover:to-indigo-400 transition-all duration-300"
            >
              Create one <FiArrowRight className="inline-block" />
            </Link>
          </p>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaGoogle className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleSocialLogin('Apple')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaApple className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleSocialLogin('Microsoft')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaMicrosoft className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleSocialLogin('Discord')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaDiscord className="w-5 h-5 mx-auto" />
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <span className="text-xs uppercase text-gray-500 font-medium">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FiMail className="text-indigo-400" />
                Email
              </label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10 pr-4 py-3.5"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-focus-within:opacity-30 transition-opacity -z-10 blur"></div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FiLock className="text-purple-400" />
                Password
              </label>
              <div className="relative group">
                <FiLock className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10 pr-12 py-3.5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-30 transition-opacity -z-10 blur"></div>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#1a1f35] border-gray-600 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 focus:ring-1"
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text hover:from-pink-400 hover:to-indigo-400 transition-all duration-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn w-full group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-gray-500">
            By signing in, you agree to our{' '}
            <Link
              to="/terms"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Terms
            </Link>{' '}
            and{' '}
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .input {
          width: 100%;
          background-color: #1a1f35;
          border: 1px solid #374151;
          border-radius: 0.75rem;
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .input:hover {
          border-color: #4f46e5;
        }

        .input:focus {
          outline: none;
          border-color: transparent;
          box-shadow: 0 0 0 2px #4f46e5, 0 0 0 4px rgba(79, 70, 229, 0.2);
        }

        .btn {
          position: relative;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          color: white;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          overflow: hidden;
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn:active {
          transform: scale(0.98);
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 640px) {
          .input {
            font-size: 16px; /* Prevents zoom on mobile */
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
          }
          
          .grid-cols-4 {
            gap: 0.5rem;
          }
        }

        /* Smooth scrolling */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0B1120;
        }

        ::-webkit-scrollbar-thumb {
          background: #4f46e5;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }
      `}</style>
    </div>
  );
};

export default Login;
