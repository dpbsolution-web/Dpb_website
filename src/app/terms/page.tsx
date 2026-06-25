"use client";

import { useState } from "react";
import Link from "next/link";
import { TERMS_SECTIONS, TERMS_INTRO, TERMS_CONTENT, TERMS_FOOTER } from "@/constants/terms";

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Branded Hero Header */}
      <header className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="inline-block mb-3 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-blue-100 backdrop-blur-sm">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-blue-200 text-sm">Last updated: June 2025</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Contents
              </h2>
              <nav className="space-y-1">
                {TERMS_SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="mb-12 pb-8 border-b border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                {TERMS_INTRO.text}
              </p>
            </div>


            {/* Section 1: Acceptance */}
            <section id="acceptance" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.acceptance.title}</h2>
              {TERMS_CONTENT.acceptance.paragraphs.map((para, idx) => (
                <p key={idx} className={`text-gray-700 ${idx < TERMS_CONTENT.acceptance.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {para}
                </p>
              ))}
            </section>

            {/* Section 2: Services */}
            <section id="services" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.services.title}</h2>
              <p className="text-gray-700 mb-4">{TERMS_CONTENT.services.text}</p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 mb-4">
                {TERMS_CONTENT.services.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700">{TERMS_CONTENT.services.footer}</p>
            </section>

            {/* Section 3: Responsibilities */}
            <section id="responsibilities" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.responsibilities.title}</h2>
              <p className="text-gray-700 mb-4">{TERMS_CONTENT.responsibilities.text}</p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                {TERMS_CONTENT.responsibilities.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 4: Payment */}
            <section id="payment" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.payment.title}</h2>
              {TERMS_CONTENT.payment.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* Section 5: SLA */}
            <section id="sla" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.sla.title}</h2>
              {TERMS_CONTENT.sla.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* Section 6: Intellectual Property */}
            <section id="intellectual" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.intellectual.title}</h2>
              {TERMS_CONTENT.intellectual.paragraphs.map((para, idx) => (
                <p key={idx} className={`text-gray-700 ${idx < TERMS_CONTENT.intellectual.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {para}
                </p>
              ))}
            </section>

            {/* Section 7: Liability */}
            <section id="liability" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.liability.title}</h2>
              {TERMS_CONTENT.liability.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* Section 8: Termination */}
            <section id="termination" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.termination.title}</h2>
              {TERMS_CONTENT.termination.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* Section 9: Confidentiality */}
            <section id="confidentiality" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.confidentiality.title}</h2>
              {TERMS_CONTENT.confidentiality.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* Section 10: Governing Law */}
            <section id="governing" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.governing.title}</h2>
              {TERMS_CONTENT.governing.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </section>

            {/* Section 11: Contact */}
            <section id="contact" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{TERMS_CONTENT.contact.title}</h2>
              <p className="text-gray-700 mb-4">{TERMS_CONTENT.contact.text}</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
                <p className="font-semibold text-gray-900">{TERMS_CONTENT.contact.details.company}</p>
                <p className="text-gray-700">{TERMS_CONTENT.contact.details.address}</p>
                <p className="text-gray-700">Email: {TERMS_CONTENT.contact.details.email}</p>
                <p className="text-gray-700">Phone: {TERMS_CONTENT.contact.details.phone}</p>
                <p className="text-gray-700">Website: {TERMS_CONTENT.contact.details.website}</p>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-600 italic">
                {TERMS_FOOTER}
              </p>
            </div>

          </main>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 border-t border-slate-200 py-12 mt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Have questions about these terms?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
            Reach out to our team and we&apos;ll help clarify anything about our terms of service.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
