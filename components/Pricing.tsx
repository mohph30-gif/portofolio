import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" title="Pricing" subtitle="Investment" className="bg-yellow-50">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Freelance Card */}
        <div className="bg-white border-4 border-black p-8 brutal-shadow relative">
          <div className="absolute top-0 right-0 bg-blue-400 text-black text-xs font-black px-2 py-1 border-l-2 border-b-2 border-black">
            FLEXIBLE
          </div>
          <h3 className="text-2xl font-black uppercase mb-2">Freelance</h3>
          <div className="text-4xl font-black mb-6">$15 <span className="text-lg font-normal text-gray-500">/ hour</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-green-600" /> Pay as you go</li>
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-green-600" /> Clear time tracking</li>
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-green-600" /> Weekly updates</li>
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-green-600" /> Source code ownership</li>
          </ul>
          
          <a href="#contact" className="block">
            <Button variant="outline" className="w-full">Start Project</Button>
          </a>
        </div>

        {/* Salary Card */}
        <div className="bg-black text-white border-4 border-black p-8 brutal-shadow relative transform md:-translate-y-4">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold px-4 py-1 border-2 border-black">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-black uppercase mb-2 text-yellow-400">Full Time</h3>
          <div className="text-4xl font-black mb-6">$1000 <span className="text-lg font-normal text-gray-400">/ month</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-yellow-400" /> Dedicated resource</li>
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-yellow-400" /> Long-term stability</li>
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-yellow-400" /> Full team integration</li>
            <li className="flex gap-2 items-center font-medium"><Check className="w-5 h-5 text-yellow-400" /> Priority support</li>
          </ul>
          
          <a href="#contact" className="block">
            <Button variant="primary" className="w-full">Hire Me</Button>
          </a>
        </div>

      </div>
    </Section>
  );
};

export default Pricing;