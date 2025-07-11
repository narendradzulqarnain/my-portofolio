import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Portfolio</h2>
            <p className="text-gray-400 leading-relaxed">Data Science & AI enthusiast.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Quick Links</h3>
            <div className="space-y-3">
              <div>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </div>
              <div>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </div>
              <div>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </div>
              <div>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/narendradzulqarnain" className="w-10 h-10 bg-gray-900 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/narendra-dzulqarnain-b50ba522a/" className="w-10 h-10 bg-gray-900 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Narendra Dzulqarnain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
