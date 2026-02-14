import React from 'react';
import Section from './Section';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <Section id="services" title="Services" subtitle="What I Do" className="bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx}
            className="p-6 border-2 border-black bg-white hover:bg-yellow-50 transition-colors brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none group"
          >
            <div className="mb-4 p-3 bg-black text-white inline-block border-2 border-transparent group-hover:bg-yellow-400 group-hover:text-black group-hover:border-black transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-black mb-2 uppercase">{service.title}</h3>
            <p className="text-gray-700 font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;