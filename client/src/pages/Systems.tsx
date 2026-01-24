import { motion } from "framer-motion";

export default function Systems() {
  const tools = [
    "Microsoft 365", "Power BI", "Power Automate", 
    "Power Apps", "Excel", "SharePoint", 
    "Workflow Automation", "Process Mapping", "Reporting Dashboards"
  ];

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-right border-r-4 border-primary pr-6">
          Systems <span className="text-primary">&</span> Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              className="bg-white/5 border border-white/10 p-6 rounded-none relative overflow-hidden group cursor-default transition-colors hover:bg-white/10"
              data-testid={`card-tool-${tool.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              <h3 className="text-xl font-sans font-light tracking-wide relative z-10">{tool}</h3>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center py-12 border-t border-white/10"
        >
          <p className="text-2xl md:text-3xl font-display mb-8 leading-tight text-white/80">
            Is your current system held together by <span className="text-primary font-bold">hope</span> and <span className="text-primary font-bold">sticky notes</span>?
          </p>
          <button 
            className="cursor-pointer bg-transparent border border-primary text-primary px-8 py-4 text-lg font-bold tracking-widest hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] uppercase"
            data-testid="button-cta-systems"
          >
            Fix My Workflow
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
