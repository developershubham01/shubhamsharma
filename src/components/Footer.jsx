import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Code2, 
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-primary-blue" />
              <span className="text-xl font-bold">Java Full Stack</span>
            </div>
            <p className="text-gray-400">
             Building scalable, high-performance applications with modern Java technologies.
              Focused on clean code, strong architecture, and real-world impact.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'LeetCode'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Java & Spring Boot</li>
              <li>React & TypeScript</li>
              <li>Microservices</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: <Github />, href: 'https://github.com/developershubham01', label: 'GitHub' },
                { icon: <Linkedin />, href: 'https://linkedin.com/in/shubham-sharma395', label: 'LinkedIn' },
                { icon: <Mail />, href: 'mailto:shubhamsharma200599@gmail.com', label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-400 hover:text-primary-blue"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <a 
              href="mailto:shubhamsharma200599@gmail.com"
              className="text-primary-blue hover:underline"
            >
              shubhamsharma200599@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            Made with <Heart className="inline w-4 h-4 text-red-500" /> by Shubham Sharma.
          </p>
          <p className="text-gray-500">
            © {currentYear} Shubham Sharma . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;