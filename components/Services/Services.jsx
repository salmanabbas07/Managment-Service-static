"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./Services.css";

export default function Services() {
  const { openConsultationModal } = useModals();
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <>
  {/* SERVICES HERO */}
  <section className="py-14 sm:py-18 bg-subtle-grid border-b border-slate-200">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Enterprise Services</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
        Comprehensive Solutions to Scale & Digitize Your School
      </h1>
      <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
        From admission generation to campus automation, explore our modular, high-impact services built for
        forward-thinking educational institutions.
      </p>
    </div>
  </section>

  {/* SERVICES COMPACT 4-GRID */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Module 1: Admission Marketing */}
      <div className="clean-card p-6 sm:p-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module 01</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-3">Performance Marketing & Admission Growth</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Target parents actively searching for schools in your local area with hyper-local Meta and Google search
              ads, supported by dedicated landing pages and WhatsApp lead nurture automation.
            </p>
            <Link href="/admission-marketing"
              className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1">
              View Admission Marketing Suite →
            </Link>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-5 rounded-xl text-center">
            <div className="text-3xl font-extrabold text-blue-400">+230%</div>
            <div className="text-xs text-slate-400 mt-1">Avg. Admission Increase</div>
            <div className="text-xs text-emerald-400 font-semibold mt-2">42% Lower Cost Per Lead</div>
          </div>
        </div>
      </div>

      {/* Module 2: ERP System */}
      <div className="clean-card p-6 sm:p-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase text-purple-700 tracking-wider">Module 02</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-3">Unified Cloud ERP & Administration</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Digitize daily operations with biometric/RFID attendance, automated UPI fee reminders and digital
              receipts, live GPS bus tracking, and 1-click exam report card generation.
            </p>
            <Link href="/erp-solutions"
              className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1">
              View ERP Solutions →
            </Link>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-5 rounded-xl text-center">
            <div className="text-3xl font-extrabold text-purple-400">70%</div>
            <div className="text-xs text-slate-400 mt-1">Admin Time Saved</div>
            <div className="text-xs text-emerald-400 font-semibold mt-2">99.9% System Uptime</div>
          </div>
        </div>
      </div>

      {/* Module 3: LMS Platform */}
      <div className="clean-card p-6 sm:p-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">Module 03</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-3">Modern Learning Management System (LMS)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Empower teachers, students, and parents with live & recorded lectures, digital homework submissions,
              online assessments, and dedicated mobile apps.
            </p>
            <Link href="/lms-solutions"
              className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1">
              View LMS Solutions →
            </Link>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-5 rounded-xl text-center">
            <div className="text-3xl font-extrabold text-emerald-400">89%</div>
            <div className="text-xs text-slate-400 mt-1">Course Completion Rate</div>
            <div className="text-xs text-blue-400 font-semibold mt-2">24/7 Anywhere Access</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* PRICING MODEL */}
  <section className="py-14 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center mb-8">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Transparent Model</span>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Simple Partnership Structure</h2>
        <p className="text-xs text-slate-500 mt-1">Click on a plan to select your institutional growth model.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Step 1 Card */}
        <div id="pricing-card-1" onClick={() => setSelectedPlan(1)} className={`pricing-card-interactive p-6 ${selectedPlan === 1 ? "active-plan" : ""}`}>
          <span id="plan-tag-1" className="text-xs font-bold text-slate-500 uppercase transition-colors">Step 1</span>
          <h3 className="text-lg font-bold text-slate-900 mt-1">School Onboarding Setup</h3>
          <div id="plan-price-1" className="text-2xl font-extrabold text-slate-900 my-2 transition-colors">₹50,000 –
            ₹1,00,000</div>
          <p className="text-xs text-slate-500 mb-4">One-time setup investment</p>
          <ul className="text-xs text-slate-700 space-y-2 border-t pt-3 mb-6">
            <li>✓ Full ERP & Website Setup</li>
            <li>✓ Staff Onboarding & Training</li>
            <li>✓ Admission Marketing Campaign Launch</li>
          </ul>
          <button id="plan-btn-1" type="button" onClick={openConsultationModal}
            className="btn-secondary w-full py-2.5 text-xs text-center font-bold rounded-lg cursor-pointer">
            Get Onboarding Quote
          </button>
        </div>

        {/* Step 2 Card (Default Active) */}
        <div id="pricing-card-2" onClick={() => setSelectedPlan(2)} className={`pricing-card-interactive p-6 ${selectedPlan === 2 ? "active-plan" : ""}`}>
          <span id="plan-tag-2" className="text-xs font-bold text-blue-700 uppercase transition-colors">Step 2
            (Recommended)</span>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Monthly Student Model</h3>
          <div id="plan-price-2" className="text-2xl font-extrabold text-blue-700 my-2 transition-colors">₹1,000 <span
              className="text-xs text-slate-500 font-normal">/ student / mo</span></div>
          <p className="text-xs text-slate-500 mb-4">Scalable monthly subscription</p>
          <ul className="text-xs text-slate-700 space-y-2 border-t pt-3 mb-6">
            <li>✓ In-School AI & Robotics Labs</li>
            <li>✓ 24/7 LMS Platform Access</li>
            <li>✓ Continuous Marketing & Tech Support</li>
          </ul>
          <button id="plan-btn-2" type="button" onClick={openConsultationModal}
            className="btn-primary w-full py-2.5 text-xs text-center font-bold rounded-lg cursor-pointer">
            Schedule Discussion
          </button>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}
