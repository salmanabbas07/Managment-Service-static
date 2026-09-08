"use client";

import React, { useState } from "react";
import { useModals } from "./ModalContext";

export default function ConsultationModal() {
  const { isConsultationOpen, closeConsultationModal } = useModals();
  const [submitted, setSubmitted] = useState(false);

  if (!isConsultationOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeConsultationModal();
  };

  return (
    <div
      id="consultation-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6 sm:p-7">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close consultation modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div id="modal-form-view">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">Quick Strategy Call</span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-1">Book Free Consultation</h3>
            <p className="text-xs text-slate-500 mb-5">Talk directly with our senior school growth specialists.</p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ramesh Sharma"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp No. <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    School & City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DPS Pune"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Required Solution</label>
                <select className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100 bg-white">
                  <option>Admission Marketing</option>
                  <option>School Website Development</option>
                  <option>Campus ERP System</option>
                  <option>Modern LMS Platform</option>
                  <option>Future Skills & AI Labs</option>
                  <option>All-in-One Complete Growth Plan</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-red py-3 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer mt-2"
              >
                Schedule Free Call Now →
              </button>

              <p className="text-[11px] text-slate-400 text-center">🔒 100% Confidential. No Spam Guarantee.</p>
            </form>
          </div>
        ) : (
          <div id="modal-success-view" className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Consultation Scheduled!</h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you! Our senior school growth advisor will contact you on WhatsApp/Call within 2 hours.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
