import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Cloud, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cyber-intelligence360',
      description: 'A cybersecurity-focused platform with threat analysis dashboards and real-time visual insights.',
      tech: ['React', 'Charts.js', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/developershubham01/cyber-intelligence360',
      live: 'https://cyber-intelligence360.vercel.app/',
      imageColor: 'bg-gradient-to-br from-blue-900 to-cyan-900'
    },
    {
      title: 'MultiAI – All-in-One AI Platform',
      description: 'Full-stack AI platform integrating multiple AI models with chat, image, and intelligent automation.',
      tech: ['Java', 'Spring Boot', 'React', 'REST API', 'Vercel'],
      github: 'https://github.com/developershubham01/MultiAI', 
      live: 'https://multi-ai-psi.vercel.app/',
      imageColor: 'bg-gradient-to-br from-purple-900 to-pink-900'
    },
    {
      title: 'University Management System',
      description: 'A complete REST backend for managing students, courses, professors, enrollment, and grading.',
      tech: ['Spring Boot', 'Hibernate', 'JPA', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/developershubham01/University-Management-System', // change if different
      live: 'https://university-management-system-77lx.vercel.app/',
      imageColor: 'bg-gradient-to-br from-green-900 to-emerald-900'
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz platform with scoring, UI animations, and responsive design.',
      tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
      github: 'https://github.com/developershubham01/Quiz-app',
      live: 'https://quiz-app27.vercel.app/',
      imageColor: 'bg-gradient-to-br from-orange-900 to-red-900'
    },
    {
      title: 'Find GitHub User',
      description: 'A GitHub user finder app with profile stats, followers, repos, and elegant UI.',
      tech: ['React', 'GitHub API', 'Axios', 'Tailwind'],
      github: 'https://github.com/developershubham01/Github-account-finder/tree/main',
      live: 'https://github-account-finder-nine.vercel.app/',
      imageColor: 'bg-gradient-to-br from-indigo-900 to-blue-900'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern animated portfolio showcasing projects, certifications, skills, and achievements.',
      tech: ['React', 'Framer Motion', 'Tailwind', 'Vercel'],
      github: 'https://github.com/developershubham01/java-portfolio',
      live: '#', // if your portfolio live link available, send me I will update
      imageColor: 'bg-gradient-to-br from-slate-900 to-gray-900'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 opacity-20" />
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  {[<Database />, <Cloud />, <Lock />].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-black/50 p-2 rounded-full"
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-blue text-primary-blue rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
