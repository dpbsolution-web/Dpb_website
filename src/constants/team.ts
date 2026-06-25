export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  yearsExperience: string;
  order: number;
  active: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Supriya Pathak",
    role: "CEO & Founder",
    description: "Visionary leader in telecommunications infrastructure. Drives strategic growth and innovation.",
    image: "/images/team/placeholder.jpg",
    yearsExperience: "15+ Years Experience",
    order: 1,
    active: true
  },
  {
    id: "2",
    name: "Sushant Shekhar Pathak",
    role: "CTO",
    description: "Technology expert in network architecture and telecom solutions. Leads our technical innovation initiatives.",
    image: "/images/team/placeholder.jpg",
    yearsExperience: "12+ Years Experience",
    order: 2,
    active: true
  },
  {
    id: "3",
    name: "Balachandra Tiwari",
    role: "CFO",
    description: "Financial strategist ensuring sustainable growth and operational excellence across all business units.",
    image: "/images/team/placeholder.jpg",
    yearsExperience: "10+ Years Experience",
    order: 3,
    active: true
  },
  {
    id: "4",
    name: "Sohan Kumar Thakur",
    role: "VP of Operations",
    description: "Operations expert overseeing project execution and client delivery with a focus on quality outcomes.",
    image: "/images/team/placeholder.jpg",
    yearsExperience: "8+ Years Experience",
    order: 4,
    active: true
  }
];
