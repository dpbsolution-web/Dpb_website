import { 
  Radio, 
  Wifi, 
  Satellite, 
  Shield, 
  Network,
  Router,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export const siteContent = {
  // Company Information
  company: {
    name: "DPB Solution",
    tagline: "Connecting the Future with Advanced Telecom",
    description: "We provide comprehensive telecom and Civil infrastructure solutions that connect businesses, enable digital transformation, and drive operational excellence across industries.",
    founded: "2019",
    email: "info@dpbsolution.com",
    phone: "+1 (800) TELECOM",
    address: {
      street: "500 Network Plaza",
      city: "Communication City, CA 95000"
    }
  },

  // Hero Section
  hero: {
    badge: "🚀 Leading Telecommunications Provider",
    title: {
      primary: "Connecting the Future",
      secondary: "with Advanced Telecom"
    },
    description: "Experience next-generation telecommunications with 5G networks, IoT solutions, and seamless global connectivity that powers your digital transformation.",
    buttons: {
      primary: "Get Connected Today",
      secondary: "Explore Our Network"
    },
    features: [
      {
        icon: Radio,
        title: "5G Networks",
        description: "Ultra-fast 5G connectivity for lightning-speed data transmission."
      },
      {
        icon: Wifi,
        title: "IoT Solutions", 
        description: "Smart device connectivity for the Internet of Things ecosystem."
      },
      {
        icon: Satellite,
        title: "Satellite Comm",
        description: "Global satellite communication for remote and maritime connectivity."
      },
      {
        icon: Network,
        title: "Network Infrastructure",
        description: "Robust network infrastructure solutions for enterprise needs."
      }
    ]
  },

  // Statistics
  stats: [
    { number: "1M+", label: "Connected Devices" },
    { number: "99.9%", label: "Network Uptime" },
    { number: "25+", label: "Countries Served" },
    { number: "16", label: "Years Experience" }
  ],

  // Services
  services: {
    title: "Our Services",
    description: "Comprehensive telecom services designed for the modern connected world",
    items: [
      {
        icon: Radio,
        title: "5G Network Solutions",
        description: "Ultra-fast 5G networks with edge computing integration for next-gen connectivity.",
        features: ["5G Base Stations", "Network Slicing", "Edge Computing", "Ultra-low Latency"]
      },
      {
        icon: Satellite,
        title: "Satellite Communications",
        description: "Global satellite connectivity for remote areas, maritime, and emergency communications.",
        features: ["VSAT Networks", "Maritime Comm", "Emergency Systems", "Global Coverage"]
      },
      {
        icon: Wifi,
        title: "IoT Connectivity",
        description: "Comprehensive IoT solutions for smart cities, industries, and connected devices.",
        features: ["IoT Platforms", "LPWAN Networks", "Device Management", "Real-time Analytics"]
      },
      {
        icon: Network,
        title: "Fiber Optic Networks",
        description: "High-speed fiber infrastructure for backbone and last-mile connectivity solutions.",
        features: ["Fiber Design", "FTTH Solutions", "Network Testing", "Capacity Planning"]
      },
      {
        icon: Shield,
        title: "Network Security",
        description: "Advanced cybersecurity solutions designed for telecommunications infrastructure.",
        features: ["Telecom Firewalls", "DDoS Protection", "Intrusion Detection", "Compliance"]
      },
      {
        icon: Router,
        title: "Enterprise Networks",
        description: "Private networks, SD-WAN, and managed connectivity services for enterprises.",
        features: ["Private 5G", "SD-WAN", "MPLS Networks", "Managed Services"]
      }
    ]
  },

  // Technologies
  technologies: {
    title: "Cutting-Edge Technology Stack",
    description: "We leverage the latest telecommunications technologies to deliver superior performance and reliability",
    categories: [
      {
        id: "network",
        name: "Network",
        items: [
          {
            icon: Radio,
            name: "5G Core Network",
            description: "Next-generation 5G core network infrastructure for ultra-low latency and high throughput",
            performance: 95
          },
          {
            icon: Network,
            name: "Software-Defined WAN",
            description: "Flexible WAN architecture that improves performance and reduces costs",
            performance: 90
          },
          {
            icon: Router,
            name: "Network Function Virtualization",
            description: "Virtualized network services for increased flexibility and scalability",
            performance: 88
          }
        ]
      },
      {
        id: "cloud",
        name: "Cloud",
        items: [
          {
            icon: Network,
            name: "Multi-Access Edge Computing",
            description: "Bringing cloud capabilities to the network edge for reduced latency",
            performance: 92
          },
          {
            icon: Router,
            name: "Network Cloud Platform",
            description: "Cloud-native platform for telecommunications services",
            performance: 85
          },
          {
            icon: Wifi,
            name: "Hybrid Cloud Solutions",
            description: "Seamless integration between private and public cloud environments",
            performance: 87
          }
        ]
      },
      {
        id: "security",
        name: "Security",
        items: [
          {
            icon: Shield,
            name: "Zero Trust Security",
            description: "Comprehensive security framework for modern telecommunications networks",
            performance: 94
          },
          {
            icon: Shield,
            name: "Network Security Orchestration",
            description: "Automated security policies and threat response across network infrastructure",
            performance: 91
          },
          {
            icon: Shield,
            name: "Identity & Access Management",
            description: "Secure identity management for network resources and services",
            performance: 89
          }
        ]
      },
      {
        id: "analytics",
        name: "Analytics",
        items: [
          {
            icon: Network,
            name: "Network Analytics Platform",
            description: "Real-time network performance monitoring and predictive analytics",
            performance: 93
          },
          {
            icon: Router,
            name: "AI-Powered Optimization",
            description: "Machine learning algorithms for network optimization and fault prediction",
            performance: 86
          },
          {
            icon: Wifi,
            name: "Service Quality Management",
            description: "Comprehensive QoS monitoring and service level management",
            performance: 88
          }
        ]
      }
    ]
  },

  // About Section
  about: {
    title: "About DPB Solution",
    description: "Founded in 2019, DPB Solution has been at the forefront of telecommunications innovation, connecting businesses and communities worldwide with cutting-edge network solutions and emerging technologies.",
    tabs: {
      mission: "To empower global connectivity through innovative telecommunications solutions that enable digital transformation and bridge the digital divide.",
      vision: "To be the world's most trusted telecommunications partner, driving the future of connected experiences through 5G, IoT, and satellite technologies.",
      values: "Innovation, reliability, security, and customer-centricity guide everything we do as we build the networks that power tomorrow's digital world."
    },
    team: [
      {
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        expertise: "5G Networks & IoT"
      },
      {
        name: "Michael Rodriguez",
        role: "VP of Network Engineering",
        expertise: "Satellite Communications"
      },
      {
        name: "Dr. Emily Watson",
        role: "Head of Innovation",
        expertise: "Network Security & AI"
      },
      {
        name: "James Thompson",
        role: "Director of Operations",
        expertise: "Fiber Infrastructure"
      }
    ]
  },

  // Client Reviews
  reviews: {
    title: "What Our Clients Say",
    description: "Trusted by enterprises and service providers worldwide — real feedback from our partners",
    items: [
      {
        name: "Aisha Rahman",
        company: "GreenGrid Energy",
        role: "CTO",
        rating: 5,
        quote: "DPB Solution delivered a carrier-grade private 5G solution that transformed our remote monitoring capabilities. Their team handled the integration and delivered ahead of schedule."
      },
      {
        name: "Carlos Mendes",
        company: "MaritimeLink",
        role: "Head of Operations",
        rating: 5,
        quote: "Their satellite communications platform gave us reliable coverage across fleets worldwide. Support and SLAs have been outstanding."
      },
      {
        name: "Elena Petrova",
        company: "SmartCity Labs",
        role: "Program Manager",
        rating: 4,
        quote: "The IoT platform from DPB Solution made our city pilot possible — excellent device management and analytics. A few minor UI tweaks were quickly implemented."
      },
      {
        name: "Michael O'Neill",
        company: "FinWave",
        role: "VP Engineering",
        rating: 5,
        quote: "We rely on their network security and managed services for our finance applications. Proven expertise and great communication."
      },
      {
        name: "Priya Kapoor",
        company: "HealthNet Global",
        role: "Director of IT",
        rating: 5,
        quote: "DPB Solution's fiber deployment team executed flawlessly. Our latency dropped dramatically and uptime improved across clinics."
      }
    ]
  },

  // FAQ
  faqs: {
    title: "Frequently Asked Questions",
    description: "Common questions about our telecommunications services",
    items: [
      {
        question: "What 5G services do you provide?",
        answer: "We offer complete 5G network solutions including base station deployment, network slicing, edge computing integration, and IoT connectivity platforms for enhanced mobile broadband and massive machine-type communications."
      },
      {
        question: "How do you ensure network security?",
        answer: "Our network security solutions include telecom-grade firewalls, DDoS protection, intrusion detection systems, and compliance management specifically designed for telecommunications infrastructure."
      },
      {
        question: "Do you provide satellite communication services?",
        answer: "Yes, we offer comprehensive satellite communication services including VSAT networks, maritime communications, emergency communication systems, and global coverage planning for remote connectivity needs."
      },
      {
        question: "What IoT solutions do you offer?",
        answer: "Our IoT solutions include device management platforms, LPWAN networks (LoRa, NB-IoT), real-time analytics, edge-to-cloud integration, and comprehensive IoT security protocols."
      }
    ]
  },

  // Contact
  contact: {
    title: "Get Connected Today",
    description: "Ready to transform your connectivity? Let's discuss your telecommunications needs",
    form: {
      title: "Request Consultation",
      description: "Get in touch with our telecom experts for a personalized solution",
      services: [
        { value: "5g", label: "5G Network Solutions" },
        { value: "satellite", label: "Satellite Communications" },
        { value: "iot", label: "IoT Connectivity" },
        { value: "fiber", label: "Fiber Optic Networks" },
        { value: "security", label: "Network Security" },
        { value: "enterprise", label: "Enterprise Networks" }
      ]
    },
    info: {
      title: "Contact Information",
      items: [
        {
          icon: Mail,
          title: "Email",
          value: "info@dpbsolution.com"
        },
        {
          icon: Phone,
          title: "Phone",
          value: "+1 (800) TELECOM"
        },
        {
          icon: MapPin,
          title: "Headquarters",
          value: "500 Network Plaza\nCommunication City, CA 95000"
        }
      ]
    }
  },

  // CTA Section
  cta: {
    title: "Ready to Transform Your Connectivity?",
    description: "Join thousands of satisfied customers who trust DPB Solution for their communications infrastructure",
    buttons: {
      primary: "Get Connected Today",
      secondary: "Explore Our Services"
    }
  }
};