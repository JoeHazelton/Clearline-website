import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Systems", path: "/systems" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-2 text-primary hover:text-white transition-colors mix-blend-difference cursor-pointer"
        aria-label="Toggle Menu"
        data-testid="button-menu-toggle"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl md:text-4xl font-display uppercase tracking-widest hover:text-primary transition-colors cursor-pointer ${
                      location === item.path ? "text-primary text-glow" : "text-white/50"
                    }`}
                    data-testid={`link-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
