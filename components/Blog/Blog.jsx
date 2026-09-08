"use client";

import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      {/* BLOG HERO */}
  <section className="py-14 sm:py-18 bg-subtle-grid border-b border-slate-200">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Knowledge Hub</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
        Strategies & Insights for Modern School Leaders
      </h1>
      <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Expert articles on digital admission marketing, cloud ERP operations, and future skills education.
      </p>
    </div>
  </section>

  {/* FEATURED & ARTICLES LIST */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Featured Guide */}
      <div className="clean-card p-6 sm:p-8 mb-12 bg-slate-900 text-white">
        <span className="text-xs font-bold uppercase text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/60">
          Featured 2026-27 Playbook
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 mb-3 leading-snug">
          The 2026 School Admission Blueprint: How Leading Schools Reach 100% Enrollment Before March
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed mb-6">
          A step-by-step 90-day execution framework covering Meta hyper-local targeting, Google search intent funnels, WhatsApp response automation, and campus tour conversion optimization.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>Read Time: 8 Mins</span>
          <span>•</span>
          <span>By EduRise Strategy Team</span>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="clean-card p-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">Admissions</span>
            <h3 className="font-bold text-slate-900 text-base mt-2 mb-2">
              Why Traditional Banners & Newspaper Ads Are Failing School Admissions
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              How changing parent search behavior shifted inquiry generation to mobile screens and digital local search.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-5 text-[11px] text-slate-400">5 min read</div>
        </div>

        <div className="clean-card p-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider">Campus ERP</span>
            <h3 className="font-bold text-slate-900 text-base mt-2 mb-2">
              5 Critical Warning Signs Your School Has Outgrown Paper Registers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From fee reconciliation errors to delayed parent notices — how manual records cost Indian schools lakhs yearly.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-5 text-[11px] text-slate-400">4 min read</div>
        </div>

        <div className="clean-card p-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Future Skills</span>
            <h3 className="font-bold text-slate-900 text-base mt-2 mb-2">
              How In-School AI & Robotics Labs Directly Drive Parent Enrollment Choices
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Why modern parents actively prioritize STEM-enabled institutions and how your school can deliver it at zero capex.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-5 text-[11px] text-slate-400">6 min read</div>
        </div>

      </div>

    </div>
  </section>
    </>
  );
}
