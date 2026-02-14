import React from 'react';
import Section from './Section';
import { EDUCATION, CERTIFICATIONS, SKILLS } from '../constants';
import { BookOpen, Award, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Who Am I?">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Bio */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border-2 border-black p-6 brutal-shadow">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-yellow-400 border-2 border-black w-8 h-8 flex items-center justify-center text-sm">01</span>
              The Professional
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              I am a <span className="font-bold bg-yellow-200 px-1">Mobile Flutter developer</span> with over 5 years of experience in designing and deploying Android & iOS applications. Specialized in Firebase and Supabase, with strong expertise in scalable architectures, REST APIs, and real-time applications. Experienced in remote environments and international projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 border-2 border-black bg-gray-100 font-bold text-sm">Autonomy</span>
              <span className="px-3 py-1 border-2 border-black bg-gray-100 font-bold text-sm">Proactivity</span>
              <span className="px-3 py-1 border-2 border-black bg-gray-100 font-bold text-sm">Project Management</span>
              <span className="px-3 py-1 border-2 border-black bg-gray-100 font-bold text-sm">Curiosity</span>
            </div>
          </div>

          <div className="bg-white border-2 border-black p-6 brutal-shadow">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-green-400 border-2 border-black w-8 h-8 flex items-center justify-center text-sm">02</span>
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border-2 border-black bg-gray-50 text-center">
                <div className="font-bold text-xl">Arabic</div>
                <div className="text-sm text-gray-600">Native</div>
              </div>
              <div className="p-4 border-2 border-black bg-gray-50 text-center">
                <div className="font-bold text-xl">French</div>
                <div className="text-sm text-gray-600">B2 (TCF Certified)</div>
              </div>
              <div className="p-4 border-2 border-black bg-gray-50 text-center">
                <div className="font-bold text-xl">English</div>
                <div className="text-sm text-gray-600">Professional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Tech Stack */}
          <div className="bg-pink-100 border-2 border-black p-6 brutal-shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6" />
              <h3 className="text-xl font-bold">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <span key={skill} className="bg-white border-2 border-black px-2 py-1 text-sm font-semibold hover:bg-black hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-blue-100 border-2 border-black p-6 brutal-shadow-sm">
             <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <ul className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <li key={idx} className="border-l-4 border-black pl-3">
                  <div className="font-bold">{edu.degree}</div>
                  <div className="text-sm">{edu.institution}, {edu.year}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-yellow-100 border-2 border-black p-6 brutal-shadow-sm">
             <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-2 list-disc list-inside text-sm font-medium">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;