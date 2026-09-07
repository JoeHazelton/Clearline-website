import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Eye,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
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
    icon: Workflow,
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState(0);

  useLayoutEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const measure = () => setTitleWidth(title.getBoundingClientRect().width);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  const introMotion = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25, duration: 0.7, ease: "easeOut" as const },
      };

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
              src="/images/clearline/clearline-logo.png"
              alt="Clearline logo"
              width="1254"
              height="1254"
            />
          </motion.div>

          <div className="home-wordmark-wrap">
            <motion.h1
              ref={titleRef}
              id="home-title"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 2, ease: "easeOut" }
              }
              className="home-wordmark"
            >
              CLEARLINE
              <motion.span
                aria-hidden="true"
                initial={
                  prefersReducedMotion
                    ? { left: Math.max(titleWidth - 7, 0), opacity: 0 }
                    : { left: 0, opacity: 0 }
                }
                animate={
                  prefersReducedMotion
                    ? { left: Math.max(titleWidth - 7, 0), opacity: 0 }
                    : {
                        left: Math.max(titleWidth - 7, 0),
                        opacity: [0, 1, 1, 0],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        delay: 2.5,
                        duration: 2,
                        times: [0, 0.1, 0.9, 1],
                        ease: "easeInOut",
                      }
                }
                className="home-fuse-dot"
              />
            </motion.h1>

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
              <ArrowRight size={30} strokeWidth={2.4} />
            </motion.span>
          </div>

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

          <motion.div {...introMotion} className="home-copy">
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
            {...introMotion}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { delay: 0.4, duration: 0.7, ease: "easeOut" }
            }
            className="home-actions"
          >
            <Link href="/contact" className="home-button home-button-primary">
              Request a Free Business Review
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
            <Link href="/systems" className="home-button home-button-secondary">
              See How We Help
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="home-outcomes" aria-labelledby="outcomes-title">
        <div className="home-outcomes-inner">
          <div className="home-artwork">
            <div className="home-artwork-soft-edge" aria-hidden="true" />
            <img
              src="/images/clearline/clearline-journey-1600.webp"
              srcSet="/images/clearline/clearline-journey-640.webp 640w, /images/clearline/clearline-journey-960.webp 960w, /images/clearline/clearline-journey-1280.webp 1280w, /images/clearline/clearline-journey-1600.webp 1600w, /images/clearline/clearline-journey.webp 2560w"
              sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1100px) 48vw, 560px"
              alt="A glowing road through a mountain landscape with five stages from discovery to improvement"
              width="2560"
              height="3200"
              loading="lazy"
            />
          </div>

          <div className="home-outcome-list">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="home-eyebrow">The Clearline difference</p>
              <h2 id="outcomes-title">What better looks like</h2>
            </motion.div>

            <div className="home-outcomes-stack">
              {outcomes.map((outcome, index) => (
                <motion.article
                  key={outcome.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    duration: 0.55,
                  }}
                  className="home-outcome"
                >
                  <outcome.icon aria-hidden="true" size={24} strokeWidth={1.8} />
                  <div>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
