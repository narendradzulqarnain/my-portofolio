"use client"

import { Code, Database, Wrench, BookOpen, Layers } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      iconColor: "text-blue-500",
    },
    {
      title: "Libraries",
      icon: <BookOpen className="h-6 w-6" />,
      skills: ["pandas", "numpy", "scikit-learn", "matplotlib", "seaborn", "PyTorch"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      iconColor: "text-blue-500",
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Jupyter Notebook", "Google Colab", "GitHub"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      iconColor: "text-blue-500",
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      iconColor: "text-blue-500",
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-6 w-6" />,
      skills: ["Django", "Spring Boot", "Next.js", "React"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      iconColor: "text-blue-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.iconColor}`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm font-medium border ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
