import { Shield, Clock, Globe, Headphones, Award, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your cargo is fully insured with up to $500M coverage. We prioritize the safety of your shipments.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We understand the importance of timely deliveries. Our track record speaks for itself.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'With partners in 150+ countries, we can deliver your cargo anywhere in the world.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated customer service team is available around the clock to assist you.',
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Decades of expertise in international freight forwarding and logistics management.',
  },
  {
    icon: TrendingUp,
    title: 'Cost-Effective',
    description: 'Competitive rates without compromising on service quality or reliability.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Partner With Movetek?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine industry expertise, global reach, and personalized service to deliver exceptional logistics solutions that keep your business moving forward.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-8 rounded-2xl border border-transparent hover:border-ocean/20 hover:bg-card hover:shadow-medium transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-ocean to-ocean-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <reason.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
