import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mnjywrjg", {
        method: "POST",
        headers: {
          
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Fire Meta Pixel Lead event on successful submission
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      toast({
        title: "Message Sent — we'll be in touch shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 flex flex-col pb-12">
      <div className="flex-grow px-6 md:px-20 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div className="whitespace-nowrap">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
              Get in <span className="text-primary text-glow">Touch</span>
            </h2>
          </div>

          <div className="space-y-6 font-sans text-base">
            <div className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
              <span data-testid="text-address">
                Maldon, Essex, United Kingdom
              </span>
            </div>

            <a
              href="mailto:info@clear-line.io"
              className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>info@clear-line.io</span>
            </a>

            <a
              href="tel:07710840036"
              className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>07710 840036</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-2.5 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
              data-testid="link-social-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2.5 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
              data-testid="link-social-facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2.5 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
              data-testid="link-social-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="h-[250px] bg-white/5 rounded-lg border border-white/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 w-full"
          >
            {/* Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39575.6429654157!2d0.6586046399434756!3d51.729789508216695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e8de51296d9f%3A0x7d06634c03494b8e!2sMaldon!5e0!3m2!1sen!2suk!4v1709900000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) contrast(80%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              data-testid="iframe-map"
            />
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-display font-semibold text-white/90 mb-3">
              What Happens Next?
            </h3>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Once we receive your enquiry, we’ll review your requirements and arrange an initial conversation to understand your current processes, challenges, and goals. If there’s a good fit, we’ll outline practical recommendations and potential next steps.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-white/90 mb-2">
              Contact / Business Review Request
            </h3>
            <p className="text-sm text-white/50 font-sans">
              Tell us about the tasks that slow you down. What inefficiencies
              are holding your business back?
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/60 font-sans">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-black/20 border-white/10 focus:border-primary text-white"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm text-white/60 font-sans"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-black/20 border-white/10 focus:border-primary text-white"
                placeholder="query@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm text-white/60 font-sans"
              >
                Company Name (Optional)
              </label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="bg-black/20 border-white/10 focus:border-primary text-white"
                placeholder="Your company"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="interest"
                className="text-sm text-white/60 font-sans"
              >
                Area of Interest (Optional)
              </label>
              <select
                id="interest"
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
                className="flex h-10 w-full rounded-md border bg-black/20 border-white/10 focus:border-primary text-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled hidden>
                  Select an area...
                </option>
                <option
                  value="AI Integration"
                  className="bg-zinc-900 text-white"
                >
                  AI Integration
                </option>
                <option
                  value="Business Process Review"
                  className="bg-zinc-900 text-white"
                >
                  Business Process Review
                </option>
                <option
                  value="Workflow Automation"
                  className="bg-zinc-900 text-white"
                >
                  Workflow Automation
                </option>
                <option
                  value="Reporting & Dashboards"
                  className="bg-zinc-900 text-white"
                >
                  Reporting & Dashboards
                </option>
                <option
                  value="Microsoft 365"
                  className="bg-zinc-900 text-white"
                >
                  Microsoft 365
                </option>
                <option value="Power BI" className="bg-zinc-900 text-white">
                  Power BI
                </option>
                <option
                  value="Power Automate"
                  className="bg-zinc-900 text-white"
                >
                  Power Automate
                </option>
                <option value="Power Apps" className="bg-zinc-900 text-white">
                  Power Apps
                </option>
                <option
                  value="General Enquiry"
                  className="bg-zinc-900 text-white"
                >
                  General Enquiry
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm text-white/60 font-sans flex flex-col gap-1"
              >
                <span>Message</span>
                <span className="text-xs text-white/40 italic">
                  Provide a brief overview of your current processes,
                  challenges, or goals and we'll review how Clearline may be
                  able to help.
                </span>
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-black/20 border-white/10 focus:border-primary text-white min-h-[120px]"
                placeholder="How can we help?"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-black hover:bg-cyan-400 font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 mr-2" />
              {isLoading ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </form>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
