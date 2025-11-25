import React from 'react';
import { FadeIn } from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-40 md:pb-24 flex flex-col justify-center overflow-hidden border-b-4 border-bauhausBlack bg-[#F4F4F4]">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
        
        {/* Left Text Block */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
          <FadeIn delay={100} direction="left">
            <h1 className="font-bold leading-[0.85] tracking-tighter text-bauhausBlack mb-8 md:mb-10">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem]">FORM</span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] text-bauhausRed">FOLLOWS</span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem]">FUNCTION</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="max-w-xl ml-1 md:ml-2 pl-6 md:pl-8 border-l-4 border-bauhausBlue">
              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-gray-800">
                We craft spaces that strip away the ornamental to reveal the essential. 
                Pure geometry, bold structure, and timeless utility.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Geometric Composition (Desktop) */}
        <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] w-full hidden lg:block">
            {/* Shapes */}
            <FadeIn delay={500} direction="right" className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
                 <div className="relative w-4/5 h-4/5 bg-bauhausBlack p-2 shadow-[12px_12px_0px_0px_#FDB913] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#FDB913] transition-all duration-300">
                     <img 
                        src="https://images.unsplash.com/photo-1525869916826-972885c91c1e?auto=format&fit=crop&q=80&w=800&h=1000" 
                        alt="Architecture Detail" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
            </FadeIn>
            
            {/* Floating Elements */}
            <div className="absolute top-[-20px] left-[10%] w-24 h-24 lg:w-32 lg:h-32 bg-bauhausYellow border-2 border-bauhausBlack z-20 animate-[spin_15s_linear_infinite] shadow-lg"></div>
            <div className="absolute bottom-10 right-[-10px] w-32 h-32 lg:w-48 lg:h-48 bg-bauhausBlue rounded-full border-2 border-bauhausBlack mix-blend-multiply z-20 opacity-90"></div>
            
            {/* Interactive Grid Item */}
            <div className="absolute top-1/2 left-[-20px] lg:left-[-40px] bg-white border-2 border-bauhausBlack p-4 lg:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-30 max-w-[200px] lg:max-w-[240px]">
                <span className="font-bold text-xs tracking-widest block mb-2 text-bauhausRed">EST. 1924</span>
                <p className="text-xs lg:text-sm font-medium leading-snug">Redefining modern living through structural honesty.</p>
            </div>
        </div>

        {/* Mobile Geometric Element */}
        <div className="lg:hidden w-full h-48 md:h-64 relative mt-4 flex justify-center items-center overflow-hidden">
            <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-bauhausYellow border-2 border-bauhausBlack animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute w-24 h-24 md:w-32 md:h-32 translate-x-6 translate-y-4 md:translate-x-8 md:translate-y-6 bg-bauhausRed rounded-full border-2 border-bauhausBlack mix-blend-multiply"></div>
            <div className="absolute w-24 h-24 md:w-32 md:h-32 -translate-x-6 translate-y-6 md:-translate-x-8 md:translate-y-8 bg-bauhausBlue border-2 border-bauhausBlack opacity-80 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;