import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Reliable International Freight Forwarding',
  'Cost-Effective Customer-Tailored Solutions',
  'Dynamic and Experienced Team',
  'Quality and Consistency Guaranteed',
  'Real-Time Shipment Tracking',
  'Global Network of Partners',
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-sky">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Global logistics operations"
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-primary-foreground/95 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="font-heading font-bold text-lg sm:text-2xl text-ocean">150+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg sm:text-2xl text-ocean">2M+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Shipments</div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg sm:text-2xl text-ocean">$500M</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Cargo Insured</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-ocean/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About Movetek
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Movetek is a well-experienced international freight forwarding company providing service-oriented and cost-effective solutions. Our services are planned and tailored to meet customer-specific requirements. We are reputed for reliability, quality, and consistency in our services.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Managed by a compact, dynamic, vibrant, and accomplished team, we always live up to the ever-increasing demand for quality and superior service. We strive to offer the best reliable and time-oriented service, and our professionals ensure follow-up on each and every movement.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ocean flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="ocean" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
