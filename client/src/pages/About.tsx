import { motion } from "framer-motion";
import { Search, Box, Rocket, TrendingUp, Star, Users } from "lucide-react";

export default function About() {
  const processSteps = [
    { 
      title: "Discover", 
      icon: Search, 
      desc: "Understand your business, your people, and your current ways of working.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
    },
    { 
      title: "Design", 
      icon: Box, 
      desc: "Create practical solutions tailored to your processes, systems, and goals.",
      color: "text-violet-400",
      borderColor: "border-violet-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]"
    },
    { 
      title: "Implement", 
      icon: Rocket, 
      desc: "Introduce improvements with minimal disruption to day-to-day operations.",
      color: "text-emerald-400",
      borderColor: "border-emerald-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]"
    },
    { 
      title: "Enable", 
      icon: Users, 
      desc: "Train your team and embed the new ways of working with confidence.",
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
    },
    { 
      title: "Improve", 
      icon: TrendingUp, 
      desc: "Continue refining, supporting, and scaling as your business grows.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white border-l-4 border-primary pl-6">
            About <span className="text-primary">Clearline</span>
          </h2>
          
          <div className="max-w-4xl ml-7 space-y-4">
            <p className="text-base text-white/70 font-sans leading-relaxed">
              Clearline was created to help businesses move beyond inefficient processes, disconnected systems, and time-consuming manual work.
            </p>
            <p className="text-base text-white/70 font-sans leading-relaxed">
              We combine practical operational experience with modern technology, automation, and AI to simplify complexity, improve visibility, and create better ways of working.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
            Why Clearline <span className="text-primary">Exists</span>
          </h3>
          <div className="max-w-4xl ml-7 space-y-4">
            <p className="text-base text-white/70 font-sans leading-relaxed">
              Many businesses lose valuable time to duplicated effort, scattered information, and processes that have grown more complicated than they need to be. Clearline exists to bring structure, clarity, and practical improvement to the way businesses operate — helping teams save time, reduce friction, and focus on higher-value work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
              className={`bg-white/5 border ${step.borderColor} p-6 rounded-lg backdrop-blur-sm ${step.glow} transition-all duration-300 group hover:-translate-y-1`}
            >
              <step.icon className={`w-8 h-8 ${step.color} mb-4 transition-transform group-hover:scale-110`} />
              <h3 className={`text-xl font-display mb-3 ${step.color}`}>{step.title}</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Values & Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
              Values & <span className="text-primary">Philosophy</span>
            </h3>
            <div className="space-y-4 ml-7 text-white/70 font-sans">
              <p>We believe systems should reduce cognitive load, not add to it. Technology should serve the people using it, never the other way around.</p>
              <p>We prioritise practical, outcome-driven solutions over theoretical complexity. If it doesn't solve a real problem, we don't build it.</p>
              <p>Automation and structure are designed to support your team, not replace them — allowing people to focus on the work they do best.</p>
              <p>We build for long-term scalability, ensuring the foundations we create today continue to support your growth for years to come.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
              Who's Behind <span className="text-primary">Clearline</span>
            </h3>
            <div className="space-y-4 ml-7 text-white/70 font-sans">
              <p>
                Clearline is built on hands-on experience across operations, project delivery, process improvement, reporting, and business systems.
              </p>
              <p>
                We understand the real-world challenges that SMEs face: manual admin, disconnected information, unclear reporting, and processes that rely too heavily on individual effort.
              </p>
              <p>
                Our approach is practical and grounded in reality. We focus on solutions that are useful, manageable, and built around the way your business actually works.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-white/10 pt-12 text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-white/50 font-sans">
            Every business has untapped potential hidden within its processes. Our role is to uncover inefficiencies, simplify complexity, and build systems that create lasting operational clarity.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
