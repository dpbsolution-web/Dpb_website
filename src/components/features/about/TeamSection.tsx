"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, UserRound, Clock, Briefcase, RotateCcw } from "lucide-react";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { TEAM_MEMBERS } from "@/constants/team";
import { SectionHeading } from "@/components/common/SectionHeading";

export function TeamSection() {
  const teamMembers = TEAM_MEMBERS.filter((member) => member.active !== false);
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Leadership Team"
          subtitle="The visionaries and experts driving our mission forward"
        />

        {teamMembers.length === 0 ? (
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {teamMembers.map((member, index) => {
              const isFlipped = flippedId === member.id;

              return (
                <motion.div
                  key={member.id || index}
                  variants={scaleIn}
                  className="flip-card h-72 sm:h-80"
                  onClick={() => handleToggle(member.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${member.name} - ${isFlipped ? "showing details" : "click to see details"}`}
                  onKeyDown={(e) => e.key === "Enter" && handleToggle(member.id)}
                >
                  <div
                    className="flip-card-inner"
                    style={{ transform: isFlipped ? "rotateY(180deg)" : undefined }}
                  >
                    {/* FRONT FACE */}
                    <div className="flip-card-front bg-white shadow-lg relative">
                      {/* Cover band */}
                      <div className="h-24 bg-linear-to-br from-blue-600 to-indigo-600" />

                      <div className="px-6 pb-6 -mt-12 flex flex-col items-center">
                        {/* Avatar */}
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden relative ring-4 ring-white shadow-md mb-4">
                          {member.image && member.image !== "/images/team/placeholder.jpg" ? (
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

                        <h3 className="text-lg font-semibold text-gray-900 text-center">
                          {member.name}
                        </h3>
                        <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          {member.role}
                        </span>

                      </div>

                      {/* Mobile tap hint — hidden on desktop (hover devices) */}
                      <div className="absolute bottom-3 right-3 md:hidden">
                        <RotateCcw className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>

                    {/* BACK FACE */}
                    <div className="flip-card-back bg-linear-to-br from-blue-700 to-indigo-800 flex flex-col items-center justify-center px-6 py-8 text-center shadow-lg relative">
                      {/* Role icon */}
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        <Briefcase className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>

                      <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white mb-4">
                        {member.role}
                      </span>

                      <p className="text-blue-100 text-sm leading-relaxed mb-5">
                        {member.description}
                      </p>

                      {/* Experience badge */}
                      <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5">
                        <Clock className="h-3.5 w-3.5 text-blue-200" />
                        <span className="text-xs font-medium text-blue-100">
                          {member.yearsExperience}
                        </span>
                      </div>

                      {/* Mobile tap-to-close hint */}
                      <div className="absolute bottom-3 right-3 md:hidden">
                        <RotateCcw className="h-4 w-4 text-white/30" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
