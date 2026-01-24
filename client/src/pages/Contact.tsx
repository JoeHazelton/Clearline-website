import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 flex flex-col">
      <div className="flex-grow px-6 md:px-20 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-2">Get in</h2>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary text-glow">Touch</h2>
          </div>

          <div className="space-y-8 font-sans text-lg">
            <div className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
              <span data-testid="text-address">Maldon, Essex, United Kingdom</span>
            </div>
            
            <a href="mailto:Joe.hazelton@icloud.com" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors" data-testid="link-email">
              <Mail className="w-6 h-6 text-primary" />
              <span>Joe.hazelton@icloud.com</span>
            </a>
            
            <a href="tel:07710840036" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors" data-testid="link-phone">
              <Phone className="w-6 h-6 text-primary" />
              <span>07710 840036</span>
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all" data-testid="link-social-linkedin">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all" data-testid="link-social-facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all" data-testid="link-social-instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="h-[400px] bg-white/5 rounded-lg border border-white/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700"
        >
          {/* Map Placeholder with futuristic overlay */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39575.6429654157!2d0.6586046399434756!3d51.729789508216695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e8de51296d9f%3A0x7d06634c03494b8e!2sMaldon!5e0!3m2!1sen!2suk!4v1709900000000!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%)" }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            data-testid="iframe-map"
          />
          <div className="absolute inset-0 pointer-events-none border-[1px] border-primary/20 m-4 rounded-sm" />
          <div className="absolute bottom-8 right-8 bg-black/80 p-2 text-xs font-mono text-primary border border-primary/50">
            LOC: 51.730° N, 0.675° E
          </div>
        </motion.div>

      </div>
    </div>
  );
}
