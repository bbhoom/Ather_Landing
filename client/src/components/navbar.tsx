import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FOOTER_LINKS } from '@/lib/constants';
import { useMobile } from '@/hooks/use-mobile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking on an anchor link
  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-white">
              <span className="text-primary">AETHER</span> by Mythreyi
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {FOOTER_LINKS.map((link) => (
                <a 
                  key={link.id}
                  href={link.url} 
                  className="text-white hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider"
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-primary border border-primary text-background hover:bg-primary/90 hover:border-primary/90 transition-all duration-300 px-5 py-2 rounded text-sm uppercase tracking-wider font-medium shadow-lg shadow-primary/20"
                onClick={handleNavLinkClick}
              >
                Book Now
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-primary hover:text-primary/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-background border-t border-secondary/30 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {FOOTER_LINKS.map((link) => (
            <a 
              key={link.id}
              href={link.url} 
              className="block px-3 py-2 text-white hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider"
              onClick={handleNavLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block mx-3 my-2 bg-primary text-background py-3 px-4 rounded text-center text-sm uppercase tracking-wider font-medium shadow-md shadow-primary/10 hover:bg-primary/90 transition-colors duration-300"
            onClick={handleNavLinkClick}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
