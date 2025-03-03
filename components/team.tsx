"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Twitter } from "lucide-react"
import type { TeamMember } from "@/lib/db"

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch("/api/team")
        if (!response.ok) {
          throw new Error("Failed to fetch team members")
        }
        const data = await response.json()
        setTeamMembers(data)
      } catch (error) {
        console.error("Error fetching team members:", error)
      }
    }

    fetchTeamMembers()
  }, [])

  return (
    <section id="team" className="py-20 md:py-32 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="section-title mx-auto">Meet Our Team</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our talented programmers bring years of experience and passion to every project.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="group">
            <div className="white-stroke rounded-lg overflow-hidden mb-6 card-hover">
              <div className="relative h-[300px]">
                {member.image.endsWith(".gif") ? (
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-500 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

