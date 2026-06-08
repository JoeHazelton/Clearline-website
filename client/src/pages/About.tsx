import { motion } from "framer-motion";
import { Search, Box, Rocket, TrendingUp, Star } from "lucide-react";

export default function About() {
  const processSteps = [
    { 
      title: "Discovery", 
      icon: Search, 
      desc: "Deep dive into your current operations to uncover inefficiencies and map out the true potential of your business processes.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
    },
    { 
      title: "Modelling", 
      icon: Box, 
      desc: "Designing tailored architectures and improved workflows that structure your data for accessibility and speed.",
      color: "text-violet-400",
      borderColor: "border-violet-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]"
    },
    { 
      title: "Deployment", 
      icon: Rocket, 
      desc: "Executing the solution with precision, implementing systems that integrate seamlessly with your daily operations.",
      color: "text-emerald-400",
      borderColor: "border-emerald-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]"
    },
    { 
      title: "Scaling", 
      icon: TrendingUp, 
      desc: "Establishing a foundation for ongoing optimization, ensuring your systems grow and evolve alongside your business.",
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
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
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white border-l-4 border-primary pl-6">
            About <span className="text-primary">Clearline</span>
          </h2>
          
          <div className="max-w-4xl ml-7 space-y-4">
            <p className="text-base text-white/70 font-sans leading-relaxed">
              We engineer intelligent, practical business architectures that eliminate operational friction. By integrating AI and advanced automation into your workflows, we identify bottlenecks and replace manual redundancy with intelligent precision.
            </p>
            <p className="text-base text-white/70 font-sans leading-relaxed">
              Our focus is purely practical: connecting your fragmented systems into a single, reliable flow powered by artificial intelligence. We build autonomous systems that allow your team to spend time on high-value, strategic work, rather than routine administration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
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
          className="mb-20 grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
              Values & <span className="text-primary">Philosophy</span>
            </h3>
            <div className="space-y-4 ml-7 text-white/70 font-sans">
              <p>We believe systems should reduce cognitive load, not add to it. Technology must serve the people using it, never the other way around.</p>
              <p>We prioritize practical, outcome-driven solutions over theoretical complexity. If it doesn't solve a real problem, we don't build it.</p>
              <p>Automation and structure are designed to support your team, not replace them—allowing people to do what they do best, while machines handle the rest.</p>
              <p>We build for long-term scalability, ensuring the foundations we lay today continue to support your growth for years to come.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
              Who's Behind <span className="text-primary">Clearline</span>
            </h3>
            <div className="space-y-4 ml-7 text-white/70 font-sans">
              <p>
                Clearline is run by industry-leading practitioners with years of hands-on experience across multiple sectors. We have first-hand exposure to the operational pain points that SMEs face every day.
              </p>
              <p>
                We aren't just consultants; we are builders who have worked inside complex, real-world environments. Our solutions are born from solving the very problems we've personally encountered, ensuring they are grounded in reality, not theory.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 border-t border-white/10 pt-12 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="flex gap-1 text-primary mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" className="w-4 h-4 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]" />
            ))}
          </div>
          <p className="text-xs text-white/40 font-mono tracking-widest uppercase">Trusted by industry leaders for excellence in system design</p>
        </div>
      </motion.section>
    </div>
  );
}
