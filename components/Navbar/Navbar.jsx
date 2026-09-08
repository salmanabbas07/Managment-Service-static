"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModals } from "../Modals/ModalContext";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openSignInModal, openConsultationModal } = useModals();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Top announcement ribbon */}
      <div className="top-announcement-bar py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs font-semibold">
          <span>🏛️ <strong>EduRise Conclave 2026 is here</strong> — hosting 200+ School Leaders &amp; Trustees!</span>
          <Link href="/contact" className="text-rose-700 underline font-bold hover:text-rose-900 ml-1">
            Grab your institutional pass →
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            
            {/* Brand logo */}
            <Link href="/" className="flex items-center gap-2.5" onClick={closeMobileMenu}>
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-7 rounded-sm bg-rose-600 inline-block"></span>
                <span className="w-3.5 h-7 rounded-sm bg-emerald-600 inline-block"></span>
                <span className="w-3.5 h-7 rounded-sm bg-blue-600 inline-block"></span>
                <span className="w-3.5 h-7 rounded-sm bg-amber-500 inline-block"></span>
              </div>
              <div className="flex flex-col ml-1">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">EduRise</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">School OS</span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <Link
                href="/"
                className={`px-2 py-1 transition-colors ${
                  isActive("/") ? "text-rose-600 font-bold" : "hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-2 py-1 transition-colors ${
                  isActive("/about") ? "text-rose-600 font-bold" : "hover:text-blue-600"
                }`}
              >
                About Us
              </Link>

              {/* Solutions dropdown */}
              <div className="relative group">
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors ${
                    pathname.includes("solutions") || pathname === "/services" || pathname.includes("admission") || pathname.includes("school-website") || pathname.includes("future-skills")
                      ? "text-rose-600 font-bold"
                      : "text-slate-700"
                  }`}
                >
                  <span>Solutions</span>
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="dropdown-menu absolute left-0 top-full pt-1.5 w-64 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <Link
                      href="/admission-marketing"
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Admission Marketing
                    </Link>
                    <Link
                      href="/school-website-dev"
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      School Website Platform
                    </Link>
                    <Link
                      href="/erp-solutions"
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Campus Cloud ERP
                    </Link>
                    <Link
                      href="/lms-solutions"
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      LMS &amp; Digital Class
                    </Link>
                    <Link
                      href="/future-skills-academy"
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Future Skills Academy
                    </Link>
                  </div>
                </div>
              </div>

              {/* Training dropdown */}
              <div className="relative group">
                <Link
                  href="/training"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors ${
                    isActive("/training") ? "text-rose-600 font-bold" : "text-slate-700"
                  }`}
                >
                  <span>Training</span>
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="dropdown-menu absolute left-0 top-full pt-1.5 w-60 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <Link href="/training#ai-training" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">AI Training</Link>
                    <Link href="/training#robotics-training" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Robotics Training</Link>
                    <Link href="/training#web-development" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Web Development</Link>
                    <Link href="/training#software-development" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Software Development</Link>
                    <Link href="/training#digital-marketing" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Digital Marketing</Link>
                    <Link href="/training#graphic-design" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Graphic Design</Link>
                    <Link href="/training#video-editing" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Video Editing</Link>
                  </div>
                </div>
              </div>

              <Link
                href="/case-studies"
                className={`px-2 py-1 transition-colors ${
                  isActive("/case-studies") ? "text-rose-600 font-bold" : "hover:text-blue-600"
                }`}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className={`px-2 py-1 transition-colors ${
                  isActive("/blog") ? "text-rose-600 font-bold" : "hover:text-blue-600"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`px-2 py-1 transition-colors ${
                  isActive("/contact") ? "text-rose-600 font-bold" : "hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Auth & actions */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={openSignInModal}
                className="hidden md:inline-block text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={openConsultationModal}
                className="hidden sm:inline-flex btn-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Get Started Free
              </button>

              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu drawer */}
          <div
            id="mobile-menu-drawer"
            className={`mobile-menu-drawer lg:hidden flex flex-col gap-2 pb-5 pt-2 border-t border-slate-200 ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`px-3 py-2 rounded-md font-medium text-sm ${
                isActive("/") ? "font-bold text-rose-600 bg-rose-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`px-3 py-2 rounded-md font-medium text-sm ${
                isActive("/about") ? "font-bold text-rose-600 bg-rose-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            <div className="py-1 px-3 bg-slate-50 rounded-lg text-xs font-semibold text-slate-700">
              <span className="text-slate-400 font-bold uppercase block text-[10px] mb-1">Solutions</span>
              <Link href="/admission-marketing" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Admission Marketing</Link>
              <Link href="/school-website-dev" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">School Website</Link>
              <Link href="/erp-solutions" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">ERP Solutions</Link>
              <Link href="/lms-solutions" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">LMS Solutions</Link>
              <Link href="/future-skills-academy" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Future Skills Academy</Link>
            </div>

            <div className="py-1 px-3 bg-slate-50 rounded-lg text-xs font-semibold text-slate-700">
              <span className="text-slate-400 font-bold uppercase block text-[10px] mb-1">Training</span>
              <Link href="/training#ai-training" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">AI Training</Link>
              <Link href="/training#robotics-training" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Robotics Training</Link>
              <Link href="/training#web-development" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Web Development</Link>
              <Link href="/training#software-development" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Software Development</Link>
              <Link href="/training#digital-marketing" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Digital Marketing</Link>
              <Link href="/training#graphic-design" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Graphic Design</Link>
              <Link href="/training#video-editing" onClick={closeMobileMenu} className="block py-1 hover:text-blue-600">Video Editing</Link>
            </div>

            <Link
              href="/case-studies"
              onClick={closeMobileMenu}
              className={`px-3 py-2 rounded-md font-medium text-sm ${
                isActive("/case-studies") ? "font-bold text-rose-600 bg-rose-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`px-3 py-2 rounded-md font-medium text-sm ${
                isActive("/blog") ? "font-bold text-rose-600 bg-rose-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`px-3 py-2 rounded-md font-medium text-sm ${
                isActive("/contact") ? "font-bold text-rose-600 bg-rose-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  openSignInModal();
                }}
                className="btn-secondary w-full py-2.5 text-center text-xs font-bold cursor-pointer"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  openConsultationModal();
                }}
                className="btn-red w-full py-2.5 text-center text-xs font-bold cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
