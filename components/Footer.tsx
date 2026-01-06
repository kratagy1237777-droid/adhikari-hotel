
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-yellow-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex flex-col mb-8">
              <span className="text-3xl font-bold tracking-widest serif text-yellow-500 uppercase">
                Adhikari
              </span>
              <span className="text-xs tracking-[0.4em] uppercase text-gray-500">
                Vegetarian Excellence
              </span>
            </a>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Elevating the vegetarian dining experience to a royal standard. Every ingredient tells a story of tradition, purity, and craftsmanship.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-yellow-900/30 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-yellow-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Join our royal circle for exclusive offers and culinary updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-[#111] border border-yellow-900/30 px-4 py-3 rounded-l-lg text-sm w-full focus:outline-none focus:border-yellow-500"
              />
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-r-lg hover:bg-yellow-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-yellow-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <p>© {new Date().getFullYear()} Adhikari Veg Restaurant. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
