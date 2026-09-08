import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Clock3, Eye, GitMerge, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const outcomes = [
  {
    title: "More time back",
    description:
      "Reduce repetitive admin so your team can spend more time on higher-value work.",
    icon: Clock3,
  },
  {
    title: "Clearer visibility",
    description:
      "Bring key information together so you can see what is happening and make better-informed decisions.",
    icon: Eye,
  },
  {
    title: "Consistent processes",
    description:
      "Create clear, reliable ways of working that reduce errors and reliance on individual knowledge.",
    icon: GitMerge,
  },
  {
    title: "Ready for growth",
    description:
      "Put scalable processes and systems in place to support the next stage of your business.",
    icon: TrendingUp,
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-content">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { delay: 3, duration: 0.8 }
            }
            className="home-logo-frame"
          >
            <img
              src="/clearline-logo.png"
              alt="Clearline logo"
              width="1254"
              height="1254"
            />
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 2, ease: "easeOut" }
            }
            id="home-title"
            className="home-wordmark"
          >
            CLEARLINE

            <motion.span
              aria-hidden="true"
              initial={{ left: "2%", opacity: 0 }}
              animate={
                prefersReducedMotion
                  ? { left: "94%", opacity: 0 }
                  : { left: "94%", opacity: [0, 1, 1, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      delay: 2.5,
                      duration: 2,
                      times: [0, 0.1, 0.9, 1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 5,
                    }
              }
              className="home-fuse-dot"
            />

            <motion.span
              aria-hidden="true"
              initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { delay: 4.5, duration: 0.5 }
              }
              className="home-wordmark-arrow"
            >
              <ChevronRight size={32} strokeWidth={3} />
            </motion.span>
          </motion.h1>

          <motion.div
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { delay: 2, duration: 1, ease: "easeInOut" }
            }
            className="home-underline"
          />

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { delay: 3, duration: 0.8 }
            }
            className="home-copy"
          >
            <p className="home-tagline">Connect. Automate. Advance.</p>
            <p className="home-supporting">
              Business should flow. We help clear the way.
            </p>
            <p className="home-description">
              Clearline improves processes, connects systems and automates
              repetitive work — giving your team better visibility, more time
              and a simpler way to get things done.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { delay: 3.5, duration: 0.8 }
            }
            className="home-actions"
          >
            <Link href="/systems" className="home-quick-link">
              <span>See how we help</span>
              <span className="home-quick-circle" aria-hidden="true">
                <ChevronRight size={17} strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/contact" className="home-quick-link">
              <span>Free business review</span>
              <span className="home-quick-circle" aria-hidden="true">
                <ChevronRight size={17} strokeWidth={1.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="home-outcomes" aria-labelledby="outcomes-title">
        <div className="home-outcomes-inner">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="home-outcomes-heading"
          >
            <p className="home-eyebrow">The Clearline difference</p>
            <h2 id="outcomes-title">What better looks like</h2>
          </motion.div>

          <div className="home-outcomes-grid">
            {outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  duration: 0.55,
                }}
                className="home-outcome"
              >
                <outcome.icon aria-hidden="true" size={25} strokeWidth={1.6} />
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}