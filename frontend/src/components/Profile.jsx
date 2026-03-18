// components/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../store/auth';
import {
  FiMail,
  FiUser,
  FiCalendar,
  FiEdit2,
  FiSettings,
  FiLogOut,
  FiCamera,
  FiMapPin,
  FiLink,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiDribbble,
  FiBell,
  FiShield,
  FiMoon,
  FiSun,
  FiChevronRight,
  FiAward,
  FiActivity,
  FiStar,
} from 'react-icons/fi';
import {
  FaDiscord,
  FaSpotify,
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const Profile = () => {
  const { user, fetchUser, isLoading, error, logout } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [editForm, setEditForm] = useState({
    name: '',
    bio: '',
    location: '',
    website: '',
  });

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      setEditForm({
        name: user.name || '',
        bio: user.bio || 'No bio yet',
        location: user.location || 'Earth',
        website: user.website || 'https://example.com',
      });
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleSaveProfile = () => {
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35]">
        <div className="relative">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin blur-xl opacity-50"></div>
          <div className="relative bg-[#1a1f35] p-8 rounded-2xl shadow-2xl border border-gray-800">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-indigo-500 border-r-transparent"></div>
            <p className="mt-4 text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-medium">
              Loading profile...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35] p-4">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-[#111827] p-8 rounded-2xl border border-gray-800 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
              <FiShield className="w-10 h-10 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Error Occurred
            </h2>
            <p className="text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Return to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35] p-4">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-[#111827] p-8 rounded-2xl border border-gray-800 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <FiUser className="w-10 h-10 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Not Logged In
            </h2>
            <p className="text-gray-400 mb-6">
              Please login to view your profile
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35] py-6 sm:py-12 px-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #4f46e5 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-[#1a1f35] border border-gray-700 text-gray-300 hover:text-white transition-all hover:scale-110"
      >
        {darkMode ? (
          <FiSun className="w-5 h-5" />
        ) : (
          <FiMoon className="w-5 h-5" />
        )}
      </button>

      <div className="relative max-w-6xl mx-auto">
        {/* Profile Header Card */}
        <div className="relative mb-6">
          {/* Cover Image */}
          <div className="h-32 sm:h-48 rounded-t-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#0B1120] overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500">
                  <div className="w-full h-full bg-[#1a1f35] flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {user.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-all hover:scale-110 shadow-lg">
                  <FiCamera className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Info Bar */}
          <div className="bg-[#111827] rounded-b-3xl border border-gray-800 px-6 sm:px-8 pt-16 sm:pt-12 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {user.name}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <FiMail className="text-indigo-400" /> {user.email}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <FiCalendar className="text-purple-400" />
                    Joined {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                >
                  <FiEdit2 /> Edit
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 font-medium flex items-center gap-2 hover:bg-red-500/20 transition-all border border-red-500/20"
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Connections */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiActivity className="text-indigo-400" /> Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1f35] rounded-xl p-4 text-center">
                  <FiStar className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">127</p>
                  <p className="text-xs text-gray-400">Contributions</p>
                </div>
                <div className="bg-[#1a1f35] rounded-xl p-4 text-center">
                  <FiAward className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-xs text-gray-400">Achievements</p>
                </div>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="bg-[#111827] rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiLink className="text-purple-400" /> Connected Accounts
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: FaGithub,
                    name: 'GitHub',
                    color: 'text-gray-400',
                    connected: true,
                  },
                  {
                    icon: FaTwitter,
                    name: 'Twitter',
                    color: 'text-blue-400',
                    connected: true,
                  },
                  {
                    icon: FaDiscord,
                    name: 'Discord',
                    color: 'text-purple-400',
                    connected: false,
                  },
                  {
                    icon: FaSpotify,
                    name: 'Spotify',
                    color: 'text-green-400',
                    connected: false,
                  },
                ].map((account, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-[#1a1f35] rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <account.icon className={`w-5 h-5 ${account.color}`} />
                      <span className="text-sm text-gray-300">
                        {account.name}
                      </span>
                    </div>
                    {account.connected ? (
                      <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full">
                        Connected
                      </span>
                    ) : (
                      <button className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-full hover:bg-indigo-500/20">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Main Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
              <div className="flex border-b border-gray-800">
                {['profile', 'activity', 'settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-3 text-sm font-medium capitalize transition-all ${
                      activeTab === tab
                        ? 'text-indigo-400 border-b-2 border-indigo-400 bg-gradient-to-r from-indigo-500/10 to-purple-500/10'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    {isEditing ? (
                      // Edit Mode
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">
                            Name
                          </label>
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) =>
                              setEditForm({ ...editForm, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-[#1a1f35] border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">
                            Bio
                          </label>
                          <textarea
                            value={editForm.bio}
                            onChange={(e) =>
                              setEditForm({ ...editForm, bio: e.target.value })
                            }
                            rows="3"
                            className="w-full px-4 py-3 bg-[#1a1f35] border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">
                            Location
                          </label>
                          <input
                            type="text"
                            value={editForm.location}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                location: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-[#1a1f35] border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">
                            Website
                          </label>
                          <input
                            type="url"
                            value={editForm.website}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                website: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-[#1a1f35] border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="flex gap-3 pt-4">
                          <button
                            onClick={handleSaveProfile}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium"
                          >
                            Save Changes
                          </button>
                          <button
                            onClick={() => setIsEditing(false)}
                            className="px-4 py-3 bg-gray-700 text-gray-300 rounded-xl font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      // View Mode
                      <>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">
                            Bio
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {user.bio ||
                              'Passionate developer exploring the intersection of design and technology. Always excited to learn new things and build awesome experiences.'}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 p-3 bg-[#1a1f35] rounded-xl">
                            <FiMapPin className="text-indigo-400" />
                            <div>
                              <p className="text-xs text-gray-400">Location</p>
                              <p className="text-sm text-white">
                                {editForm.location}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-[#1a1f35] rounded-xl">
                            <FiLink className="text-purple-400" />
                            <div>
                              <p className="text-xs text-gray-400">Website</p>
                              <a
                                href={editForm.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-indigo-400 hover:underline"
                              >
                                {editForm.website.replace('https://', '')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-[#1a1f35] rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                          <FiActivity className="text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Completed a challenge
                          </p>
                          <p className="text-sm text-gray-400">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#1a1f35] rounded-xl">
                      <div className="flex items-center gap-3">
                        <FiBell className="text-indigo-400" />
                        <div>
                          <p className="text-white font-medium">
                            Notifications
                          </p>
                          <p className="text-sm text-gray-400">
                            Receive email updates
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#1a1f35] rounded-xl">
                      <div className="flex items-center gap-3">
                        <FiShield className="text-purple-400" />
                        <div>
                          <p className="text-white font-medium">
                            Two-factor authentication
                          </p>
                          <p className="text-sm text-gray-400">
                            Add extra security
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm hover:bg-indigo-500/20">
                        Enable
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 640px) {
          input, textarea, button {
            font-size: 16px !important; /* Prevents zoom on mobile */
          }
          
          .gap-6 {
            gap: 1rem;
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
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
        }
      `}</style>
    </div>
  );
};

export default Profile;
