import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_INTERVAL = 4500;

/* Word-by-word animation */
const textContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordAnim: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

/* Card animation (TS safe) */
const cardVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // easeOut
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1], // easeIn
    },
  }),
};

const RecommendationsSection = () => {
  const recommendations = [
    {
      id: 1,
      text:
        "I had a great experience working with Anahit. She is highly intelligent, has strong algorithmic thinking, and approaches tasks with responsibility and clarity. Anahit works very well in a team environment and consistently contributes to shared success. I am confident she will achieve great results in her professional journey.",
      author: "Jora H.",
      role: "Software Engineer & Data Analyst",
      company: "SynapTech Agency",
      avatar: "/assets/jor.jpg",
    },
    {
      id: 2,
      text:
        "I recommend Anahit as a motivated and detail-oriented candidate with strong analytical thinking. From a QA Engineer’s perspective, Anahit shows great potential, responsibility, and a real interest in software quality. I believe that she has great potential in the tech field and would be a valuable addition to any team. I highly recommend them for internships or junior positions.",
      author: "Marieta O.",
      role: "QA Engineer",
      company: "Siemens Digital Industries Software",
      avatar: "/assets/photo_2025-12-22_01-59-24.jpg",
    },
    {
      id: 3,
      text:
        "I had the opportunity to study and complete various assignments together with Anahit. She approaches tasks thoughtfully, learns quickly, and shows genuine interest in software quality. In addition, she is a strong team player—responsible, communicative, and collaborative. I believe she would contribute positively to any team and continue growing in the tech field.",
      author: "Lilith H.",
      role: "Computer Science Student",
      company: "Yerevan State University",
      avatar: "/assets/ast.jpg",
    },
  ];

  const [[index, direction], setIndex] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [index, paused]);

  const paginate = (dir: number) => {
    setIndex([
      (index + dir + recommendations.length) % recommendations.length,
      dir,
    ]);
  };

  const words = recommendations[index].text.split(" ");

  return (
    <section
      id="recommendations"
      className="relative py-40 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl"
      />

      <div className="section-container relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <span className="code-block mb-4 inline-block">
            {"// Testimonials"}
          </span>
          <h2 className="text-5xl font-display font-bold">
            Words That <span className="gradient-text">Matter</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={recommendations[index].id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                if (info.offset.x > 80) paginate(-1);
              }}
              className="glass-card p-14 rounded-3xl"
            >
              {/* Quote */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Quote className="w-14 h-14 text-primary/40 mb-8" />
              </motion.div>

              {/* Text */}
              <motion.p
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="italic text-muted-foreground text-lg mb-12 leading-relaxed"
              >
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordAnim}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              {/* Author */}
              <div className="flex items-center gap-5">
                <img
                  src={recommendations[index].avatar}
                  alt={recommendations[index].author}
                  className="w-16 h-16 rounded-full ring-2 ring-primary/50"
                />
                <div>
                  <h4 className="font-semibold">
                    {recommendations[index].author}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {recommendations[index].role}
                  </p>
                  <p className="text-sm text-primary">
                    {recommendations[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-[-70px] top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-[-70px] top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

          {/* Progress bar */}
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
            className="h-1 bg-primary rounded-full mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
