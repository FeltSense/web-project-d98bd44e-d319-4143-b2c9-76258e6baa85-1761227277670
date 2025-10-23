'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg shadow-purple-500/20 transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Labs</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>
          <a href="#services" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
            <span className="relative z-10">Services</span>
            <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>
          <a href="#about" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>
          <a href="#pricing" className="relative px-4 py-2 text-gray-200 hover:text-white transition-colors duration-300 group">
            <span className="relative z-10">Pricing</span>
            <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>
          <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300" id="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-slate-900/98 backdrop-blur-lg border-t border-purple-500/20" id="mobile-menu">
    <div className="px-4 py-6 space-y-3">
      <a href="#home" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.classList.remove('py-6');
          navContent.classList.add('py-3');
        } else {
          navContent.classList.remove('py-3');
          navContent.classList.add('py-6');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 animate-gradient-shift"></div>
    <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-shift-reverse"></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slower"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-3xl animate-spin-very-slow"></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  {/* Floating Text Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 text-violet-400/10 font-mono text-sm animate-float-slow">neural_network.train()</div>
    <div className="absolute top-40 right-20 text-cyan-400/10 font-mono text-sm animate-float-slower">deep_learning++</div>
    <div className="absolute bottom-32 left-1/4 text-fuchsia-400/10 font-mono text-sm animate-float">model.predict()</div>
    <div className="absolute top-1/3 right-1/3 text-purple-400/10 font-mono text-sm animate-float-slow">AI.optimize()</div>
    <div className="absolute bottom-20 right-10 text-blue-400/10 font-mono text-sm animate-float-slower">intelligence.evolve()</div>
    <div className="absolute top-1/2 left-10 text-pink-400/10 font-mono text-sm animate-float">data.transform()</div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
    <div className="max-w-6xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm animate-fade-in-up">
        <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-violet-300">Next-Gen Marketing Intelligence</span>
      </div>

      {/* Main Headline with Floating Animation */}
      <h1 className="mb-6 animate-fade-in-up-delay-1">
        <span className="block text-6xl md:text-8xl font-bold mb-4">
          <span className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            Nexus AI Labs
          </span>
        </span>
        <span className="block text-3xl md:text-5xl font-bold text-white/90">
          Marketing Intelligence That
        </span>
        <span className="block text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x-reverse">
          Predicts. Adapts. Converts.
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-lg md:text-xl text-slate-300 leading-relaxed animate-fade-in-up-delay-2">
        Harness the power of advanced AI to decode consumer behavior, optimize campaigns in real-time, and achieve ROI that was previously impossible. Our neural marketing models learn from billions of data points to give your brand an unfair advantage.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up-delay-3">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]">
          <span className="relative z-10">Start Your AI Transformation</span>
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
          Watch AI in Action
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up-delay-4">
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">347%</div>
          <div className="text-slate-400">Average ROI Increase</div>
        </div>
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-2">2.4B+</div>
          <div className="text-slate-400">Data Points Analyzed Daily</div>
        </div>
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">98.7%</div>
          <div className="text-slate-400">Prediction Accuracy</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-shift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(10%, 10%) scale(1.1); }
    }
    @keyframes gradient-shift-reverse {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-10%, -10%) scale(1.1); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
      50% { transform: translateY(-20px) translateX(10px); opacity: 0.15; }
    }
    @keyframes float-slower {
      0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
      50% { transform: translateY(-30px) translateX(-15px); opacity: 0.15; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); opacity: 0.1; }
      50% { transform: translateY(-25px); opacity: 0.15; }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
    }
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.08); }
    }
    @keyframes spin-very-slow {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes gradient-x-reverse {
      0%, 100% { background-position: 100% 50%; }
      50% { background-position: 0% 50%; }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-gradient-shift { animation: gradient-shift 15s ease-in-out infinite; }
    .animate-gradient-shift-reverse { animation: gradient-shift-reverse 20s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
    .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
    .animate-float { animation: float 10s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
    .animate-pulse-slower { animation: pulse-slower 12s ease-in-out infinite; }
    .animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
    .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
    .animate-gradient-x-reverse { background-size: 200% 200%; animation: gradient-x-reverse 3s ease infinite; }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
    .animate-fade-in-up-delay-1 { animation: fade-in-up 0.8s ease-out 0.2s forwards; opacity: 0; }
    .animate-fade-in-up-delay-2 { animation: fade-in-up 0.8s ease-out 0.4s forwards; opacity: 0; }
    .animate-fade-in-up-delay-3 { animation: fade-in-up 0.8s ease-out 0.6s forwards; opacity: 0; }
    .animate-fade-in-up-delay-4 { animation: fade-in-up 0.8s ease-out 0.8s forwards; opacity: 0; }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        AI-Powered Marketing Solutions
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto">
        Nexus AI Labs delivers cutting-edge artificial intelligence solutions tailored for marketing excellence
      </p>
    </div>

    {/* Hover Reveal Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      
      {/* Card 1 - AI Marketing Strategy */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl border border-purple-400/30">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">AI Marketing Strategy</h3>
            <p className="text-purple-100 text-center text-lg">Hover to reveal details</p>
            <div className="absolute bottom-4 right-4 text-white/50">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-8 shadow-2xl border-2 border-purple-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Marketing Strategy</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>End-to-end AI consulting from strategy to deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Custom AI solutions for campaign optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Predictive analytics for audience targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Measurable ROI with transparent reporting</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 italic">Powered by Nexus AI Labs&apos; certified experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Content Generation AI */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-600 to-orange-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl border border-pink-400/30">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Content Generation AI</h3>
            <p className="text-pink-100 text-center text-lg">Hover to reveal details</p>
            <div className="absolute bottom-4 right-4 text-white/50">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-8 shadow-2xl border-2 border-pink-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Content Generation AI</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">✓</span>
                <span>AI-powered copywriting for ads and social media</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">✓</span>
                <span>Automated content personalization at scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">✓</span>
                <span>Brand voice consistency across all channels</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">✓</span>
                <span>Ongoing optimization with A/B testing insights</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 italic">Latest GPT & NLP technologies by Nexus AI Labs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Customer Intelligence */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl border border-cyan-400/30">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Customer Intelligence</h3>
            <p className="text-cyan-100 text-center text-lg">Hover to reveal details</p>
            <div className="absolute bottom-4 right-4 text-white/50">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-8 shadow-2xl border-2 border-cyan-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Intelligence</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">✓</span>
                <span>Deep ML-powered customer behavior analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">✓</span>
                <span>Sentiment analysis across social platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">✓</span>
                <span>Churn prediction and retention strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">✓</span>
                <span>Real-time dashboards with actionable insights</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 italic">Proven ROI across industries - Nexus AI Labs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 - Marketing Automation */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl border border-emerald-400/30">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Marketing Automation</h3>
            <p className="text-emerald-100 text-center text-lg">Hover to reveal details</p>
            <div className="absolute bottom-4 right-4 text-white/50">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-8 shadow-2xl border-2 border-emerald-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketing Automation</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Intelligent campaign orchestration and timing</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>AI-driven lead scoring and nurturing</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Multi-channel automation with unified analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>24/7 support and continuous optimization</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 italic">Transparent process - Regular updates by Nexus AI Labs</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-purple-200 text-lg mb-6">
        Trusted by leading marketing teams worldwide
      </p>
      <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
        Start Your AI Transformation
      </button>
    </div>
  </div>

  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .group:hover .group-hover\\:rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        What Marketing Leaders Say
      </h2>
      <p className="text-lg text-slate-600">
        See how Nexus AI Labs transforms marketing strategies
      </p>
    </div>

    {/* First Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Sarah Chen</h3>
            <p className="text-sm text-slate-600">CMO, BrandVision Inc.</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            BEFORE
          </span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          &quot;Our campaign creation process took weeks, and we struggled to personalize content at scale. Manual A/B testing was consuming our entire team&apos;s bandwidth.&quot;
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl text-white">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold">Sarah Chen</h3>
            <p className="text-sm text-green-100">CMO, BrandVision Inc.</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            AFTER NEXUS AI LABS
          </span>
        </div>
        <p className="leading-relaxed">
          &quot;Nexus AI Labs reduced our campaign launch time from 3 weeks to 3 days. We&apos;re now running 10x more personalized variations with 47% better conversion rates. It&apos;s like having a marketing genius on demand.&quot;
        </p>
        <div className="mt-6 flex items-center">
          <div className="flex text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Second Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Marcus Rodriguez</h3>
            <p className="text-sm text-slate-600">Director of Growth, TechFlow Marketing</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            BEFORE
          </span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          &quot;We were drowning in data but couldn&apos;t extract actionable insights fast enough. Our content strategy felt like guesswork, and ROI tracking was a nightmare across channels.&quot;
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-xl text-white">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold">Marcus Rodriguez</h3>
            <p className="text-sm text-blue-100">Director of Growth, TechFlow Marketing</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            AFTER NEXUS AI LABS
          </span>
        </div>
        <p className="leading-relaxed">
          &quot;Nexus AI Labs transformed our entire analytics workflow. Real-time predictive insights help us pivot strategies instantly. We&apos;ve increased our marketing ROI by 156% in just 6 months. The AI recommendations are scarily accurate.&quot;
        </p>
        <div className="mt-6 flex items-center">
          <div className="flex text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Third Comparison */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Emily Thompson</h3>
            <p className="text-sm text-slate-600">VP Marketing, Elevate Digital</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            BEFORE
          </span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          &quot;Our team spent countless hours on audience segmentation and targeting. Email campaigns had mediocre open rates, and we couldn&apos;t keep up with content demands from multiple clients.&quot;
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-xl text-white">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold">Emily Thompson</h3>
            <p className="text-sm text-purple-100">VP Marketing, Elevate Digital</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-white text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
            AFTER NEXUS AI LABS
          </span>
        </div>
        <p className="leading-relaxed">
          &quot;With Nexus AI Labs, our audience segmentation is hyper-precise and automated. Email open rates jumped to 68%, and we&apos;re producing 5x more content without hiring additional staff. It&apos;s revolutionized how we serve our clients.&quot;
        </p>
        <div className="mt-6 flex items-center">
          <div className="flex text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Marketing Power</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Transform your marketing campaigns with Nexus AI Labs&apos; cutting-edge automation
      </p>
    </div>

    {/* Two-Tier Comparison */}
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      
      {/* Starter Tier */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
          <p className="text-gray-400 mb-6">Perfect for small teams</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-white">$49</span>
            <span className="text-gray-400">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">AI-powered content generation for 50 posts/month</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">Automated social media scheduling</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">Basic analytics dashboard</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">Email support</span>
          </li>
        </ul>

        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Get Started
        </button>

        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
          </svg>
          <span>Secure SSL Payment</span>
        </div>
      </div>

      {/* Professional Tier */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 border-2 border-yellow-400 relative hover:transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/50">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </span>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
          <p className="text-purple-100 mb-6">For growing agencies</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-white">$89</span>
            <span className="text-purple-100">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Unlimited AI content generation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Advanced predictive analytics & ROI tracking</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Multi-channel campaign automation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">AI audience segmentation & targeting</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">Priority 24/7 support + dedicated account manager</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white font-medium">White-label reporting for clients</span>
          </li>
        </ul>

        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:shadow-xl"
        >
          Start Free Trial
        </button>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex items-center gap-1 text-sm text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a