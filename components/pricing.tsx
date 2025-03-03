"use client"

import { useState, useEffect } from "react"
import { Diamond } from "lucide-react"
import type { PricingPlan } from "@/lib/db"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const [plans, setPlans] = useState<PricingPlan[]>([])

  useEffect(() => {
    async function fetchPricingPlans() {
      try {
        const response = await fetch("/api/pricing")
        if (!response.ok) {
          throw new Error("Failed to fetch pricing plans")
        }
        const data = await response.json()
        setPlans(data)
      } catch (error) {
        console.error("Error fetching pricing plans:", error)
      }
    }

    fetchPricingPlans()
  }, [])

  const handleJoinNow = (planName: string) => {
    console.log(`Joining ${planName} plan`)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-32 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="section-title mx-auto">Commission Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          💻 Custom software, automation, AI, system solutions and web development—built to your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative group rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-px overflow-hidden
              ${plan.name === "Enterprise" ? "from-amber-900/20" : ""}
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative rounded-2xl bg-black p-8 h-full flex flex-col">
              <div className="text-center mb-8">
                <div
                  className={`inline-block p-3 rounded-full mb-4 
                  ${plan.name === "Enterprise" ? "bg-amber-950/50" : "bg-zinc-900"}
                `}
                >
                  <Diamond className={`w-6 h-6 ${plan.name === "Enterprise" ? "text-amber-500" : "text-white"}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`text-lg ${plan.name === "Enterprise" ? "text-amber-500" : "text-white"}`}>→</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <div className="text-center">
                  <div
                    className={`uppercase text-sm mb-2 font-medium
                    ${plan.name === "Enterprise" ? "text-amber-500" : "text-zinc-400"}
                  `}
                  >
                    {plan.popular ? "MOST POPULAR" : `BECOME A ${plan.name.toUpperCase()} MEMBER`}
                  </div>
                  <div className="text-3xl font-bold mb-4">{plan.price}</div>
                  <Button
                    onClick={() => (window.location.href = "/custom-commission")}
                    className={`w-full ${
                      plan.name === "Enterprise"
                        ? "bg-amber-500 text-black hover:bg-amber-600"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    Custom Commission
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

