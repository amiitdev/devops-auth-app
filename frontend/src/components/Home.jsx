// components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/auth';
import {
  FiShield,
  FiZap,
  FiLayout,
  FiArrowRight,
  FiStar,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiLock,
  FiSmartphone,
  FiGlobe,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiChevronRight,
  FiHeart,
} from 'react-icons/fi';
import {
  FaReact,
  FaNodeJs,
  FaRocket,
  FaBolt,
  FaShieldAlt,
  FaGithub as FaGithubIcon,
  FaHeart as FaHeartIcon,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Home = () => {
  const { isAuthenticated, user } = useAuthStore();
  const [stats, setStats] = useState({
    users: 15000,
    projects: 1200,
    countries: 45,
    uptime: 99.9,
  });

  useEffect(() => {
    // Animate stats on load
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users < 15234 ? prev.users + 23 : 15234,
        projects: prev.projects < 1256 ? prev.projects + 4 : 1256,
        countries: prev.countries < 48 ? prev.countries + 0.1 : 48,
        uptime: prev.uptime,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: 'Enterprise Security',
      description:
        'JWT tokens stored in HTTP-only cookies with encryption at rest',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      icon: FaShieldAlt,
    },
    {
      title: 'Lightning Fast',
      description:
        'Optimized with Zustand for minimal re-renders and maximum performance',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      icon: FaBolt,
    },
    {
      title: 'Beautiful Design',
      description: 'Modern UI with Tailwind CSS and smooth animations',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      icon: FiLayout,
    },
    {
      title: 'Multi-Factor Auth',
      description: 'Support for 2FA, biometrics, and hardware keys',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      icon: FiLock,
    },
    {
      title: 'Mobile First',
      description: 'Fully responsive design that works on all devices',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      icon: FiSmartphone,
    },
    {
      title: 'Global CDN',
      description: 'Edge-ready deployment with worldwide distribution',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      icon: FiGlobe,
    },
  ];

  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' },
    {
      name: 'Zustand',
      fallback: true,
      label: 'Z',
      color: 'from-orange-400 to-red-400',
    },
    {
      name: 'JWT',
      fallback: true,
      label: 'JWT',
      color: 'from-purple-400 to-pink-400',
    },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content:
        'Best authentication solution we have ever used. Implementation was smooth and the team is incredibly supportive.',
      avatar: 'S',
      color: 'from-indigo-400 to-purple-400',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      content:
        'The security features are top-notch. Love the 2FA implementation and the documentation is excellent.',
      avatar: 'M',
      color: 'from-purple-400 to-pink-400',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      content:
        'Our users love the seamless experience. The mobile responsiveness is perfect for our global audience.',
      avatar: 'E',
      color: 'from-pink-400 to-orange-400',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1425] to-[#1a1f35]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8">
              <FaRocket className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                v2.0.0 - Now with Multi-Factor Auth
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Secure Authentication
              </span>
              <br />
              <span className="text-white">for Modern Apps</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              A complete authentication solution with React, Node.js, and
              Tailwind CSS. Enterprise-grade security with developer-friendly
              experience.
            </p>

            {/* CTA Buttons */}
            {isAuthenticated() ? (
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <p className="text-xl text-gray-300 mb-4">
                  Welcome back,{' '}
                  <span className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {user?.name}
                  </span>
                  ! 👋
                </p>
                <Link
                  to="/profile"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all group"
                >
                  Go to Dashboard
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all group"
                >
                  Get Started
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Create Account
                  <FiChevronRight />
                </Link>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
              {[
                {
                  icon: FiUsers,
                  value: Math.floor(stats.users).toLocaleString(),
                  label: 'Active Users',
                  color: 'text-blue-400',
                },
                {
                  icon: FiTrendingUp,
                  value: stats.projects,
                  label: 'Projects',
                  color: 'text-green-400',
                },
                {
                  icon: FiGlobe,
                  value: Math.floor(stats.countries),
                  label: 'Countries',
                  color: 'text-purple-400',
                },
                {
                  icon: FiClock,
                  value: `${stats.uptime}%`,
                  label: 'Uptime',
                  color: 'text-yellow-400',
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-3`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need in one{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              platform
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with the latest technologies to provide a seamless and secure
            authentication experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#111827] rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all`}
                ></div>
                <div
                  className={`relative w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powered by{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              modern tech
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with the best tools in the industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-[#111827] rounded-2xl border border-gray-800 p-6 text-center hover:border-gray-700 transition-all hover:-translate-y-1"
            >
              {tech.fallback ? (
                <div
                  className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform`}
                >
                  {tech.label}
                </div>
              ) : (
                <tech.icon
                  className={`w-12 h-12 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform`}
                />
              )}
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              developers
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing
              applications with our platform.
            </p>
            {!isAuthenticated() && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all group"
                >
                  Create free account
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Sign in
                  <FiChevronRight />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaBolt className="w-6 h-6 text-indigo-400" />
                <span className="text-lg font-bold text-white">AuthApp</span>
              </div>
              <p className="text-sm text-gray-400">
                Secure authentication for modern web applications.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {[FiGithub, FiTwitter, FiLinkedin, FiMail].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-[#1a1f35] flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 AuthApp. All rights reserved. Made with{' '}
              <FiHeart className="inline-block w-4 h-4 text-red-400" /> by the
              team
            </p>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .text-7xl {
            font-size: 3rem;
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

export default Home;
