
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-900/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h4 className="text-yellow-600 font-bold tracking-[0.3em] uppercase mb-4 text-sm">
              Our Legacy
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold serif mb-8 leading-tight">
              A Journey of Taste, <br />
              <span className="text-gray-400 italic">Tradition, and Elegance</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                At Adhikari Veg Restaurant, we believe that vegetarianism is not just a diet, but a celebration of life's purest flavors. Our journey began with a vision to redefine vegetarian dining as a luxury experience.
              </p>
              <p>
                Every dish crafted in our kitchen is a symphony of hand-picked seasonal ingredients, royal spices, and traditional cooking techniques passed down through generations, presented with modern artistic flair.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-yellow-500 serif">15+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-yellow-500 serif">50+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Signature Dishes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] border border-yellow-800/30">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-yellow-600/30 -z-0"></div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-[#0a0a0a] border border-yellow-800/30 p-4 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400" 
                alt="Gourmet Dish" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
