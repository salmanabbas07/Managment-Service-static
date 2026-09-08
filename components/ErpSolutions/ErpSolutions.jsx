"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./ErpSolutions.css";

export default function ErpSolutions() {
  const { openConsultationModal } = useModals();
  const [activeTab, setActiveTab] = useState("administration");

  const scrollToFeatures = () => {
    const el = document.getElementById("erp-features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
  {/* Page Hero */}
  <section className="py-14 sm:py-20 text-center bg-white border-b border-slate-100">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-xs text-slate-400 font-medium mb-4">
        <Link href="/" className="hover:text-slate-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/services" className="hover:text-slate-600">Solutions</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-600">Campus Cloud ERP</span>
      </div>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-5">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        <span>School ERP Software — 30+ Integrated Modules</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
        One ERP.<br className="hidden sm:inline" /> Every School Operation.
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
        Manage academics, students, teachers, attendance, fees, finance, communication, departments, activities, transport, library, HR, documents, and more from one centralized school management platform.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={scrollToFeatures} className="btn-red px-6 py-3 text-xs font-bold uppercase tracking-wider cursor-pointer">
          Explore ERP Features
        </button>
        <button type="button" onClick={openConsultationModal} className="btn-secondary px-6 py-3 text-xs font-bold uppercase tracking-wider cursor-pointer">
          Request a Demo
        </button>
      </div>
    </div>
  </section>

  {/* ERP Overview Stats */}
  <section className="py-12 bg-[#fafbfc] border-b border-slate-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Everything Your School Needs. In One ERP.</h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">From student management and academics to finance, HR, communication, transportation, library, sports, and custom departments — the ERP brings your entire school ecosystem together on one centralized platform.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
        <div className="text-center p-5 rounded-2xl bg-white border border-slate-200">
          <div className="text-3xl sm:text-4xl font-black text-slate-900">30+</div>
          <div className="text-[11px] text-slate-500 font-semibold mt-1.5">Integrated ERP Modules</div>
        </div>
        <div className="text-center p-5 rounded-2xl bg-white border border-slate-200">
          <div className="text-3xl sm:text-4xl font-black text-slate-900">1</div>
          <div className="text-[11px] text-slate-500 font-semibold mt-1.5">Unified School Platform</div>
        </div>
        <div className="text-center p-5 rounded-2xl bg-white border border-slate-200">
          <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">All‑in‑One</div>
          <div className="text-[11px] text-slate-500 font-semibold mt-1.5">School Management</div>
        </div>
      </div>
    </div>
  </section>

  {/* Dashboard Mockup */}
  <section className="py-14 bg-white border-b border-slate-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 uppercase tracking-wider mb-3">Platform Preview</span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Personalized Dashboard for Every Role</h2>
        <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto">Every user — admin, teacher, parent, or student — gets a personalized view of exactly what they need.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] overflow-hidden shadow-lg">
        {/* Mock browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] border-b border-slate-700">
          <span className="w-3 h-3 rounded-full bg-rose-500"></span>
          <span className="w-3 h-3 rounded-full bg-amber-400"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          <div className="flex-1 mx-4 bg-slate-700 rounded px-3 py-1 text-[10px] text-slate-400">app.edurise.in/dashboard</div>
        </div>

        {/* Mock dashboard grid */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Good Morning,</div>
              <div className="text-sm font-extrabold text-slate-900">Principal Dashboard</div>
            </div>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">All Systems Live</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Total Students</div>
              <div className="text-xl font-black text-slate-900 mt-0.5">1,248</div>
              <div className="text-[10px] text-emerald-600 font-semibold">↑ 12 enrolled this week</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Attendance Today</div>
              <div className="text-xl font-black text-slate-900 mt-0.5">94.2%</div>
              <div className="text-[10px] text-blue-600 font-semibold">↑ above avg</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Fees Collected</div>
              <div className="text-xl font-black text-slate-900 mt-0.5">₹8.4L</div>
              <div className="text-[10px] text-amber-600 font-semibold">₹1.2L pending</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Upcoming Exams</div>
              <div className="text-xl font-black text-slate-900 mt-0.5">3</div>
              <div className="text-[10px] text-purple-600 font-semibold">Next: Unit Test — Mon</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white border border-slate-200 col-span-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Today's Notifications</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-start gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0"></span><span className="text-slate-700">Parent meeting — Class 9A at 2 PM</span></div>
                <div className="flex items-start gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span><span className="text-slate-700">Transport delay — Route 7, ETA +15 min</span></div>
                <div className="flex items-start gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0"></span><span className="text-slate-700">Library returns due — 14 books overdue</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 sm:col-span-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Quick Module Access</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-blue-50 text-center cursor-pointer hover:bg-blue-100 transition-colors">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  <span className="text-[9px] font-bold text-blue-700">Students</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-emerald-50 text-center cursor-pointer hover:bg-emerald-100 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-[9px] font-bold text-emerald-700">Attendance</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-amber-50 text-center cursor-pointer hover:bg-amber-100 transition-colors">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                  <span className="text-[9px] font-bold text-amber-700">Fees</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-purple-50 text-center cursor-pointer hover:bg-purple-100 transition-colors">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  <span className="text-[9px] font-bold text-purple-700">Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 30 ERP Modules — Categorized Feature Showcase */}
  <section id="erp-features" className="py-16 sm:py-20 bg-[#fafbfc]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 uppercase tracking-wider mb-3">Complete Module Library</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Complete School Management, One Powerful ERP</h2>
        <p className="text-sm text-slate-600 leading-relaxed">Everything your school needs to manage daily operations, academic activities, administration, communication, finance, and student services — organized in one intelligent platform.</p>
      </div>

      {/* Category tabs */}
      <div className="erp-tabs-scroll mb-8">
        <div className="flex items-center gap-2 min-w-max mx-auto pb-1 justify-center flex-wrap sm:flex-nowrap">
          <button type="button" onClick={() => setActiveTab("administration")} className={`erp-tab ${activeTab === "administration" ? "active" : ""}`}>Administration</button>
          <button type="button" onClick={() => setActiveTab("people")} className={`erp-tab ${activeTab === "people" ? "active" : ""}`}>Students &amp; People</button>
          <button type="button" onClick={() => setActiveTab("academics")} className={`erp-tab ${activeTab === "academics" ? "active" : ""}`}>Academics</button>
          <button type="button" onClick={() => setActiveTab("attendance")} className={`erp-tab ${activeTab === "attendance" ? "active" : ""}`}>Attendance &amp; Operations</button>
          <button type="button" onClick={() => setActiveTab("finance")} className={`erp-tab ${activeTab === "finance" ? "active" : ""}`}>Finance</button>
          <button type="button" onClick={() => setActiveTab("communication")} className={`erp-tab ${activeTab === "communication" ? "active" : ""}`}>Communication</button>
          <button type="button" onClick={() => setActiveTab("services")} className={`erp-tab ${activeTab === "services" ? "active" : ""}`}>Student Services</button>
          <button type="button" onClick={() => setActiveTab("intelligence")} className={`erp-tab ${activeTab === "intelligence" ? "active" : ""}`}>Intelligence</button>
        </div>
      </div>

      {/* Administration */}
      <div id="erp-panel-administration" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "administration" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-blue-50 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </div>
          <div className="erp-card-num">01 — Dashboard</div>
          <div className="erp-card-title">Personalized School Overview</div>
          <div className="erp-card-desc">Gives each user a personalized overview of important activities, updates, statistics, and quick actions tailored to their role.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-indigo-50 text-indigo-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <div className="erp-card-num">02 — User &amp; Role Management</div>
          <div className="erp-card-title">Secure Access &amp; Permissions</div>
          <div className="erp-card-desc">Create users, roles, permissions, and access levels for different school staff and administrators with granular control.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-emerald-50 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <div className="erp-card-num">03 — Department Management</div>
          <div className="erp-card-title">Manage Every School Department</div>
          <div className="erp-card-desc">Create and manage custom departments — Sports, Art, Medical, Finance, Administration, Academics, and any custom department your school requires.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-slate-100 text-slate-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div className="erp-card-num">28 — Document Management</div>
          <div className="erp-card-title">All Important Documents in One Place</div>
          <div className="erp-card-desc">Store and organize student documents, staff documents, financial documents, academic documents, and departmental documents — all searchable and secure.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card border-blue-300 bg-blue-50/30">
          <div className="erp-card-icon bg-blue-600 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
          </div>
          <div className="erp-card-num">30 — Custom Module &amp; Department Builder</div>
          <div className="erp-card-title">Build ERP Around Your School</div>
          <div className="erp-card-desc">Create custom departments, fields, workflows, roles, and records without changing the core system. The most powerful differentiator of our ERP — built for unique school needs.</div>
          <span className="erp-card-arrow text-blue-700">Explore →</span>
        </div>

      </div>

      {/* Students & People */}
      <div id="erp-panel-people" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "people" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-amber-50 text-amber-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <div className="erp-card-num">04 — Student Management</div>
          <div className="erp-card-title">Complete Student Profiles</div>
          <div className="erp-card-desc">Store and manage complete student profiles, records, documents, academic information, and all important student data in one centralized system.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-blue-50 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </div>
          <div className="erp-card-num">05 — Teacher &amp; Staff Management</div>
          <div className="erp-card-title">Manage Your Entire Workforce</div>
          <div className="erp-card-desc">Manage teachers, employees, positions, departments, responsibilities, and all staff information from one unified place.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-rose-50 text-rose-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <div className="erp-card-num">06 — Parent Management</div>
          <div className="erp-card-title">Connect Schools With Parents</div>
          <div className="erp-card-desc">Connect parents and guardians with their children while providing access to relevant school information, attendance, fees, and academic updates.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-purple-50 text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div className="erp-card-num">26 — Staff HR Management</div>
          <div className="erp-card-title">Complete Staff &amp; HR Operations</div>
          <div className="erp-card-desc">Handle employee attendance, leave, documents, positions, payroll-related information, and all HR records from one integrated module.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

      {/* Academics */}
      <div id="erp-panel-academics" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "academics" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-emerald-50 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>
          </div>
          <div className="erp-card-num">07 — Class &amp; Section Management</div>
          <div className="erp-card-title">Organize Classes &amp; Sections</div>
          <div className="erp-card-desc">Create classes, sections, groups, and manage student and teacher assignments with flexible organizational structures.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-blue-50 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <div className="erp-card-num">10 — Timetable Management</div>
          <div className="erp-card-title">Plan Every Schedule</div>
          <div className="erp-card-desc">Create and manage class, teacher, room, subject, and activity schedules with conflict detection and easy adjustments.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-amber-50 text-amber-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div className="erp-card-num">11 — Academic Management</div>
          <div className="erp-card-title">Complete Academic Management</div>
          <div className="erp-card-desc">Handle subjects, curriculum, syllabus, lessons, assignments, and academic records in one organized academic management system.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-purple-50 text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div className="erp-card-num">12 — Examination Management</div>
          <div className="erp-card-title">Simplify Exams &amp; Results</div>
          <div className="erp-card-desc">Create examinations, manage marks, grading systems, results, and report cards — supporting CBSE, ICSE, IB, and State Board formats.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-teal-50 text-teal-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div className="erp-card-num">13 — Grade &amp; Result Calculator</div>
          <div className="erp-card-title">Automated Result Calculation</div>
          <div className="erp-card-desc">Automatically calculates grades, percentages, GPA, rankings, and final results — reducing manual work and improving accuracy significantly.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

      {/* Attendance & Operations */}
      <div id="erp-panel-attendance" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "attendance" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-emerald-50 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div className="erp-card-num">08 — Attendance Management</div>
          <div className="erp-card-title">Smart Attendance Tracking</div>
          <div className="erp-card-desc">Track student and staff attendance, absences, late arrivals, leave, and attendance records with instant parent notifications via SMS and app.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-slate-800 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/></svg>
          </div>
          <div className="erp-card-num">09 — Biometric / Fingerprint Attendance</div>
          <div className="erp-card-title">Connected Biometric Attendance</div>
          <div className="erp-card-desc">Supports integration with biometric and fingerprint attendance devices to automatically sync and record attendance without manual entry.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-orange-50 text-orange-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div className="erp-card-num">23 — Transport Management</div>
          <div className="erp-card-title">Organize School Transportation</div>
          <div className="erp-card-desc">Manage buses, drivers, routes, student assignments, and transportation records. Track vehicles and keep parents informed of arrival times.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-cyan-50 text-cyan-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div className="erp-card-num">25 — Inventory Management</div>
          <div className="erp-card-title">Track School Resources</div>
          <div className="erp-card-desc">Manage equipment, supplies, stock, purchases, and distribution. Keep complete records of all school assets and consumables.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

      {/* Finance */}
      <div id="erp-panel-finance" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "finance" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-yellow-50 text-yellow-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div className="erp-card-num">14 — Fees Management</div>
          <div className="erp-card-title">Complete Fee Management</div>
          <div className="erp-card-desc">Create fee structures and track payments, pending fees, discounts, receipts, and fee records. Supports UPI, online payments, and installment plans.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-emerald-50 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div className="erp-card-num">15 — Finance Management</div>
          <div className="erp-card-title">Manage School Finances</div>
          <div className="erp-card-desc">Handle school income, expenses, budgets, transactions, and generate comprehensive financial reports for management and auditing.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

      {/* Communication */}
      <div id="erp-panel-communication" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "communication" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-blue-50 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          </div>
          <div className="erp-card-num">16 — Communication &amp; Chat</div>
          <div className="erp-card-title">Connected School Communication</div>
          <div className="erp-card-desc">Enable direct communication between administrators, teachers, students, parents, and departments through a secure in-platform messaging system.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-indigo-50 text-indigo-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div className="erp-card-num">17 — Class &amp; Group Management</div>
          <div className="erp-card-title">Create Custom Groups</div>
          <div className="erp-card-desc">Create communication and activity groups for classes, subjects, clubs, departments, and activities to keep everyone organized and informed.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-rose-50 text-rose-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          </div>
          <div className="erp-card-num">18 — Announcements &amp; Notifications</div>
          <div className="erp-card-title">Keep Everyone Informed</div>
          <div className="erp-card-desc">Send school-wide or targeted announcements, notifications, alerts, and important updates to specific user groups or the entire institution.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-teal-50 text-teal-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <div className="erp-card-num">27 — Events &amp; Calendar</div>
          <div className="erp-card-title">Never Miss an Important Date</div>
          <div className="erp-card-desc">Manage school events, holidays, meetings, examinations, activities, and important dates in one shared institutional calendar.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

      {/* Student Services */}
      <div id="erp-panel-services" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "services" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-amber-50 text-amber-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div className="erp-card-num">19 — Food &amp; Cafeteria Management</div>
          <div className="erp-card-title">Manage School Food Services</div>
          <div className="erp-card-desc">Track meals, cafeteria usage, food plans, purchases, and related records. Keep students and parents informed about cafeteria services.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-rose-50 text-rose-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <div className="erp-card-num">20 — Medical Department</div>
          <div className="erp-card-title">Student Health &amp; Medical Records</div>
          <div className="erp-card-desc">Manage student health records, medical visits, medical incidents, and emergency information for every student in the school.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-emerald-50 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div className="erp-card-num">21 — Sports Management</div>
          <div className="erp-card-title">Manage Sports &amp; Participation</div>
          <div className="erp-card-desc">Manage sports, teams, coaches, competitions, schedules, and student participation records across all school sporting activities.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-purple-50 text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          </div>
          <div className="erp-card-num">22 — Clubs &amp; Activities</div>
          <div className="erp-card-title">Build an Active School Community</div>
          <div className="erp-card-desc">Create custom clubs and activities while tracking participating students and staff. Foster student engagement beyond the classroom.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-indigo-50 text-indigo-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div className="erp-card-num">24 — Library Management</div>
          <div className="erp-card-title">Modern Library Management</div>
          <div className="erp-card-desc">Track books, borrowing, returns, availability, members, and fines. Manage a fully digital school library catalog with ease.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

      {/* Intelligence */}
      <div id="erp-panel-intelligence" className={`erp-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${activeTab === "intelligence" ? "active" : ""}`}>

        <div className="erp-feature-card">
          <div className="erp-card-icon bg-blue-600 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div className="erp-card-num">29 — Reports &amp; Analytics</div>
          <div className="erp-card-title">Turn School Data Into Insights</div>
          <div className="erp-card-desc">Generate reports and dashboards covering attendance, finance, academics, students, staff, and departments. Make data-driven decisions for your school's growth.</div>
          <span className="erp-card-arrow">Explore →</span>
        </div>

      </div>

    </div>
  </section>

  {/* Why Our ERP? */}
  <section className="py-16 bg-white border-t border-slate-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 uppercase tracking-wider mb-3">Why Choose Us</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Our ERP?</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <div className="why-erp-card">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1.5">One Platform</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Bring all school departments and operations together in a single unified management system.</p>
        </div>

        <div className="why-erp-card">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1.5">Centralized Data</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Keep all important school information organized, accessible, and secure in one centralized location.</p>
        </div>

        <div className="why-erp-card">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1.5">Role-Based Access</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Give every user — principal, teacher, parent, or student — exactly the right level of access to information.</p>
        </div>

        <div className="why-erp-card">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1.5">Scalable</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Designed to support growing schools and adapt to changing requirements without disruption.</p>
        </div>

        <div className="why-erp-card">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1.5">Customizable</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Create custom departments, fields, workflows, and records tailored specifically to your school's structure.</p>
        </div>

        <div className="why-erp-card">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1.5">Data-Driven</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Use reports and analytics to make better decisions about academics, finance, operations, and student welfare.</p>
        </div>

      </div>
    </div>
  </section>

  {/* Final CTA */}
  <section className="py-16 bg-gradient-to-b from-[#0b3c5d] to-[#042033] text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Simplify Your School Management?</h2>
      <p className="text-slate-300 text-sm mb-8 max-w-lg mx-auto">Bring academics, administration, finance, communication, student services, and daily operations together with one powerful School ERP.</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={openConsultationModal} className="bg-[#10b981] hover:bg-[#059669] text-white px-7 py-3 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer">
          Request a Demo
        </button>
        <button type="button" onClick={scrollToFeatures} className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer">
          Explore Features
        </button>
      </div>
    </div>
  </section>


    </>
  );
}
