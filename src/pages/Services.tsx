import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Ship, 
  Truck, 
  Warehouse, 
  FileCheck, 
  Globe, 
  Package, 
  RefreshCw,
  Anchor,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'International Freight Forwarding',
    description: 'Expert coordination of global shipments via air, sea, or land. We handle documentation, customs compliance, and end-to-end logistics for seamless, reliable cargo movement.',
    features: ['Air freight expertise with executive level leadership', 'Competitive rates with major global carriers', 'Dedicated customer service', 'Global chartering options'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Package,
    title: 'Project Cargo Movements',
    description: 'Specialized handling of oversized, heavy, or complex shipments for industrial projects. Tailored solutions include engineering support, route planning, and regulatory compliance.',
    features: ['Door to door movement', 'In gauge, out of gauge cargo', 'Project management team', 'Heavy lift & break bulk cargo'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Plane,
    title: 'Air Chartering',
    description: 'Dedicated aircraft services for urgent, high-value, or sensitive cargo. Flexible, fast, and secure global air freight solutions tailored to your timelines.',
    features: ['Express 24-hour delivery', 'Temperature-controlled cargo', 'Customs clearance included', 'Real-time tracking'],
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: RefreshCw,
    title: 'Cross Trade Movements',
    description: 'Third-country logistics management, connecting shipments between two nations without direct origin involvement. Streamlined routing to reduce costs and delays.',
    features: ['Multi-country coordination', 'Cost optimization', 'Reduced transit times', 'Regulatory expertise'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: FileCheck,
    title: 'Customs Brokerage & Delivery',
    description: 'Efficient customs clearance and compliance across borders. We manage duties, documentation, and last-mile delivery for hassle-free import/export.',
    features: ['Expert documentation handling', 'Duty management', 'Compliance assurance', 'Last-mile delivery'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Globe,
    title: 'Door to Door Service',
    description: 'End-to-end logistics from pickup to final delivery. Real-time tracking and multi-modal transport ensure cargo arrives safely, on time, anywhere.',
    features: ['Complete visibility', 'Multi-modal transport', 'On-time guarantee', 'Insurance coverage'],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Ship,
    title: 'Sea Cargo',
    description: 'Comprehensive sea cargo solutions with NVOCC services, FCL/LCL shipping, refrigerated cargo transport, and in-gauge/out-gauge handling.',
    features: ['Full container (FCL) shipping', 'Groupage (LCL) options', 'Refrigerated containers', '500+ vessel partners'],
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description: 'Comprehensive road logistics network with temperature-controlled options across the GCC countries with very economical and fast services.',
    features: ['Full Truckload (FTL)', 'Less Than Truckload (LTL)', 'GPS tracking', 'GCC coverage'],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Warehouse,
    title: 'Storage & Logistics',
    description: 'Secure warehousing, inventory management, and distribution. Our facilities offer climate control, real-time tracking, and value-added services.',
    features: ['Climate-controlled facilities', 'Inventory management', 'Packing & labeling', 'Distribution services'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up animation-delay-200">
              From air cargo to sea freight, warehousing to customs clearance, we provide end-to-end logistics solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground">
              At <strong className="text-foreground">MOVETEK</strong> we specialize in international freight forwarding, project cargo logistics, air chartering, and cross-trade movements. Our services are complemented by customs brokerage, door-to-door delivery, and multinational transport operations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-strong group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-ocean rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-ocean flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="ocean" className="group">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean via-ocean to-navy" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Our team of experts can design a tailored logistics solution that fits your specific requirements and budget.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-ocean hover:bg-primary-foreground/90 border-0 group">
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
