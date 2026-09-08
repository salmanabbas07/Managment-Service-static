"use client";

import React from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./FutureSkillsAcademy.css";

export default function FutureSkillsAcademy() {
  const { openConsultationModal } = useModals();

  return (
    <>
      {/* BREADCRUMB & HERO */}
  <section className="py-12 sm:py-16 text-center bg-white border-b border-slate-100">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-xs text-slate-400 font-medium mb-3">
        <Link href="/" className="hover:text-slate-600">Home</Link> <span className="mx-1">/</span> <span
          className="text-slate-600">Future Skills Academy</span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Make Students Future Ready
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
        Complete learning programs delivered directly to your school. We provide trainers, curriculum, materials, and
        certificates — no infrastructure required.
      </p>
      <button type="button" onClick={openConsultationModal}
        className="inline-flex items-center bg-[#0f3b60] hover:bg-[#1e4e79] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all cursor-pointer">
        Start a Program
      </button>
    </div>
  </section>

  {/* 11 CAREER-FOCUSED TRAINING PROGRAMS */}
  <section className="py-16 bg-[#fafbfc]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d] uppercase tracking-wider mb-2">
          PROGRAMS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          11 Career–Focused Training Programs
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center">

        {/* 1 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Website Development</h3>
        </div>

        {/* 2 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">WordPress</h3>
        </div>

        {/* 3 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">AI Tools</h3>
        </div>

        {/* 4 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Performance Marketing</h3>
        </div>

        {/* 5 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Graphic Designing</h3>
        </div>

        {/* 6 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Video Editing</h3>
        </div>

        {/* 7 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Robotics</h3>
        </div>

        {/* 8 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Coding</h3>
        </div>

        {/* 9 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Digital Entrepreneurship</h3>
        </div>

        {/* 10 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Communication Skills</h3>
        </div>

        {/* 11 */}
        <div className="clean-card p-6 bg-white flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Career Skills</h3>
        </div>

      </div>

    </div>
  </section>

  {/* NO INFRASTRUCTURE SECTION */}
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-[#fafbfc]">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              No infrastructure required from your school.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We bring certified trainers, complete curriculum, learning materials, assessments, and certificates
              directly to your classrooms.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your school sets the pricing. We charge ₹1,000 per student per month for delivery. Most schools charge
              ₹2,000–5,000, creating healthy margins while differentiating from competitors.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-emerald-600 text-sm">✓</span> Expert Trainers
            </div>
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-emerald-600 text-sm">✓</span> Complete Curriculum
            </div>
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-emerald-600 text-sm">✓</span> Learning Material
            </div>
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-emerald-600 text-sm">✓</span> Assessments
            </div>
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-emerald-600 text-sm">✓</span> Certificates
            </div>
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-emerald-600 text-sm">✓</span> Progress Reports
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* CTA BANNER */}
  <section className="py-16 bg-gradient-to-b from-[#0b3c5d] to-[#042033] text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Differentiate Your School with Future Skills</h2>
      <p className="text-slate-300 text-xs sm:text-sm mb-6">Parents choose schools that prepare students for tomorrow. Start
        your first program in 4 weeks.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={openConsultationModal}
          className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer">
          Start a Program
        </button>
        <button type="button" onClick={openConsultationModal}
          className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer">
          Book Consultation
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
    </>
  );
}
