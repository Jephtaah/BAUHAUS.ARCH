import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bauhausWhite pt-24 md:pt-40 pb-12 md:pb-20 border-t-4 border-bauhausBlack">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16 md:mb-24">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-8 md:mb-10">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-bauhausRed rounded-full border border-bauhausBlack"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-bauhausBlue rotate-45 border border-bauhausBlack -ml-4 md:-ml-5 mix-blend-multiply"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-bauhausYellow border border-bauhausBlack -ml-4 md:-ml-5"></div>
                    <span className="text-2xl md:text-3xl font-bold tracking-tighter ml-4 md:ml-6">BAUHAUS.ARCH</span>
                </div>
                <p className="text-lg md:text-2xl font-medium max-w-lg leading-relaxed text-gray-800">
                    Designing the future through the lens of fundamental geometry and uncompromised function.
                </p>
            </div>

            {/* Contact */}
            <div className="col-span-1">
                <h4 className="font-bold text-sm tracking-widest mb-8 md:mb-10 border-b-2 border-bauhausBlack inline-block pb-1">CONTACT</h4>
                <ul className="space-y-6 md:space-y-8">
                    <li className="flex items-center gap-4 group cursor-pointer">
                        <div className="p-2 md:p-3 bg-bauhausBlack text-bauhausWhite rounded-none group-hover:bg-bauhausRed transition-colors">
                            <Mail size={18} />
                        </div>
                        <span className="font-medium text-base md:text-lg break-all">hello@bauhaus.arch</span>
                    </li>
                    <li className="flex items-center gap-4 group cursor-pointer">
                        <div className="p-2 md:p-3 bg-bauhausBlack text-bauhausWhite rounded-none group-hover:bg-bauhausBlue transition-colors">
                            <Phone size={18} />
                        </div>
                        <span className="font-medium text-base md:text-lg">+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center gap-4 group cursor-pointer">
                        <div className="p-2 md:p-3 bg-bauhausBlack text-bauhausWhite rounded-none group-hover:bg-bauhausYellow group-hover:text-bauhausBlack transition-colors">
                            <MapPin size={18} />
                        </div>
                        <span className="font-medium text-base md:text-lg">101 Modernist Ave, NY</span>
                    </li>
                </ul>
            </div>

            {/* Social / Links */}
            <div className="col-span-1">
                <h4 className="font-bold text-sm tracking-widest mb-8 md:mb-10 border-b-2 border-bauhausBlack inline-block pb-1">SOCIAL</h4>
                <div className="flex gap-6 md:gap-8 mb-8 md:mb-12">
                    {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                        <a key={social} href="#" className="font-bold text-base md:text-lg hover:text-bauhausBlue hover:underline decoration-2 underline-offset-4 transition-all">
                            {social}
                        </a>
                    ))}
                </div>
                <div>
                     <button className="bg-bauhausBlack text-bauhausWhite px-6 md:px-8 py-4 md:py-5 font-bold text-base md:text-lg hover:bg-bauhausRed transition-colors w-full shadow-[8px_8px_0px_0px_#D02028] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border-2 border-transparent">
                        START PROJECT
                    </button>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-bauhausBlack pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium text-gray-600 gap-4 md:gap-0">
            <p className="order-2 md:order-1">&copy; {new Date().getFullYear()} Bauhaus Architecture.</p>
            <div className="flex gap-8 order-1 md:order-2">
                <a href="#" className="hover:text-bauhausBlack">Privacy</a>
                <a href="#" className="hover:text-bauhausBlack">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;