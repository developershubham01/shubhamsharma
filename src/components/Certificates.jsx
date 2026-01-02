import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, BookOpen } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Generative AI Professional Certification',
      issuer: 'Oracle',
      date: '2025',
      credentialId: 'Oracle Generative AI Professional',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=596DAD9E688123E4D70C79E0E413C31ABFC522A519BD01774ABFF4C2FE163C24'
    },
    {
      title: 'IBM Web Development Certification',
      issuer: 'IBM',
      date: '2025',
      credentialId: 'IBM Web Development',
      link: 'https://www.credly.com/badges/c74e9951-90b7-4b03-8d1e-498f71d4eddc/public_url'
    },
    {
      title: 'IBM Artificial Intelligence Certification',
      issuer: 'IBM',
      date: '2025',
      credentialId: 'IBM Artificial Intelligence',
      link: 'https://www.credly.com/badges/ba94d585-335d-422a-9e6d-ff28c34af400/public_url'
    },
    {
      title: 'Frontend Developer (React) Certification ',
      issuer: 'HackerRank',
      date: '2025',
      credentialId: '3d8a3077e9c8',
      link: 'https://www.hackerrank.com/certificates/3d8a3077e9c8'
    },
    {
      title: 'Java (Basic) Certification ',
      issuer: 'HackerRank',
      date: '2025',
      credentialId: '109612cd4658',
      link: 'https://www.hackerrank.com/certificates/109612cd4658'
    },
    {
      title: 'Foundational C# Certification',
      issuer: 'Microsoft + freeCodeCamp',
      date: '2025',
      credentialId: 'Foundational C# — Microsoft',
      link: 'https://www.freecodecamp.org/certification/fcc2c563e83-1654-48fb-b1f7-b93b8353097d/foundational-c-sharp-with-microsoft'
    },
    {
      title: 'Oracle Cloud Infrastructure Certified Developer',
      issuer: 'Oracle',
      date: '2025',
      credentialId: 'OCI Certified Developer Professional',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5CDE2D9E25A6974038E7C94CE968B4780C6CF86AB3FD5067FB56783270ABD108'
    },
    {
      title: 'SOL (Advanced) Certification ',
      issuer: 'HackerRank',
      date: '2025',
      credentialId: '9d5ae9e55981',
      link: 'https://www.hackerrank.com/certificates/9d5ae9e55981'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-black to-darker-blue">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary-blue/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary-blue to-cyan-500 rounded-lg mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-primary-blue">{cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Issued: {cert.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span className="text-sm">ID: {cert.credentialId}</span>
                  </div>

                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary-blue hover:text-cyan-400"
                  >
                    <span className="text-sm mr-2">View Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional learning section remains unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-gray-400 mb-6">
            Regularly participating in online courses, workshops, and tech conferences 
            to stay updated with the latest Java and web development trends
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-dark-blue rounded-full">Oracle</span>
            <span className="px-4 py-2 bg-dark-blue rounded-full">IBM SkillsBuild</span>
            <span className="px-4 py-2 bg-dark-blue rounded-full">freeCodeCamp</span>
            <span className="px-4 py-2 bg-dark-blue rounded-full">HackerRank</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
