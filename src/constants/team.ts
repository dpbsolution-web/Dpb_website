export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  order: number;
  active: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Supriya Pathak",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years of experience in telecommunications infrastructure. Drives strategic growth and innovation.",
    image: "/images/team/placeholder.jpg",
    order: 1,
    active: true
  },
  {
    id: "2",
    name: "Sushant Shekhar Pathak",
    role: "CTO",
    description: "Technology expert specializing in network architecture and telecom solutions. Leads our technical innovation initiatives.",
    image: "/images/team/placeholder.jpg",
    order: 2,
    active: true
  },
  {
    id: "3",
    name: "Balachandra Tiwari",
    role: "CFO",
    description: "Financial strategist ensuring sustainable growth and operational excellence. Manages company finances and investments.",
    image: "/images/team/placeholder.jpg",
    order: 3,
    active: true
  },
  {
    id: "4",
    name: "Sohan Kumar Thakur",
    role: "VP of Operations",
    description: "Operations expert overseeing project execution and client delivery. Ensures quality and timely completion of projects.",
    image: "/images/team/placeholder.jpg",
    order: 4,
    active: true
  }
];
