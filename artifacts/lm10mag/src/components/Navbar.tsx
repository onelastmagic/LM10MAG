import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hero", href: "#hero" },
    { name: "Lore", href: "#lore" },
    { name: "Legacy", href: "#legacy" },
    { name: "Chaos", href: "#chaos" },
    { name: "Museum", href: "#museum" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "How to Buy", href: "#how-to-buy" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent hover:opacity-80 transition-opacity"
        >
          $LM10MAG
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-[0_0_15px_rgba(255,191,0,0.4)]">
            <a href="#how-to-buy">Buy Now</a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 py-4 px-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-foreground py-2 border-b border-border/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
