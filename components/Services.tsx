
import React from 'react';
import { Truck, ShoppingBag, UtensilsCrossed } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Luxury Dine-in',
      desc: 'Experience our royal ambiance with table service and white-glove hospitality.',
      icon: <UtensilsCrossed className="w-12 h-12 text-yellow-500" />
    },
    {
      title: 'Premium Takeaway',
      desc: 'Carefully packaged gourmet meals ready for your convenient pickup.',
      icon: <ShoppingBag className="w-12 h-12 text-yellow-500" />
    },
    {
      title: 'Express Delivery',
      desc: 'Your favorite vegetarian delicacies delivered fresh to your doorstep.',
      icon: <Truck className="w-12 h-12 text-yellow-500" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-yellow-600 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Our Excellence</h4>
          <h2 className="text-4xl md:text-5xl font-bold serif">Curated Dining Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group p-10 bg-[#0a0a0a] border border-yellow-800/20 rounded-2xl transition-all duration-500 hover:bg-[#111] hover:-translate-y-2 hover:border-yellow-600/50"
            >
              <div className="mb-8 transform transition-transform group-hover:scale-110 duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold serif mb-4 group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 h-1 w-0 group-hover:w-full bg-yellow-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
