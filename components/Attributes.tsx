
import React from 'react';
import { 
  Sun, Moon, Users, Heart, Leaf, 
  CreditCard, Smartphone, CheckCircle, 
  Baby, Car, MapPin, Coffee, Utensils
} from 'lucide-react';

interface AttrGroupProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const AttrGroup: React.FC<AttrGroupProps> = ({ title, items, icon }) => (
  <div className="bg-[#0a0a0a] p-6 border border-yellow-900/10 rounded-xl hover:bg-[#111] transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-yellow-900/20 rounded-lg text-yellow-500">
        {icon}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className="text-[11px] px-3 py-1 bg-black/50 border border-yellow-800/10 rounded-full text-gray-500 whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Attributes: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-y border-yellow-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold serif mb-4">At a Glance</h2>
          <p className="text-gray-500 max-w-xl mx-auto italic">Everything you need to know about your upcoming royal experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AttrGroup 
            title="Popular For" 
            items={['Lunch', 'Dinner', 'Solo Dining']} 
            icon={<Heart size={18} />} 
          />
          <AttrGroup 
            title="Offerings" 
            items={['Quick Bite', 'Small Plates', 'Vegan', 'Vegetarian Only']} 
            icon={<Leaf size={18} />} 
          />
          <AttrGroup 
            title="Dining Options" 
            items={['Breakfast', 'Lunch', 'Dinner', 'Counter Service', 'Dessert', 'Seating']} 
            icon={<Utensils size={18} />} 
          />
          <AttrGroup 
            title="Payments" 
            items={['Debit Cards', 'Google Pay']} 
            icon={<CreditCard size={18} />} 
          />
          <AttrGroup 
            title="Atmosphere" 
            items={['Relaxed Elegant', 'Quiet Luxury']} 
            icon={<Coffee size={18} />} 
          />
          <AttrGroup 
            title="Crowd" 
            items={['Groups Friendly', 'Corporate Groups']} 
            icon={<Users size={18} />} 
          />
          <AttrGroup 
            title="Amenities" 
            items={['Good for Kids', 'Free Parking Lot', 'Street Parking']} 
            icon={<Baby size={18} />} 
          />
          <AttrGroup 
            title="Planning" 
            items={['Accepts Reservations', 'Advanced Booking']} 
            icon={<CheckCircle size={18} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default Attributes;
