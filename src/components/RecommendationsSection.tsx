import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const RecommendationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const recommendations = [
    {
      id: 1,
      text: " I had a great experience working with Anahit. She is highly intelligent, has strong algorithmic thinking, and approaches tasks with responsibility and clarity. Anahit works very well in a team environment and consistently contributes to shared success. I am confident she will achieve great results in her professional journey.",
      author: "Jora Hovsepyan",
      role: "Software Engineer",
      company: "SynapTech Agency",
      avatar: "/src/assets/jor.jpg"
    },
    {
      id: 2,
      text: "Kgrenq text --- Kgrenq text   Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text --- ",
      author: "Anun Azganun",
      role: "CTO",
      company: "Ofis",
      avatar: "/src/assets/profile-photo.jpg"
    },
    {
      id: 3,
      text: "Kgrenq text --- Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text  Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq text Kgrenq ---Kgrenq text ---Kgrenq text ---Kgrenq text ---Kgrenq text --- ",
      author: "Anun Azganun",
      role: "Director of Software",
      company: "Ofis",
      avatar: "/src/assets/profile-photo.jpg"
    }
  ];

  return (
    <section id="recommendations" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">{"// Testimonials"}</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            What People Say <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'var(--gradient-primary)', filter: 'blur(20px)', opacity: 0.2 }} 
              />
              <div className="relative glass-card p-8 rounded-2xl h-full hover:border-primary/30 transition-colors">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                
                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  "{rec.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={rec.avatar} 
                    alt={rec.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-display font-semibold">{rec.author}</h4>
                    <p className="text-sm text-muted-foreground">{rec.role}</p>
                    <p className="text-sm text-primary">{rec.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
