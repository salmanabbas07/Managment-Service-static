"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./Contact.css";

export default function Contact() {
  const { openConsultationModal } = useModals();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    schoolName: "",
    cityState: "",
    whatsapp: "",
    email: "",
    services: [],
    notes: "",
  });

  const handleCheckboxChange = (serviceName) => {
    setFormData((prev) => {
      const current = prev.services;
      if (current.includes(serviceName)) {
        return { ...prev, services: current.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...current, serviceName] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Growth Specialists On-Duty (Fast Response under 2 Hours)
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Let's Scale Your School Admissions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a free institutional strategy audit or direct consultation with our education growth leaders.
          </p>
        </div>
      </section>

      {/* Direct channels & main contact form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left column: Direct channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="clean-card p-6 sm:p-8 bg-slate-900 text-white border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Institutional Hotline</span>
                <h2 className="text-xl sm:text-2xl font-black mt-1 mb-3">Direct Contact Channels</h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Need an instant response? Reach out directly via our executive desk for fast-track school onboarding.
                </p>

                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-slate-400">Direct Calling Desk</div>
                      <div className="text-sm font-bold text-white tracking-wide">+91 98765 43210</div>
                    </div>
                  </a>

                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-slate-400">Quick WhatsApp Chat</div>
                      <div className="text-sm font-bold text-emerald-400 tracking-wide">Chat with Leadership Team</div>
                    </div>
                  </a>

                  <a href="mailto:growth@edurise.edu" className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-slate-400">Official Inquiries</div>
                      <div className="text-sm font-bold text-white tracking-wide">growth@edurise.edu</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  Average response turnaround time: <strong>45 minutes</strong>
                </div>
              </div>

              {/* Physical Office Presence */}
              <div className="clean-card p-6 bg-slate-50 border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">National Experience Centers</h3>
                <div className="space-y-3 text-xs text-slate-600">
                  <div>
                    <strong className="text-slate-900 block">Delhi NCR:</strong>
                    Cyber City Phase II, DLF Tech Park, Gurugram, 122002
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Pune Hub:</strong>
                    Viman Nagar Corporate Towers, Pune, Maharashtra 411014
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Form */}
            <div className="lg:col-span-7">
              <div className="clean-card p-6 sm:p-10 bg-white border-slate-200 shadow-xl shadow-slate-100/60">
                
                {!isSubmitted ? (
                  <>
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Audit Request</span>
                      <h2 className="text-2xl font-black text-slate-900 mt-1">Tell Us About Your Institution</h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in the quick details below and our solution architects will prepare a customized audit.
                      </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* STEP 1: Personal Info */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">1</span>
                          Your Details
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="relative">
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Full Name <span className="text-rose-500">*</span></label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                              </span>
                              <input
                                className="form-input"
                                placeholder="Dr. Ramesh Sharma"
                                required
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Role / Designation <span className="text-rose-500">*</span></label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                              </span>
                              <input
                                className="form-input"
                                placeholder="Principal / Director / Trustee"
                                required
                                type="text"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* STEP 2: School Info */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">2</span>
                          School Information
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="relative">
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">School / Institution Name <span className="text-rose-500">*</span></label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                              </span>
                              <input
                                className="form-input"
                                placeholder="Saint Paul International School"
                                required
                                type="text"
                                value={formData.schoolName}
                                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">City &amp; State <span className="text-rose-500">*</span></label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                              </span>
                              <input
                                className="form-input"
                                placeholder="Pune, Maharashtra"
                                required
                                type="text"
                                value={formData.cityState}
                                onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* STEP 3: Contact Channels */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">3</span>
                          How Can We Reach You?
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="relative">
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Official WhatsApp Number <span className="text-rose-500">*</span></label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                              </span>
                              <input
                                className="form-input"
                                placeholder="+91 98765 43210"
                                required
                                type="tel"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Official Email Address <span className="text-rose-500">*</span></label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                              </span>
                              <input
                                className="form-input"
                                placeholder="principal@school.edu"
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* STEP 4: Services Checkboxes */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">4</span>
                          Services of Interest (Select All That Apply)
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            "ERP Software Ecosystem",
                            "Admission Marketing Suite",
                            "Modern School Website",
                            "Learning Management (LMS)",
                            "STEM & Coding Programs",
                            "Teacher Capacity Training"
                          ].map((svc) => (
                            <label key={svc} className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-700">
                              <input
                                type="checkbox"
                                name="services"
                                checked={formData.services.includes(svc)}
                                onChange={() => handleCheckboxChange(svc)}
                                className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                              />
                              <span>{svc}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* STEP 5: Institutional Priorities (Textarea) */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Institution Priorities &amp; Challenges (Optional)
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                          placeholder="We want to increase our admissions by 150 seats and automate student fee collection..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-red py-3.5 px-6 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Schedule Free School Growth Audit →
                      </button>

                      <div className="text-center pt-2">
                        <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                          100% Institutional Privacy. We will never share your school data or spam your phone.
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12 px-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Request Confirmed</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">Thank You, {formData.fullName || "Educator"}!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                      Your growth audit request for <strong>{formData.schoolName || "your school"}</strong> has been successfully received. Our senior education consultant will connect with you via WhatsApp and email within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="px-5 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        Submit Another Request
                      </button>
                      <button
                        type="button"
                        onClick={openConsultationModal}
                        className="btn-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
                      >
                        Book Live Demo Now →
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
