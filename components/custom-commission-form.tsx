"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
  "Go",
  "Rust",
  "TypeScript",
  "Kotlin",
  "Lua",
  "Other",
]

const deadlineOptions = ["1 week", "2 weeks", "1 month", "2 months", "3 months", "6 months", "Flexible"]

export default function CustomCommissionForm() {
  const [formData, setFormData] = useState({
    need: "",
    email: "",
    language: "",
    details: "",
    deadline: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/custom-commission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to submit custom commission")
      }

      setStatus("success")
      setFormData({ need: "", email: "", language: "", details: "", deadline: "" })
    } catch (error) {
      console.error("Error submitting custom commission:", error)
      setStatus("error")
      // Show the error message from the server if available
      const errorMessage = error instanceof Error ? error.message : "An error occurred. Please try again later."
      setErrorMessage(errorMessage)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="need" className="block text-sm font-medium text-gray-300">
          What do you need?
        </label>
        <input
          type="text"
          id="need"
          name="need"
          value={formData.need}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="language" className="block text-sm font-medium text-gray-300">
          In what programming language?
        </label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a language</option>
          {programmingLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-300">
          Details about the commission
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-300">
          Deadline of the commission
        </label>
        <select
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a deadline</option>
          {deadlineOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Submitting..." : "Submit Custom Commission"}
      </Button>
      {status === "success" && (
        <p className="text-green-500">
          Thank you for your custom commission request. Our team has been notified and will review your request shortly.
        </p>
      )}
      {status === "error" && <p className="text-red-500">{errorMessage}</p>}
    </form>
  )
}

