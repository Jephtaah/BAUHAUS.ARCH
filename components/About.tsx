import React from 'react';
import { FadeIn } from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-bauhausBlack text-bauhausWhite relative overflow-hidden">
      
      {/* Decorative Grid */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-white/10 hidden lg:block"></div>
      <div className="absolute left-0 bottom-20 w-full h-[1px] bg-white/10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-40">
            {/* Massive Type */}
            <div className="lg:w-1/2">
                <FadeIn>
                    <div className="sticky top-40">
                        <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-bauhausWhite mix-blend-difference">
                            LESS<br />
                            IS<br />
                            <span className="text-bauhausYellow">MORE</span>
                        </h2>
                        <div className="mt-12 w-24 h-24 bg-bauhausRed rounded-full"></div>
                    </div>
                </FadeIn>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 flex flex-col justify-center pt-20">
                 <FadeIn delay={200}>
                    <h3 className="text-sm font-bold tracking-[0.4em] text-bauhausWhite/60 mb-12">THE PHILOSOPHY</h3>
                    
                    <p className="text-2xl md:text-3xl font-light leading-normal text-gray-300 mb-12">
                        Atelier Neue operates at the intersection of <span className="text-white font-bold border-b-2 border-bauhausBlue">art</span>, 
                        <span className="text-white font-bold border-b-2 border-bauhausRed mx-2">craft</span>, and 
                        <span className="text-white font-bold border-b-2 border-bauhausYellow ml-2">technology</span>.
                    </p>
                    
                    <p className="text-lg text-gray-400 leading-relaxed mb-16 max-w-md">
                        Inspired by the Staatliches Bauhaus established in Weimar, we believe that design should serve the people. 
                        We reject unnecessary ornamentation in favor of clean lines, rational geometry, and functional beauty.
                        Every building we create is a total work of art.
                    </p>

                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">124</div>
                            <div className="text-xs font-bold tracking-widest text-gray-500">PROJECTS BUILT</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">18</div>
                            <div className="text-xs font-bold tracking-widest text-gray-500">INTL. AWARDS</div>
                        </div>
                    </div>
                 </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;