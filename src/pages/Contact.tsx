import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255),
  phone: z.string().trim().max(20, 'Phone number is too long').optional(),
  subject: z.string().trim().min(1, 'Subject is required').max(200),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+971 58 234 8995',
    link: 'tel:+971582348995',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@movetek.com',
    link: 'mailto:info@movetek.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Business Bay, Dubai, UAE',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Sun - Thu: 9:00 AM - 6:00 PM',
    link: '#',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you shortly.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up animation-delay-200">
              Have questions about our services? Need a quote? Our team is here to help you with all your logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following channels. We typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ocean transition-colors">
                      <info.icon className="w-6 h-6 text-ocean group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">
                        {info.content}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send?phone=971582348995"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-green-500 text-primary-foreground py-4 px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-medium border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={errors.subject ? 'border-destructive' : ''}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your shipping needs..."
                      rows={6}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="ocean"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509736789!2d55.26427997538431!3d25.185610677715163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cb99ad0f77%3A0x4f01460ce4d82d5f!2sBusiness%20Bay!5e0!3m2!1sen!2sae!4v1703244000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Movetek Office Location"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
      </section>
    </Layout>
  );
};

export default Contact;
