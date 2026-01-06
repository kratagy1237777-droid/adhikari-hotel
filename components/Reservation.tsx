
import React, { useState } from 'react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your reservation request has been received.');
    setFormData({ name: '', phone: '', date: '', time: '', guests: '2' });
  };

  return (
    <section id="reservation" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-yellow-900/5 -z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-[#111] border border-yellow-800/30 p-8 md:p-16 rounded-3xl luxury-shadow">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold serif mb-4">Secure Your Table</h2>
            <p className="text-gray-500 italic">Experience the ultimate vegetarian dining adventure.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-yellow-600">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ex. Rahul Sharma"
                className="w-full bg-black border border-yellow-900/30 rounded-lg px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-yellow-600">Phone Number</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 98765 43210"
                className="w-full bg-black border border-yellow-900/30 rounded-lg px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-yellow-600">Date</label>
              <input 
                type="date" 
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-black border border-yellow-900/30 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-yellow-600">Preferred Time</label>
              <select 
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full bg-black border border-yellow-900/30 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              >
                <option value="">Select Time Slot</option>
                <option value="12:00">12:00 PM</option>
                <option value="1:30">01:30 PM</option>
                <option value="7:00">07:00 PM</option>
                <option value="8:30">08:30 PM</option>
                <option value="10:00">10:00 PM</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-yellow-600">Number of Guests</label>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {['1', '2', '4', '6', '8', '10+'].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({...formData, guests: num})}
                    className={`flex-shrink-0 w-14 h-14 rounded-full border transition-all flex items-center justify-center font-bold ${
                      formData.guests === num ? 'bg-yellow-600 border-yellow-600 text-white' : 'border-yellow-900/30 text-gray-500 hover:border-yellow-500'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button 
                type="submit"
                className="w-full bg-yellow-600 text-white py-5 rounded-xl font-bold uppercase tracking-[0.3em] hover:bg-yellow-700 transition-all hover:scale-[1.02] active:scale-95 luxury-shadow"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
