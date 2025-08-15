import React from "react";
import { Linkedin, Github, ExternalLink } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "MockManch - Mock Test Platform",
      description:
        "A full-stack Mock/Quiz platform for competitive exams. A variety of quizzes like NCERT chapter-wise tests, PYQs from Exams and many more. Built for web using Vite + React and for mobile using React-Native with Expo.",
      tags: [
        "React",
        "React-Native",
        "Expo",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Vite",
        "Native-wind",
      ],
      liveUrl: "https://mocks-portal.vercel.app",
    },
    {
      title: "GPS Location Overlay Camera",
      description:
        "A mobile application built with React Native and Expo, the app allows users to take a photo and have it instantly stamped with a clean, elegant overlay containing the address, GPS coordinates, and a precise timestamp. The entire process is seamless, from the live location preview in the camera to saving or sharing the final, data-enriched image.",
      tags: ["React-Native", "Expo", "Native-Wind"],
      liveUrl:
        "https://drive.google.com/file/d/1rbuk8M2w37uLq2ZDaC6b23TPCg4RJtNN/view?usp=sharing",
    },
    {
      title: "GallerySync: A Private, Self-Hosted Photo & Video Backup System",
      description:
        "GallerySync is a full-stack mobile application designed to provide a secure and private solution for backing up photos and videos from an Android device to a self-hosted server. In an era where data privacy is paramount, this project moves away from third-party cloud services, giving the user complete ownership and control over their personal media. Built with React Native (Expo), the app provides a native user experience for browsing photo albums, viewing media, and managing the backup process.",
      tags: ["React-Native", "Expo", "Native-wind", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Express.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
    "RESTful APIs",
    "Firebase",
    "Vite",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-mono leading-relaxed max-w-2xl justify-center mx-auto">
      <main className="container mx-auto px-4">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Aman Kumar
            </h1>
            <p className="text-lg md:text-2xl text-zinc-500 mb-8">
              React and React-Native Developer
            </p>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              I build modern, responsive, and scalable web and mobile
              applications. With 2+ years of experience, I turn ideas into
              high-quality code.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              My journey in web and mobile development started 5 years ago, and
              since then, I've been dedicated to building beautiful and
              functional applications.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My expertise lies in the MERN stack, particularly with React and
              React-Native for front-end development and Node.js with Express
              for the back-end. I enjoy the challenge of solving complex
              problems and continuously learning new technologies to improve my
              craft.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-bold">
              Full-time Roles
            </p>
            <p className="flex justify-between text-md text-gray-700 mb-4 p-4 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <span>Publicis Sapient</span>
              <span>React Developer</span>
              <span>2021 - 2023</span>
            </p>
            <p className="flex justify-between text-md text-gray-700 mb-4  p-4 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <span>ConceptOwl</span>
              <span>Frontend Developer</span>
              <span>2019 - 2020</span>
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-26">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-end space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-26">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-700 py-2 px-5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className=" py-16 md:py-26 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            I'm currently open to new opportunities. If you have a project in
            mind or just want to say hi, feel free to reach out.
          </p>
          <a
            href="mailto:meamank@gmail.com"
            className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors text-lg inline-block"
          >
            Say Hello
          </a>
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/meamank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/meamank/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.
        </p>
      </footer>

      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
