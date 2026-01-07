import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { companyInfo } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-1.5">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-white transition-colors">Solutions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-1.5">
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">OFC Solutions</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">VoIP Communications</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Managed IT</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-1.5">
              <li><Link href="/solutions" className="text-sm hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-white transition-colors">Education</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-white transition-colors">Finance</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-white transition-colors">Retail</Link></li>
              <li><Link href="/solutions" className="text-sm hover:text-white transition-colors">Manufacturing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-1.5">
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Center</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-1.5">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Get Started</h3>
            <ul className="space-y-1.5">
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Free Consultation</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">Learn More</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <div className="flex items-center space-x-2">
            <Image 
              src="/images/logo.jpeg" 
              alt={`${companyInfo.name} Logo`}
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="text-sm text-white font-['Inter']">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <Link 
                href={companyInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href={companyInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href={companyInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
