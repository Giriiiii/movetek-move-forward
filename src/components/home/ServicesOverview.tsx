import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Warehouse, FileCheck, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Time-sensitive deliveries worldwide with express 24-hour delivery, temperature-controlled cargo, and customs clearance included.',
    highlight: 'Avg. Delivery: 1-3 Days',
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective bulk transport solutions with full container (FCL) & groupage (LCL), port-to-port or door-to-door options.',
    highlight: '500+ Vessel Partners',
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description: 'Comprehensive road logistics network featuring full truckload (FTL), less than truckload (LTL), and real-time GPS tracking.',
    highlight: '150+ Local Hubs',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Secure storage, inventory management, and distribution with climate control and value-added services like packing/labeling.',
    highlight: 'Climate Controlled',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    description: 'Efficient customs clearance and compliance across borders. We manage duties, documentation, and last-mile delivery.',
    highlight: 'Hassle-Free Import/Export',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Seamless coordination of cross-border logistics leveraging our worldwide network and local expertise in every region.',
    highlight: '150+ Countries',
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4 animate-fade-up">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            At <strong className="text-foreground">MOVETEK</strong> we specialize in international freight forwarding, project cargo logistics, air chartering, and cross-trade movements complemented by customs brokerage and door-to-door delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-ocean/30 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-ocean group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-ocean">
                  {service.highlight}
                </span>
                <ArrowRight className="w-5 h-5 text-ocean opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up">
          <Link to="/services">
            <Button variant="ocean" size="lg" className="group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
