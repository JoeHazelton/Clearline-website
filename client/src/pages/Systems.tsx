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
  LayoutDashboard,
  Brain,
  Cloud,
  FileText
} from "lucide-react";

export default function Systems() {
  const tools = [
    {
      name: "AI Integration",
      icon: Brain,
      desc: "Practical AI solutions are applied where they create genuine business value. From reducing manual tasks to supporting faster decisions, AI becomes part of a smarter operating model."
    },
    { 
      name: "Process Mapping", 
      icon: GitMerge, 
      desc: "End-to-end business processes are visualised to identify bottlenecks, duplication, and unnecessary manual effort. Clear maps create the foundation for practical improvement." 
    },
    { 
      name: "Workflow Automation", 
      icon: Workflow, 
      desc: "Multi-step workflows can be mapped, digitised, and automated to reduce delays and manual handovers. Processes become more consistent, visible, and easier to manage." 
    },
    { 
      name: "Microsoft 365", 
      icon: Grid, 
      desc: "The Microsoft 365 suite creates a connected digital workspace for communication, collaboration, and secure document access. Teams gain a reliable foundation for day-to-day operations." 
    },
    { 
      name: "Google Workspace", 
      icon: Cloud, 
      desc: "Google Workspace supports cloud-based collaboration across documents, email, calendars, and shared files. It can be structured to improve visibility, consistency, and team productivity." 
    },
    { 
      name: "Power BI", 
      icon: BarChart3, 
      desc: "Static spreadsheets are transformed into interactive dashboards with clear visibility of key performance indicators. Leaders can track performance and make better decisions with confidence." 
    },
    { 
      name: "Power Automate", 
      icon: Bot, 
      desc: "Repetitive administrative tasks such as approvals, notifications, and data movement can run automatically in the background. This reduces manual effort and improves consistency." 
    }, 
    { 
      name: "Power Apps", 
      icon: AppWindow, 
      desc: "Custom low-code applications can replace clunky spreadsheets and rigid off-the-shelf tools. Business processes become easier to manage, update, and scale." 
    },
    { 
      name: "Notion", 
      icon: FileText, 
      desc: "Notion can bring processes, notes, project information, and internal knowledge into one flexible workspace. It is useful for creating lightweight operating systems for growing teams." 
    },
    { 
      name: "Excel", 
      icon: FileSpreadsheet, 
      desc: "Excel can be strengthened with structured templates, automation, data modelling, and reporting logic. Existing spreadsheets become more reliable, useful, and easier to maintain." 
    },
    { 
      name: "SharePoint", 
      icon: Share2, 
      desc: "Secure document libraries and team spaces create a single source of truth for business information. Files, processes, and knowledge become easier to organise and access." 
    }, 
    { 
      name: "Reporting Dashboards", 
      icon: LayoutDashboard, 
      desc: "Performance data is centralised into clear visual dashboards that support faster decision-making. Teams can monitor progress, trends, and operational health at a glance." 
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
          We work across a carefully selected ecosystem of platforms, automation tools, and business systems designed to improve efficiency, visibility, and scalability. By combining modern technologies with practical operational expertise, we help businesses eliminate manual processes, connect fragmented data, automate repetitive tasks, and create reliable workflows that support long-term growth. Every tool we implement is selected for a specific purpose: delivering measurable improvements to the way your business operates.
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
          <p className="text-sm md:text-base text-white/50 font-sans mt-4">
            We focus on clarity, structure, and incremental improvement. Let's discuss your real operational challenges—no buzzwords, just practical next steps.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
