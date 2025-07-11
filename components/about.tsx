import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Image 
              src="/images/foto_cropped_blur_bg.jpg" 
              alt="About Image" 
              width={400} 
              height={400} 
              className="rounded-2xl shadow-xl mx-auto lg:mx-0 max-w-sm w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">Who am I?</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A Computer Science undergraduate with a passion for solving real-world problems through data and technology.

            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always excited to explore new challenges, learn new tools, and collaborate with others in creating impactful solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-gray-100">Name:</span>
                <p className="text-gray-300">Narendra Dzulqarnain</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-gray-100">Email:</span>
                <p className="text-gray-300">narendra.dz1107@gmail.com</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-gray-100">Phone:</span>
                <p className="text-gray-300">+62 857 1970 8701</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-gray-100">Location:</span>
                <p className="text-gray-300">Depok, West Java</p>
              </div>
            </div>
            <a 
              href="/cv/Resume_Narendra.pdf" 
              download="Resume_Narendra.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>📄</span>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
