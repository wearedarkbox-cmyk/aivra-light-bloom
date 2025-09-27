import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-mint/10 border border-primary-mint/20">
            <span className="text-sm font-medium text-primary-mint">Get In Touch</span>
          </div>
          
          <h2 className="headline-text max-w-3xl mx-auto">
            Let's Build the Future Together
          </h2>
          
          <p className="body-large max-w-2xl mx-auto">
            Ready to transform your business with AI? We'd love to hear about your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="glass-card rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="rounded-xl border-2 border-border/50 focus:border-primary-lavender/50 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="rounded-xl border-2 border-border/50 focus:border-primary-lavender/50 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="rounded-xl border-2 border-border/50 focus:border-primary-lavender/50 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    className="rounded-xl border-2 border-border/50 focus:border-primary-lavender/50 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-border/50 focus:border-primary-lavender/50 bg-white/50 backdrop-blur-sm text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-consulting">AI Consulting</option>
                    <option value="ai-marketing">AI-Powered Marketing</option>
                    <option value="saas-platforms">SaaS Platforms</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    required
                    className="rounded-xl border-2 border-border/50 focus:border-primary-lavender/50 bg-white/50 backdrop-blur-sm resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Contact methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="p-3 rounded-xl bg-primary-lavender/10 border border-primary-lavender/20">
                    <Mail className="h-6 w-6 text-primary-lavender" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email Us</div>
                    <div className="text-muted-foreground">hello@aivraa.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="p-3 rounded-xl bg-primary-mint/10 border border-primary-mint/20">
                    <Phone className="h-6 w-6 text-primary-mint" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Call Us</div>
                    <div className="text-muted-foreground">+1 (555) 987-6543</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="p-3 rounded-xl bg-primary-sky/10 border border-primary-sky/20">
                    <MapPin className="h-6 w-6 text-primary-sky" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Visit Us</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass-card rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
                Why Choose AivraA?
              </h4>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text-animated">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary-mint">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary-sky">5★</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary-lavender">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-3xl p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Prefer a Quick Call?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a 15-minute consultation to discuss your AI needs.
              </p>
              <Button variant="mint" size="lg" className="w-full">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;