import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Send,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ submitting: true, submitted: false, error: false });

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error();

    setFormStatus({ submitting: false, submitted: true, error: false });
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: false, error: false });
    }, 5000);

  } catch {
    setFormStatus({ submitting: false, submitted: false, error: true });
  }
};


  const contactMethods = [
   
  ];

  const socialLinks = [
    {
      icon: <Github />,
      name: 'GitHub',
      link: 'https://github.com/developershubham01',
      username: '@developershubham01',
      color: 'hover:bg-gray-800',
      iconColor: 'text-gray-300'
    },
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/shubham-sharma395',
      username: 'shubham-sharma395',
      color: 'hover:bg-blue-800',
      iconColor: 'text-blue-400'
    },
    {
      icon: <MessageSquare />,
      name: 'WhatsApp',
      link: 'https://wa.me/9695127889',
      username: '+91 9695127889',
      color: 'hover:bg-green-800',
      iconColor: 'text-green-400'
    },
    {
      icon: <FileText />,
      name: 'Resume',
      link: '/resume.pdf',
      username: 'Download PDF',
      color: 'hover:bg-red-800',
      iconColor: 'text-red-400'
    }
  ];

  const quickActions = [
   
    {
      title: 'View Projects',
      description: 'Check out my latest work',
      link: '#projects',
      icon: <Github className="w-5 h-5" />
    },
    {
      title: 'Download Resume',
      description: 'Get my full professional profile',
      link: '/resume.pdf',
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-darker-blue to-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl block"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-primary-blue mb-1">{method.value}</p>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center justify-between p-4 rounded-lg ${social.color} transition-colors group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={social.iconColor}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-gray-400 text-sm">{social.username}</div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Send className="w-4 h-4" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.a
                    key={action.title}
                    href={action.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-dark-blue/50 hover:bg-dark-blue transition-colors"
                  >
                    <div>
                      <div className="font-medium mb-1">{action.title}</div>
                      <div className="text-gray-400 text-sm">{action.description}</div>
                    </div>
                    {action.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
            <p className="text-gray-400 mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2" htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Form Status Messages */}
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-green-400">Message sent successfully!</p>
                      <p className="text-green-300 text-sm mt-1">
                        Thank you for your message. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {formStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <div>
                      <p className="font-medium text-red-400">Error sending message</p>
                      <p className="text-red-300 text-sm mt-1">
                        Please try again or contact me directly through email.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 ${
                  formStatus.submitting
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-blue to-cyan-500 hover:from-cyan-500 hover:to-primary-blue'
                }`}
              >
                {formStatus.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-gray-500 text-sm text-center mt-4">
                * Required fields. Your email will only be used to respond to your inquiry.
              </p>
            </form>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-8 border-t border-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-gray-300">Currently available for new projects</span>
                </div>
                <div className="text-primary-blue text-sm font-medium">
                  Response time: &lt; 24h
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center space-x-6 mb-6">
              {['Java', 'Spring Boot', 'React', 'Microservices'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-dark-blue rounded-full text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Specializing in full-stack development with Java technologies. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+91 9695127889"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-green-600 px-6 py-3 rounded-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="https://wa.me/9695127889"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-[#25D366] px-6 py-3 rounded-lg font-semibold"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="mailto:shubhamsharma200599@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-primary-blue px-6 py-3 rounded-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
