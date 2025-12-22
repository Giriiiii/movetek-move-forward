import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/movetek-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+971523258175" className="flex items-center gap-2 hover:text-ocean-light transition-colors">
              <Phone className="w-4 h-4" />
              +971 52 3258 175
            </a>
            <a href="mailto:sales@movetekshipping.com" className="flex items-center gap-2 hover:text-ocean-light transition-colors">
              <Mail className="w-4 h-4" />
              sales@movetekshipping.com
            </a>
          </div>
          <div className="text-white">
            Your Trusted Partner in Global Logistics
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-medium py-3"
            : "bg-background py-4"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Movetek Logo" 
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-logo font-bold text-2xl text-navy tracking-tight">
                  MOVETEK
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-5 py-2 font-heading font-medium text-sm transition-all duration-200 rounded-lg",
                    location.pathname === link.path
                      ? "text-ocean bg-ocean/10"
                      : "text-foreground hover:text-ocean hover:bg-ocean/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="ml-4">
                <Button variant="ocean" size="lg">
                  Get a Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-96 border-b" : "max-h-0"
          )}
        >
          <nav className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 font-heading font-medium rounded-lg transition-colors",
                  location.pathname === link.path
                    ? "text-ocean bg-ocean/10"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button variant="ocean" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
