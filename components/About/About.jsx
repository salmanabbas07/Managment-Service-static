"use client";

import React from "react";
import Link from "next/link";
import "./About.css";

export default function About() {
  return (
    <>
  {/* ABOUT HERO */}
  <section className="py-16 sm:py-20 bg-subtle-grid border-b border-slate-200">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-blue-700 text-xs font-bold shadow-sm mb-4">
        <span>Founded by Educational Technologists & Growth Strategists</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Empowering 150+ Schools with Sustainable Growth & Modern Systems
      </h1>
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        EduRise bridges the gap between traditional educational leadership and high-performance digital systems —
        helping school founders achieve 100% capacity and effortless daily operations.
      </p>
    </div>
  </section>

  {/* OUR TRACK RECORD & MILESTONES */}
  <section className="py-16 bg-white border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="clean-card p-6 bg-slate-50/50">
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-700">150+</div>
          <div className="text-xs font-bold text-slate-900 mt-2 uppercase tracking-wider">Partner Schools</div>
          <p className="text-[11px] text-slate-500 mt-1">Across 18+ Indian States</p>
        </div>

        <div className="clean-card p-6 bg-slate-50/50">
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700">₹14.2 Cr+</div>
          <div className="text-xs font-bold text-slate-900 mt-2 uppercase tracking-wider">Fee Dues Automated</div>
          <p className="text-[11px] text-slate-500 mt-1">Zero Paperwork Ledgers</p>
        </div>

        <div className="clean-card p-6 bg-slate-50/50">
          <div className="text-3xl sm:text-4xl font-extrabold text-purple-700">45,000+</div>
          <div className="text-xs font-bold text-slate-900 mt-2 uppercase tracking-wider">Students Trained</div>
          <p className="text-[11px] text-slate-500 mt-1">In AI, Robotics & Web Tech</p>
        </div>

        <div className="clean-card p-6 bg-slate-50/50">
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">99.8%</div>
          <div className="text-xs font-bold text-slate-900 mt-2 uppercase tracking-wider">Platform Uptime</div>
          <p className="text-[11px] text-slate-500 mt-1">Enterprise Cloud SLA</p>
        </div>
      </div>

    </div>
  </section>

  {/* PHILOSOPHY & EXECUTIVE GOVERNANCE */}
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Our Operating Philosophy</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
            Single-Point Accountability for Every School Growth Metric
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            School principals and trustees should dedicate their energy to curriculum excellence and student well-being
            — not managing five different software vendors, marketing agencies, and IT troubleshooting desks.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            EduRise acts as an institutional co-pilot, delivering guaranteed execution across digital admissions, ERP
            automation, and future STEM laboratories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="clean-card p-5 bg-white">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">ISO 9001:2015 Certified</h3>
            <p className="text-xs text-slate-500">Audited operational processes ensuring zero-downtime campus rollout.</p>
          </div>

          <div className="clean-card p-5 bg-white">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">100% Data Privacy</h3>
            <p className="text-xs text-slate-500">Encrypted student & fee data stored on secure India-based AWS cloud
              servers.</p>
          </div>

          <div className="clean-card p-5 bg-white">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Dedicated Account Lead</h3>
            <p className="text-xs text-slate-500">Every partner school is assigned a designated senior education advisor.
            </p>
          </div>

          <div className="clean-card p-5 bg-white">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Guaranteed ROI</h3>
            <p className="text-xs text-slate-500">Transparent inquiry tracking with measurable admission conversion metrics.
            </p>
          </div>
        </div>
      </div>

      {/* REGIONAL OFFICE HUBS */}
      <div className="border-t border-slate-200 pt-12">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">Our Institutional
          Presence</span>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="clean-card p-5 bg-white">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wide">Headquarters</div>
            <div className="text-base font-extrabold text-slate-900 mt-1">Pune, Maharashtra</div>
            <p className="text-xs text-slate-500 mt-1">EduRise Platform Towers, Viman Nagar, Pune – 411014</p>
          </div>

          <div className="clean-card p-5 bg-white">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Technology & STEM Labs</div>
            <div className="text-base font-extrabold text-slate-900 mt-1">Bengaluru, Karnataka</div>
            <p className="text-xs text-slate-500 mt-1">Tech Innovation Hub, HSR Layout, Bengaluru – 560102</p>
          </div>

          <div className="clean-card p-5 bg-white">
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wide">Regional North Desk</div>
            <div className="text-base font-extrabold text-slate-900 mt-1">Delhi NCR & Noida</div>
            <p className="text-xs text-slate-500 mt-1">Institutional Outreach Center, Sector 62, Noida – 201309</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Footer */}

    </>
  );
}
