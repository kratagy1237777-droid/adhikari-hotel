
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 py-3 border-b border-yellow-800/30' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold tracking-widest serif text-yellow-500 uppercase">
            Adhikari
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 -mt-1">
            Veg Restaurant
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-yellow-500 transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservation"
            className="bg-yellow-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-yellow-700 transition-all transform hover:-translate-y-1"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl serif text-yellow-500 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#reservation"
          onClick={() => setIsOpen(false)}
          className="bg-yellow-600 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
