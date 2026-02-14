import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Tag } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" title="Portfolio" subtitle="Latest Works">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="flex flex-col h-full border-4 border-black brutal-shadow bg-white overflow-hidden group"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden border-b-4 border-black">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 z-20">
                <span className="bg-white px-2 py-1 border-2 border-black text-xs font-bold uppercase shadow-sm">
                  {project.role}
                </span>
              </div>
            </div>

            <div className={`p-4 border-b-4 border-black ${project.color}`}>
              <div className="flex justify-between items-center mb-1">
                 <span className="font-bold text-xs bg-black text-white px-2 py-0.5">{project.duration}</span>
              </div>
              <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="font-medium text-gray-800 mb-6 line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 border border-black rounded-none">
                      <Tag className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t-2 border-gray-100">
                {project.links.android && (
                  <a 
                    href={project.links.android} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 text-white font-bold py-2 border-2 border-black hover:bg-green-600 text-sm flex items-center justify-center gap-2 hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    Android
                  </a>
                )}
                {project.links.ios && (
                  <a 
                    href={project.links.ios} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-500 text-white font-bold py-2 border-2 border-black hover:bg-blue-600 text-sm flex items-center justify-center gap-2 hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    iOS
                  </a>
                )}
                {project.links.web && (
                   <a 
                    href={project.links.web} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 text-white font-bold py-2 border-2 border-black hover:bg-black text-sm flex items-center justify-center gap-2 hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    Web <ExternalLink className="w-3 h-3"/>
                  </a>
                )}
                {!project.links.android && !project.links.ios && !project.links.web && (
                  <span className="text-sm font-bold text-gray-400 italic w-full text-center">Internal Project</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;