import React, { useState } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'LeetCode', href: '#leetcode' },
  ];

  return (
    <header className="fixed top-0 w-full glass z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-8 h-8 text-primary-blue animate-pulse-slow" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              Shubham Sharma
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social + Resume */}
          <div className="hidden md:flex space-x-4">
            <motion.a href="https://github.com/developershubham01" whileHover={{ scale: 1.2 }} className="hover:text-primary-blue">
              <Github className="w-6 h-6" />
            </motion.a>

            <motion.a href="https://linkedin.com/in/shubham-sharma395" whileHover={{ scale: 1.2 }} className="hover:text-primary-blue">
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a href="mailto:shubhamsharma200599@gmail.com" whileHover={{ scale: 1.2 }} className="hover:text-primary-blue">
              <Mail className="w-6 h-6" />
            </motion.a>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-primary-blue px-4 py-2 rounded-lg flex items-center space-x-2 text-black font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden mt-4 pb-6 p-4 mobile-nav" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              md:hidden 
              mt-4 pb-6 p-4 
              rounded-xl 
              bg-black/80 
              backdrop-blur-xl 
              border border-white/10
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-primary-blue text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex space-x-4 mt-4 text-gray-300">
              <a href="https://github.com/developershubham01"><Github className="w-6 h-6" /></a>
              <a href="https://linkedin.com/in/shubham-sharma395"><Linkedin className="w-6 h-6" /></a>
              <a href="mailto:shubhamsharma200599@gmail.com"><Mail className="w-6 h-6" /></a>

              {/* Resume Mobile */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 bg-primary-blue px-3 py-1 rounded-lg text-black text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
