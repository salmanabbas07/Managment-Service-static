"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./Home.css";

export default function Home() {
  const { openConsultationModal, openSignInModal } = useModals();

  // Hero Slider state
  const [heroSlide, setHeroSlide] = useState(1);
  const [progress, setProgress] = useState(0);
  const isHoveredRef = useRef(false);
  const touchStartRef = useRef(0);

  const totalHeroSlides = 3;
  const slideDuration = 6000;
  const stepTime = 50;

  const nextHeroSlide = () => {
    setHeroSlide((prev) => (prev >= totalHeroSlides ? 1 : prev + 1));
    setProgress(0);
  };

  const prevHeroSlide = () => {
    setHeroSlide((prev) => (prev <= 1 ? totalHeroSlides : prev - 1));
    setProgress(0);
  };

  const showHeroSlide = (idx) => {
    setHeroSlide(idx);
    setProgress(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        setProgress((prev) => {
          if (prev >= 100) {
            setHeroSlide((s) => (s >= totalHeroSlides ? 1 : s + 1));
            return 0;
          }
          return prev + (stepTime / slideDuration) * 100;
        });
      }
    }, stepTime);

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevHeroSlide();
      if (e.key === "ArrowRight") nextHeroSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Story Slider state
  const [storySlide, setStorySlide] = useState(1);
  const totalStorySlides = 3;

  const nextStorySlide = () => {
    setStorySlide((prev) => (prev >= totalStorySlides ? 1 : prev + 1));
  };

  const prevStorySlide = () => {
    setStorySlide((prev) => (prev <= 1 ? totalStorySlides : prev - 1));
  };

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <>

      {/* Hero slider */}
  <section className="hero-slider-container relative" id="hero-main-slider" onMouseEnter={() => { isHoveredRef.current = true; }} onMouseLeave={() => { isHoveredRef.current = false; }} onTouchStart={(e) => { touchStartRef.current = e.changedTouches[0].screenX; isHoveredRef.current = true; }} onTouchEnd={(e) => { const touchEndX = e.changedTouches[0].screenX; if (touchEndX < touchStartRef.current - 50) nextHeroSlide(); else if (touchEndX > touchStartRef.current + 50) prevHeroSlide(); isHoveredRef.current = false; }}>
    
    {/* Progress Bar (Auto-slide timer) */}
    <div className="slider-progress-bar-container">
      <div id="hero-progress-bar" className="slider-progress-bar" style={{ width: `${progress}%` }}></div>
    </div>

    {/* Navigation Arrows */}
    <button type="button" onClick={prevHeroSlide} className="slider-arrow-btn prev-btn" aria-label="Previous Slide">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button type="button" onClick={nextHeroSlide} className="slider-arrow-btn next-btn" aria-label="Next Slide">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* SLIDE 1: Next-Gen Campus ERP & Unified OS */}
    <div className="hero-slide active" id="hero-slide-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Slide 1 Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="hero-slide-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Next-Gen Campus ERP & Cloud Operating System</span>
            </div>

            <h1 className="hero-slide-title text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Empower Your School With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Smart Cloud ERP</span> & Automated UPI
            </h1>

            <p className="hero-slide-desc text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform campus governance. Automate biometric attendance, 1-click WhatsApp fee recovery, exam report cards, and GPS transport tracking — 100% paperless & secure.
            </p>

            <div className="hero-slide-cta flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button type="button" onClick={openConsultationModal} className="btn-red px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer">
                Book Free School Demo →
              </button>
              <Link href="/erp-solutions" className="btn-secondary px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
                Explore ERP Features
              </Link>
            </div>

            {/* Trust Micro-tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Zero Setup Hassle</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> 256-Bit Bank Encryption</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> 150+ Schools Active</span>
            </div>
          </div>

          {/* Slide 1 Visual Card */}
          <div className="lg:col-span-5 hero-slide-visual">
            <div className="relative max-w-md mx-auto">
              {/* Main Mockup Dashboard Card */}
              <div className="clean-card p-6 shadow-2xl border-slate-200 bg-white/95 backdrop-blur">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-slate-800">Campus Live Sync</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded">ERP v4.2</span>
                </div>

                {/* Stats Grid inside card */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <div className="text-[10px] font-bold uppercase text-blue-700">Tuition Recovered</div>
                    <div className="text-xl font-extrabold text-slate-900 mt-0.5">₹14.2 Cr+</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">↑ 99.4% on-time</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <div className="text-[10px] font-bold uppercase text-emerald-700">Attendance Synced</div>
                    <div className="text-xl font-extrabold text-slate-900 mt-0.5">2,450+</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1">Instant SMS/App Alerts</div>
                  </div>
                </div>

                {/* Live Ledger Simulation */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-[10px]">UPI</div>
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">Quarter 2 Fee Received</div>
                        <div className="text-[10px] text-slate-400">Class 9th-A • Aryan Sharma</div>
                      </div>
                    </div>
                    <span className="text-emerald-700 font-bold text-[11px]">+₹18,500</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-[10px]">RFID</div>
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">Bus Entry Gate Logged</div>
                        <div className="text-[10px] text-slate-400">Route 14 • GPS Active</div>
                      </div>
                    </div>
                    <span className="text-blue-700 font-bold text-[10px] bg-blue-50 px-2 py-0.5 rounded">07:45 AM</span>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -right-4 bg-[#071524] text-white p-3 rounded-2xl shadow-xl border border-slate-700 float-badge hidden sm:block">
                <div className="text-[10px] font-bold uppercase text-teal-400">Automated Uptime</div>
                <div className="text-base font-extrabold">99.8% SLA</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* SLIDE 2: Admission Growth & Performance Marketing */}
    <div className="hero-slide" id="hero-slide-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Slide 2 Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="hero-slide-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
              <span>Guaranteed Enrollment Surge for 2026–27 Batch</span>
            </div>

            <h1 className="hero-slide-title text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Scale Student Admissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">By 2.3X</span> With Targeted Marketing
            </h1>

            <p className="hero-slide-desc text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fill your empty classroom seats. We run hyper-targeted Meta & Google ads, build high-converting CBSE/ICSE admission landing pages, and automate WhatsApp parent nurture.
            </p>

            <div className="hero-slide-cta flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button type="button" onClick={openConsultationModal} className="btn-red px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer">
                Get Free Admission Audit →
              </button>
              <Link href="/admission-marketing" className="btn-secondary px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
                View Marketing Plan
              </Link>
            </div>

            {/* Trust Micro-tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Verified Local Leads</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Custom Landing Pages</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> CRM Lead Tracking</span>
            </div>
          </div>

          {/* Slide 2 Visual Card */}
          <div className="lg:col-span-5 hero-slide-visual">
            <div className="relative max-w-md mx-auto">
              <div className="clean-card p-6 shadow-2xl border-slate-200 bg-white/95 backdrop-blur">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Live Lead Pipeline</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">+230% ROI</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Total Admission Inquiries</span>
                      <span className="text-xs font-bold text-rose-600">This Month</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900 mt-1">428 Verified</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Nursery to Grade 11 Inquiries</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-[10px] font-bold uppercase text-slate-400">Campus Walk-ins</div>
                      <div className="text-lg font-black text-slate-900 mt-0.5">142 Tours</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-[10px] font-bold uppercase text-slate-400">Cost / Lead</div>
                      <div className="text-lg font-black text-emerald-700 mt-0.5">₹340 avg</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold">Target School Boards:</span>
                  <div className="flex items-center gap-1.5 font-bold text-[10px]">
                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">CBSE</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded">ICSE</span>
                    <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded">IB</span>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-[#071524] text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 float-badge-delayed hidden sm:block">
                <div className="text-[10px] font-bold uppercase text-amber-400">Parent Satisfaction</div>
                <div className="text-sm font-extrabold">⭐ 4.9/5 Institutional Score</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* SLIDE 3: Future Skills Academy (AI & Robotics Labs) */}
    <div className="hero-slide" id="hero-slide-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Slide 3 Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="hero-slide-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
              <span>NEP 2020 Aligned Future Skills & STEM Curriculum</span>
            </div>

            <h1 className="hero-slide-title text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Transform Classrooms Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">AI & Robotics</span> Innovation Labs
            </h1>

            <p className="hero-slide-desc text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare your students for tomorrow's technology careers. We provide certified trainers, hardware robotics kits, AI curriculum, and coding portals directly on your campus — Zero hiring burden.
            </p>

            <div className="hero-slide-cta flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button type="button" onClick={openConsultationModal} className="btn-red px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer">
                Launch AI Lab on Campus →
              </button>
              <Link href="/training" className="btn-secondary px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
                Explore 7 Pillars
              </Link>
            </div>

            {/* Trust Micro-tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Hardware Kits Included</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Certified Master Trainers</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> 45,000+ Students Trained</span>
            </div>
          </div>

          {/* Slide 3 Visual Card */}
          <div className="lg:col-span-5 hero-slide-visual">
            <div className="relative max-w-md mx-auto">
              <div className="clean-card p-6 shadow-2xl border-slate-200 bg-white/95 backdrop-blur">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Future Skills Lab Suite</span>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">NEP Compliant</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs mb-2">AI</div>
                    <div className="font-bold text-slate-900 text-xs">AI & Machine Learning</div>
                    <div className="text-[10px] text-slate-500">Prompting & Neural Models</div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-2">ROB</div>
                    <div className="font-bold text-slate-900 text-xs">Robotics & IoT Kits</div>
                    <div className="text-[10px] text-slate-500">Arduino & Sensors</div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-2">WEB</div>
                    <div className="font-bold text-slate-900 text-xs">Web & Software Dev</div>
                    <div className="text-[10px] text-slate-500">HTML, CSS, JS, Python</div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                    <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs mb-2">EXP</div>
                    <div className="font-bold text-slate-900 text-xs">Design & Video</div>
                    <div className="text-[10px] text-slate-500">UI/UX & Digital Media</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-bold">Trainer On-Campus</span>
                  </div>
                  <span className="text-teal-300 font-bold text-[10px]">Zero Capex Model</span>
                </div>
              </div>

              {/* Floating badge 3 */}
              <div className="absolute -top-4 -left-4 bg-[#071524] text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 float-badge hidden sm:block">
                <div className="text-[10px] font-bold uppercase text-purple-400">Student Certification</div>
                <div className="text-sm font-extrabold">ISO 9001:2015 Accredited</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom Indicator Dots */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2.5">
      <button type="button" onClick={() => showHeroSlide(1)} id="hero-dot-1" className={`hero-slider-dot ${heroSlide === 1 ? "active" : ""}`} aria-label="Go to slide 1"></button>
      <button type="button" onClick={() => showHeroSlide(2)} id="hero-dot-2" className={`hero-slider-dot ${heroSlide === 2 ? "active" : ""}`} aria-label="Go to slide 2"></button>
      <button type="button" onClick={() => showHeroSlide(3)} id="hero-dot-3" className={`hero-slider-dot ${heroSlide === 3 ? "active" : ""}`} aria-label="Go to slide 3"></button>
    </div>

  </section>

  {/* Featured solutions */}
  <section className="pb-16 sm:pb-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="clean-card p-6 sm:p-8 shadow-xl border-slate-200">
        
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 text-xs font-bold">
          <span className="uppercase tracking-wider text-slate-400">Featured Solutions</span>
          <Link href="/services" className="text-blue-600 hover:text-blue-800 uppercase tracking-wider flex items-center gap-1">
            Explore All Products →
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Purple Card: Zia Agent Studio Style */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#2e1065] to-[#4c1d95] text-white p-7 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-400/20 flex items-center justify-center mb-4 text-purple-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300">Next-Gen EdTech</span>
              <h3 className="text-2xl font-black mt-1 mb-2">Introducing AI Agent Studio</h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Deploy autonomous 24/7 AI admission counselors, resolve parent queries instantly, and build in-school STEM laboratories.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/future-skills-academy" className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all">
                Explore AI Agents →
              </Link>
            </div>
          </div>

          {/* Right Grid of Core Products */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            
            <Link href="/admission-marketing" className="app-feature-card p-3.5 block group">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">Admission CRM</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Comprehensive marketing platform for prospective student leads.</p>
            </Link>

            <Link href="/erp-solutions" className="app-feature-card p-3.5 block group">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">Campus ERP</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Automated fee recovery with UPI and biometric attendance.</p>
            </Link>

            <Link href="/school-website-dev" className="app-feature-card p-3.5 block group">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">Web Portal</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Ultra-fast responsive websites for CBSE & ICSE schools.</p>
            </Link>

            <Link href="/lms-solutions" className="app-feature-card p-3.5 block group">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">LMS Suite</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Organize, automate, and streamline hybrid classroom learning.</p>
            </Link>

            <Link href="/future-skills-academy" className="app-feature-card p-3.5 block group">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">Robotics Labs</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Hardware kits and certified faculty directly on your campus.</p>
            </Link>

            <Link href="/training" className="app-feature-card p-3.5 block group">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">Parent App</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Live GPS bus tracking, instant notices, and WhatsApp alerts.</p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  </section>

  {/* Platform spotlight */}
  <section className="py-12 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="zoho-one-banner p-8 sm:p-12 shadow-xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-900">All-in-One School Suite</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              EduRise One Platform
            </h2>
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              The operating system for modern educational institutions. Run your entire school on EduRise—our unified platform for all your operational, admission, and STEM needs. Starting at ₹1,000/student/mo.
            </p>
            <div className="pt-2">
              <button type="button" onClick={openConsultationModal} className="btn-red px-6 py-3 text-xs font-bold uppercase tracking-wider cursor-pointer">
                Try EduRise One →
              </button>
            </div>
          </div>

          {/* Right Column (Customer Quote Box) */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-md border border-amber-200/60">
            <div className="text-2xl text-amber-500 mb-2 font-serif">“</div>
            <p className="text-xs sm:text-sm text-slate-800 font-semibold italic leading-relaxed mb-4">
              "You can be a growing school, a mid-sized CBSE academy, or a 3,000-student campus—EduRise One is a boon for all."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-amber-100">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-teal-400 font-bold flex items-center justify-center text-xs">
                SM
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Sister Mary</div>
                <div className="text-[11px] text-slate-600">Principal, St. Xavier's Academy</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* Trust strip */}
  <section className="py-12 bg-white text-center border-b border-slate-100">
    <div className="max-w-6xl mx-auto px-4">
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-6">
        Institutions That Trust EduRise
      </span>
      
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-600 font-bold text-sm">
        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">St. Xavier's Academy</span>
        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">Oakridge International</span>
        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">Delhi Public Schooling</span>
        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">Cambridge Heritage</span>
        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">Podar Learning Academy</span>
      </div>

      <div className="mt-6">
        <Link href="/case-studies" className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider">
          Read Customer Stories →
        </Link>
      </div>
    </div>
  </section>

  {/* Story slider */}
  <section className="py-16 bg-[#071524] text-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="relative">
        
        {/* Slide 1 */}
        <div id="slide-1" className="story-slide active text-center sm:text-left py-6">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Institutional Impact</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-snug">
            Built with educational purpose.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-6">
            We've spent years building school technology with deep pedagogical focus and operational intent. Helping school leaders achieve 100% capacity and effortless daily governance.
          </p>
          <Link href="/about" className="text-xs font-bold text-teal-400 hover:underline uppercase tracking-wider">
            Read Our Story →
          </Link>
        </div>

        {/* Slide 2 */}
        <div id="slide-2" className="story-slide text-center sm:text-left py-6">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Zero Infrastructure Burden</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-snug">
            Future-Ready Students with AI & STEM Labs.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-6">
            From generative AI prompt engineering to hardware robotics kits and coding — we supply certified faculty and components directly to your campus.
          </p>
          <Link href="/training" className="text-xs font-bold text-purple-400 hover:underline uppercase tracking-wider">
            Explore STEM Curriculum →
          </Link>
        </div>

        {/* Slide 3 */}
        <div id="slide-3" className="story-slide text-center sm:text-left py-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Cash Flow Automation</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-snug">
            99.4% On-Time Tuition Fee Recovery.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-6">
            Eliminate awkward reminder calls. Parents pay seamlessly via 1-click UPI links on WhatsApp, with instant digital ledger reconciliation.
          </p>
          <Link href="/erp-solutions" className="text-xs font-bold text-amber-400 hover:underline uppercase tracking-wider">
            Explore Campus ERP →
          </Link>
        </div>

        {/* Slider Navigation Controls */}
        <div className="flex items-center justify-center sm:justify-end gap-3 mt-6">
          <button type="button" onClick={prevStorySlide} className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer" aria-label="Previous Slide">
            ←
          </button>
          <div className="flex items-center gap-1.5" id="slide-indicators">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" id="ind-1"></span>
            <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" id="ind-2"></span>
            <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" id="ind-3"></span>
          </div>
          <button type="button" onClick={nextStorySlide} className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer" aria-label="Next Slide">
            →
          </button>
        </div>

      </div>

    </div>
  </section>

  {/* Core values */}
  <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          The core values and principles that drive us
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
        
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base">Long-term commitment</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Running a successful educational institution takes years of dedication. We take pride in building a sustainable growth model that's powered by you, our partner school.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base">Educator-first philosophy</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In all these years, it's our educators' trust and goodwill that has helped us establish a strong presence. No matter the size of your school, we're here to help you grow.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base">Privacy and security as a priority</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We do not own or sell your student data, and we certainly do not bank on advertising models. 100% encrypted, secure Indian cloud residency.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base">Focus on research and pedagogy</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Educational technology is our craft and we back it up with relentless investments in curriculum R&D to prepare children for future AI-driven economies.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* Impact metrics */}
  <section className="py-20 bg-[#071524] text-white text-center">
    <div className="max-w-5xl mx-auto px-4">
      
      <h2 className="text-3xl sm:text-5xl font-black mb-3 tracking-tight">
        Made in India.<br />Made for Indian Schools.
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-12 max-w-md mx-auto">
        Empowering school leaders, teachers, and students with modern educational infrastructure.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="text-4xl sm:text-5xl font-black text-white">150+</div>
          <div className="text-xs text-slate-400 mt-2 font-medium">Partner Campuses</div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl font-black text-white">18+</div>
          <div className="text-xs text-slate-400 mt-2 font-medium">States Across India</div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl font-black text-white">45,000+</div>
          <div className="text-xs text-slate-400 mt-2 font-medium">Students Enrolled</div>
        </div>
        <div>
          <div className="text-4xl sm:text-5xl font-black text-white">₹14.2Cr+</div>
          <div className="text-xs text-slate-400 mt-2 font-medium">Fee Automated</div>
        </div>
      </div>

      <Link href="/about" className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 hover:underline uppercase tracking-wider">
        More About EduRise →
      </Link>

    </div>
  </section>

  {/* FAQ accordion */}
  <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Clarity & Confidence</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Clear answers to common questions about partnering with EduRise.
        </p>
      </div>

      <div className="space-y-3.5">
        
        {/* FAQ 1 (Default Open) */}
        <div className="faq-item clean-card active overflow-hidden">
          <button type="button" onClick={() => toggleFaq(0)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer">
            <span>How quickly can our school see an increase in admission inquiries?</span>
            <div className="faq-chevron w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className="faq-content px-4 sm:px-5" style={{ maxHeight: activeFaq === 0 ? "200px" : "0px", opacity: activeFaq === 0 ? 1 : 0 }}>
            <div className="pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              Most partner schools begin receiving high-intent student admission inquiries within 7–14 days of launching our targeted performance marketing campaigns and custom admission landing pages.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="faq-item clean-card overflow-hidden">
          <button type="button" onClick={() => toggleFaq(1)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer">
            <span>Can the ERP system integrate with our existing biometric attendance hardware?</span>
            <div className="faq-chevron w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className="faq-content px-4 sm:px-5">
            <div className="pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              Yes, our ERP connects seamlessly with all standard biometric fingerprint machines, facial recognition scanners, and RFID turnstiles to send instant alerts to parents.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="faq-item clean-card overflow-hidden">
          <button type="button" onClick={() => toggleFaq(2)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer">
            <span>Do we need to hire extra teachers for AI & Robotics training?</span>
            <div className="faq-chevron w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className="faq-content px-4 sm:px-5">
            <div className="pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              Not at all. EduRise provides industry-certified expert trainers, complete curriculum, hardware kits, and software accounts directly to your campus — zero hiring burden on your school.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="faq-item clean-card overflow-hidden">
          <button type="button" onClick={() => toggleFaq(3)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer">
            <span>How does automated fee collection and UPI recovery work?</span>
            <div className="faq-chevron w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className="faq-content px-4 sm:px-5">
            <div className="pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              Parents receive automated notifications with secure 1-click UPI/NetBanking payment links. Once paid, digital receipts are generated instantly and synced with the school account ledger.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="faq-item clean-card overflow-hidden">
          <button type="button" onClick={() => toggleFaq(4)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer">
            <span>Can we start with just one module (like ERP or Marketing) and scale later?</span>
            <div className="faq-chevron w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className="faq-content px-4 sm:px-5">
            <div className="pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              Yes! You can start with our Admission Marketing or Campus ERP package and gradually add LMS and Future Skills training as your school expands.
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* Pre-footer CTA */}

    </>
  );
}
