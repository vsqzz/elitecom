import Navbar from "@/components/navbar"
import AboutUs from "@/components/about-us"
import Information from "@/components/information"
import Team from "@/components/team"
import WhyUs from "@/components/why-us"
import Pricing from "@/components/pricing"
import ContactForm from "@/components/contact-form"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4">
        <HeroSection />
        <AboutUs />
        <Information />
        <Team />
        <WhyUs />
        <Pricing />
        <section id="contact" className="py-20 md:py-32 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  )
}

