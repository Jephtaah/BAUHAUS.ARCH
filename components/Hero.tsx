import React from 'react';
import { FadeIn } from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 flex flex-col justify-between bg-bauhausWhite overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Typography Main */}
            <div className="lg:col-span-8">
                <FadeIn delay={100}>
                    <h1 className="text-[14vw] lg:text-[11rem] leading-[0.85] font-black tracking-tighter text-bauhausBlack">
                        <span className="block hover:text-bauhausBlue transition-colors duration-500 cursor-default">FORM</span>
                        <span className="block pl-[0.5em] md:pl-[1.5em] text-bauhausRed">&</span>
                        <span className="block text-outline stroke-bauhausBlack text-transparent" style={{ WebkitTextStroke: '2px currentColor' }}>VOID</span>
                    </h1>
                </FadeIn>
            </div>

            {/* Geometric/Image Composition */}
            <div className="lg:col-span-4 relative h-[400px] lg:h-[600px] mt-12 lg:mt-0">
                 <FadeIn delay={400} direction="up" className="w-full h-full relative">
                    <div className="absolute inset-0 bg-gray-200">
                        <img 
                            src="https://images.unsplash.com/photo-1522031688665-22d7d6f51cc7?auto=format&fit=crop&q=80&w=1200" 
                            alt="Abstract Architecture" 
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                    </div>
                    {/* Floating Shapes */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-bauhausBlue rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute bottom-12 -right-12 w-48 h-48 bg-bauhausYellow mix-blend-multiply opacity-90 rounded-none transform rotate-12"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-bauhausRed rounded-full z-20"></div>
                 </FadeIn>
            </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-bauhausBlack/10 pt-8">
              <FadeIn delay={600} direction="up">
                  <p className="max-w-md text-xl font-medium leading-relaxed text-gray-800">
                      We design spaces that breathe. Removing the non-essential to uncover the timeless geometry of modern living.
                  </p>
              </FadeIn>
              <FadeIn delay={800} direction="up">
                  <div className="flex gap-12 mt-8 md:mt-0 text-xs font-bold tracking-widest">
                      <span>EST. 1924</span>
                      <span>BERLIN / NEW YORK</span>
                      <span className="text-bauhausRed animate-pulse">SCROLL ↓</span>
                  </div>
              </FadeIn>
          </div>
      </div>
    </section>
  );
};

export default Hero;