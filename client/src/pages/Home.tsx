import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        {/* Logo Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-display font-black tracking-wider text-white relative inline-block"
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
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#0ff]"
          />

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.5, duration: 0.5 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-primary"
          >
            <ChevronRight size={48} strokeWidth={3} />
          </motion.div>
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mb-6 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-xl md:text-2xl font-sans font-light tracking-[0.2em] text-white/70 uppercase"
        >
          Future Systems Architecture
        </motion.p>
      </div>
    </div>
  );
}
