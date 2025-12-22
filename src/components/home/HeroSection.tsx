import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean/20 rounded-full border border-ocean/30 animate-fade-up">
              <span className="w-2 h-2 bg-ocean rounded-full animate-pulse" />
              <span className="text-sm font-medium text-ocean-light">
                Trusted by 500+ Companies Worldwide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight animate-fade-up animation-delay-100">
              Your Trusted Partner for{' '}
              <span className="text-ocean-light">Reliable</span> and{' '}
              <span className="text-ocean-light">Tailored</span> Freight Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed animate-fade-up animation-delay-200">
            Movetek Shipping is a leading shipping and forwarding company based in the United Arab Emirates (UAE), specializing in seamless logistics solutions for both regional and international markets. With a robust network of strategic partners, state-of-the-art technology, and a highly experienced team, we are dedicated to providing fast, reliable, and cost-effective shipping services for businesses of all sizes.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">

            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up animation-delay-400">
            {[
              { value: '232+', label: 'Clients' },
              { value: '521', label: 'Projects' },
              { value: '1453', label: 'Shipments' },
              { value: '32+', label: 'Team Members' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/10 transition-colors"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-ocean-light mb-2">
                  {stat.value}
                </div>
                <div className="w-12 h-1 bg-ocean mx-auto mb-3 rounded-full" />
                <div className="text-primary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
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
