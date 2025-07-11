"use client"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 border border-gray-700">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Location</h3>
              <p className="text-gray-300">Depok, West Java</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 border border-gray-700">
            <span className="text-2xl">✉️</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Email</h3>
              <p className="text-gray-300">narendra.dz1107@gmail.com</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 border border-gray-700">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Phone</h3>
              <p className="text-gray-300">+62 857 1970 8701</p>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  )
}
