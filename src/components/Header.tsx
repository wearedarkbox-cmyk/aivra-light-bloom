import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import aivraALogo from "@/assets/aivraa-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={aivraALogo} 
              alt="AivraA - AI Intelligence Meets Imagination" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#case-studies" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium">
              Case Studies
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#case-studies" 
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="hero" size="sm" className="w-fit">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;