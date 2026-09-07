import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isHome = location === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How We Help", path: "/systems" },
    { name: "Business Review", path: "/contact" },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        ref={closeButtonRef}
        className={`site-menu-toggle ${isHome ? "site-menu-toggle-home" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        data-testid="button-menu-toggle"
      >
        {isOpen ? <X size={29} /> : <Menu size={29} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className={`site-menu-panel ${isHome ? "site-menu-panel-home" : ""}`}
          >
            <nav className="flex flex-col gap-6 text-center">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`site-menu-link ${
                    location === item.path ? "site-menu-link-active" : ""
                  }`}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
