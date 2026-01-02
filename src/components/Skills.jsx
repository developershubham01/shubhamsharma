import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Server, 
  Layout, 
  GitBranch, 
  Terminal 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Cloud', level: 85 },
        { name: 'Hibernate', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'Microservices', level: 87 }
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Frontend Development',
      icon: <Layout />,
      skills: [
        { name: 'React', level: 88 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Redux', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Material-UI', level: 82 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Database & DevOps',
      icon: <Database />,
      skills: [
        { name: 'MySQL/PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 78 },
        { name: 'AWS/GCP', level: 80 },
        { name: 'CI/CD', level: 83 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Others',
      icon: <Terminal />,
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Maven/Gradle', level: 87 },
        { name: 'JUnit', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'Agile/Scrum', level: 88 }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-darker-blue">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;