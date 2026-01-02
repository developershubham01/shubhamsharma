import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Target, Award } from 'lucide-react';

const About = () => {
  const aboutPoints = [
   {
  icon: <User />,
  title: 'Background',
  description: 'BSc IT graduate and Java Full Stack Developer with strong skills in Core Java, Spring Boot, Hibernate, REST APIs, React, and MySQL, supported by hands-on project experience and solid understanding of OOP, SDLC, and problem-solving.'
},

{
  icon: <Briefcase />,
  title: 'Experience',
  description: 'Hands-on experience developing full-stack applications using Spring Boot, Hibernate, REST APIs, React.js, and relational databases through multiple real-world academic and personal projects.'
},

{
  icon: <Target />,
  title: 'Specialization',
  description: 'Backend development with Java and Spring Boot, REST API design, database management with MySQL & SQL Server, and building responsive UIs using React and modern web technologies.'
},

{
  icon: <Award />,
  title: 'Approach',
  description: 'Focus on writing clean, maintainable code with proper architecture, version control using Git/GitHub, problem-solving mindset, and continuous learning to deliver reliable and scalable applications.'
}

  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate Java Full Stack Developer dedicated to creating efficient, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
          <p className="text-gray-300 text-lg">
                        A passionate and detail-oriented BSc IT graduate with 1 year of hands-on experience in Java Full Stack
            Development, experienced in designing, building, testing, and implementing applications based on business
            requirements. Proficient in Core Java, JDBC, JPA, Hibernate, and Spring Boot for backend development, and
            HTML, CSS, JavaScript, and React for developing responsive and user-friendly interfaces.
            
            </p>
            
            <p className="text-gray-300 text-lg">
              With experience in both monolithic and microservices architectures, 
              I focus on writing clean, maintainable code and implementing best practices 
              for software development.
            </p>

            <div className="space-y-4">
              {[
                'Java & Spring boot',
                'React & Redux Toolkit',
                'MySQL/PostgreSQL & MongoDB',
                'Docker & Kubernetes',
                'REST & GraphQL APIs'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-primary-blue mb-4">
                  {point.icon}
                </div>
                <h3 className="font-bold mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;