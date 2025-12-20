import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Newton Fractal Visualizer",
      description:
        "A numerical graphics project focused on generating Newton fractals by applying the Newton–Raphson algorithm to polynomial functions, visualizing complex-plane convergence patterns.The project demonstrates the use of numerical methods and parallel computation for efficient fractal rendering.",
      tags: [
        "C++",
        "ISPC",
        "Complex number iteration",
        "Numerical Methods",
        "Fractal algorithm implementation",
      ],
      stars: "Practicall Project",
      forks: 3,
      link: "https://github.com/anahitotar/newton-fractal.git",
      github: "https://github.com/anahitotar/newton-fractal.git",
      featured: true,
    },
    {
      id: 2,
      title: "4×4 Skyscraper Puzzle Solver",
      description:
        "A logic-driven C programming project completed as part of the 42Yerevan C Piscine Rush01.The task involved building a solver for a 4×4 “Skyscraper” puzzle, where boxes of heights 1 to 4 must be placed on a grid so that all visibility constraints from each side are satisfied",
      tags: [
        "C Programming",
        "Backtracking",
        "Dynamic memory malloc, free",
        "GCC with strict flags",
      ],
      stars: "42 Yerevan Rush01 Project",
      forks: 234,
      link: "https://github.com/anahitotar/42-Piscine/tree/master/Second_Rush",
      github: "https://github.com/anahitotar/42-Piscine/tree/master/Second_Rush",
      featured: true,
    },
    {
      id: 3,
      title: "Prata — C++",
      description:
        "A C++ practice project focused on solving chapter-based programming exercises to strengthen core language fundamentals, problem-solving skills, and clean code structure.",
      tags: ["C++", "Algorithms ", "Debugging ", "Problem Solving"],
      stars: "Practicall Project",
      forks: 123,
      link: "https://github.com/anahitotar/Prata.git",
      github: "https://github.com/anahitotar/Prata.git",
      featured: false,
    },
    {
      id: 4,
      title: "ASCII Shape Generator",
      description:
        "A foundational C programming project developed during the 42Yerevan C Piscine, focused on generating ASCII-based rectangular patterns using modular design and strict coding standards.",
      tags: ["C", "Low-level I/O", "Unix-based compilation (cc -Wall -Wextra -Werror"],
      stars: "42 Yerevan Piscine Project",
      forks: 189,
      link: "https://github.com/anahitotar/42-Piscine/tree/master/First_Rush/ex00",
      github: "https://github.com/anahitotar/42-Piscine/tree/master/First_Rush/ex00",
      featured: false,
    },
    {
      id: 5,
      title: "C programming & Shell exercises",
      description:
        "A collection of hands-on exercises implemented in C and Shell scripting, focused on strengthening core programming fundamentals",
      tags: ["C", "Shell", "Algorithms", "Functions"],
      stars: "42 Yerevan Piscine Project",
      forks: 78,
      link: "https://github.com/anahitotar/42-Piscine.git",
      github: "https://github.com/anahitotar/42-Piscine.git",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">
            {"// Selected Projects"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Personal <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "var(--gradient-primary)",
                  filter: "blur(25px)",
                  opacity: 0.25,
                }}
              />

              <div className="relative glass-card p-8 rounded-2xl h-full border border-border/50 group-hover:border-primary/60 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="mt-1 inline-block text-xs font-mono text-primary/80">
                      ★ Featured Project
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 border border-primary/20 text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex gap-6">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      {project.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono opacity-60 hover:opacity-100 hover:text-primary transition-all"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-7 rounded-xl h-full border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-display font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono
                               bg-secondary/70 border border-border/60
                               text-muted-foreground group-hover:text-primary
                               transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-primary" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {project.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;