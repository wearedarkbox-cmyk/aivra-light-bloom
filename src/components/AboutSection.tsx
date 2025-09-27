import aboutVisual from "@/assets/about-visual.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Visual */}
          <div className="relative animate-slide-up">
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-secondary opacity-10 blur-2xl rounded-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Main visual container */}
              <div className="relative glass-card rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
                <img 
                  src={aboutVisual} 
                  alt="AI consulting services visualization showing connected neural networks and data flows"
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text-animated">500+</div>
                  <div className="text-xs text-muted-foreground font-medium">AI Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-mint">99%</div>
                  <div className="text-xs text-muted-foreground font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-lavender/10 border border-primary-lavender/20">
                <span className="text-sm font-medium text-primary-lavender">About AivraA</span>
              </div>
              
              <h2 className="headline-text">
                Reimagining the Future with AI
              </h2>
              
              <div className="space-y-4">
                <p className="body-large">
                  We're not just another AI company. We're visionaries, innovators, and strategic partners who understand that artificial intelligence isn't just about technology—it's about transformation.
                </p>
                
                <p className="body-text">
                  Our team of AI experts, data scientists, and strategic consultants work closely with forward-thinking organizations to unlock the true potential of artificial intelligence. From startups looking to disrupt industries to enterprises seeking to optimize operations, we deliver solutions that drive real results.
                </p>
                
                <p className="body-text">
                  Every project we undertake is guided by our core belief: the most powerful AI solutions are those that seamlessly blend cutting-edge technology with human creativity and strategic thinking.
                </p>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold gradient-text-animated">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary-mint">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Countries Served</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary-sky">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Support</div>
              </div>
            </div>

            {/* Mission statement */}
            <div className="pt-6 pl-6 border-l-4 border-gradient-primary">
              <p className="body-text italic">
                "Our mission is to democratize AI innovation, making advanced artificial intelligence solutions accessible to businesses of all sizes while maintaining the highest standards of ethics and transparency."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;