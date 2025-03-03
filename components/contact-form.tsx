"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [discordUsername, setDiscordUsername] = useState("")
  const [discordId, setDiscordId] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ discordUsername, discordId, email, message }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      setStatus("success")
      setDiscordUsername("")
      setDiscordId("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-300">
          Discord Username
        </label>
        <input
          type="text"
          id="discordUsername"
          value={discordUsername}
          onChange={(e) => setDiscordUsername(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g. username#1234"
        />
      </div>
      <div>
        <label htmlFor="discordId" className="block text-sm font-medium text-gray-300">
          Discord ID
        </label>
        <input
          type="text"
          id="discordId"
          value={discordId}
          onChange={(e) => setDiscordId(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g. 123456789012345678"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <p className="text-green-500">Thank you for your message. We'll get back to you soon!</p>
      )}
      {status === "error" && <p className="text-red-500">An error occurred. Please try again later.</p>}
    </form>
  )
}

