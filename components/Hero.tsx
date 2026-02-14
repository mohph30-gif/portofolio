import React from 'react';
import { Download, Linkedin, Mail, Facebook, Phone } from 'lucide-react';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center bg-white border-b-4 border-black relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[-100px] w-64 h-64 bg-yellow-300 rounded-full border-4 border-black hidden lg:block opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-50px] w-40 h-40 bg-blue-300 rounded-full border-4 border-black hidden lg:block opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="order-2 md:order-1">
          <div className="inline-block px-4 py-2 bg-green-300 border-2 border-black font-bold mb-6 brutal-shadow-sm rotate-[-2deg]">
            👋 Hello, I'm
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            TIGHEZZA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" style={{ WebkitTextStroke: '2px black' }}>M. SALAH</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-8 text-gray-700 bg-gray-100 border-l-4 border-black p-4">
            Fullstack Mobile Developer
            <br />
            <span className="text-base md:text-lg font-normal mt-2 block">
              Flutter • Firebase • Supabase
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-blue-200 hover:bg-blue-300 brutal-shadow-sm transition-all"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 border-2 border-black bg-red-200 hover:bg-red-300 brutal-shadow-sm transition-all"><Mail className="w-6 h-6" /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-blue-500 text-white hover:bg-blue-600 brutal-shadow-sm transition-all"><Facebook className="w-6 h-6" /></a>
            <a href={SOCIAL_LINKS.whatsapp} className="p-3 border-2 border-black bg-green-200 hover:bg-green-300 brutal-shadow-sm transition-all"><Phone className="w-6 h-6" /></a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="w-full">Hire Me Now</Button>
            </a>
            <a href="/assets/CV-English.pdf" download className="w-full sm:w-auto">
              <Button variant="outline" className="w-full" icon={<Download className="w-4 h-4" />}>Download CV</Button>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
           {/* Abstract Profile Representation */}
           <div className="w-64 h-64 md:w-96 md:h-96 bg-black flex items-center justify-center border-4 border-black brutal-shadow relative">
              <div className="absolute inset-0 bg-yellow-400 translate-x-2 translate-y-2 border-4 border-black -z-10"></div>
              <div className="text-white text-center p-6">
                 <div className="text-6xl mb-4">👨‍💻</div>
                 <h3 className="text-2xl font-bold">Mobile Architect</h3>
                 <p className="mt-2 text-sm opacity-80">Building scalable solutions from Tlemcen to the World.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;