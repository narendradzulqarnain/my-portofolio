"use client"

import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Growth Data Support Intern",
      company: "PT Vidio dot com",
      location: "Jakarta, Indonesia",
      period: "Aug 2025 - Dec 2025",
      type: "Internship",
      description: [
        "Conducted ad hoc data analyses on large-scale production data to support strategic decision-making and identify actionable insights.",
        "Wrote and optimized complex SQL queries to extract, transform, and analyze data from production databases.",
        "Collaborated on exploratory data analysis and experimentation for a customer churn prediction initiative."
      ],
      skills: ["Data Analysis", "SQL", "Data Science", "Problem Solving", "Customer Churn Prediction", "Exploratory Data Analysis"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0 mt-1">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mt-2 text-sm font-medium">
                      <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/30">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-semibold text-gray-200 mb-3">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-gray-300 flex items-start text-base leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Skills & Domain Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-600/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
