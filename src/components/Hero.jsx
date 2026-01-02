import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Rocket } from 'lucide-react';

const Hero = () => {
  const technologies = [
    { icon: <Code2 />, name: 'Java', color: 'text-red-500' },
    { icon: <Database />, name: 'Spring Boot', color: 'text-green-500' },
    { icon: <Cpu />, name: 'React', color: 'text-blue-500' },
    { icon: <Rocket />, name: 'Microservices', color: 'text-purple-500' },
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          ><br /><br/>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Java Full Stack</span>
              <span className="block bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8">
              A passionate and detail-oriented BSc IT graduate with 1 year of hands-on experience in Java Full Stack
              Development, experienced in designing, building, testing, and implementing applications based on business
              requirements. Proficient in Core Java, JDBC, JPA, Hibernate, and Spring Boot for backend development, and
              HTML, CSS, JavaScript, and React for developing responsive and user-friendly interfaces.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue/10 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-dark-blue to-black rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-xl text-center"
                  >
                    <div className={`text-4xl mb-3 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <h3 className="font-semibold">{tech.name}</h3>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent rounded-full"></div>
              </motion.div>
            </div>

            {/* Animated background elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-blue/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '25+', label: 'Projects Completed' },
            { number: '100+', label: 'LeetCode Solved' },
            { number: '1+', label: 'Years Experience' },
            { number: '15+', label: 'Technologies' },
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;