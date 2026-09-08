"use client";

import React from "react";
import "./Training.css";

export default function Training() {
  return (
    <>
      {/* TRAINING HERO */}
  <section className="py-14 sm:py-18 bg-subtle-grid border-b border-slate-200">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Future Skills Academy</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
        Make Your Students Future-Ready with In-School STEM & Coding Programs
      </h1>
      <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
        We provide certified expert trainers, curriculum, and hardware kits directly to your campus — zero
        infrastructure burden on your school.
      </p>
    </div>
  </section>

  {/* TRAINING COURSES GRID (WITH MATCHING SECTION IDs) */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="max-w-2xl mb-10">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Curriculum Programs</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Practical 7-Pillar Skill Training</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1: AI Training */}
        <div id="ai-training" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">AI Training</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Generative AI workflows, ChatGPT, prompt engineering,
            creative thinking, research automation, and digital ethics.</p>
        </div>

        {/* 2: Robotics Training */}
        <div id="robotics-training" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Robotics Training</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Hands-on sensor kits, Arduino microcontrollers, smart
            automation, basic circuits, and national robotics contests.</p>
        </div>

        {/* 3: Web Development */}
        <div id="web-development" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Web Development</h3>
          <p className="text-xs text-slate-600 leading-relaxed">HTML5, CSS3, modern JavaScript, responsive layouts,
            front-end basics, WordPress, and hosting live websites.</p>
        </div>

        {/* 4: Software Development */}
        <div id="software-development" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Software Development</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Core programming logic, Python, Data structures,
            problem-solving, Git version control, and building real desktop/cloud applications.</p>
        </div>

        {/* 5: Digital Marketing */}
        <div id="digital-marketing" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Digital Marketing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Social media management, brand positioning, content
            creation, digital campaigns, and online entrepreneurship.</p>
        </div>

        {/* 6: Graphic Design */}
        <div id="graphic-design" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Graphic Design</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Visual storytelling, branding psychology, UI/UX principles,
            and practical tools including Figma, Photoshop, and Canva.</p>
        </div>

        {/* 7: Video Editing */}
        <div id="video-editing" className="clean-card p-6 scroll-mt-24">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Video Editing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Scripting, camera framing, audio mixing, color grading, and
            short-form video creation with Premiere Pro and CapCut.</p>
        </div>

      </div>

    </div>
  </section>

  {/* ROLLOUT MODEL */}
  <section className="py-14 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-8">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Execution Model</span>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-1">How It Works in Your School</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="p-5 rounded-xl bg-white border border-slate-200">
          <div className="text-blue-700 font-bold text-base mb-1">01. Certified Faculty</div>
          <p className="text-xs text-slate-600">Industry certified trainers assigned directly to teach on your campus.</p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-slate-200">
          <div className="text-blue-700 font-bold text-base mb-1">02. Hardware Kits Included</div>
          <p className="text-xs text-slate-600">All robotics components and computing tools are supplied by EduRise.</p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-slate-200">
          <div className="text-blue-700 font-bold text-base mb-1">03. Project Certifications</div>
          <p className="text-xs text-slate-600">Students build real projects and receive national certifications.</p>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
