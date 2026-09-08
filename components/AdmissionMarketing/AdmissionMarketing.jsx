"use client";

import React from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./AdmissionMarketing.css";

export default function AdmissionMarketing() {
  const { openConsultationModal } = useModals();

  return (
    <>
      {/* BREADCRUMB & HERO */}
  <section className="py-12 sm:py-16 text-center bg-white border-b border-slate-100">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-xs text-slate-400 font-medium mb-3">
        <Link href="/" className="hover:text-slate-600">Home</Link> <span className="mx-1">/</span> <span
          className="text-slate-600">Admission Marketing</span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Performance Marketing That Fills Your School
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
        Data-driven Meta Ads, Google Ads, and admission funnels designed specifically for educational institutions — not
        generic campaigns.
      </p>
      <button type="button" onClick={openConsultationModal}
        className="inline-flex items-center bg-[#0f3b60] hover:bg-[#1e4e79] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer">
        Increase Admissions
      </button>
    </div>
  </section>

  {/* 9 CARD SUITE */}
  <section className="py-16 bg-[#fafbfc]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
          WHAT WE OFFER
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Complete Admission Marketing Suite
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Meta Ads</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Target parents on Facebook and Instagram with demographic, interest, and behavioral targeting in your
            catchment area.
          </p>
        </div>

        {/* 2 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Google Ads</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Capture parents actively searching "best school near me" with high-intent search and display campaigns.
          </p>
        </div>

        {/* 3 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Lead Generation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Optimized lead forms and landing pages that convert browsing parents into qualified admission inquiries.
          </p>
        </div>

        {/* 4 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Admission Campaigns</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Seasonal campaigns aligned with your admission cycle — open house promotions, early bird offers, and urgency
            messaging.
          </p>
        </div>

        {/* 5 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Parent Targeting</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hyper-local targeting by pincode, income bracket, and education preferences to reach your ideal parent
            demographic.
          </p>
        </div>

        {/* 6 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Landing Pages</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-converting admission landing pages with virtual tours, testimonials, and instant inquiry forms.
          </p>
        </div>

        {/* 7 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Admission Funnel</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            End-to-end funnel from awareness to enrollment with automated follow-ups and lead nurturing sequences.
          </p>
        </div>

        {/* 8 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Analytics & Reporting</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Real-time dashboards showing cost per lead, conversion rates, and ROI — updated daily during admission
            season.
          </p>
        </div>

        {/* 9 */}
        <div className="clean-card p-6 bg-white">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">Creative Production</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Professional ad creatives, video tours, and parent testimonial content designed for education marketing.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* PROVEN RESULTS */}
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid lg:grid-cols-12 gap-8 items-center">

        {/* Left Stats */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Average Partner Results
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our admission marketing campaigns consistently deliver measurable growth for schools across India.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-[#fafbfc] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">230%</div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">Admission Growth</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-[#fafbfc] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">42%</div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">Lower Cost/Lead</div>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-[#fafbfc] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.2x</div>
              <div className="text-[10px] text-slate-500 font-medium mt-1">Marketing ROI</div>
            </div>
          </div>
        </div>

        {/* Right Testimonial */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#f0f4f8] border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-[#0f3b60] text-white flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
              "EduRise's marketing team understands the education sector like no one else. They know when parents
              search, what messaging converts, and how to optimize for admission season."
            </p>
            <div className="text-xs font-bold text-slate-900">
              — Dr. Rajesh Sharma, Principal
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* CTA BANNER */}
  <section className="py-16 bg-gradient-to-b from-[#0b3c5d] to-[#042033] text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Fill Every Seat?</h2>
      <p className="text-slate-300 text-xs sm:text-sm mb-6">Get a free admission marketing audit for your school.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={openConsultationModal}
          className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer">
          Book Free Consultation
        </button>
        <Link href="/case-studies"
          className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all">
          See Success Stories
        </Link>
      </div>
    </div>
  </section>

  {/* Footer */}
    </>
  );
}
