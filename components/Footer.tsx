import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bauhausWhite pt-40 pb-12 border-t border-bauhausBlack/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">
            
            <div className="lg:col-span-4">
                <h3 className="text-3xl font-black tracking-tighter mb-8">ATELIER NEUE</h3>
                <p className="max-w-xs text-lg text-gray-600 font-medium">
                    Architectural reductionism for a complex world.
                </p>
            </div>
            
            <div className="lg:col-span-3">
                <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-bauhausBlack/40">STUDIO</h4>
                <address className="not-italic text-lg font-bold leading-relaxed text-bauhausBlack">
                    101 Modernist Ave<br />
                    Floor 24, Suite 900<br />
                    New York, NY 10012
                </address>
            </div>

            <div className="lg:col-span-3">
                <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-bauhausBlack/40">CONTACT</h4>
                <a href="mailto:hello@atelierneue.com" className="block text-lg font-bold hover:text-bauhausBlue transition-colors mb-2">
                    hello@atelierneue.com
                </a>
                <a href="tel:+15550000000" className="block text-lg font-bold hover:text-bauhausBlue transition-colors">
                    +1 (555) 000-0000
                </a>
            </div>

            <div className="lg:col-span-2">
                <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-bauhausBlack/40">SOCIAL</h4>
                <div className="flex flex-col gap-4">
                    {['Instagram', 'LinkedIn', 'Behance', 'Pinterest'].map((social) => (
                        <a key={social} href="#" className="text-lg font-bold hover:text-bauhausRed hover:translate-x-2 transition-all">
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t-2 border-bauhausBlack pt-12">
            <div className="text-[12vw] leading-[0.75] font-black tracking-tighter text-bauhausBlack/5 select-none pointer-events-none -mb-4 md:-mb-8">
                NEUE
            </div>
            <div className="flex gap-8 text-sm font-bold text-gray-500 mb-2">
                <a href="#" className="hover:text-bauhausBlack">Privacy</a>
                <a href="#" className="hover:text-bauhausBlack">Legal</a>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;