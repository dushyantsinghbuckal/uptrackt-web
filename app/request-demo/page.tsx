"use client";

import { useState } from "react";

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      {/* Subtle background pattern (optional) */}
      <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl w-full font-sans">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div className="text-black space-y-8 pr-8">

            <div>
              <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                Enterprise Experience
              </p>

              <h1 className="text-5xl lg:text-6xl leading-tight font-semibold tracking-tight">
             Experience the{" "}
             <span className="text-gray-400 whitespace-nowrap">Uptrackt Advantage</span>
             <span className="text-black">.</span>
             </h1>
            </div>
          
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Join the select few who've transformed their customer intelligence.
              Schedule a private walkthrough with our solutions team.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-6">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">SOC2 Type II Certified</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">GDPR Compliant</span>
              </div>

            </div>

            {/* Testimonial */}
            <blockquote className="border-l-2 border-black/30 pl-6 mt-10">
              <p className="text-gray-600 italic text-base">
                "Uptrackt gave us clarity we never had. It's become our source of truth for every customer decision."
              </p>
              <footer className="mt-3">
                <p className="text-black text-sm font-medium">
                  - CX Leader at Global Consumer Brand
                </p>
              </footer>
            </blockquote>

          </div>

          {/* Right column (form) */}
          <div className="bg-gray-100 rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-xl ml-6">

            {!submitted ? (
              <>
                <h2 className="text-3xl font-semibold tracking-tight text-black mb-2">
                  Request Your Demo
                </h2>

                <p className="text-gray-600 text-sm mb-8">
                  Fields marked with <span className="text-black">*</span> are required
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-gray-400 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email <span className="text-black">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-gray-400 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name <span className="text-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-gray-400 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors"
                      placeholder="Acme, Inc."
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your role
                    </label>
                    <select className="w-full bg-transparent border-b border-gray-400 py-3 text-black focus:border-black focus:outline-none transition-colors">
                      <option value="" className="bg-gray-100">Select your role</option>
                      <option className="bg-gray-100">Founder / Executive</option>
                      <option className="bg-gray-100">Product Leader</option>
                      <option className="bg-gray-100">Growth / Marketing</option>
                      <option className="bg-gray-100">Customer Experience</option>
                      <option className="bg-gray-100">Engineering / IT</option>
                      <option className="bg-gray-100">Other</option>
                    </select>
                  </div>

                  {/* Problem */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What challenge are you solving?
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-transparent border-b border-gray-400 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Tell us briefly about your goals..."
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      Request Demo
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    We'll contact you within 8 hours to schedule a personalized session.
                  </p>

                </form>
              </>
            ) : (
              <div className="py-12 text-center">

                <div className="w-20 h-20 rounded-full bg-black/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-3xl font-semibold tracking-tight text-black mb-3">
                  Thank you
                </h2>

                <p className="text-gray-600 text-lg">
                  Your request has been received. A member of our team will reach out shortly to arrange your demo.
                </p>

              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}