"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Biomedical Organ Classification",
      category: "other",
      description: "Deep learning model to classify organ types from CT scan images with 90.1% F1-score",
      image: "images/biomed.png",
      liveUrl: "",
      githubUrl: "https://github.com/narendradzulqarnain/biomedical-organ-classification",
      technologies: ["Python", "PyTorch", "Deep Learning", "Image Processing"],
    },
    {
      id: 2,
      title: "Deposit Product Subscription Prediction",
      category: "other",
      description: "ML model predicting customer subscription behavior with 0.7897 AUC score",
      image: "/images/deposito.png",
      liveUrl: "https://drive.google.com/drive/folders/1ijoLOKxOuNPch-YVB1YttUWgNZs3q0Qc?usp=drive_link", 
      githubUrl: "",
      technologies: ["Python", "Machine Learning", "Data Mining", "Ensemble Methods", "Data Analysis"],
    },
    {
      id: 3,
      title: "Paper Citation Network Prediction",
      category: "other",
      description: "NLP model predicting academic paper citations using text similarity and temporal features",
      image: "/images/gammafest.png",
      liveUrl: "https://drive.google.com/drive/folders/1vkYKnLGMseN3dcdhfWoVkSPYjVx5U2zd?usp=drive_link",
      githubUrl: "",
      technologies: ["Python", "NLP", "TF-IDF", "Binary Classification", "Graph Analysis"],
    },
    {
      id: 4,
      title: "Commodity Price Prediction",
      category: "other",
      description: "Time series forecasting model for commodity prices across Indonesian provinces",
      image: "/images/datavidia.png",
      liveUrl: "https://drive.google.com/drive/folders/1NrFc1tuxqQg2ueCVVP9W_qYugsC1uFWu?usp=drive_link",
      githubUrl: "",
      technologies: ["Python", "Time Series", "ARIMA", "VAR Models", "Data Analysis"],
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "web",
      description: "Personal portfolio built with Next.js, showcasing projects and skills",
      image: "/images/portofolio.png",
      liveUrl: "https://narendra-dz-portofolio.vercel.app/",
      githubUrl: "https://github.com/narendradzulqarnain/my-portofolio",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    },
    {
      id: 6,
      title: "Person Detection, Face Recognition, and Crowd Detection System",
      category: "other",
      description: "Built a system to detect people, recognize faces, and measure crowd density from video.",
      image: "/images/robotika.png",
      liveUrl: "",
      githubUrl: "https://github.com/narendradzulqarnain/robot-uas",
      technologies: ["Computer Vision", "Deep Learning", "YOLO", "YuNet", "FaceNet"],
    },
    {
      id: 7,
      title: "Comparative Analysis of Clustering Algorithms for Song Lyrics Clustering",
      category: "other",
      description: "Conducted a comparative analysis of clustering algorithms to cluster song lyrics based on their semantic similarity.",
      image: "/images/lyrics_clustering.png",
      liveUrl: "",
      githubUrl: "https://github.com/narendradzulqarnain/song-lyrics-clustering",
      technologies: ["Python", "NLP", "Clustering", "Data Analysis", "Web Scraping"],
    },
    {
      id: 8,
      title: "Marmut - Music & Podcast Streaming Platform",
      category: "web",
      description: "Developed key backend features for a music and podcast streaming platform, including user authentication, podcast management, and Top 20 charts.",
      image: "/images/marmut.png",
      liveUrl: "",
      githubUrl: "https://github.com/basdat-c1/marmut/tree/dev-coba",
      technologies: ["Django", "SQL", "PostgreSQL", "Python"]
    }
  ]

  const filters = [
    { id: "all", label: "All" },
    { id: "other", label: "Data Science & ML" },
    { id: "web", label: "Web Development" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap gap-4 bg-gray-900 rounded-full p-2 shadow-lg border border-gray-700">
            {filters.map((filter) => (
              <li
                key={filter.id}
                className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-300 font-medium ${
                  activeFilter === filter.id 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-700">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="group flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={(e) => handleLinkClick(project.liveUrl, e)}
                      title="View Live Project"
                    >
                      <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="group flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={(e) => handleLinkClick(project.githubUrl, e)}
                      title="View Source Code"
                    >
                      <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}