import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  BarChart3, 
  Workflow, 
  Bot, 
  GitMerge, 
  LayoutDashboard,
  Brain,
  Cloud,
  FileText,
  Users,
  Grid
} from "lucide-react";

export default function Systems() {
  const services = [
    { 
      name: "Business Process Improvement", 
      icon: GitMerge, 
      desc: "Identify bottlenecks, reduce duplicated effort, and redesign workflows so your business can operate with greater clarity and efficiency." 
    },
    {
      name: "Automation & AI",
      icon: Brain,
      desc: "Automate repetitive tasks, connect fragmented systems, and introduce practical AI where it creates genuine value for your team and your customers."
    },
    { 
      name: "Business Systems & Reporting", 
      icon: LayoutDashboard, 
      desc: "Create clearer information flows, connected systems, and useful dashboards that help you understand performance and make better decisions." 
    },
    { 
      name: "Training & Adoption", 
      icon: Users, 
      desc: "Support your team with practical training, demonstrations, workshops, and guidance so new systems and ways of working are understood and adopted with confidence." 
    }
  ];

  const platforms = [
    { 
      name: "Microsoft 365", 
      icon: Grid, 
      desc: "Outlook, Word, Excel, PowerPoint, Teams, OneDrive, SharePoint, Planner, and Visio — structured to improve collaboration, document control, communication, and day-to-day productivity." 
    },
    { 
      name: "Microsoft Power Platform", 
      icon: Workflow, 
      desc: "Power BI, Power Apps, and Power Automate can help businesses build dashboards, automate workflows, and create practical low-code tools that support operational improvement." 
    },
    { 
      name: "Google Workspace", 
      icon: Cloud, 
      desc: "Gmail, Docs, Sheets, Slides, Drive, Forms, Calendar, and Meet can be organised and improved to support better collaboration, consistency, and visibility." 
    },
    { 
      name: "AI Tools", 
      icon: Bot, 
      desc: "AI tools such as ChatGPT, Microsoft Copilot, Gemini, and similar platforms can support faster drafting, analysis, planning, training, and decision-making when introduced properly." 
    },
    { 
      name: "Notion & Lightweight Systems", 
      icon: FileText, 
      desc: "Flexible tools like Notion can bring processes, notes, project information, and internal knowledge into one organised workspace for growing teams." 
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
          How We <span className="text-primary">Help</span>
        </h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-right text-base text-white/70 font-sans mb-12 max-w-2xl ml-auto pr-6 space-y-4"
        >
          <p>
            Clearline helps businesses simplify operations, reduce manual work, improve visibility, and introduce practical technology that supports better ways of working.
          </p>
          <p>
            Rather than starting with software, we start with your business challenges — then identify the right processes, systems, automation, reporting, AI, or training to create practical improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg relative overflow-hidden group cursor-default transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] h-full"
              data-testid={`card-service-${service.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-md bg-white/5 text-primary group-hover:bg-primary/20 transition-colors">
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm text-white/60 font-sans leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-secondary pl-6">
            Platforms We <span className="text-primary">Work With</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
                className="bg-white/5 border border-white/10 p-5 rounded-lg relative overflow-hidden group cursor-default transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                data-testid={`card-platform-${platform.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="p-2.5 rounded-md bg-white/5 text-primary group-hover:bg-primary/20 transition-colors">
                    <platform.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold mb-2 group-hover:text-primary transition-colors">{platform.name}</h3>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">{platform.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-white/10 max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-display font-bold mb-4 text-white">Not sure where to start?</h3>
          <p className="text-base text-white/70 font-sans mb-8">
            A Business Review helps identify where time is being lost, where processes are creating friction, and which practical improvements could make the biggest difference.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest text-black uppercase transition-all duration-300 bg-primary hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
              Request a Business Review
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
