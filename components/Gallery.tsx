
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800', size: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=800', size: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', size: 'col-span-2' },
    { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', size: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800', size: 'col-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-yellow-600 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Visual Feast</h4>
          <h2 className="text-4xl md:text-5xl font-bold serif">Capture The Moment</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[800px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`${img.size} relative overflow-hidden group rounded-lg border border-yellow-900/20`}
            >
              <img 
                src={img.url} 
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="px-6 py-2 border border-white text-white uppercase tracking-widest text-xs font-bold">View Dish</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
