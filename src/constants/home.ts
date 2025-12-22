import { Zap, Users, Award, Globe, CheckCircle } from "lucide-react";

// Home page hero section
export const HOME_HERO = {
  badge: {
    icon: Zap,
    text: "Leading Telecom Solutions Provider"
  },
  title: {
    prefix: "DPB",
    middle: "Your",
    highlight: "Solution.",
    suffix: "Transform Your Operations."
  },
  subtitle: "Empowering businesses with cutting-edge telecommunications infrastructure, reliable connectivity, and innovative communication solutions.",
  cta: {
    primary: {
      text: "Get Started Today",
      link: "/contact"
    },
    secondary: {
      text: "Explore Services",
      link: "/services"
    }
  }
};

// Home page statistics
export const HOME_STATS = [
  {
    value: "10+",
    label: "Happy Clients",
    icon: Users
  },
  {
    value: "100+",
    label: "Team Members",
    icon: Users
  },
  {
    value: "6+",
    label: "Years Experience",
    icon: Award
  },
  {
    value: "10+",
    label: "Cities in India",
    icon: Globe
  }
];

// Why choose us section
export const WHY_CHOOSE_US = {
  title: "Why Choose",
  highlight: "DPB Solution?",
  description: "We deliver exceptional telecommunications solutions backed by expertise, innovation, and unwavering commitment to your success.",
  features: [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "Over 6 years of experience in delivering enterprise-grade telecom solutions"
    },
    {
      icon: CheckCircle,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your operations never stop"
    },
    {
      icon: CheckCircle,
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business needs"
    },
    {
      icon: CheckCircle,
      title: "Security First",
      description: "Industry-leading security protocols to protect your data and communications"
    }
  ]
};

// Call-to-action sections
export const CTA_SECTIONS = {
  primary: {
    title: "Ready to Transform Your Business?",
    description: "Let's discuss how our telecommunications solutions can drive your success.",
    buttonText: "Schedule a Consultation",
    buttonLink: "/contact"
  },
  secondary: {
    title: "Explore Our Solutions",
    description: "Discover industry-specific solutions tailored to your needs.",
    buttonText: "View Solutions",
    buttonLink: "/solutions"
  }
};

// Features showcase
export const FEATURED_CAPABILITIES = [
  {
    title: "5G Network Infrastructure",
    description: "Next-generation network capabilities for ultra-fast connectivity",
    benefits: ["10x faster speeds", "Ultra-low latency", "Massive IoT support"]
  },
  {
    title: "Cloud Communications",
    description: "Scalable cloud-based communication platforms",
    benefits: ["Flexible deployment", "Cost-effective", "Global reach"]
  },
  {
    title: "Network Security",
    description: "Comprehensive security solutions for your infrastructure",
    benefits: ["Advanced threat protection", "Compliance ready", "24/7 monitoring"]
  },
  {
    title: "IoT Connectivity",
    description: "Reliable connectivity for Internet of Things devices",
    benefits: ["Multi-protocol support", "Edge computing", "Real-time analytics"]
  }
];

// Process overview
export const OUR_PROCESS = {
  title: "Our Proven Process",
  subtitle: "A systematic approach to delivering excellence",
  steps: [
    {
      number: 1,
      title: "Discover",
      description: "We analyze your current infrastructure and identify opportunities for improvement"
    },
    {
      number: 2,
      title: "Design",
      description: "Custom solution architecture tailored to your specific requirements"
    },
    {
      number: 3,
      title: "Deploy",
      description: "Professional implementation with minimal disruption to your operations"
    },
    {
      number: 4,
      title: "Deliver",
      description: "Ongoing support and optimization to ensure maximum value"
    }
  ]
};
