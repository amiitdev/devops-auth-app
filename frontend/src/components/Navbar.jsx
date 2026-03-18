// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../store/auth';
import {
  FiHome,
  FiUser,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiX,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiSearch,
  FiChevronDown,
  FiStar,
  FiActivity,
  FiAward,
} from 'react-icons/fi';
import { FaBolt, FaCrown, FaRocket } from 'react-icons/fa';
import { MdDashboard, MdAnalytics } from 'react-icons/md';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      toast.success('Logged out successfully');
      navigate('/login');
    }
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: FiHome, color: 'text-indigo-400' },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: MdDashboard,
      color: 'text-purple-400',
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: MdAnalytics,
      color: 'text-pink-400',
    },
    {
      path: '/features',
      name: 'Features',
      icon: FaRocket,
      color: 'text-blue-400',
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1120]/95 backdrop-blur-lg border-b border-gray-800/50 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                  <FaBolt className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AuthApp
              </span>
              {user?.isPremium && (
                <FaCrown className="w-4 h-4 text-yellow-400" />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 group ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <link.icon
                    className={`w-4 h-4 ${link.color} group-hover:scale-110 transition-transform`}
                  />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Side - Actions */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search */}
              <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <FiSearch className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all relative">
                <FiBell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-[10px] flex items-center justify-center text-white font-bold">
                    {notifications}
                  </span>
                )}
              </button>

              {isAuthenticated() ? (
                <>
                  {/* User Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                      className="flex items-center space-x-3 p-2 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-gray-800 hover:border-indigo-500/50 transition-all"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">
                            {user?.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        {user?.isOnline && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#0B1120] rounded-full"></span>
                        )}
                      </div>
                      <div className="hidden lg:block text-left">
                        <p className="text-sm font-medium text-white">
                          {user?.name}
                        </p>
                        <p className="text-xs text-gray-400">{user?.email}</p>
                      </div>
                      <FiChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileMenuOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-[#111827] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                        <div className="p-4 border-b border-gray-800">
                          <p className="text-sm font-medium text-white">
                            Signed in as
                          </p>
                          <p className="text-sm text-gray-400 truncate">
                            {user?.email}
                          </p>
                        </div>

                        <div className="p-2">
                          {[
                            {
                              icon: FiUser,
                              label: 'Profile',
                              path: '/profile',
                              color: 'text-indigo-400',
                            },
                            {
                              icon: FiSettings,
                              label: 'Settings',
                              path: '/settings',
                              color: 'text-purple-400',
                            },
                            {
                              icon: FiActivity,
                              label: 'Activity',
                              path: '/activity',
                              color: 'text-pink-400',
                            },
                            {
                              icon: FiAward,
                              label: 'Achievements',
                              path: '/achievements',
                              color: 'text-yellow-400',
                              badge: '8',
                            },
                            {
                              icon: FiHelpCircle,
                              label: 'Help',
                              path: '/help',
                              color: 'text-blue-400',
                            },
                          ].map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group"
                              onClick={() => setIsProfileMenuOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <item.icon
                                  className={`w-4 h-4 ${item.color}`}
                                />
                                <span className="text-sm text-gray-300 group-hover:text-white">
                                  {item.label}
                                </span>
                              </div>
                              {item.badge && (
                                <span className="text-xs px-2 py-1 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>

                        <div className="p-2 border-t border-gray-800">
                          <button
                            onClick={() => {
                              handleLogout();
                              setIsProfileMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 text-red-400 transition-all group"
                          >
                            <FiLogOut className="w-4 h-4" />
                            <span className="text-sm">Logout</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                  >
                    Sign up free
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111827] border-t border-gray-800 shadow-2xl">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <FiSearch className="absolute left-3 top-3.5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 bg-[#1a1f35] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className={`w-5 h-5 ${link.color}`} />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}

              {isAuthenticated() ? (
                <>
                  {/* User Info */}
                  <div className="flex items-center gap-3 px-4 py-3 mt-4 bg-[#1a1f35] rounded-xl">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      {user?.isOnline && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#1a1f35] rounded-full"></span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                  </div>

                  {/* Mobile Profile Menu Items */}
                  <div className="space-y-1 mt-2">
                    {[
                      {
                        icon: FiUser,
                        label: 'Profile',
                        path: '/profile',
                        color: 'text-indigo-400',
                      },
                      {
                        icon: FiSettings,
                        label: 'Settings',
                        path: '/settings',
                        color: 'text-purple-400',
                      },
                      {
                        icon: FiActivity,
                        label: 'Activity',
                        path: '/activity',
                        color: 'text-pink-400',
                      },
                      {
                        icon: FiAward,
                        label: 'Achievements',
                        path: '/achievements',
                        color: 'text-yellow-400',
                      },
                      {
                        icon: FiBell,
                        label: 'Notifications',
                        path: '/notifications',
                        color: 'text-blue-400',
                        badge: notifications,
                      },
                      {
                        icon: FiHelpCircle,
                        label: 'Help & Support',
                        path: '/help',
                        color: 'text-gray-400',
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                          <span className="text-sm text-gray-300">
                            {item.label}
                          </span>
                        </div>
                        {item.badge && (
                          <span className="text-xs px-2 py-1 bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-400 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-400 rounded-xl hover:from-red-500/20 hover:to-pink-500/20 transition-all"
                  >
                    <FiLogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <div className="space-y-2 mt-4">
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1a1f35] text-gray-300 rounded-xl hover:bg-white/5 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FiLogIn className="w-5 h-5" />
                    <span className="text-sm font-medium">Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaRocket className="w-5 h-5" />
                    <span className="text-sm font-medium">Sign up free</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 640px) {
          input, button {
            font-size: 16px !important; /* Prevents zoom on mobile */
          }
          
          /* Better touch targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Smooth scrolling */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        /* Hide scrollbar but keep functionality */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #4f46e5 #1a1f35;
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1a1f35;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #4f46e5;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
