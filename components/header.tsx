"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-gray-800/95 backdrop-blur-md shadow-lg border-b border-gray-600" 
        : "bg-gray-800/95 backdrop-blur-md"
    }`}>
      <div className="container mx-auto max-w-6xl px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-400">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className="hover:text-blue-300 transition-colors"
            >
              MyPortfolio
            </a>
          </div>
          
          <div 
            className="md:hidden text-2xl cursor-pointer text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>☰</span>
          </div>
          
          <ul className={`flex gap-8 md:static absolute top-full left-0 w-full md:w-auto 
            md:bg-transparent bg-gray-800 md:shadow-none shadow-lg md:p-0 p-8 md:flex-row flex-col
            transition-all duration-300 border-t border-gray-600 md:border-0 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
            }`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`font-medium transition-all duration-300 hover:text-blue-400 relative
                    ${activeSection === item.id ? "text-blue-400" : "text-gray-100"}
                    after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 
                    after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full
                    ${activeSection === item.id ? "after:w-full" : ""}
                  `}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}