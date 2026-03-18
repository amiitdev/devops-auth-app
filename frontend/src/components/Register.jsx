// components/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../store/auth';
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';
import {
  FaGoogle,
  FaApple,
  FaMicrosoft,
  FaRocket,
  FaShieldAlt,
  FaHeart,
} from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const { register, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Calculate password strength
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 6) strength += 1;
      if (value.match(/[a-z]/) && value.match(/[A-Z]/)) strength += 1;
      if (value.match(/[0-9]/)) strength += 1;
      if (value.match(/[^a-zA-Z0-9]/)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (!agreeTerms) {
      toast.error('Please agree to the Terms of Service');
      return;
    }

    const result = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      toast.success('Registration successful! Please login.');
      navigate('/login');
    } else {
      toast.error(result.error || 'Registration failed. Please try again.');
    }
  };

  const handleSocialRegister = (provider) => {
    toast.success(`Sign up with ${provider} coming soon! ✨`);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
        return 'bg-gray-600';
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-blue-500';
      case 4:
        return 'bg-green-500';
      default:
        return 'bg-gray-600';
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
        return 'Very weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
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

        <div className="relative bg-[#0B1120] p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center">
                <FaRocket className="w-8 h-8 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Create account
            </span>
          </h2>

          <p className="text-center text-gray-400 text-sm mb-8">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text hover:from-pink-400 hover:to-indigo-400 transition-all duration-300"
            >
              Sign in <FiArrowRight className="inline-block" />
            </Link>
          </p>

          {/* Social Register Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <button
              onClick={() => handleSocialRegister('Google')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaGoogle className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleSocialRegister('Apple')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaApple className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleSocialRegister('Microsoft')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaMicrosoft className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleSocialRegister('GitHub')}
              className="p-3 rounded-xl bg-[#1a1f35] hover:bg-[#2a2f45] border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FiGithub className="w-5 h-5 mx-auto" />
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <span className="text-xs uppercase text-gray-500 font-medium">
              or sign up with email
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FiUser className="text-indigo-400" />
                Full Name
              </label>
              <div className="relative group">
                <FiUser className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 bg-[#1a1f35] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-focus-within:opacity-30 transition-opacity -z-10 blur"></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FiMail className="text-purple-400" />
                Email address
              </label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 bg-[#1a1f35] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="you@example.com"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-30 transition-opacity -z-10 blur"></div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FiLock className="text-pink-400" />
                Password
              </label>
              <div className="relative group">
                <FiLock className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3.5 bg-[#1a1f35] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-focus-within:opacity-30 transition-opacity -z-10 blur"></div>
              </div>

              {/* Password Strength Meter */}
              {formData.password && (
                <div className="mt-2 space-y-1">
                  <div className="flex gap-1 h-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`flex-1 h-full rounded-full transition-all duration-300 ${
                          passwordStrength >= level
                            ? getPasswordStrengthColor()
                            : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-xs ${passwordStrength >= 3 ? 'text-green-400' : 'text-gray-400'}`}
                  >
                    Password strength: {getPasswordStrengthText()}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FiLock className="text-orange-400" />
                Confirm Password
              </label>
              <div className="relative group">
                <FiLock className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-orange-400 transition-colors" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3.5 bg-[#1a1f35] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-focus-within:opacity-30 transition-opacity -z-10 blur"></div>
              </div>

              {/* Password Match Indicator */}
              {formData.confirmPassword && (
                <div className="flex items-center gap-1 mt-1">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <FiCheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">
                        Passwords match
                      </span>
                    </>
                  ) : (
                    <>
                      <FiAlertCircle className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-red-400">
                        Passwords do not match
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded bg-[#1a1f35] border-gray-600 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 focus:ring-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{' '}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
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
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create account</span>
                    <FaRocket className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <FaShieldAlt className="w-3 h-3 text-green-400" />
            <span>Your information is encrypted and secure</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
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
          input, button {
            font-size: 16px !important; /* Prevents zoom on mobile */
          }
          
          .grid-cols-4 {
            gap: 0.5rem;
          }
          
          .p-6 {
            padding: 1.25rem;
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

        /* Password strength animation */
        .password-strength-bar {
          transition: width 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Register;
