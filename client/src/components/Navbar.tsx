import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, navLinks } from "@/lib/mockData";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

function NavDropdown({ item, isOpen, onToggle }: { item: NavItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
        data-testid={`nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 min-w-48 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg rounded-md shadow-lg border border-white/20 dark:border-zinc-700/50 overflow-hidden z-50"
          >
            {item.dropdown.map((subItem) => (
              <Link key={subItem.href} href={subItem.href}>
                <span
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  data-testid={`nav-subitem-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {subItem.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLink({ item }: { item: NavItem }) {
  return (
    <Link href={item.href}>
      <span
        className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-primary transition-colors cursor-pointer"
        data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {item.label}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const renderNavItem = (item: NavItem) => {
    if (item.dropdown) {
      return (
        <NavDropdown
          key={item.label}
          item={item}
          isOpen={openDropdown === item.label}
          onToggle={() => handleDropdownToggle(item.label)}
        />
      );
    }
    return <NavLink key={item.label} item={item} />;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-white/20 dark:border-zinc-700/30 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="hidden lg:flex items-center flex-1 justify-end gap-1">
              {navLinks.left.map(renderNavItem)}
            </div>

            <Link href="/">
              <div className="flex items-center justify-center mx-8 cursor-pointer" data-testid="nav-logo">
                <img
                  src={images.logo}
                  alt="MGOK Stąporków"
                  className="h-14 w-auto object-contain dark:invert"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center flex-1 gap-1">
              {navLinks.right.map(renderNavItem)}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg border-b border-white/20 dark:border-zinc-700/30 lg:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {[...navLinks.left, ...navLinks.right].map((item) => (
                <div key={item.label} className="py-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full text-left font-medium text-foreground"
                        data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link key={subItem.href} href={subItem.href}>
                                <span
                                  className="block py-1 text-sm text-muted-foreground hover:text-primary cursor-pointer"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <span
                        className="block font-medium text-foreground hover:text-primary cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
