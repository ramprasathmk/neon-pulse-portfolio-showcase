
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Card className="bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-sm border-purple-500/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-800/50 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out through any of these platforms. I'm always open to 
                discussing new opportunities, collaborations, or just having a chat about technology!
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 flex items-center justify-center transition-all duration-300 group"
                  >
                    <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Quick Info</h3>
              <div className="space-y-3 text-gray-400">
                <p>📧 alex.johnson@email.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 San Francisco, CA</p>
                <p>⏰ Available for freelance work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
