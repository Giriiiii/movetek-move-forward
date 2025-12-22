import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Movetek handled our urgent air cargo shipment from Dubai to Frankfurt seamlessly. Their team's expertise in global logistics and competitive rates saved us time and money. The dedicated customer service kept us updated at every step. Highly recommend their air consolidation services!",
    author: "Michael Chen",
    role: "Supply Chain Director",
    company: "TechGlobal Industries",
  },
  {
    id: 2,
    content: "We needed to transport oversized machinery from Jebel Ali to Singapore, and Movetek delivered flawlessly. Their Ro-Ro and heavy lift solutions were efficient, and their project management team ensured safe, on-time delivery. Truly professional for out-of-gauge cargo!",
    author: "Sarah Williams",
    role: "Operations Manager",
    company: "Heavy Equipment Co.",
  },
  {
    id: 3,
    content: "For years, Movetek has been our go-to for land transport across Saudi Arabia and Oman. Their regional network is unmatched—fast, reliable, and cost-effective. They even handled a last-minute delivery of sensitive goods with zero delays. Exceptional service!",
    author: "Ahmed Hassan",
    role: "Logistics Coordinator",
    company: "Gulf Trading LLC",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-sky relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border border-ocean/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-ocean/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-ocean/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-ocean/10 text-ocean text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Movetek.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-strong p-6 sm:p-8 md:p-12">
            {/* Quote icon */}
            <Quote className="w-10 h-10 sm:w-16 sm:h-16 text-ocean/20 absolute top-4 right-4 sm:top-8 sm:right-8" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-ocean text-ocean" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-base sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 font-medium">
              "{testimonials[current].content}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
              <div>
                <div className="font-heading font-bold text-base sm:text-lg text-foreground">
                  {testimonials[current].author}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border-2 border-ocean/30 hover:border-ocean hover:bg-ocean hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border-2 border-ocean/30 hover:border-ocean hover:bg-ocean hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'w-8 bg-ocean' : 'w-2 bg-ocean/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
