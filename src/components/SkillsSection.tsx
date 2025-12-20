import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const SkillsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const skills = [
    {
      title: "Tools & Environment",
      items: ["C", "C++", "Assemblytics", "Unix / Linux", "Git / GitHub / GitLab", "Jira / Trello","Debugging & Profiling Tools"],
    },
    {
      title: "Computer Science Foundations",
      items: ["Algorithms & Data Structures", "Discrete Mathematics", "Applied Mathematics", "Problem Solving & Competitive Programming", "Device Interfaces","Multithreading & Concurrency"],
    },
    {
      title: "Soft Skills",
      items: ["Time Management,", "Communication Skills", "TeamWorking", "Networking", "Communication Skills","Problem Solving","Adaptability & Continuous Learning"],
    },
  ];

  return (
    <section id="skills" className="py-36 relative overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="code-block mb-4 inline-block">{"// Skills"}</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Areas of <span className="gradient-text">Focus</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-10"
        >
          {skills.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              </div>

              <h3 className="text-xl font-display font-semibold mb-8 text-primary">
                {block.title}
              </h3>

              <ul className="space-y-4">
                {block.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
