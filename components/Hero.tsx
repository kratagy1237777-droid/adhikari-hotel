
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 border border-yellow-600/50 mb-6 rounded-full">
          <span className="text-yellow-500 text-xs md:text-sm font-semibold tracking-[0.4em] uppercase">
            A Royal Dining Legacy
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 serif tracking-tight">
          Exquisite <span className="gold-gradient italic block md:inline">Vegetarian</span> Mastery
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience the pinnacle of luxury plant-based cuisine. Adhikari brings centuries of traditional recipes to a modern royal setting.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#reservation"
            className="w-full sm:w-auto px-10 py-4 bg-yellow-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-yellow-700 transition-all hover:scale-105 active:scale-95 luxury-shadow"
          >
            Book a Table
          </a>
          <a 
            href="#gallery"
            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Explore Gallery
          </a>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
