import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Features", href: "#", hasDropdown: true },
  { label: "Company", href: "#" },
  { label: "Blogs", href: "#" },
];

const BlankNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/60 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-16 lg:px-28">
        {/* Logo */}
        <div className="flex items-center gap-8 lg:gap-14">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2.5 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-[3px] px-2.5 py-1 text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/signin"
            className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-foreground px-6 py-3 text-base font-medium text-background shadow-sm transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-foreground/70 transition-colors hover:text-foreground lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] z-40 bg-background/95 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[72px] z-50 border-b border-border bg-background px-6 py-6 lg:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 py-2 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA Buttons */}
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <Link
                  to="/signin"
                  onClick={closeMobileMenu}
                  className="block py-2 text-center text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  onClick={closeMobileMenu}
                  className="block w-full rounded-full bg-foreground px-6 py-3 text-center text-base font-medium text-background transition-opacity hover:opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default BlankNavbar;
