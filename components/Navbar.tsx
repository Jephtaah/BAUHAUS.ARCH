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
    { label: 'WORK', href: '#projects' },
    { label: 'STUDIO', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${scrolled ? 'py-4 bg-bauhausWhite/95 backdrop-blur-md border-b border-bauhausBlack/5' : 'py-12 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="z-50 relative group">
            <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-bauhausBlack leading-none group-hover:text-bauhausBlue transition-colors duration-300">
                ATELIER
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-bauhausBlack leading-none ml-4 group-hover:translate-x-2 transition-transform duration-300">
                NEUE
                </span>
            </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-bauhausBlack font-bold text-xs tracking-[0.25em] hover:text-bauhausRed transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-bauhausRed after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-bauhausBlack text-bauhausWhite px-6 py-3 font-bold text-xs tracking-widest hover:bg-bauhausBlue transition-colors">
              INQUIRE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-bauhausBlack focus:outline-none z-50 p-2"
        >
          {isOpen ? <X size={32} /> : (
            <div className="space-y-2 group">
                <div className="w-8 h-[3px] bg-bauhausBlack group-hover:w-6 transition-all ml-auto"></div>
                <div className="w-8 h-[3px] bg-bauhausBlack"></div>
                <div className="w-8 h-[3px] bg-bauhausBlack group-hover:w-4 transition-all ml-auto"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-bauhausWhite z-40 flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {navLinks.map((link, i) => (
          <a 
            key={link.label} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-6xl font-black tracking-tighter text-bauhausBlack hover:text-outline hover:stroke-bauhausBlack transition-all"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;