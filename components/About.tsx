import React from 'react';
import { FadeIn } from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-bauhausBlack text-bauhausWhite overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-bauhausRed rounded-bl-full opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] border-[15px] md:border-[30px] border-bauhausBlue rounded-full opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* Left: Typography Composition */}
          <div className="relative">
            <FadeIn direction="right">
                <div className="space-y-0 leading-none font-bold select-none flex flex-col justify-center items-start lg:block">
                    <div className="text-[18vw] md:text-[15vw] lg:text-[8rem] xl:text-[10rem] text-bauhausWhite tracking-tighter">LESS</div>
                    <div className="text-[18vw] md:text-[15vw] lg:text-[8rem] xl:text-[10rem] text-transparent stroke-text self-center lg:self-auto lg:pl-24" style={{ WebkitTextStroke: '2px #F4F4F4' }}>IS</div>
                    <div className="text-[18vw] md:text-[15vw] lg:text-[8rem] xl:text-[10rem] text-bauhausYellow self-end lg:self-auto">MORE</div>
                </div>
            </FadeIn>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8 md:space-y-12 relative z-10 mt-8 lg:mt-0">
            <FadeIn delay={200}>
                <h3 className="text-xl md:text-2xl font-bold tracking-wide border-b border-bauhausWhite/20 pb-4 inline-block text-bauhausYellow">
                    THE PHILOSOPHY
                </h3>
            </FadeIn>
            <FadeIn delay={300}>
                <div className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-light space-y-6">
                    <p>
                        Our studio operates at the intersection of art, craft, and technology. 
                        Inspired by the Staatliches Bauhaus, we believe that design should serve the people, 
                        not the other way around. 
                    </p>
                    <p>
                        We reject unnecessary ornamentation in favor of clean lines, rational geometry, and functional beauty.
                        Every building we create is a total work of art—a <i>Gesamtkunstwerk</i>.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={400}>
                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12">
                    <div className="text-center p-3 md:p-4 border border-bauhausWhite/20 hover:bg-bauhausBlue hover:border-bauhausBlue transition-colors duration-300 group cursor-default">
                        <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform">100+</div>
                        <div className="text-[9px] md:text-xs tracking-widest text-gray-400 group-hover:text-white">PROJECTS</div>
                    </div>
                    <div className="text-center p-3 md:p-4 border border-bauhausWhite/20 hover:bg-bauhausRed hover:border-bauhausRed transition-colors duration-300 group cursor-default">
                        <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform">12</div>
                        <div className="text-[9px] md:text-xs tracking-widest text-gray-400 group-hover:text-white">AWARDS</div>
                    </div>
                    <div className="text-center p-3 md:p-4 border border-bauhausWhite/20 hover:bg-bauhausYellow hover:text-bauhausBlack hover:border-bauhausYellow transition-colors duration-300 group cursor-default">
                        <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-110 transition-transform">25</div>
                        <div className="text-[9px] md:text-xs tracking-widest text-gray-400 group-hover:text-bauhausBlack">YEARS</div>
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