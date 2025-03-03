"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
          We Build <span className="text-primary-DEFAULT">Digital Experiences</span> That Matter
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Transforming ideas into exceptional digital solutions
        </p>
        <div className="space-x-4">
          <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.4s" }} onClick={scrollToContact}>
            Start Your Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="animate-slide-up"
            style={{ animationDelay: "0.5s" }}
            onClick={() => (window.location.href = "/custom-commission")}
          >
            Custom Commission
          </Button>
        </div>
      </div>
    </section>
  )
}

