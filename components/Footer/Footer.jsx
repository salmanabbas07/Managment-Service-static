"use client";

import React from "react";
import Link from "next/link";
import { useModals } from "../Modals/ModalContext";
import "./Footer.css";

export default function Footer() {
  const { openConsultationModal } = useModals();

  return (
    <>
      {/* Pre-footer CTA */}
      <section className="pre-footer-cta py-16 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 tracking-tight">
            Ready to scale your school?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Let's get your campus modernized today with EduRise.
          </p>
          <button
            type="button"
            onClick={openConsultationModal}
            className="btn-red px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Get Started Free →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer bg-white text-slate-600 py-16 border-t border-slate-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs">Apps &amp; Solutions</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/admission-marketing" className="footer-link hover:text-slate-900 transition-colors">Admission CRM</Link>
                </li>
                <li>
                  <Link href="/school-website-dev" className="footer-link hover:text-slate-900 transition-colors">School Web Portals</Link>
                </li>
                <li>
                  <Link href="/erp-solutions" className="footer-link hover:text-slate-900 transition-colors">Campus Cloud ERP</Link>
                </li>
                <li>
                  <Link href="/lms-solutions" className="footer-link hover:text-slate-900 transition-colors">LMS &amp; Digital Class</Link>
                </li>
                <li>
                  <Link href="/future-skills-academy" className="footer-link hover:text-slate-900 transition-colors">Future Skills Academy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs">Curriculum &amp; STEM</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/training#ai-training" className="footer-link hover:text-slate-900 transition-colors">AI Training &amp; Tools</Link>
                </li>
                <li>
                  <Link href="/training#robotics-training" className="footer-link hover:text-slate-900 transition-colors">Robotics STEM Labs</Link>
                </li>
                <li>
                  <Link href="/training#web-development" className="footer-link hover:text-slate-900 transition-colors">Web Development</Link>
                </li>
                <li>
                  <Link href="/training#software-development" className="footer-link hover:text-slate-900 transition-colors">Software Engineering</Link>
                </li>
                <li>
                  <Link href="/training#digital-marketing" className="footer-link hover:text-slate-900 transition-colors">Digital Marketing</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/case-studies" className="footer-link hover:text-slate-900 transition-colors">Case Studies</Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link hover:text-slate-900 transition-colors">Strategy Blog</Link>
                </li>
                <li>
                  <Link href="/#faq" className="footer-link hover:text-slate-900 transition-colors">Knowledge Base</Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link hover:text-slate-900 transition-colors">Growth Audits</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="footer-link hover:text-slate-900 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link hover:text-slate-900 transition-colors">Our Story</Link>
                </li>
                <li>
                  <Link href="/case-studies" className="footer-link hover:text-slate-900 transition-colors">Partner Network</Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link hover:text-slate-900 transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs">Contact Sales Desk</h4>
              <div className="space-y-2 text-slate-600">
                <div className="font-bold text-slate-900">Phone Hotline:</div>
                <div>+91 98765 43210</div>
                <div>+91 98765 43211</div>
                <div className="font-bold text-slate-900 pt-2">Email:</div>
                <div>growth@edurise.edu</div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>© 2026 EduRise Platforms Pvt. Ltd. All Rights Reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">ISO 9001:2015 Certified</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
