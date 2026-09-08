"use client";

import React, { useState } from "react";
import { useModals } from "./ModalContext";

export default function SignInModal() {
  const { isSignInOpen, closeSignInModal, openConsultationModal } = useModals();
  const [role, setRole] = useState("admin");
  const [submitted, setSubmitted] = useState(false);

  if (!isSignInOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeSignInModal();
  };

  const handleSwitchToConsultation = (e) => {
    e.preventDefault();
    closeSignInModal();
    openConsultationModal();
  };

  return (
    <div
      id="signin-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close sign in modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div id="signin-form-view">
            <div className="flex items-center gap-1 mb-2">
              <span className="w-2.5 h-5 rounded-sm bg-rose-600 inline-block"></span>
              <span className="w-2.5 h-5 rounded-sm bg-emerald-600 inline-block"></span>
              <span className="w-2.5 h-5 rounded-sm bg-blue-600 inline-block"></span>
              <span className="w-2.5 h-5 rounded-sm bg-amber-500 inline-block"></span>
              <span className="text-sm font-extrabold text-slate-900 ml-1.5">EduRise Campus OS</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Sign in to your Portal</h3>
            <p className="text-xs text-slate-500 mb-5">Select your role to access your institutional dashboard.</p>

            {/* Role Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl mb-4 text-xs font-semibold text-center">
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`py-1.5 px-2 rounded-lg cursor-pointer transition-all ${
                  role === "admin"
                    ? "bg-white shadow-sm text-slate-900 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => setRole("teacher")}
                className={`py-1.5 px-2 rounded-lg cursor-pointer transition-all ${
                  role === "teacher"
                    ? "bg-white shadow-sm text-slate-900 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Teacher
              </button>
              <button
                type="button"
                onClick={() => setRole("parent")}
                className={`py-1.5 px-2 rounded-lg cursor-pointer transition-all ${
                  role === "parent"
                    ? "bg-white shadow-sm text-slate-900 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Parent
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {role === "admin" && (
                    <>Institutional Email / User ID <span className="text-rose-500">*</span></>
                  )}
                  {role === "teacher" && (
                    <>Teacher ID / Registered Mobile <span className="text-rose-500">*</span></>
                  )}
                  {role === "parent" && (
                    <>Student Admission No. / Parent Mobile <span className="text-rose-500">*</span></>
                  )}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    role === "admin"
                      ? "e.g. principal@dps.edu.in"
                      : role === "teacher"
                      ? "e.g. faculty.t104@dps.edu.in"
                      : "e.g. +91 98765 43210 or ADM-2026"
                  }
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100 bg-slate-50/50"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Password reset link sent to your registered school phone/email.");
                    }}
                    className="text-[11px] font-semibold text-blue-600 hover:underline"
                  >
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100 bg-slate-50/50"
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span>Remember this device</span>
                </label>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  256-Bit SSL
                </span>
              </div>

              <button
                type="submit"
                className="w-full btn-red py-3 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer mt-2"
              >
                Sign In to Campus Portal →
              </button>
            </form>

            <div className="pt-4 mt-4 border-t border-slate-100 text-center text-xs text-slate-500">
              Don't have an institutional account?{" "}
              <a
                href="#"
                onClick={handleSwitchToConsultation}
                className="text-rose-600 font-bold hover:underline ml-1"
              >
                Onboard Your School →
              </a>
            </div>
          </div>
        ) : (
          <div id="signin-success-view" className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Signed In Successfully!</h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Welcome to EduRise Campus OS. Redirecting to your school dashboard...
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
