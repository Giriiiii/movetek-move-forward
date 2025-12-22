import { Link } from 'react-router-dom';
import { Anchor, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <span className="font-heading font-bold text-2xl tracking-tight">
                MOVETEK
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for reliable and tailored freight solutions. We deliver excellence in global logistics with over 15 years of experience.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/80 hover:text-ocean-light transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Air Freight', 'Sea Freight', 'Land Transport', 'Warehousing', 'Customs Clearance', 'Project Cargo'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-ocean-light transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
SP City Free Zone, Sharjah, UAE
<br />
                  United Arab Emirates
                </span>
              </li>
              <li>
                <a href="tel:+971523258175" className="flex items-center gap-3 text-primary-foreground/80 hover:text-ocean-light transition-colors">
                  <Phone className="w-5 h-5 text-ocean" />
                  +971 52 3258 175
                </a>
              </li>
              <li>
                <a href="mailto:sales@movetekshipping.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-ocean-light transition-colors">
                  <Mail className="w-5 h-5 text-ocean" />
                  sales@movetekshipping.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} MoveTek. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
