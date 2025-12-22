import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Eye, Heart, Users, Award, Globe, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make is guided by our commitment to customer satisfaction and success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every shipment, every interaction, and every solution we deliver.',
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Transparency and honesty are the foundation of our relationships with clients and partners.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We continuously improve our services through technology and innovative logistics solutions.',
  },
];

const milestones = [
  { year: '2008', title: 'Company Founded', description: 'Started operations in Dubai with a small but dedicated team.' },
  { year: '2012', title: 'Regional Expansion', description: 'Expanded services across the GCC region.' },
  { year: '2016', title: 'Global Network', description: 'Established partnerships in over 100 countries.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched real-time tracking and digital platforms.' },
  { year: '2024', title: '150+ Countries', description: 'Now serving clients in over 150 countries worldwide.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-ocean/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-ocean/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-ocean/20 text-ocean-light text-sm font-semibold rounded-full mb-4 animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
              Your Partner in Global Logistics Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up animation-delay-200">
              With over 15 years of experience, Movetek has established itself as a trusted leader in international freight forwarding and logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Movetek is a well-experienced international freight forwarding company providing service-oriented and cost-effective solutions. Our services are planned and tailored to meet customer-specific requirements. We are reputed for reliability, quality, and consistency in our services.
                </p>
                <p>
                  Managed by a compact, dynamic, vibrant, and accomplished team, we always live up to the ever-increasing demand for quality and superior service. Our professionals always ensure follow-up on each and every movement, guaranteeing peace of mind for our clients.
                </p>
                <p>
                  From humble beginnings in Dubai, we have grown to serve clients in over 150 countries, handling millions of shipments annually. Our success is built on the trust our clients place in us and our unwavering commitment to exceeding their expectations.
                </p>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                alt="Movetek logistics operations"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute -bottom-4 left-4 sm:-bottom-8 sm:-left-8 bg-ocean text-primary-foreground p-4 sm:p-6 rounded-2xl shadow-strong">
                <div className="font-heading font-bold text-2xl sm:text-4xl">15+</div>
                <div className="text-sm sm:text-base text-primary-foreground/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-sky">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-2xl shadow-medium">
              <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-ocean" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional freight forwarding and logistics solutions that exceed customer expectations through innovation, reliability, and personalized service. We aim to be the most trusted partner for businesses seeking seamless global transportation of goods.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl shadow-medium">
              <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-ocean" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most preferred logistics partner, recognized for our commitment to excellence, technological innovation, and sustainable practices. We envision a future where global trade flows seamlessly, connecting businesses and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide every decision we make and every interaction we have with our clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl border border-border hover:border-ocean/30 hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-ocean group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-ocean/20 text-ocean-light text-sm font-semibold rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-ocean/30 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-navy-light p-4 sm:p-6 rounded-2xl inline-block w-full md:w-auto">
                      <div className="font-heading font-bold text-ocean-light text-xl sm:text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-bold text-primary-foreground text-lg sm:text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-ocean rounded-full relative z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Movetek for their global logistics needs.
          </p>
          <Link to="/contact">
            <Button variant="ocean" size="xl" className="group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
