import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-lavender/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-mint/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary-sky/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="display-text">
                Where Intelligence Meets Imagination
              </h1>
              
              <div className="space-y-4">
                <p className="body-large max-w-2xl">
                  AI consulting, SaaS, and marketing solutions for startups, enterprises, agencies, and creators.
                </p>
                <p className="body-text max-w-xl">
                  Transform your business with cutting-edge artificial intelligence strategies that drive growth, efficiency, and innovation.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="glass" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-4">
              <p className="text-sm text-muted-foreground font-medium">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-muted-foreground">
                <span className="text-sm font-semibold">500+ Projects</span>
                <span className="text-sm font-semibold">50+ Countries</span>
                <span className="text-sm font-semibold">99% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main image */}
              <div className="relative glass-card rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
                <img 
                  src={heroVisual} 
                  alt="AI-powered business solutions visualization with flowing 3D waves and holographic elements"
                  className="w-full h-auto rounded-2xl"
                  loading="eager"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-mint/80 rounded-2xl glass-card flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-sky/80 rounded-2xl glass-card flex items-center justify-center animate-float">
                <span className="text-white font-bold text-xs">Smart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-lavender rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;