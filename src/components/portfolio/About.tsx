import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications using React, TypeScript, and modern tooling."
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built scalable web applications from ground up using MERN stack and cloud technologies."
    },
    {
      title: "Junior Developer",
      company: "WebSolutions",
      period: "2019 - 2020",
      description: "Developed responsive websites and learned modern frontend frameworks and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 4 years of experience creating 
                digital solutions that make a difference. My journey started with a curiosity 
                about how websites work and evolved into a deep love for crafting beautiful, 
                functional applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I specialize in React, Node.js, and modern web technologies. When I'm not coding, 
                you'll find me exploring new frameworks, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <span className="text-sm text-purple-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-blue-300 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </Card>
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-full w-0.5 h-4 bg-gradient-to-b from-gray-600 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
