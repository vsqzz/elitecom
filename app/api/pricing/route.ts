import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const pricingPlans = db.getPricingPlans()
    return NextResponse.json(pricingPlans)
  } catch (error) {
    console.error("Error fetching pricing plans:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

