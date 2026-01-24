import { motion } from "framer-motion";
import { Star, Search, Box, Rocket, TrendingUp } from "lucide-react";

export default function About() {
  const processSteps = [
    { title: "Discovery", icon: Search, desc: "Uncovering potential" },
    { title: "Modelling", icon: Box, desc: "Structuring solutions" },
    { title: "Deployment", icon: Rocket, desc: "Executing precision" },
    { title: "Scaling", icon: TrendingUp, desc: "Expanding horizons" },
  ];

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-white border-l-4 border-primary pl-6">
          About <span className="text-primary">Clearline</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors group"
            >
              <step.icon className="w-10 h-10 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.5)] transition-all" />
              <h3 className="text-2xl font-display mb-2">{step.title}</h3>
              <p className="text-white/60 font-sans">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-display mb-6">Why Choose Us</h3>
            <p className="text-lg text-white/70 font-sans leading-relaxed">
              We don't just build systems; we engineer future-proof architectures that evolve with your business. 
              Our approach merges technical precision with creative problem-solving, ensuring every solution is purely bespoke.
            </p>
            
            <div className="pt-8">
              <div className="flex gap-1 text-primary mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="currentColor" className="drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]" />
                ))}
              </div>
              <p className="text-sm text-white/50 font-mono tracking-widest">5-STAR RATED EXCELLENCE</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
