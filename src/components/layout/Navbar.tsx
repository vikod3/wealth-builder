import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import NavDivider from "./NavDivider";
import MobileNav from "./MobileNav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-border bg-background/60 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="LI Logo"
            className="h-10 w-16 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-8">
              <Link
                to={item.href}
                className="nav-link text-base font-normal leading-6"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && <NavDivider />}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          to="/signin"
          className="hidden rounded-md bg-foreground px-5 py-2 text-base font-medium leading-6 text-background transition-opacity hover:opacity-90 lg:block"
        >
          Sign In
        </Link>

        {/* Mobile Navigation */}
        <MobileNav navItems={navItems} />
      </div>
    </header>
  );
};

export default Navbar;