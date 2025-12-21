import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_INTERVAL = 4500;

const PhotoAlbumSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const photos = [
    {
      id: 1,
      url: "/assets/labs.jpg",
      caption: "42 Yerevan Internatioonal School",
    },
    {
      id: 2,
      url: "/assets/geo.jpg",
      caption: "Erasmus + Georgia Bakurani",
    },
    {
      id: 3,
      url: "/assets/lasbs.jpg",
      caption: "42 Yerevan Internatioonal School",
    },
    {
      id: 4,
      url: "/assets/rrr.jpg",
      caption: "Erasmus + Georgia Bakurani",
    },
    {
      id: 5,
      url: "/assets/qe.jpg",
      caption: "42 Yerevan Internatioonal School",
    },
    {
      id: 6,
      url: "/assets/math.jpg",
      caption: "Russian Armenian University",
    },
  ];

  const perPage = 2;
  const totalPages = Math.ceil(photos.length / perPage);
  const visible = photos.slice(page * perPage, page * perPage + perPage);

  const nextPage = () => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (paused) return;

    setProgress(0);

    const slideTimer = setInterval(nextPage, AUTO_INTERVAL);
    const progressTimer = setInterval(
      () => setProgress((p) => (p >= 100 ? 100 : p + 1)),
      AUTO_INTERVAL / 100
    );

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, [page, paused]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.96,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (dir) => ({
      x: dir > 0 ? -180 : 180,
      opacity: 0,
      scale: 0.96,
      filter: "blur(8px)",
    }),
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-36 relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="code-block inline-block mb-4">
            {"// Events"}
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Events <span className="gradient-text">Gallery</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-7 shadow-[0_0_80px_-20px_rgba(99,102,241,0.35)]">

            <div className="absolute top-0 left-0 w-full h-[3px] bg-white/10">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all"
              />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7"
              >
                {visible.map((photo) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden aspect-video group"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-lg font-display tracking-wide">
                        {photo.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevPage}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                         bg-white/10 backdrop-blur-md hover:bg-white/20
                         flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextPage}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                         bg-white/10 backdrop-blur-md hover:bg-white/20
                         flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-7">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-12 bg-gradient-to-r from-indigo-500 to-purple-500"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoAlbumSection;