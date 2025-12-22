import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/50 to-ocean/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-ocean/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-ocean/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean/20 rounded-full border border-ocean/30 animate-fade-up">
              <span className="w-2 h-2 bg-ocean rounded-full animate-pulse" />
              <span className="text-sm font-medium text-ocean-light">
                Trusted by 500+ Companies Worldwide
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight animate-fade-up animation-delay-100">
            Powering Your Supply Chain {' '}
              <span className="text-ocean-light">Supply</span> Chain{' '}
              <span className="text-ocean-light">Forward</span> 
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
              MoveTek Shipping and logistics FZE is a leading shipping and forwarding company based in the United Arab Emirates (UAE), specializing in seamless logistics solutions for both regional and international markets. With a robust network of strategic partners, state-of-the-art technology, and a highly experienced team, we are dedicated to providing fast, reliable, and cost-effective shipping services for businesses of all sizes.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-300">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-20 sm:h-24 md:h-28">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
