"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "services", "about", "testimonials", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled ? "bg-white/90 py-3 shadow-lg backdrop-blur-md" : "bg-transparent py-6",
      )}
    >
      <div className="container flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "font-display text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-steel-900" : "text-white",
            )}
          >
            Dynamic Star Construction
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {["home", "services", "about", "testimonials", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={cn(
                "relative font-medium transition-colors duration-300 hover:text-lime-500",
                isScrolled ? "text-steel-800" : "text-white",
                activeSection === section && "text-lime-500",
              )}
            >
              <span className="capitalize">{section}</span>
              {activeSection === section && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-lime-500" />}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contact">
            <Button
              className={cn(
                "glass-button transition-all duration-300",
                isScrolled
                  ? "bg-gradient-to-r from-lime-500 to-lime-400 text-white"
                  : "bg-white/20 text-white backdrop-blur-md",
              )}
            >
              Get a Free Estimate
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className={isScrolled ? "text-steel-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-steel-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-white px-4 py-6 shadow-lg backdrop-blur-md md:hidden">
          <nav className="flex flex-col space-y-5">
            {["home", "services", "about", "testimonials", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={cn(
                  "font-medium text-steel-800 transition-colors hover:text-lime-500",
                  activeSection === section && "text-lime-500",
                )}
                onClick={closeMenu}
              >
                <span className="capitalize">{section}</span>
              </Link>
            ))}
            <Link href="#contact">
              <Button className="glass-button mt-2 w-full" onClick={closeMenu}>Get a Free Estimate</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
