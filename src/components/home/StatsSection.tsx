import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Countries Served', prefix: '' },
  { value: 2, suffix: 'M+', label: 'Annual Shipments', prefix: '' },
  { value: 500, suffix: 'M', label: 'Cargo Insurance', prefix: '$' },
  { value: 15, suffix: '+', label: 'Years Experience', prefix: '' },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-ocean/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-2">
                {isVisible ? (
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  `${stat.prefix}0${stat.suffix}`
                )}
              </div>
              <div className="w-12 h-1 bg-ocean mx-auto mb-4 rounded-full" />
              <div className="text-primary-foreground/70 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple counter animation component
const CountUp = ({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default StatsSection;
