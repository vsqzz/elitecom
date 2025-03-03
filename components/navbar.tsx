"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-40">
                <div className="absolute inset-0 flex items-center">
                  <span className="text-xl font-bold">EliteComm</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button onClick={() => (window.location.href = "/custom-commission")}>Custom Commission</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 rounded-md text-white hover:bg-white/10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            </nav>
            <Button
              onClick={() => {
                window.location.href = "/custom-commission"
                setIsMenuOpen(false)
              }}
              className="w-full"
            >
              Custom Commission
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks() {
  return (
    <nav className="flex items-center space-x-8">
      <Link href="#about" className="text-white/80 hover:text-white transition-colors">
        About
      </Link>
      <Link href="#team" className="text-white/80 hover:text-white transition-colors">
        Team
      </Link>
      <Link href="#why-us" className="text-white/80 hover:text-white transition-colors">
        Why Us
      </Link>
      <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">
        Pricing
      </Link>
    </nav>
  )
}

function MobileNavLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      <Link href="#about" className="text-white/80 hover:text-white transition-colors py-2" onClick={closeMenu}>
        About
      </Link>
      <Link href="#team" className="text-white/80 hover:text-white transition-colors py-2" onClick={closeMenu}>
        Team
      </Link>
      <Link href="#why-us" className="text-white/80 hover:text-white transition-colors py-2" onClick={closeMenu}>
        Why Us
      </Link>
      <Link href="#pricing" className="text-white/80 hover:text-white transition-colors py-2" onClick={closeMenu}>
        Pricing
      </Link>
    </>
  )
}

