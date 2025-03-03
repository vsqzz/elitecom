import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { name, email, company, projectType, budget, description } = await req.json()

    if (!name || !email || !projectType || !budget || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newInquiry = db.addProjectInquiry({ name, email, company, projectType, budget, description })
    return NextResponse.json(newInquiry, { status: 201 })
  } catch (error) {
    console.error("Error in project inquiry submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

