"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const typedTexts = ["Data Science Enthusiast", "Machine Learning Enthusiast", "AI Enthusiast"]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const typeEffect = () => {
      const currentText = typedTexts[textIndex]

      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        setTypedText(currentText.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % typedTexts.length)
      }
    }

    const timeout = setTimeout(typeEffect, isDeleting ? 100 : 200)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, typedTexts, isMounted])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Show loading state on server and during hydration
  if (!isMounted) {
    return (
      <section id="home" className="min-h-screen flex items-center bg-gray-900 text-gray-100 pt-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
                Hi, I'm <span className="text-blue-500">Narendra Dzulqarnain</span>
              </h1>
              <h2 className="text-xl md:text-3xl font-light mb-6 text-gray-300">
                I'm a <span className="text-blue-400 font-semibold">Data Scientist</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-400 leading-relaxed">
                Welcome to my portfolio website. I'm passionate about creating data-driven solutions and exploring the world of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="btn btn-primary px-8 py-3 text-lg">
                  Contact Me
                </button>
                <button className="btn btn-secondary px-8 py-3 text-lg">
                  View My Work
                </button>
              </div>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1 transform">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1 transform">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1 transform">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1 transform">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Profile Image" 
                  width={400} 
                  height={400} 
                  className="rounded-full shadow-2xl border-4 border-blue-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 text-gray-100 pt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
              Hi, I'm <span className="text-blue-500">Narendra Dzulqarnain</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-light mb-6 text-gray-300">
              I'm a <span className="text-blue-400 font-semibold">{typedText}</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400 leading-relaxed">
              Welcome to my portfolio website. I'm passionate about creating data-driven solutions and exploring the world of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                className="btn btn-primary px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
              <button 
                className="btn btn-secondary px-8 py-3 text-lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/narendradzulqarnain" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/narendra-dzulqarnain-b50ba522a/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1 transform">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
              
              <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/30">
                <Image 
                  src="/images/foto_cropped_blur_bg.jpg" 
                  alt="Narendra Dzulqarnain - Data Scientist" 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}