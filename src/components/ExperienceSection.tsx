import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const courses = [
    {
      id: 1,
      title: "Sevan Startup Summit",
      organization: "Startup Armenia Scientific & Educational Foundation",
      period: "2025",
      description:
        "Joined the food-tech startup Eat Time as a co-founder and team member, representing the project at an international entrepreneurial platform through networking, workshops, and pitching sessions."
    },
    {
      id: 2,
      title: "Summer School",
      organization: "RAU",
      period: "August 2–14, 2021",
      description:
        "Completed an intensive course on Basics of Programming in C, focusing on core programming concepts and problem-solving skills."
    },
    {
      id: 3,
      title: "Student Week",
      organization: "Synergy Armenia",
      period: "May 2022",
      description:
        "Participated in Synergy Armenia Student Week, engaging in educational sessions and collaborative activities."
    },
    {
      id: 4,
      title: "Girlopolis Startup Hackathon",
      organization: "Girlopolis",
      period: "July 1–3, 2022",
      description:
        "Participated in the Girlopolis Startup Hackathon, collaborating on startup ideas and team-based problem solving."
    },
    {
      id: 5,
      title: "Picsart Academy – Online Courses",
      organization: "Picsart Academy",
      period: "",
      description:
        "Participated in online courses at Picsart Academy, focusing on practical skills and continuous learning."
    },
    {
      id: 6,
      title: "Grovf Internships and Trainings",
      organization: "Grovf",
      period: "2024",
      description:
        "Completed training at Grovf – Grow with Grovf, focused on the fundamentals of FPGA and hardware-based system design."
    },
    {
      id: 7,
      title: "Project “Work for Good”",
      organization: "Erasmus+",
      period: "Feb 15–23, 2024 | Bakuriani, Georgia",
      description:
        "Participated in an international Erasmus+ project focused on youth engagement, social responsibility, and collaborative learning."
    }
  ];

  const volunteerActivities = [
    {
      id: 1,
      role: "Yard Camp for Socially Vulnerable Children",
      organization: "Yard Camp",
      period: "2016-2020",
      description:
        "Participated in a social initiative aimed at supporting and empowering socially vulnerable children through educational and recreational activities."
    },
    {
      id: 2,
      role: " Volunteer Teacher",
      organization: "Math Camp",
      period: "2021 June 22 - 2021 July 2",
      description:
        "Taught mathematics through interactive lessons, problem-solving activities, and practical exercises for students in a camp-based learning environment."
    },
    {
      id: 3,
      role: "Conference – Organizational Team Member",
      organization: "Buissup",
      period: "2022 - June 3-11",
      description:
        "Played an active role in event organization, including coordination of activities, communication with participants, and ensuring smooth execution of conference operations."
    }
  ];

  return (
    <section id="courses" ref={ref} className="py-28 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="code-block mb-4 inline-block">
            {"// Education & Courses"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Courses <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mb-32">
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          <div className="space-y-14">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary z-10" />

                <div
                  className={`flex-1 pl-14 lg:pl-0 ${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 lg:p-7 max-w-lg transition-all hover:border-primary/40 hover:-translate-y-1 ${
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      {course.period}
                    </span>

                    <h3 className="text-lg font-semibold mb-1">
                      {course.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {course.organization}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">
            {"// Volunteer Experience"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Volunteer  <span className="gradient-text">experience</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {volunteerActivities.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <span className="text-sm text-muted-foreground mb-2 block">
                {item.period}
              </span>
              <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
              <p className="text-primary text-sm font-medium mb-3">
                {item.organization}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
