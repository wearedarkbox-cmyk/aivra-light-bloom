import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text-animated">
                AivraA
              </h3>
              <p className="body-text max-w-sm">
                Where Intelligence Meets Imagination. Transforming businesses with cutting-edge AI solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/aivraa" 
                className="p-3 rounded-xl bg-primary-lavender/10 border border-primary-lavender/20 hover:bg-primary-lavender/20 transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5 text-primary-lavender" />
              </a>
              <a 
                href="https://linkedin.com/company/aivraa" 
                className="p-3 rounded-xl bg-primary-mint/10 border border-primary-mint/20 hover:bg-primary-mint/20 transition-colors duration-300"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary-mint" />
              </a>
              <a 
                href="https://github.com/aivraa" 
                className="p-3 rounded-xl bg-primary-sky/10 border border-primary-sky/20 hover:bg-primary-sky/20 transition-colors duration-300"
                aria-label="View our GitHub"
              >
                <Github className="h-5 w-5 text-primary-sky" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">
              Services
            </h4>
            <nav className="space-y-3">
              <a href="#services" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                AI Consulting
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                AI-Powered Marketing
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                SaaS Platforms
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                AI Automation
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">
              Company
            </h4>
            <nav className="space-y-3">
              <a href="#about" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                About Us
              </a>
              <a href="#case-studies" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                Case Studies
              </a>
              <a href="/careers" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                Careers
              </a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                Blog
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-lavender flex-shrink-0" />
                <a 
                  href="mailto:hello@aivraa.com" 
                  className="text-muted-foreground hover:text-primary-lavender transition-colors duration-300"
                >
                  hello@aivraa.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-mint flex-shrink-0" />
                <a 
                  href="tel:+15559876543" 
                  className="text-muted-foreground hover:text-primary-mint transition-colors duration-300"
                >
                  +1 (555) 987-6543
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-sky flex-shrink-0" />
                <span className="text-muted-foreground">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} AivraA. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-muted-foreground hover:text-primary-lavender transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient line */}
      <div className="h-1 bg-gradient-primary"></div>
    </footer>
  );
};

export default Footer;