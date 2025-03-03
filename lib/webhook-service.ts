interface CommissionData {
  need: string
  email: string
  language: string
  details: string
  deadline: string
}

export async function sendDiscordWebhook(commissionData: CommissionData): Promise<void> {
  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1345857775305101543/qOJcWTkhGbNkdrjZ22BB_I-0SwU_sWSi3diFGq8RG2laEXTZZUr3Zjwor8TkP17Kn6L3"

  const embed = {
    title: "📝 Custom Commission Request",
    color: 0x2b6eff, // Light blue color
    fields: [
      {
        name: "🎯 Need",
        value: commissionData.need,
      },
      {
        name: "📧 Email",
        value: commissionData.email,
      },
      {
        name: "💻 Programming Language",
        value: commissionData.language,
      },
      {
        name: "⏰ Deadline",
        value: commissionData.deadline,
      },
      {
        name: "📋 Details",
        value: commissionData.details,
      },
    ],
    footer: {
      text:
        "EliteComm Commission System • " +
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
    },
    timestamp: new Date().toISOString(),
  }

  const payload = {
    content: "@here New custom commission request!",
    embeds: [embed],
  }

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.statusText}`)
    }

    console.log("Discord webhook sent successfully")
  } catch (error) {
    console.error("Error sending Discord webhook:", error)
    throw error
  }
}

