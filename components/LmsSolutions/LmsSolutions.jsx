"use client";

import React from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./LmsSolutions.css";

export default function LmsSolutions() {
  const { openConsultationModal } = useModals();

  return (
    <>
      {/* BREADCRUMB & HERO */}
  <section className="py-12 sm:py-16 text-center bg-white border-b border-slate-100">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-xs text-slate-400 font-medium mb-3">
        <Link href="/" className="hover:text-slate-600">Home</Link> <span className="mx-1">/</span> <span className="text-slate-600">LMS Solutions</span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Modern Learning Management System
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
        Deliver online classes, recorded lectures, assignments, and assessments through an intuitive platform built for schools.
      </p>
      <Link href="/contact" className="inline-flex items-center bg-[#0f3b60] hover:bg-[#1e4e79] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all">
        Explore LMS
      </Link>
    </div>
  </section>

  {/* 9 CARD SUITE */}
  <section className="py-16 bg-[#fafbfc]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
          PLATFORM FEATURES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Complete Digital Learning Platform
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* 1 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Online Classes</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Live video classes with screen sharing, whiteboard, chat, and attendance tracking built in.
          </p>
        </div>

        {/* 2 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Recorded Lectures</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Auto-recorded sessions available for replay — students never miss a lesson.
          </p>
        </div>

        {/* 3 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Assignments</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Create, distribute, and grade assignments with deadline tracking and plagiarism detection.
          </p>
        </div>

        {/* 4 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Tests & Quizzes</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Online assessments with auto-grading, timed tests, and detailed performance analytics.
          </p>
        </div>

        {/* 5 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Certificates</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Automated certificate generation upon course completion with verification links.
          </p>
        </div>

        {/* 6 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Student Dashboard</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Personalized dashboard showing courses, progress, grades, and upcoming deadlines.
          </p>
        </div>

        {/* 7 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Teacher Dashboard</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Course management, student analytics, grading tools, and communication features.
          </p>
        </div>

        {/* 8 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Progress Analytics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Track student engagement, completion rates, and learning outcomes in real time.
          </p>
        </div>

        {/* 9 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Mobile App</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Learn on the go with iOS and Android apps for students, teachers, and parents.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* HYBRID LEARNING */}
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Stats Box */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#f0f4f8] border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-[#0f3b60] text-white flex items-center justify-center mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">89%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Engagement</div>
              </div>
              <div className="border-x border-slate-100">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">500+</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Courses</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">24/7</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
              HYBRID LEARNING
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Seamless Online + Offline Integration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Our LMS integrates with your ERP for unified student data. Teachers can supplement classroom teaching with digital content, and students access everything from one platform.
            </p>
            <button type="button" onClick={openConsultationModal} className="inline-flex items-center bg-[#0f3b60] hover:bg-[#1e4e79] text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-all cursor-pointer">
              Request Demo
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* CTA BANNER */}
  <section className="py-16 bg-gradient-to-b from-[#0b3c5d] to-[#042033] text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Transform How Your Students Learn</h2>
      <p className="text-slate-300 text-xs sm:text-sm mb-6">See our LMS in action with a personalized demo for your school.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/contact" className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all">
          Explore LMS
        </Link>
        <button type="button" onClick={openConsultationModal} className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer">
          Book Consultation
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
    </>
  );
}
