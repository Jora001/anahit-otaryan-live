import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Zap, Terminal, Code } from 'lucide-react';
import profilePhoto from '@/assets/aboutfoto.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Continuous Self-Development", description: "Focused on continuous learning and professional growth." },
    { icon: Cpu, label: "Team Collaboration  ", description: "I enjoy working in a team, sharing experience, and achieving the best results together." },
    // { icon: Zap, label: "Performance", description: "Optimizing for speed and efficiency" },
    // { icon: Terminal, label: "Linux Kernel", description: "Driver development and system calls" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">{"// Anahit Otaryan"}</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            About <span className="gradient-text">Me</span> 
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl" />
              <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-accent rounded-br-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Alex Chen working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-display font-bold gradient-text">C++</div>
                <div className="text-sm text-muted-foreground"></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
             I am Anahit, a C/C++ software engineer focused on solving complex problems and building high-performance 
             systems. I enjoy delving into system architecture,
              applying advanced technologies, and continuously developing my technical skills.
              I actively participate industry events and community initiatives to gain knowledge and share experience.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
           
              I actively participate in industry events and community initiatives to gain knowledge and share experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
