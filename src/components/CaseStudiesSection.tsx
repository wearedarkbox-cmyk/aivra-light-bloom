import { ArrowUpRight, Users, DollarSign, Clock } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Revenue Optimization",
    company: "TechCorp Solutions",
    industry: "E-commerce",
    description: "Implemented AI-driven personalization engine that transformed customer experience and drove unprecedented growth.",
    results: [
      { icon: DollarSign, label: "Revenue Increase", value: "340%" },
      { icon: Users, label: "User Engagement", value: "89%" },
      { icon: Clock, label: "Time to Market", value: "60% Faster" }
    ],
    tags: ["Machine Learning", "Personalization", "Analytics"],
    gradient: "from-primary-lavender/20 to-primary-sky/20"
  },
  {
    title: "Healthcare Diagnostics AI",
    company: "MedTech Innovations",
    industry: "Healthcare",
    description: "Developed advanced AI diagnostic system that improves accuracy and reduces diagnosis time for critical conditions.",
    results: [
      { icon: Users, label: "Accuracy Rate", value: "96.5%" },
      { icon: Clock, label: "Diagnosis Time", value: "75% Reduction" },
      { icon: DollarSign, label: "Cost Savings", value: "$2.4M" }
    ],
    tags: ["Computer Vision", "Deep Learning", "Healthcare"],
    gradient: "from-primary-mint/20 to-primary-lavender/20"
  },
  {
    title: "Supply Chain Optimization",
    company: "Global Logistics Inc",
    industry: "Logistics",
    description: "Created intelligent supply chain management system that predicts demand and optimizes distribution networks.",
    results: [
      { icon: Clock, label: "Delivery Speed", value: "45% Faster" },
      { icon: DollarSign, label: "Cost Reduction", value: "28%" },
      { icon: Users, label: "Customer Satisfaction", value: "94%" }
    ],
    tags: ["Predictive Analytics", "Optimization", "IoT"],
    gradient: "from-primary-sky/20 to-primary-mint/20"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="case-studies">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-sky/10 border border-primary-sky/20">
            <span className="text-sm font-medium text-primary-sky">Case Studies</span>
          </div>
          
          <h2 className="headline-text max-w-3xl mx-auto">
            Real Results, Real Impact
          </h2>
          
          <p className="body-large max-w-2xl mx-auto">
            See how we've helped businesses across industries harness the power of AI to achieve extraordinary results and competitive advantages.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${study.gradient} p-8`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Study Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-primary-lavender bg-white/80 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-lavender transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-foreground">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-primary-lavender">
                          {study.company}
                        </p>
                        <p className="body-text">
                          {study.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-medium text-muted-foreground bg-white/60 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Key Results
                    </h4>
                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={result.label} className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-white/80">
                            <result.icon className="h-4 w-4 text-primary-lavender" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold gradient-text-animated">
                              {result.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Ready to Write Your Success Story?
            </h3>
            <p className="body-text">
              Join the companies already transforming their businesses with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Discuss Your Project
              </a>
              <a 
                href="mailto:hello@aivraa.com" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-foreground rounded-xl font-semibold hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;