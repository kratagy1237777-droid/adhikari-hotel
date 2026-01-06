
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h4 className="text-yellow-600 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Find Us</h4>
            <h2 className="text-4xl md:text-5xl font-bold serif mb-10">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="mt-1 text-yellow-500"><MapPin size={24} /></div>
                <div>
                  <h3 className="text-lg font-bold serif mb-2">Our Address</h3>
                  <p className="text-gray-500 leading-relaxed">
                    123 Luxury Lane, Royal Avenue,<br />
                    Heritage Plaza, Mumbai, MH 400001
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 text-yellow-500"><Phone size={24} /></div>
                <div>
                  <h3 className="text-lg font-bold serif mb-2">Call Us</h3>
                  <p className="text-gray-500">+91 22 2345 6789</p>
                  <p className="text-gray-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 text-yellow-500"><Mail size={24} /></div>
                <div>
                  <h3 className="text-lg font-bold serif mb-2">Email Address</h3>
                  <p className="text-gray-500">reservations@adhikariveg.com</p>
                  <p className="text-gray-500">info@adhikariveg.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 text-yellow-500"><Clock size={24} /></div>
                <div>
                  <h3 className="text-lg font-bold serif mb-2">Opening Hours</h3>
                  <p className="text-gray-500">Mon - Fri: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-500">Sat - Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[500px] w-full bg-[#0a0a0a] rounded-3xl overflow-hidden border border-yellow-900/20 relative">
            <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-1000">
               {/* Embed Placeholder */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.956847847953!2d72.82226689725881!3d18.9871032398565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce868e64e9e5%3A0xc6c738f712f2750!2sByculla%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="absolute bottom-6 right-6 bg-yellow-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest luxury-shadow pointer-events-none">
              Navigate to Adhikari
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
