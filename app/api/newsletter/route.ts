import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const newSubscriber = db.addNewsletterSubscriber(email)
    return NextResponse.json(newSubscriber, { status: 201 })
  } catch (error) {
    console.error("Error in newsletter signup:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

