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
      desc: "We configure the full M365 suite to create a unified digital workspace, ensuring your teams have secure, anytime access to the tools they need to collaborate effectively." 
    },
    { 
      name: "Power BI", 
      icon: BarChart3, 
      desc: "We turn your static spreadsheets into dynamic, interactive dashboards that provide real-time visibility into your KPIs, enabling data-driven decision making." 
    },
    { 
      name: "Power Automate", 
      icon: Bot, 
      desc: "We build background workflows that handle your repetitive administrative tasks—approvals, notifications, and data entry—freeing your staff for high-value work." 
    }, 
    { 
      name: "Power Apps", 
      icon: AppWindow, 
      desc: "We develop custom, low-code applications tailored exactly to your unique business functions, replacing rigid off-the-shelf software with precision tools." 
    },
    { 
      name: "Excel", 
      icon: FileSpreadsheet, 
      desc: "We advance your Excel capabilities beyond simple tables, implementing complex data modelling, automated macros, and error-proof templates for financial analysis." 
    },
    { 
      name: "SharePoint", 
      icon: Share2, 
      desc: "We structure secure, organized document management systems and intranets that act as a single source of truth for your organization's knowledge base." 
    }, 
    { 
      name: "Workflow Automation", 
      icon: Workflow, 
      desc: "We map and digitize complex multi-step logic, ensuring compliance and consistency across your operations without manual oversight." 
    },
    { 
      name: "Process Mapping", 
      icon: GitMerge, 
      desc: "We visualize your end-to-end operations to identify bottlenecks and inefficiencies before implementing technical solutions." 
    },
    { 
      name: "Reporting Dashboards", 
      icon: LayoutDashboard, 
      desc: "We centralize your performance metrics into clear, visual command centers that allow leadership to track health and progress at a glance." 
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-right border-r-4 border-primary pr-6">
          Systems <span className="text-primary">&</span> Tools
        </h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-right text-sm md:text-base text-white/60 font-sans mb-12 max-w-2xl ml-auto pr-6"
        >
          We work across a carefully selected set of platforms and tools to simplify workflows, connect data, and reduce operational friction.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
              className="bg-white/5 border border-white/10 p-5 rounded-lg relative overflow-hidden group cursor-default transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
              data-testid={`card-tool-${tool.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="flex flex-col items-start gap-3">
                <div className="p-2.5 rounded-md bg-white/5 text-primary group-hover:bg-primary/20 transition-colors">
                  <tool.icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-display font-semibold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8 border-t border-white/10 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-sans mb-4 text-white/80 leading-relaxed">
            It's okay if your current system is held together by hope and sticky notes. Most businesses start there.
          </p>
          <p className="text-sm md:text-base text-white/50 font-sans">
            We focus on clarity, structure, and incremental improvement. Let's discuss your real operational challenges—no buzzwords, just practical next steps.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
