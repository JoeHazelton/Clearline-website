import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 flex flex-col items-center pt-8">
        {/* Logo Image */}
        <motion.img
          src="/Clear-line Logo Transparent.png"
          alt="Clearline Logo"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="w-[300px] md:w-[380px] mb-4"
        />

        {/* Logo Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-display font-black tracking-wider text-white relative inline-block"
        >
          CLEARLINE
          
          {/* Fuse Dot Animation */}
          <motion.div 
            initial={{ left: "2%", opacity: 0 }}
            animate={{ left: "94%", opacity: [0, 1, 1, 0] }}
            transition={{ 
              delay: 2.5,
              duration: 2, 
              times: [0, 0.1, 0.9, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5
            }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_#0ff]"
          />

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.5, duration: 0.5 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-primary"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </motion.div>
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          className="h-[2px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-3 mb-4 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-base md:text-lg font-sans font-light tracking-[0.2em] text-white/70 uppercase mb-4"
        >
          Future Systems Architect
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 1.5, ease: "easeOut" }}
          className="text-sm md:text-base font-sans text-white/50 max-w-lg mx-auto leading-relaxed mb-6"
        >
          Identifying operational friction so business owners can focus on the work that matters.
        </motion.p>

        {/* CTA Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mt-8"
        >
          <Link href="/about">
            <a className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
              <span className="text-white/40 text-xs tracking-widest uppercase group-hover:text-primary transition-colors">Explore</span>
              <div className="p-3 border border-white/10 rounded-full group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all">
                <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" strokeWidth={2} />
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
