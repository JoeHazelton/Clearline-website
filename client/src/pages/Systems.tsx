import { motion } from "framer-motion";
import { 
  FileSpreadsheet, 
  BarChart3, 
  Workflow, 
  AppWindow, 
  Grid, 
  Share2, 
  Bot, 
  GitMerge, 
  LayoutDashboard 
} from "lucide-react";

export default function Systems() {
  const tools = [
    { 
      name: "Microsoft 365", 
      icon: Grid, 
      desc: "The backbone of modern enterprise collaboration." 
    },
    { 
      name: "Power BI", 
      icon: BarChart3, 
      desc: "Transforming raw data into actionable visual insights." 
    },
    { 
      name: "Power Automate", 
      icon: Bot, 
      desc: "Automating repetitive tasks to save valuable time." 
    }, 
    { 
      name: "Power Apps", 
      icon: AppWindow, 
      desc: "Custom low-code applications built for your specific needs." 
    },
    { 
      name: "Excel", 
      icon: FileSpreadsheet, 
      desc: "Advanced modelling and data management solutions." 
    },
    { 
      name: "SharePoint", 
      icon: Share2, 
      desc: "Secure document management and intranet portals." 
    }, 
    { 
      name: "Workflow Automation", 
      icon: Workflow, 
      desc: "Streamlining complex business logic and approvals." 
    },
    { 
      name: "Process Mapping", 
      icon: GitMerge, 
      desc: "Visualizing and optimizing operational flows." 
    },
    { 
      name: "Reporting Dashboards", 
      icon: LayoutDashboard, 
      desc: "Real-time KPIs tracking performance at a glance." 
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-right border-r-4 border-primary pr-6">
          Systems <span className="text-primary">&</span> Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg relative overflow-hidden group cursor-default transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
              data-testid={`card-tool-${tool.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-white/5 text-primary group-hover:bg-primary/20 transition-colors">
                  <tool.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                  <p className="text-sm text-white/60 font-sans leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8 border-t border-white/10"
        >
          <p className="text-xl md:text-2xl font-display mb-6 leading-tight text-white/80">
            Is your current system held together by <span className="text-primary font-bold">hope</span> and <span className="text-primary font-bold">sticky notes</span>?
          </p>
          <button 
            className="cursor-pointer bg-transparent border border-primary text-primary px-8 py-3 text-base font-bold tracking-widest hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] uppercase"
            data-testid="button-cta-systems"
          >
            Fix My Workflow
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
