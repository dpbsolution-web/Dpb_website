"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  order: number;
  active?: boolean;
}

export function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/api/admin/team', {
          cache: 'no-store'
        });
        const data = await response.json();
        // Filter only active team members
        const activeMembers: TeamMember[] = Array.isArray(data) ? data.filter((member: TeamMember) => member.active !== false) : [];
        setTeamMembers(activeMembers);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The visionaries and experts driving our mission forward
          </p>
        </motion.div>
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading team members...</p>
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No team members to display.</p>
          </div>
        ) : (
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={member.id || index} variants={scaleIn}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
                      {member.image && member.image !== '/images/team/placeholder.jpg' ? (
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Users className="h-12 w-12 text-blue-600" />
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
