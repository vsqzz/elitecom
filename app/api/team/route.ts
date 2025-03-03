import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const teamMembers = db.getTeamMembers()
    return NextResponse.json(teamMembers)
  } catch (error) {
    console.error("Error fetching team members:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

