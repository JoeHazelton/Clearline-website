import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFormData: FormFields = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const socialLinks = [
  {
    label: "Clearline on LinkedIn — opens in a new tab",
    href: "https://www.linkedin.com/company/clearlineio/",
    Icon: Linkedin,
  },
  {
    label: "Clearline on Facebook — opens in a new tab",
    href: "https://www.facebook.com/share/1FihvBa6d8/?mibextid=wwXIfr",
    Icon: Facebook,
  },
  {
    label: "Clearline on Instagram — opens in a new tab",
    href: "https://www.instagram.com/clearlineio/",
    Icon: Instagram,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormFields>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const isSubmitting = useRef(false);
  const leadTracked = useRef(false);

  const validateForm = (fields: FormFields): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Please enter your name.";
    if (!fields.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!fields.message.trim()) nextErrors.message = "Please tell us what you’d like to improve.";
    return nextErrors;
  };

  const updateField = (field: keyof FormFields, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (submissionStatus !== "idle") setSubmissionStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting.current) return;

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmissionStatus("idle");
      return;
    }

    isSubmitting.current = true;
    setIsSending(true);
    setSubmissionStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mnjywrjg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) throw new Error("Form submission was not accepted.");

      setSubmissionStatus("success");
      if (!leadTracked.current) {
        const pixelWindow = window as typeof window & {
          fbq?: (action: string, event: string) => void;
        };
        leadTracked.current = true;
        if (typeof pixelWindow.fbq === "function") {
          try {
            pixelWindow.fbq("track", "Lead");
          } catch {
            // Analytics must never change the confirmed form outcome.
          }
        }
      }
    } catch {
      setSubmissionStatus("error");
    } finally {
      isSubmitting.current = false;
      setIsSending(false);
    }
  };

  const fieldError = (field: keyof FormFields) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <main className="contact-page">
      <div className="contact-layout">
        <header className="contact-intro">
          <h1 className="contact-title">
            Free business <span>review</span>
          </h1>
          <p className="contact-intro-copy">
            Tell us what is slowing your business down. We’ll get in touch to understand your
            priorities and discuss practical ways to make work easier.
          </p>
          <p className="contact-reassurance">Free · Informal · No obligation</p>
        </header>

        <section className="contact-form-panel" aria-labelledby="contact-form-title">
          {submissionStatus === "success" ? (
            <div className="contact-success" role="status" aria-live="polite">
              <span className="contact-success-mark" aria-hidden="true">✓</span>
              <h2 id="contact-form-title">Thank you for getting in touch.</h2>
              <p>
                Your review request has been received. We’ll reply by email to arrange a short,
                informal conversation about your business.
              </p>
            </div>
          ) : (
            <>
              <div className="contact-panel-heading">
                <h2 id="contact-form-title">Tell us about your business</h2>
                <p>A few sentences is enough. You don’t need to know which service you need.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Your name <span aria-hidden="true">*</span>
                    <span className="contact-sr-only"> (required)</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={fieldError("name")}
                  />
                  {errors.name && <p className="contact-field-error" id="name-error" role="alert">{errors.name}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email address <span aria-hidden="true">*</span>
                    <span className="contact-sr-only"> (required)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={["email-helper", fieldError("email")].filter(Boolean).join(" ") || undefined}
                  />
                  <p className="contact-field-help" id="email-helper">
                    We’ll reply here to arrange a conversation.
                  </p>
                  {errors.email && <p className="contact-field-error" id="email-error" role="alert">{errors.email}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-company">Business name (optional)</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your business"
                    value={formData.company}
                    onChange={(event) => updateField("company", event.target.value)}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    What would you like to improve? <span aria-hidden="true">*</span>
                    <span className="contact-sr-only"> (required)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    autoComplete="off"
                    placeholder="Tell us a little about what’s happening…"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={["message-helper", fieldError("message")].filter(Boolean).join(" ") || undefined}
                    rows={4}
                  />
                  <p className="contact-field-help" id="message-helper">
                    For example: repetitive admin, reporting, disconnected systems, AI or team training.
                  </p>
                  {errors.message && <p className="contact-field-error" id="message-error" role="alert">{errors.message}</p>}
                </div>

                {submissionStatus === "error" && (
                  <p className="contact-submit-error" role="alert" aria-live="assertive">
                    Something went wrong. Please try again, or email{" "}
                    <a href="mailto:info@clear-line.io">info@clear-line.io</a>.
                  </p>
                )}

                <button className="contact-submit" type="submit" disabled={isSending}>
                  <span>{isSending ? "Sending…" : "Request my free review"}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <p className="contact-privacy-copy">We’ll use your details to respond to your enquiry.</p>
                {isSending && (
                  <p className="contact-sending" role="status" aria-live="polite">
                    Sending your request…
                  </p>
                )}
              </form>
            </>
          )}
        </section>

        <aside className="contact-next-panel" aria-labelledby="contact-next-title">
          <h2 id="contact-next-title">What happens next?</h2>
          <ol className="contact-steps">
            <li>
              <span className="contact-step-number">01</span>
              <div>
                <h3>We read your enquiry</h3>
                <p>We’ll look at what you’ve shared and the areas you’d like to improve.</p>
              </div>
            </li>
            <li>
              <span className="contact-step-number">02</span>
              <div>
                <h3>We arrange a conversation</h3>
                <p>We’ll reply by email to find a suitable time for a short, informal chat.</p>
              </div>
            </li>
            <li>
              <span className="contact-step-number">03</span>
              <div>
                <h3>We explore practical next steps</h3>
                <p>
                  Together, we’ll discuss where improvements could help and whether Clearline is
                  right for you.
                </p>
              </div>
            </li>
          </ol>

          <div className="contact-details">
            <div className="contact-email-block">
              <span className="contact-detail-label">Prefer to email?</span>
              <a href="mailto:info@clear-line.io">
                <Mail size={17} aria-hidden="true" />
                info@clear-line.io
              </a>
            </div>
            <p className="contact-location">
              <MapPin size={17} aria-hidden="true" />
              Based in Maldon, Essex.
            </p>
          </div>
        </aside>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-brand">
          <a className="contact-wordmark" href="/" aria-label="Clearline home">Clearline</a>
          <p>Connect. Automate. Advance.</p>
        </div>
        <nav className="contact-socials" aria-label="Clearline social media">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={19} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}
