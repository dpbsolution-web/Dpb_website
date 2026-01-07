import { Briefcase, Radio, Network } from "lucide-react";

// Email configuration
export const CAREERS_CONFIG = {
  applicationEmail: "info@dpbsolution.com",
  googleFormId: "", // Add your Google Form ID here or leave empty to use built-in form
  hasOpenings: true, // Set to false to hide all positions and show "no openings" message
};

// Job positions data
export const POSITIONS = [
  {
    title: "ISP Enggs for PAN India",
    department: "Network Engineering",
    location: "PAN India",
    type: "Full-time",
    salary: "Competitive",
    icon: Network,
    description:
      "Join our network engineering team to design, deploy, and maintain Internet Service Provider infrastructure across India. Work with cutting-edge telecommunications technology to deliver reliable connectivity solutions.",
    requirements: [
      "Experience in ISP operations and network engineering",
      "Graduate/Diploma (ELE/ ECE/ IT/Telecom)",
      "Strong understanding of network protocols and ISP operations",
      "Experience with network configuration and troubleshooting",
      "Willing to work across PAN India locations",
    ],
  },
  {
    title: "OSP/OFC Enggs for PAN India",
    department: "Field Operations",
    location: "PAN India",
    type: "Full-time",
    salary: "Competitive",
    icon: Radio,
    description:
      "Be part of our field operations team responsible for Outside Plant (OSP) and Optical Fiber Cable (OFC) network installation, maintenance, and optimization across India.",
    requirements: [
      "Experience in OSP/OFC deployment and maintenance",
      "Graduate/Diploma (ELE/ ECE/ IT/Telecom)",
      "Knowledge of fiber optic cable installation and splicing",
      "Understanding of FTTH/FTTX deployment",
      "Willing to work across PAN India locations",
    ],
  },
  {
    title: "Riggers for Bihar, Jharkhand and Odisha",
    department: "Field Operations",
    location: "Bihar, Jharkhand and Odisha",
    type: "Full-time",
    salary: "Competitive",
    icon: Briefcase,
    description:
      "Join our rigging team for telecom tower and infrastructure installation and maintenance across Bihar, Jharkhand and Odisha regions.",
    requirements: [
      "Experience in rigging and tower climbing",
      "Knowledge of safety procedures and protocols",
      "Physical fitness and ability to work at heights",
      "Willingness to work in field conditions",
      "Local candidate from Bihar, Jharkhand or Odisha preferred",
    ],
  },
];

// Culture values data
export const CULTURE_VALUES = [
  {
    title: "Innovation First",
    description:
      "We encourage creative thinking and provide the freedom to explore new technologies and methodologies that can benefit our clients and team.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We believe that great work comes from well-rested, happy people. Flexible hours and remote work options help you maintain a healthy balance.",
  },
  {
    title: "Continuous Learning",
    description:
      "Stay ahead of the curve with our learning and development programs, conference attendance, and internal knowledge sharing sessions.",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "We're committed to building a diverse team where everyone feels valued, respected, and empowered to contribute their unique perspectives.",
  },
];

// Company stats
export const COMPANY_STATS = [
  { value: "50+", label: "Team Members" },
  { value: "25+", label: "Countries Represented" },
  { value: "4.8/5", label: "Employee Satisfaction" },
];

// Hiring process steps
export const HIRING_PROCESS = [
  {
    step: 1,
    title: "Application",
    description:
      "Submit your application with your resume and cover letter through our portal.",
  },
  {
    step: 2,
    title: "Screening",
    description:
      "Initial phone or video screening with our HR team to discuss your background.",
  },
  {
    step: 3,
    title: "Technical Interview",
    description:
      "Technical assessment and interview with team members relevant to the role.",
  },
  {
    step: 4,
    title: "Final Interview",
    description:
      "Final interview with leadership team and culture fit assessment.",
  },
];
