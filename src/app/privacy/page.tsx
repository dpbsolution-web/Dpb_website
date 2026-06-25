"use client";

import { useState } from "react";
import Link from "next/link";
import { PRIVACY_SECTIONS, PRIVACY_INTRO, PRIVACY_CONTENT, PRIVACY_ACKNOWLEDGMENT } from "@/constants/privacy";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Branded Hero Header */}
      <header className="bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="inline-block mb-3 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-blue-100 backdrop-blur-sm">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-blue-200 text-sm">Last updated: June 2025</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-12">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Contents
              </h2>
              <nav className="space-y-1">
                {PRIVACY_SECTIONS.map((section) => (
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
                {PRIVACY_INTRO.text}
              </p>
            </div>

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.introduction.title}</h2>
              {PRIVACY_CONTENT.introduction.paragraphs.map((para, idx) => (
                <p key={idx} className={`text-gray-700 ${idx < PRIVACY_CONTENT.introduction.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {para}
                </p>
              ))}
            </section>

            {/* Section 2: Information Collection */}
            <section id="information-collection" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.informationCollection.title}</h2>
              <div className="space-y-4">
                {PRIVACY_CONTENT.informationCollection.subsections.map((subsection, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{subsection.subtitle}</h3>
                    <p className="text-gray-700 mb-2">{subsection.text}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      {subsection.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Use of Information */}
            <section id="use-of-information" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.useOfInformation.title}</h2>
              <p className="text-gray-700 mb-4">{PRIVACY_CONTENT.useOfInformation.text}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {PRIVACY_CONTENT.useOfInformation.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 4: Data Sharing */}
            <section id="data-sharing" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.dataSharing.title}</h2>
              <p className="text-gray-700 mb-4">{PRIVACY_CONTENT.dataSharing.text}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {PRIVACY_CONTENT.dataSharing.list.map((item, idx) => (
                  <li key={idx}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
                ))}
              </ul>
            </section>

            {/* Section 5: Data Security */}
            <section id="data-security" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.dataSecurity.title}</h2>
              {PRIVACY_CONTENT.dataSecurity.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">{para}</p>
              ))}
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {PRIVACY_CONTENT.dataSecurity.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">{PRIVACY_CONTENT.dataSecurity.footer}</p>
            </section>

            {/* Section 6: Cookies */}
            <section id="cookies" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.cookies.title}</h2>
              <p className="text-gray-700 mb-4">{PRIVACY_CONTENT.cookies.text}</p>
              <div className="space-y-2 ml-4">
                {PRIVACY_CONTENT.cookies.types.map((type, idx) => (
                  <p key={idx} className="text-gray-700">
                    <strong>{type.name}:</strong> {type.description}
                  </p>
                ))}
              </div>
            </section>

            {/* Section 7: User Rights */}
            <section id="user-rights" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.userRights.title}</h2>
              <p className="text-gray-700 mb-4">{PRIVACY_CONTENT.userRights.text}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {PRIVACY_CONTENT.userRights.list.map((item, idx) => (
                  <li key={idx}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">{PRIVACY_CONTENT.userRights.footer}</p>
            </section>

            {/* Section 8: Data Retention */}
            <section id="data-retention" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.dataRetention.title}</h2>
              <p className="text-gray-700">{PRIVACY_CONTENT.dataRetention.text}</p>
            </section>

            {/* Section 9: Third-Party Services */}
            <section id="third-party" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.thirdParty.title}</h2>
              <p className="text-gray-700">{PRIVACY_CONTENT.thirdParty.text}</p>
            </section>

            {/* Section 10: Changes */}
            <section id="changes" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.changes.title}</h2>
              <p className="text-gray-700">{PRIVACY_CONTENT.changes.text}</p>
            </section>

            {/* Section 11: Contact */}
            <section id="contact" className="mb-12 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{PRIVACY_CONTENT.contact.title}</h2>
              <p className="text-gray-700 mb-4">{PRIVACY_CONTENT.contact.text}</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
                <p className="font-semibold text-gray-900">{PRIVACY_CONTENT.contact.details.company}</p>
                <p className="text-gray-700">{PRIVACY_CONTENT.contact.details.address}</p>
                <p className="text-gray-700">Email: {PRIVACY_CONTENT.contact.details.email}</p>
                <p className="text-gray-700">Phone: {PRIVACY_CONTENT.contact.details.phone}</p>
                <p className="text-gray-700">Website: {PRIVACY_CONTENT.contact.details.website}</p>
              </div>
            </section>

            {/* Acknowledgment */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-600 italic">
                {PRIVACY_ACKNOWLEDGMENT}
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 border-t border-blue-100 py-12 mt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Questions about our privacy practices?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
            Our team is happy to clarify how we handle your data. We respond within 24 hours.
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
