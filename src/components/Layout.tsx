import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StarfieldBackground from "./StarfieldBackground";

const navLinks = [
  { to: "/jak-to-funguje", label: "Jak to funguje" },
  { to: "https://discord.gg/MGnNWkcqQf", label: "Komunita", external: true },
  { to: "/komiksy", label: "Komiksy" },
  { to: "/start", label: "O projektu" },
  { to: "/partneri", label: "Partneři" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <StarfieldBackground />
      {/* Fixed Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
        <div className="section-container flex items-center justify-between h-16">
          <Link to="/" className="font-display text-lg font-bold neon-text tracking-wider">
            HRA REALITY
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/5 ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://discord.gg/MGnNWkcqQf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm font-bold font-display bg-primary text-primary-foreground rounded-lg pulse-glow hover:brightness-110 transition-all"
            >
              DISCORD
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/30"
            >
              <div className="section-container py-4 flex flex-col gap-2">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-sm text-muted-foreground rounded-lg"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 text-sm rounded-lg ${
                        location.pathname === link.to ? "text-primary bg-primary/5" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <a
                  href="https://discord.gg/MGnNWkcqQf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-5 py-3 text-sm font-bold font-display text-center bg-primary text-primary-foreground rounded-lg"
                >
                  DISCORD
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="pt-16 relative z-10">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/30 mt-20">
        <div className="section-container py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm neon-text">HRA REALITY</p>
          <p className="text-xs text-muted-foreground">
            © 2026 Hra Reality. Pre-launch komunita.
          </p>
          <div className="flex gap-4">
            {navLinks.filter(l => !l.external).map((link) => (
              <Link key={link.to} to={link.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
