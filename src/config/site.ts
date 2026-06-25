import {
  Wifi,
  Network,
  Award,
  Target,
  Heart,
  Users,
  Radio,
} from "lucide-react";

// Company Information
export const companyInfo = {
  name: "DPB Solution",
  tagline: "Empowering Digital Transformation",
  description:
    "We provide comprehensive telecom and Civil infrastructure solutions that connect businesses, enable digital transformation, and drive operational excellence across industries.",
  founded: "2019",
  employees: "100+",
  clients: "80+",
  countries: "Multiple Cities in India",
  contact: {
    email: "info@dpbsolution.com",
    phone: "+91 9973789207",
    address: "Patna Bihar, 800001, India",
    hours: "Mon-Fri 8:00 AM - 6:00 PM IST",
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
    id: "ofc-solutions",
    title: "OFC Solutions",
    shortDescription:
      "Complete Optical Fiber Cable solutions for high-speed connectivity and network infrastructure.",
    icon: Wifi,
    image: "/images/ai-generated-9143280_1280.jpg",
    features: [
      "OFC Deployment",
      "OFC Maintenance",
      "24/7 Network Monitoring",
      "99.99% Uptime SLA",
      "100% Project Delivery within SLA",
    ],
    pricing: "Starting from $299/month",
    popular: true,
  },
  {
    id: "manpower-outsourcing",
    title: "Manpower Outsourcing Services",
    shortDescription:
      "Skilled manpower solutions with comprehensive training and government compliance.",
    icon: Users,
    image: "/images/pexels-cottonbro-6804068.jpg",
    features: [
      "Provide Skilled Manpower",
      "Regular Training",
      "Skill Development Session",
      "Fulfill Govt. Compliances",
    ],
    pricing: "Custom Pricing",
    popular: true,
  },
  {
    id: "isp-mw-deployment",
    title: "ISP and MW Deployment and Maintenance",
    shortDescription:
      "Expert ISP and Microwave deployment services with comprehensive safety training.",
    icon: Radio,
    image: "/images/network-3396348.jpg",
    features: [
      "Skilled ISP Engineers with Team",
      "Rigger and Engineers for MW",
      "Offer Safety Training",
      "Organize Farm Tower Training Regularly",
    ],
    pricing: "Custom Pricing",
    popular: false,
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    shortDescription:
      "Robust network design, implementation, and management services.",
    icon: Network,
    image: "/images/cyber-3400789.jpg",
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
    question: "How long does a typical telecom project take?",
    answer:
      "Project timelines depend on scope and complexity. Smaller connectivity or communication setups may take a few weeks, while large-scale OFC network or enterprise deployments can require several months. We provide a detailed timeline after our initial assessment and consultation.",
  },
  {
    id: 2,
    question: "What telecom and IT services do you offer?",
    answer:
      "We deliver comprehensive telecommunications and IT solutions including OFC deployment and maintenance, ISP and Microwave deployment, manpower outsourcing, network infrastructure design, and 24/7 network monitoring — all tailored to your business requirements.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer continuous support and maintenance to ensure your network remains reliable and secure. Our services include proactive monitoring, troubleshooting, regular upgrades, and dedicated technical assistance with a 99.99% uptime SLA.",
  },
  {
    id: 4,
    question: "Which industries and clients do you serve?",
    answer:
      "We serve a wide range of clients including major telecom operators (VIL, Airtel, Jio), government bodies, IT companies, manufacturing units, and corporate enterprises — delivering robust communication and connectivity solutions across Bihar and multiple cities in India.",
  },
  {
    id: 5,
    question: "Are your engineers certified and trained?",
    answer:
      "Absolutely. All our engineers undergo regular skill development sessions, safety training, and farm tower training. We maintain full government compliance and provide riggers and ISP engineers with the certifications required for high-quality, safe project execution.",
  },
  {
    id: 6,
    question: "How do I get a quote for my project?",
    answer:
      "Simply fill out the contact form on this page or call us directly at +91 9973789207. Our team will get back to you within 24 hours to understand your requirements and provide a customised proposal.",
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
