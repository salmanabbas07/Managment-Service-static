"use client";

import React from "react";
import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <>
      {/* HERO */}
  <section className="py-14 sm:py-18 bg-subtle-grid border-b border-slate-200">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Proven Impact</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
        Real Results from Partner Schools Across India
      </h1>
      <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
        See how institutions solved their admission and operational challenges with EduRise.
      </p>
    </div>
  </section>

  {/* CASE STUDY CARDS */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Story 1 */}
      <div className="clean-card p-6 sm:p-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
              CBSE K-12 School • Pune
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
              From 60 Vacant Seats to Full Admissions in 45 Days
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              St. Xavier's Academy faced high competition from newly opened institutions in their area. EduRise deployed a localized Meta & Google Ads strategy with instant WhatsApp counseling support.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2 border-t border-slate-100">
              <div>
                <div className="text-xl font-extrabold text-blue-700">+280%</div>
                <div className="text-[11px] text-slate-500">Inquiry Volume</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-emerald-700">100%</div>
                <div className="text-[11px] text-slate-500">Seat Occupancy</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">42 Days</div>
                <div className="text-[11px] text-slate-500">Campaign Timeline</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-xl">
            <div className="text-xs text-slate-400 mb-2">Client Testimonial</div>
            <p className="text-xs italic text-slate-200 leading-relaxed mb-4">
              "EduRise delivered more qualified admissions in one season than our traditional hoardings and newspaper ads did in 3 years."
            </p>
            <div className="text-xs font-bold text-teal-400">— Sister Mary, Principal</div>
          </div>
        </div>
      </div>

      {/* Story 2 */}
      <div className="clean-card p-6 sm:p-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200/60">
              International Day-Boarding • Bengaluru
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
              Automating 99.4% of Tuition Fee Recovery Across 2,400 Students
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Oakridge Global spent over 40 administrative hours monthly generating manual fee receipts and calling defaulters. EduRise integrated our automated cloud ERP with UPI payment links.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2 border-t border-slate-100">
              <div>
                <div className="text-xl font-extrabold text-purple-700">99.4%</div>
                <div className="text-[11px] text-slate-500">On-Time Fees</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-blue-700">32 hrs</div>
                <div className="text-[11px] text-slate-500">Saved Weekly</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">Zero</div>
                <div className="text-[11px] text-slate-500">Paper Ledgers</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-xl">
            <div className="text-xs text-slate-400 mb-2">Client Testimonial</div>
            <p className="text-xs italic text-slate-200 leading-relaxed mb-4">
              "Parents love the 1-click UPI payments on WhatsApp, and our accounting team has zero reconciliation headaches."
            </p>
            <div className="text-xs font-bold text-teal-400">— Rajesh Nair, Managing Trustee</div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </>
  );
}
