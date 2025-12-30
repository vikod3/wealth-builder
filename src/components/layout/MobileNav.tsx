import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground/70 transition-colors hover:text-foreground"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] z-40 bg-background/95 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[72px] z-50 border-b border-border bg-background px-6 py-6"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="block py-2 text-lg font-normal text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA Button */}
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  to="/signin"
                  onClick={closeMenu}
                  className="block w-full rounded-md bg-foreground px-5 py-3 text-center text-base font-medium text-background transition-opacity hover:opacity-90"
                >
                  Sign In
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;