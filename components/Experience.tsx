import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My Journey" className="bg-white">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-black transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-center ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-yellow-400 border-4 border-black rounded-full transform -translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className="bg-white border-4 border-black p-6 brutal-shadow hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className={`flex flex-col gap-2 mb-3 ${
                     idx % 2 === 0 ? 'md:items-start' : 'md:items-end'
                  }`}>
                    <span className="inline-block px-3 py-1 bg-black text-white text-sm font-bold">
                      {job.duration}
                    </span>
                    <h3 className="text-xl font-black uppercase">{job.role}</h3>
                    <div className="flex items-center gap-2 text-gray-700 font-bold">
                      <Briefcase className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                  <p className="text-gray-800 border-t-2 border-gray-100 pt-3">
                    {job.description}
                  </p>
                </div>
              </div>

              {/* Empty Space for the other side */}
              <div className="hidden md:block w-[calc(50%-2rem)]"></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;