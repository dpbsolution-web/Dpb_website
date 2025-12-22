import {
  Wifi,
  Shield,
  Cloud,
  Phone,
  Network,
  Server,
  Award,
  Target,
  Heart,
} from "lucide-react";

// Company Information
export const companyInfo = {
  name: "DPB Solution Pvt. Ltd.",
  tagline: "Empowering Digital Transformation",
  description:
    "We provide comprehensive telecom and IT infrastructure solutions that connect businesses, enable digital transformation, and drive operational excellence across industries.",
  founded: "2009",
  employees: "100+",
  clients: "80+",
  countries: "Multiple Cities in India",
  contact: {
    email: "info@dpbsolution.com",
    phone: "+91 8595189980",
    address: "Patna Bihar, 800001, India",
    hours: "Mon-Fri 8:00 AM - 6:00 PM PST",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/dpb-solution-369b58239",
    twitter: "https://x.com/DpbSolution",
    facebook: "https://www.facebook.com/profile.php?id=61583336047946",
  },
};

// Services Data
export const services = [
  {
    id: "internet-solutions",
    title: "Internet Solutions",
    shortDescription:
      "High-speed, reliable internet connectivity for businesses of all sizes.",
    icon: Wifi,
    features: [
      "Fiber Optic Networks",
      "Dedicated Internet Access",
      "Scalable Bandwidth",
      "24/7 Network Monitoring",
      "99.99% Uptime SLA",
    ],
    pricing: "Starting from $299/month",
    popular: true,
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Secure, scalable cloud infrastructure and migration services.",
    icon: Cloud,
    features: [
      "Cloud Migration",
      "Hybrid Cloud Solutions",
      "Data Backup & Recovery",
      "Cloud Security",
      "Multi-Cloud Management",
    ],
    pricing: "Starting from $199/month",
    popular: false,
  },
  {
    id: "voip-communications",
    title: "VoIP Communications",
    shortDescription:
      "Modern voice over IP solutions for seamless business communications.",
    icon: Phone,
    features: [
      "Unified Communications",
      "Video Conferencing",
      "Mobile Integration",
      "Call Analytics",
      "Auto Attendant",
    ],
    pricing: "Starting from $25/user/month",
    popular: false,
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    shortDescription:
      "Robust network design, implementation, and management services.",
    icon: Network,
    features: [
      "Network Design & Planning",
      "LAN/WAN Setup",
      "Wireless Solutions",
      "Network Optimization",
      "Performance Monitoring",
    ],
    pricing: "Custom Pricing",
    popular: false,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDescription:
      "Comprehensive security solutions to protect your digital assets.",
    icon: Shield,
    features: [
      "Threat Detection & Response",
      "Firewall Management",
      "Security Audits",
      "Employee Training",
      "Compliance Support",
    ],
    pricing: "Starting from $499/month",
    popular: true,
  },
  {
    id: "managed-services",
    title: "Managed IT Services",
    shortDescription:
      "Complete IT management and support for your business operations.",
    icon: Server,
    features: [
      "24/7 IT Support",
      "Proactive Monitoring",
      "System Maintenance",
      "Software Updates",
      "Help Desk Services",
    ],
    pricing: "Starting from $150/user/month",
    popular: false,
  },
];

// Team Members
export const teamMembers = [
  {
    id: 1,
    name: "David B. Peterson",
    role: "Chief Executive Officer",
    bio: "With over 20 years in telecommunications, David leads DPB Solution's vision for digital transformation.",
    image: "/images/team/david-peterson.jpg",
    linkedin: "#",
    email: "david@dpbsolution.com",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Sarah oversees our technical strategy and innovation initiatives, driving cutting-edge solutions.",
    image: "/images/team/sarah-chen.jpg",
    linkedin: "#",
    email: "sarah@dpbsolution.com",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    bio: "Michael leads our engineering teams in delivering robust, scalable infrastructure solutions.",
    image: "/images/team/michael-rodriguez.jpg",
    linkedin: "#",
    email: "michael@dpbsolution.com",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Head of Security",
    bio: "Emily ensures our security practices meet the highest industry standards and compliance requirements.",
    image: "/images/team/emily-watson.jpg",
    linkedin: "#",
    email: "emily@dpbsolution.com",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Project Manager",
    company: "VIL",
    role: "Network Operations",
    content:
      "DPB Solution transformed our telecommunications infrastructure completely. Their expertise in network deployment and maintenance has significantly improved our service reliability.",
    rating: 5,
  },
  {
    id: 2,
    name: "Technical Lead",
    company: "TCTSL",
    role: "Infrastructure Head",
    content:
      "Outstanding telecom solutions and support. DPB Solution's team has been instrumental in optimizing our network performance and reducing operational costs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Operations Director",
    company: "Aerdare",
    role: "Operations Manager",
    content:
      "Excellent implementation of our communication infrastructure. The professionalism and technical expertise of DPB Solution exceeded our expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "IT Manager",
    company: "Beetel",
    role: "Technology Head",
    content:
      "DPB Solution provided comprehensive telecom solutions that perfectly aligned with our business needs. Their 24/7 support ensures seamless operations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Project Director",
    company: "Sterling and Wilson",
    role: "Infrastructure Lead",
    content:
      "Working with DPB Solution has been a game-changer for our telecom infrastructure projects. Their technical knowledge and commitment to quality is exceptional.",
    rating: 5,
  },
  {
    id: 6,
    name: "CTO",
    company: "Beckhole Digital",
    role: "Chief Technology Officer",
    content:
      "DPB Solution's innovative approach to telecommunications has helped us stay ahead of the curve. Their solutions are reliable, scalable, and cost-effective.",
    rating: 5,
  },
  {
    id: 7,
    name: "Network Manager",
    company: "STL",
    role: "Network Operations Head",
    content:
      "The expertise and dedication shown by DPB Solution in implementing our network infrastructure was remarkable. They delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 8,
    name: "Operations Head",
    company: "Abhay Tele",
    role: "Operations Director",
    content:
      "DPB Solution has been our trusted partner for telecom solutions. Their prompt service and technical excellence have made a significant impact on our operations.",
    rating: 5,
  },
  {
    id: 9,
    name: "Department Head",
    company: "Bihar Government",
    role: "IT & Communications",
    content:
      "DPB Solution delivered robust telecommunications infrastructure for our government initiatives. Their commitment to excellence and timely delivery is commendable.",
    rating: 5,
  },
];

// Solutions by Industry
export const solutions = [
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description:
      "HIPAA-compliant IT infrastructure and communication systems for healthcare providers.",
    icon: Heart,
    features: [
      "HIPAA Compliance",
      "Secure Patient Data Management",
      "Telemedicine Infrastructure",
      "Electronic Health Records Integration",
    ],
    caseStudy: {
      client: "Regional Medical Center",
      challenge: "Needed secure, compliant IT infrastructure for 500+ staff",
      solution: "Implemented cloud-based EHR system with enhanced security",
      results: "50% improvement in data access speed, 100% HIPAA compliance",
    },
  },
  {
    id: "finance",
    title: "Financial Services",
    description:
      "Secure, high-performance solutions for financial institutions and fintech companies.",
    icon: Target,
    features: [
      "PCI DSS Compliance",
      "Real-time Transaction Processing",
      "Disaster Recovery Solutions",
      "Advanced Threat Protection",
    ],
    caseStudy: {
      client: "Community Bank Network",
      challenge: "Required secure cloud migration for banking operations",
      solution: "Hybrid cloud solution with enhanced security protocols",
      results: "99.99% uptime achieved, reduced operational costs by 35%",
    },
  },
  {
    id: "education",
    title: "Education Technology",
    description:
      "Scalable IT solutions for educational institutions and e-learning platforms.",
    icon: Award,
    features: [
      "Campus-wide WiFi Solutions",
      "Learning Management Systems",
      "Student Information Systems",
      "Distance Learning Infrastructure",
    ],
    caseStudy: {
      client: "State University System",
      challenge: "Needed robust infrastructure for 50,000+ students",
      solution: "Comprehensive network upgrade with cloud integration",
      results:
        "Improved connectivity for 100% of campus, 60% faster data access",
    },
  },
];

// Job Openings
export const jobOpenings = [
  {
    id: 1,
    title: "Senior Network Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead network infrastructure projects and mentor junior engineers in a fast-paced environment.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of network engineering experience",
      "Cisco and Juniper certifications preferred",
      "Experience with cloud networking (AWS, Azure)",
      "Strong problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "401(k) matching",
      "Professional development budget",
      "Flexible work arrangements",
    ],
  },
  {
    id: 2,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Monitor security threats, respond to incidents, and implement security best practices.",
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "3+ years of cybersecurity experience",
      "Security certifications (CISSP, CEH, etc.)",
      "Experience with SIEM tools",
      "Knowledge of threat intelligence",
    ],
    benefits: [
      "Remote work flexibility",
      "Comprehensive health benefits",
      "Professional certification support",
      "Career advancement opportunities",
      "Work-life balance",
    ],
  },
];

// FAQ Data
export const faqs = [
  {
    id: 1,
    question: "What types of businesses do you serve?",
    answer:
      "We serve businesses of all sizes, from small startups to large enterprises, across various industries including healthcare, finance, education, and manufacturing.",
  },
  {
    id: 2,
    question: "Do you offer 24/7 support?",
    answer:
      "Yes, we provide 24/7 technical support for all our managed services clients, ensuring your business operations run smoothly around the clock.",
  },
  {
    id: 3,
    question: "How quickly can you implement new services?",
    answer:
      "Implementation times vary by service complexity. Simple services like VoIP can be deployed within 1-2 weeks, while complex infrastructure projects may take 4-8 weeks.",
  },
  {
    id: 4,
    question: "Do you provide training for new systems?",
    answer:
      "Absolutely! We include comprehensive training as part of all our service implementations, ensuring your team can effectively use new systems.",
  },
];

// Navigation Items
export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];
