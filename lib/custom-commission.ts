import { sendDiscordWebhook } from "./webhook-service"

export async function handleCommissionRequest(commissionData: {
  need: string
  email: string
  language: string
  details: string
  deadline: string
}) {
  try {
    await sendDiscordWebhook(commissionData)

    // Here you might want to save the commission data to your database
    // For example: await saveCommissionToDatabase(commissionData);

    console.log("Commission request processed and sent to Discord")
  } catch (error) {
    console.error("Error processing commission request:", error)
    throw error
  }
}

