import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'STUDIO', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-bauhausWhite/95 backdrop-blur-md border-b-2 border-bauhausBlack shadow-sm' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="relative group z-50">
            <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-bauhausRed rounded-full border-2 border-bauhausBlack transition-transform group-hover:scale-110"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-bauhausBlue rotate-45 border-2 border-bauhausBlack -ml-3 md:-ml-4 mix-blend-multiply transition-transform group-hover:rotate-90"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-bauhausYellow border-2 border-bauhausBlack -ml-3 md:-ml-4 transition-transform group-hover:translate-x-1"></div>
            </div>
            <span className="absolute -bottom-6 left-0 text-[10px] md:text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                BAUHAUS.ARCH
            </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 lg:gap-16">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-bauhausBlack font-bold text-xs lg:text-sm tracking-[0.25em] hover:text-bauhausRed transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-1 after:bg-bauhausBlue after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-bauhausBlack focus:outline-none z-50 relative p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-bauhausWhite z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold tracking-tighter hover:text-bauhausRed transition-colors"
          >
            {link.label}
          </a>
        ))}
        {/* Decorative elements for mobile menu */}
        <div className="absolute bottom-24 flex gap-6 opacity-50">
            <div className="w-10 h-10 bg-bauhausRed rounded-full border-2 border-bauhausBlack animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-10 h-10 bg-bauhausBlue border-2 border-bauhausBlack animate-bounce" style={{ animationDelay: '100ms' }}></div>
            <div className="w-10 h-10 bg-bauhausYellow border-2 border-bauhausBlack rotate-45 animate-bounce" style={{ animationDelay: '200ms' }}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;