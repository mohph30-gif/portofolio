import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id={id} className={`py-20 px-4 md:px-8 border-b-4 border-black scroll-mt-24 ${className}`}>
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {(title || subtitle) && (
          <div className="mb-12">
             {subtitle && (
              <span className="inline-block px-3 py-1 mb-2 text-sm font-bold border-2 border-black bg-pink-300 brutal-shadow-sm">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                {title}
              </h2>
            )}
            <div className="h-1 w-24 bg-black mt-4"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;