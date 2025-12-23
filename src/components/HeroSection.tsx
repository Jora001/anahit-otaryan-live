import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-4
        pt-28
        lg:pt-32
      "
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-60 h-60 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />

      <div className="section-container relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="code-block inline-block mb-4 text-sm">
              {"// Hello, World!"}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6">
              I&apos;m <span className="gradient-text">Anahit</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-3xl text-muted-foreground font-display mb-6">
              C / C++ Engineer
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Thank you for visiting my portfolio.
              <br />
              Here you can explore my work, experience, and way of thinking.
              <br />
              I’m always open to collaboration and meaningful professional
              connections.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/Anahit OtaryanCV.pdf.pdf"
                download
                className="px-7 py-3 rounded-lg font-display font-semibold text-primary-foreground transition-all hover:scale-105 glow-effect"
                style={{ background: "var(--gradient-primary)" }}
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-lg font-display font-semibold border border-border bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <a href="https://github.com/anahitotar" target="_blank" rel="noreferrer">
                <Github className="w-6 h-6 hover:text-primary transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/anahit-otaryan-468a58245b44729an56/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-primary transition" />
              </a>
              <a href="mailto:otaryan.anahit03@gmail.com">
                <Mail className="w-6 h-6 hover:text-primary transition" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
              <div className="absolute -inset-3 rounded-full border border-primary/20 hidden sm:block" />
              <div className="absolute -inset-6 rounded-full border border-primary/10 hidden lg:block" />

              {/* Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden glow-effect">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Anahit Otaryan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* MOBILE CODE BADGES (NO WRAP, SAFE ZONE) */}
              <div
                className="
                  sm:hidden
                  absolute
                  top-4
                  left-1/2
                  -translate-x-1/2
                  glass-card
                  px-2.5
                  py-1
                  rounded-md
                  text-[10px]
                  font-mono
                  whitespace-nowrap
                  pointer-events-none
                "
              >
                <span className="text-primary">#include</span> &lt;stdio.h&gt;
              </div>

              <div
                className="
                  sm:hidden
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  glass-card
                  px-2.5
                  py-1
                  rounded-md
                  text-[10px]
                  font-mono
                  whitespace-nowrap
                  pointer-events-none
                "
              >
                <span className="text-accent">int</span> main()
              </div>

              {/* DESKTOP CODE BADGES */}
              <div className="hidden sm:block absolute -right-4 top-10 glass-card px-3 py-2 rounded-lg text-sm font-mono">
                <span className="text-primary">#include</span> &lt;stdio.h&gt;
              </div>

              <div className="hidden sm:block absolute -left-4 bottom-20 glass-card px-3 py-2 rounded-lg text-sm font-mono">
                <span className="text-accent">int</span> main()
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
