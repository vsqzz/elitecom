import { NextResponse } from "next/server"
import { handleCommissionRequest } from "@/lib/custom-commission"

export async function POST(req: Request) {
  try {
    const { need, email, language, details, deadline } = await req.json()

    if (!need || !email || !language || !details || !deadline) {
      return NextResponse.json(
        { error: "Missing required fields", details: "All fields are required" },
        { status: 400 },
      )
    }

    await handleCommissionRequest({
      need,
      email,
      language,
      details,
      deadline,
    })

    return NextResponse.json(
      { success: true, message: "Commission request received and sent to Discord" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in custom commission submission:", error)
    return NextResponse.json(
      {
        error: "Failed to process request",
        details: error instanceof Error ? error.message : "Unable to process commission request",
      },
      { status: 500 },
    )
  }
}

