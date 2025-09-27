import { Brain, Zap, Settings, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic AI implementation roadmaps, feasibility studies, and custom AI solution architecture for your business transformation.",
    features: ["AI Strategy Development", "Technical Feasibility Analysis", "ROI Optimization", "Implementation Planning"],
    color: "primary-lavender"
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Marketing",
    description: "Intelligent marketing automation, predictive analytics, and personalized customer experiences that drive growth.",
    features: ["Predictive Analytics", "Customer Segmentation", "Campaign Optimization", "Content Personalization"],
    color: "primary-mint"
  },
  {
    icon: Settings,
    title: "SaaS Platforms",
    description: "Custom SaaS solutions with built-in AI capabilities, seamless integrations, and scalable architecture.",
    features: ["Custom Development", "API Integrations", "Cloud Architecture", "Performance Optimization"],
    color: "primary-sky"
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Streamline operations with intelligent automation solutions that reduce costs and increase efficiency.",
    features: ["Process Automation", "Workflow Optimization", "Quality Assurance", "Performance Monitoring"],
    color: "primary-lavender"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-lavender/10 border border-primary-lavender/20">
            <span className="text-sm font-medium text-primary-lavender">Our Services</span>
          </div>
          
          <h2 className="headline-text max-w-3xl mx-auto">
            Comprehensive AI Solutions for Every Business Need
          </h2>
          
          <p className="body-large max-w-2xl mx-auto">
            From strategic consulting to full-scale implementation, we provide end-to-end AI solutions that transform how you operate, engage, and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card rounded-3xl p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`service-icon p-4 rounded-2xl bg-${service.color}/10 border border-${service.color}/20 transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-foreground transition-colors duration-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary-lavender transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="body-text">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="body-text mb-6">
              Let's discuss how our AI solutions can drive growth and innovation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your AI Journey
              </a>
              <a 
                href="#case-studies" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-foreground rounded-xl font-semibold hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;