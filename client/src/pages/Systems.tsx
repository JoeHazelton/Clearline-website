import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Brain, ChevronRight, GitMerge, Users, Workflow } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    name: "Business Process Improvement",
    icon: GitMerge,
    description:
      "Make the steps, responsibilities and handovers in your business clearer. We help identify bottlenecks, reduce duplicated effort and create practical ways of working that your team can follow consistently.",
    examples: [
      "Review and simplify everyday workflows.",
      "Improve handovers between people and teams.",
      "Create clear procedures, checklists and templates.",
    ],
  },
  {
    name: "Workflow Automation",
    icon: Workflow,
    description:
      "Reduce the manual steps that slow your team down. We help connect routine tasks and information flows so work moves forward with less chasing, copying and repetitive updating.",
    examples: [
      "Automate reminders, notifications and approvals.",
      "Connect forms, enquiries and records.",
      "Reduce repeated data entry across tools.",
    ],
  },
  {
    name: "Business Systems & Reporting",
    icon: BarChart3,
    description:
      "Bring information together and make it easier to understand what is happening across your business. We help organise your systems, improve information flows and build reporting around the decisions you need to make.",
    examples: [
      "Create useful dashboards and business trackers.",
      "Improve how information is captured and maintained.",
      "Organise shared documents and team knowledge.",
    ],
  },
  {
    name: "Practical AI & Prompt Templates",
    icon: Brain,
    description:
      "Give your team useful, repeatable ways to apply AI to their work. We create reusable prompt templates around your business tasks, from everyday drafting to more detailed analysis and planning.",
    examples: [
      "Everyday templates for emails, meeting summaries and first drafts.",
      "Advanced templates with defined inputs, instructions and output formats.",
      "Practical examples and guidance on checking and refining results.",
    ],
  },
  {
    name: "AI Workshops & Team Training",
    icon: Users,
    description:
      "Help your team use AI and business systems with greater confidence. Our practical sessions are delivered face-to-face or live online, with exercises shaped around your team’s experience and everyday work.",
    examples: [
      "Introductory AI sessions covering useful prompts and reviewing responses.",
      "Advanced workshops building reusable templates for specific team tasks.",
      "Training and guidance to support new systems and ways of working.",
    ],
    wide: true,
  },
];

const toolGroups = [
  {
    name: "Microsoft",
    examples: ["Microsoft 365 · Excel · Teams", "SharePoint · Power BI · Power Automate"],
  },
  {
    name: "Google",
    examples: ["Google Workspace · Docs · Sheets", "Drive · Forms · Meet"],
  },
  {
    name: "AI & connected workspaces",
    examples: ["ChatGPT · Microsoft Copilot", "Gemini · Notion"],
  },
];

function ReviewLink() {
  return (
    <Link href="/contact" className="home-quick-link systems-review-link">
      <span>Free business review</span>
      <span className="home-quick-circle" aria-hidden="true">
        <ChevronRight size={18} strokeWidth={1.6} />
      </span>
    </Link>
  );
}

export default function Systems() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <main className="systems-page">
      <motion.section
        aria-labelledby="systems-title"
        className="systems-hero"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      >
        <h1 id="systems-title" className="systems-title">
          How We <span>Help</span>
        </h1>
        <h2 className="systems-headline">Make everyday work easier.</h2>
        <p className="systems-intro">
          Repetitive admin, disconnected systems and scattered information can
          take time away from running your business. Clearline helps you improve
          how work gets done — with clearer processes, useful technology and
          practical support for your team.
        </p>
        <ReviewLink />
      </motion.section>

      <section className="systems-services" aria-labelledby="services-title">
        <h2 id="services-title" className="systems-section-title">
          Practical support for your business
        </h2>
        <div className="systems-service-grid">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.article
                key={service.name}
                className={`systems-service-card${service.wide ? " systems-training-card" : ""}`}
                data-testid={`card-service-${service.name.replace(/\s+/g, "-").toLowerCase()}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { delay: 0.08 + index * 0.07, duration: 0.45 }
                }
                whileHover={reduceMotion ? undefined : { y: -3 }}
              >
                <div className="systems-service-heading">
                  <ServiceIcon aria-hidden="true" size={21} strokeWidth={1.7} />
                  <h3>{service.name}</h3>
                </div>

                {service.wide ? (
                  <div className="systems-training-content">
                    <p className="systems-service-description">{service.description}</p>
                    <ul className="systems-service-examples">
                      {service.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    <p className="systems-service-description">{service.description}</p>
                    <div className="systems-card-divider" />
                    <ul className="systems-service-examples">
                      {service.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      <motion.section
        className="systems-tools"
        aria-labelledby="tools-title"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
      >
        <h2 id="tools-title" className="systems-section-title">
          Working with the tools you already use
        </h2>
        <p className="systems-tools-intro">
          We help you get more from everyday business software and AI tools, and
          explore practical options when something new could help. Our
          recommendations are shaped around your business, your team and the
          work that needs to get done.
        </p>
        <div className="systems-tools-grid">
          {toolGroups.map((group) => (
            <div className="systems-tool-group" key={group.name}>
              <h3>{group.name}</h3>
              {group.examples.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="systems-tools-note">
          <strong>These are just a few examples.</strong> We can also help you
          explore a wider range of commonly used business, collaboration and
          automation tools — with the right approach guided by your needs,
          rather than a fixed list of platforms.
        </p>
      </motion.section>

      <motion.section
        className="systems-closing"
        aria-labelledby="closing-title"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
      >
        <h2 id="closing-title">Not sure where to start?</h2>
        <p>
          You don’t need to know which service you need. Our free business
          review is a starting point for discussing what is slowing your
          business down and where practical improvements could help.
        </p>
        <p>
          Tell us a little about your business using the form. We’ll get in
          touch to arrange a conversation, understand your priorities and
          explore suitable next steps.
        </p>
        <ReviewLink />
      </motion.section>
    </main>
  );
}
