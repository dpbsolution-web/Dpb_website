import React from "react";
import Link from "next/link";
import { Shield, FileText, Scale, Lock } from "lucide-react";

export default function PoliciesPage() {
  const policies = [
    {
      title: "Privacy Policy",
      description: "Learn how we collect, use, and protect your personal information and data privacy rights.",
      icon: Shield,
      href: "/privacy",
      updated: "November 7, 2025",
    },
    {
      title: "Terms and Conditions",
      description: "Review our terms of service for network construction subcontracting and telecommunications services.",
      icon: FileText,
      href: "/terms",
      updated: "November 7, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-10 w-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Policies</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Review our policies to understand how we protect your data, maintain transparency, and ensure compliance with industry standards.
            </p>
          </div>
        </div>
      </div>

      {/* Policies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {policies.map((policy) => (
            <Link
              key={policy.href}
              href={policy.href}
              className="group bg-card border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <policy.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {policy.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {policy.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last updated: {policy.updated}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Privacy Matters</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At DPB Solution Pvt. Ltd., we are committed to maintaining the highest standards of data protection and transparency. Our policies are regularly updated to reflect current regulations and best practices in the telecommunications and IT infrastructure industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions or concerns about our policies, please don&#39;t hesitate to contact us at{" "}
                  <a href="mailto:info@dpbsolution.com" className="text-primary hover:underline">
                    info@dpbsolution.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
