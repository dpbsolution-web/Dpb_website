import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/config/site";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "OFC Solutions", href: "/services" },
      { label: "Cloud Services", href: "/services" },
      { label: "VoIP Communications", href: "/services" },
      { label: "Cybersecurity", href: "/services" },
      { label: "Managed IT", href: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Healthcare", href: "/solutions" },
      { label: "Education", href: "/solutions" },
      { label: "Finance", href: "/solutions" },
      { label: "Retail", href: "/solutions" },
      { label: "Manufacturing", href: "/solutions" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Request a Quote", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: companyInfo.social.linkedin, Icon: Linkedin },
  { label: "Twitter", href: companyInfo.social.twitter, Icon: Twitter },
  { label: "Facebook", href: companyInfo.social.facebook, Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt={`${companyInfo.name} Logo`}
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
              <span className="text-lg font-bold text-white">{companyInfo.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mb-6">
              {companyInfo.description}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                {companyInfo.contact.address}
              </li>
            </ul>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
          <span className="text-sm text-gray-400">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {companyInfo.name}. All rights reserved.
          </span>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
