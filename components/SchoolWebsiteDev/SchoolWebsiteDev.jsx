"use client";

import React from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./SchoolWebsiteDev.css";

export default function SchoolWebsiteDev() {
  const { openConsultationModal } = useModals();

  return (
    <>
      {/* BREADCRUMB & HERO */}
  <section className="py-12 sm:py-16 text-center bg-white border-b border-slate-100">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-xs text-slate-400 font-medium mb-3">
        <Link href="/" className="hover:text-slate-600">Home</Link> <span className="mx-1">/</span> <span
          className="text-slate-600">School Website Development</span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Premium School Websites That Convert Parents
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
        Modern, mobile-responsive, lightning-fast school websites designed to build trust, showcase achievements, and
        turn visitors into admissions.
      </p>
      <button type="button" onClick={openConsultationModal}
        className="inline-flex items-center bg-[#0f3b60] hover:bg-[#1e4e79] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer">
        Build Your School Website
      </button>
    </div>
  </section>

  {/* 9 CARD SUITE */}
  <section className="py-16 bg-[#fafbfc]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
          FEATURES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Everything Your School Website Needs
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Modern Design</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Clean, professional aesthetics tailored to your school's brand identity and values.
          </p>
        </div>

        {/* 2 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Online Admission Forms</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Multi-step digital application forms with document upload and online fee payment.
          </p>
        </div>

        {/* 3 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Mobile Responsive</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            80%+ parents visit on mobile — our sites load instantly and look perfect on every screen.
          </p>
        </div>

        {/* 4 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">SEO Optimized</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Rank for "best school in [your city]" searches with built-in technical and local SEO.
          </p>
        </div>

        {/* 5 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Parent Portal Link</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Seamless integration with ERP, fee payment gateways, and learning management systems.
          </p>
        </div>

        {/* 6 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Lead Tracking</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every inquiry captured, tagged by source (Google, Meta, Direct), and routed to your team.
          </p>
        </div>

        {/* 7 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Virtual Campus Tour</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Showcase classrooms, labs, sports facilities, and campus life with 360° photo/video tours.
          </p>
        </div>

        {/* 8 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Events & Notice Board</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dynamic calendar for school events, circulars, exam dates, and holiday schedules.
          </p>
        </div>

        {/* 9 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Lightning Speed</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sub-2-second load times with CDN hosting, image optimization, and clean code.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* WHY IT MATTERS */}
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid lg:grid-cols-12 gap-8 items-center">

        {/* Left Stats */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
              WHY IT MATTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Your Website Is Your Front Door
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              94% of parents research schools online before visiting. A slow, outdated website directly costs you
              admissions.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-[#fafbfc] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">3x</div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">More Inquiries</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-[#fafbfc] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">95+</div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">PageSpeed Score</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-[#fafbfc] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">Mobile Ready</div>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#f0f4f8] border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-[#0f3b60] text-white flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We design, develop, host, and maintain your school website with 99.9% uptime SLA. Updates and content
              changes handled within 24 hours.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* CTA BANNER */}
  <section className="py-16 bg-gradient-to-b from-[#0b3c5d] to-[#042033] text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Upgrade Your School's Digital Presence</h2>
      <p className="text-slate-300 text-xs sm:text-sm mb-6">Get a modern, high-converting website built in 2–3 weeks.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={openConsultationModal}
          className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer">
          Build Your School Website
        </button>
        <Link href="/contact"
          className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all">
          View Website Samples
        </Link>
      </div>
    </div>
  </section>

  {/* Footer */}
    </>
  );
}
