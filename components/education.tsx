"use client"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Changed from space-y-8 to space-y-12 or space-y-16 */}
        <div className="space-y-12">
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="text-4xl flex-shrink-0 self-center md:self-start">
                <span>🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-2">Bachelor of Computer Science</h3>
                <p className="text-gray-300 mb-1">Universitas Indonesia</p>
                <span className="text-sm text-gray-400">2022 - 2026 (Expected)</span>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap self-center md:self-start">
                <span>GPA: 3.5/4.0</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Data Structures & Algorithms</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Database</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Software Engineering</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Intro to AI & Data Science</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Deep Learning</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Computer Networks</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Data Mining</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Calculus</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Linear Algebra</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Statistics and Probability</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Activities</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Staff of Web Development at UI Battlegrounds 2024
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Head of Live Production at UI Battlegrounds 2023
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* High School Education Card */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="text-4xl flex-shrink-0 self-center md:self-start">
                <span>🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">High School</h3>
                <p className="text-gray-300 mb-1">SMAN 42 Jakarta</p>
                <span className="text-sm text-gray-400">2019 - 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}