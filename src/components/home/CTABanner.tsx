import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean via-ocean to-navy" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Ship With Confidence?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Get a free quote today and discover why hundreds of businesses trust Movetek for their global logistics needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-ocean hover:bg-primary-foreground/90 border-0 group">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+971582348995">
              <Button variant="heroOutline" size="xl" className="group">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
