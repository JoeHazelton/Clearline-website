import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const processSteps = [
    {
      title: "Discover",
      icon: "/clearline-discover-compass.svg",
      desc: "Understand your business, your people and how work gets done, identifying the priorities and opportunities that matter most.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    },
    {
      title: "Design",
      icon: "/clearline-design-pencil.svg",
      desc: "Shape practical improvements around your processes, systems and goals, with a clear plan for putting them into place.",
      color: "text-violet-400",
      borderColor: "border-violet-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]",
    },
    {
      title: "Deliver",
      icon: "/clearline-deliver-cube.svg",
      desc: "Put the agreed improvements into practice, testing them carefully and managing the transition into everyday operations.",
      color: "text-emerald-400",
      borderColor: "border-emerald-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]",
    },
    {
      title: "Enable",
      icon: "/clearline-enable-connected-nodes.svg",
      desc: "Help your team adopt new ways of working through clear guidance, practical training and hands-on support.",
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]",
    },
    {
      title: "Improve",
      icon: "/clearline-improve-rising-bar-chart.svg",
      desc: "Review what is working, gather feedback and refine the approach as your business and its needs evolve.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      glow: "group-hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]",
    },
  ];

  return (
    <main className="about-page min-h-screen px-6 md:px-20 max-w-7xl mx-auto pb-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white border-l-4 border-primary pl-6">
            About <span className="text-primary">Clearline</span>
          </h2>

          <div className="max-w-4xl ml-7 space-y-4 about-copy">
            <p>
              Clearline helps small and medium-sized businesses make everyday
              work simpler, more connected and easier to manage.
            </p>
            <p>
              We improve processes, connect systems and information, and reduce
              repetitive admin — helping teams save time, gain clearer
              visibility and work with greater consistency. Our approach
              combines practical operational experience with technology,
              automation and AI where they add value.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
            Why Clearline <span className="text-primary">Exists</span>
          </h3>
          <div className="max-w-4xl ml-7 space-y-4 about-copy">
            <p>
              Business improvement can feel like another project competing for
              time and attention. Clearline exists to make it practical and
              achievable.
            </p>
            <p>
              We start by understanding how your business actually works: the
              people involved, the pressures they face and the priorities that
              matter most. From there, we identify useful improvements and
              shape them around your team, resources and goals.
            </p>
            <p>
              The aim is to introduce changes people can understand, use
              confidently and sustain as the business develops.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white border-l-4 border-secondary pl-6">
            How We <span className="text-primary">Work</span>
          </h3>
          <p className="ml-7 max-w-4xl about-copy">
            Our five-stage approach takes improvements from the initial
            conversation through to everyday use and ongoing refinement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
              className={`bg-white/5 border ${step.borderColor} p-6 rounded-lg backdrop-blur-sm ${step.glow} transition-all duration-300 group hover:-translate-y-1`}
            >
              <img
                src={step.icon}
                alt=""
                aria-hidden="true"
                className={`about-process-icon w-8 h-8 object-contain ${step.color} mb-4 transition-transform group-hover:scale-110`}
              />
              <h3 className={`text-xl font-display mb-3 ${step.color}`}>
                {step.title}
              </h3>
              <p className="text-white/70 font-sans text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
            What Guides <span className="text-primary">Our Work</span>
          </h3>
          <div className="max-w-4xl ml-7 space-y-4 about-copy">
            <p>
              <strong>People first</strong> Systems and processes should make
              everyday work easier. We involve the people who use them and
              help teams build confidence through change.
            </p>
            <p>
              <strong>Practical improvements</strong> Every recommendation
              should address a clear business need. We focus on changes that
              are useful, proportionate and manageable with the resources
              available.
            </p>
            <p>
              <strong>Clear communication</strong> You should understand what
              we recommend, why it matters and what is involved. We keep
              explanations straightforward and make priorities and trade-offs
              clear.
            </p>
            <p>
              <strong>Built to adapt</strong> We consider how improvements will
              be maintained and developed over time, helping your processes and
              systems keep pace with the business.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-white border-l-4 border-secondary pl-6">
            Who&apos;s Behind <span className="text-primary">Clearline</span>
          </h3>
          <div className="max-w-4xl ml-7 space-y-4 about-copy">
            <p>
              I’m Joey, the founder of Clearline. My background spans
              operations, project delivery, process improvement, reporting and
              business systems.
            </p>
            <p>
              I’ve worked closely with stakeholders and IT teams to improve
              workflows, introduce applications and support people through
              changes to the way they work. That experience has shaped my
              approach: understand the day-to-day reality, involve the people
              affected and make improvements that work in practice.
            </p>
            <p>
              Through Clearline, I bring that approach to business owners and
              teams who want clearer information, smoother operations and more
              time to focus on their priorities.
            </p>
          </div>
        </motion.section>

        <section className="mt-8 border-t border-white/10 pt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-5 text-white">
            Let’s Talk About <span className="text-primary">Your Business</span>
          </h3>
          <div className="about-copy">
            <p>
              If everyday processes, disconnected systems or repetitive admin
              are getting in the way, a free business review is a useful place
              to start.
            </p>
            <p className="mt-4">
              We’ll discuss how your business works, where the main
              frustrations sit and which improvements may be worth exploring.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="home-quick-link">
              <span>Free business review</span>
              <span className="home-quick-circle" aria-hidden="true">
                <ChevronRight size={18} strokeWidth={1.6} />
              </span>
            </Link>
          </div>
        </section>
      </motion.section>
    </main>
  );
}