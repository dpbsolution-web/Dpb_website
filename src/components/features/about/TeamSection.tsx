"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";
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

// Skeleton component for team member cards
function TeamMemberSkeleton() {
  return (
    <Card className="h-full gap-0 py-0 overflow-hidden animate-pulse">
      <div className="h-28 bg-gray-200" />
      <div className="px-6 pb-6 -mt-12">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 ring-4 ring-white" />
        <div className="h-5 w-3/4 bg-gray-300 rounded mx-auto mb-2" />
        <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto mb-4" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-5/6 bg-gray-200 rounded mx-auto" />
        </div>
      </div>
    </Card>
  );
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
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionaries and experts driving our mission forward
          </p>
        </motion.div>

        {loading ? (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="status"
            aria-label="Loading team members"
          >
            {[1, 2, 3, 4].map((i) => (
              <TeamMemberSkeleton key={i} />
            ))}
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="mx-auto max-w-md rounded-2xl border border-dashed border-gray-300 bg-white px-8 py-14 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users className="h-7 w-7" />
            </span>
            <p className="text-lg font-semibold text-gray-900">Team profiles coming soon</p>
            <p className="mt-1 text-sm text-gray-500">
              We&apos;re putting the finishing touches on our leadership profiles. Check back shortly.
            </p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={member.id || index} variants={scaleIn} whileHover={{ y: -6 }}>
                <Card className="h-full gap-0 py-0 overflow-hidden text-center shadow-lg hover:shadow-xl transition-shadow">
                  {/* Cover band */}
                  <div className="h-24 bg-linear-to-br from-blue-600 to-indigo-600" />
                  <div className="px-6 pb-6 -mt-12">
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative ring-4 ring-white shadow-md">
                      {member.image && member.image !== '/images/team/placeholder.jpg' ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <UserRound className="h-12 w-12 text-blue-600" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {member.role}
                    </span>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
