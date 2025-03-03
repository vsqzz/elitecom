import { NextResponse } from "next/server"

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1345854455941304320/jJYecpIrFQZWYNbrJP1nHpRkj3O9Udkm4FwLNv45xQtPBBduD1dmJIpzSkwF3Tys2d-f"

if (!DISCORD_WEBHOOK_URL) {
  console.error("DISCORD_WEBHOOK_URL is not set in the environment variables.")
}

export async function POST(req: Request) {
  try {
    const { discordUsername, discordId, email, message } = await req.json()

    if (!discordUsername || !discordId || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const formattedTimestamp = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })

    const discordMessage = {
      content: "<@&1345878628457513070> New contact form submission!",
      embeds: [
        {
          title: "Contact Form Submission",
          fields: [
            { name: "Discord Username", value: discordUsername },
            { name: "Discord ID", value: discordId },
            { name: "Email", value: email },
            { name: "Message", value: message },
            { name: "Submitted At", value: formattedTimestamp },
          ],
          color: 3447003, // Blue color
          footer: {
            text: "Contact Form Submission",
          },
          timestamp: timestamp,
        },
      ],
    }

    const response = await fetch(DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!response.ok) {
      throw new Error("Failed to send message to Discord")
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

