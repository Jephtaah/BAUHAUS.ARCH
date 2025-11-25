import React from 'react';
import { Project } from '../types';
import { FadeIn } from './ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'CUBE HOUSE', category: 'RESIDENTIAL', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=900', size: 'large', year: '2023' },
  { id: 2, title: 'BLUE PAVILION', category: 'PUBLIC', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=1200', size: 'medium', year: '2022' },
  { id: 3, title: 'AXIS TOWER', category: 'COMMERCIAL', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&h=1000', size: 'small', year: '2024' },
  { id: 4, title: 'MODULAR ONE', category: 'EXPERIMENTAL', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200&h=800', size: 'medium', year: '2023' },
  { id: 5, title: 'RED STUDIO', category: 'WORKSPACE', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200&h=1200', size: 'large', year: '2021' },
  { id: 6, title: 'MONOLITH', category: 'CULTURAL', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=900&h=1400', size: 'small', year: '2022' },
];

interface ProjectCardProps {
  project: Project;
  className?: string;
  aspectClass?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '', aspectClass = 'aspect-[4/3]' }) => {
  return (
    <div className={`group flex flex-col gap-4 cursor-pointer w-full ${className}`}>
      <div className={`relative border-2 border-bauhausBlack overflow-hidden w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,0)] hover:shadow-[10px_10px_0px_0px_#00529F] transition-all duration-300 ${aspectClass}`}>
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-bauhausYellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
        
        {/* Corner Badge */}
        <div className="absolute top-0 right-0 bg-bauhausBlack text-white p-2 transform translate-x-full translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-10">
            <ArrowUpRight size={24} />
        </div>
      </div>
      
      {/* Card Info */}
      <div className="flex justify-between items-end border-b-2 border-transparent group-hover:border-bauhausBlack pb-2 transition-colors">
        <div>
            <span className="block text-[10px] md:text-xs font-bold tracking-[0.25em] text-bauhausRed mb-1">{project.category}</span>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-bauhausBlack leading-none uppercase group-hover:text-bauhausBlue transition-colors break-words">{project.title}</h3>
        </div>
        <span className="text-bauhausBlack font-bold text-sm opacity-50 group-hover:opacity-100">{project.year}</span>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  // Complex grid layout logic
  const getLayoutProps = (index: number) => {
    // Mobile is always col-span-1.
    // Tablet (md) usually 2 columns.
    // Desktop (lg) 12 column grid.
    
    switch (index) {
      case 0: // Cube House - Big Landscape
        return {
            gridClass: "md:col-span-1 lg:col-span-8",
            aspect: "aspect-[16/9] lg:aspect-[16/8]"
        };
      case 1: // Blue Pavilion - Tall Portrait
        return {
            gridClass: "md:col-span-1 lg:col-span-4 lg:mt-24",
            aspect: "aspect-[3/4]"
        };
      case 2: // Axis Tower - Square
        return {
            gridClass: "md:col-span-1 lg:col-span-5",
            aspect: "aspect-square"
        };
      case 3: // Modular One - Wide
        return {
            gridClass: "md:col-span-1 lg:col-span-7 lg:mt-16",
            aspect: "aspect-[16/7]"
        };
      case 4: // Red Studio - Square Large
        return {
            gridClass: "md:col-span-1 lg:col-span-6",
            aspect: "aspect-square"
        };
      case 5: // Monolith - Portrait Tall
        return {
            gridClass: "md:col-span-1 lg:col-span-6 lg:mt-32",
            aspect: "aspect-[4/5]"
        };
      default:
        return {
            gridClass: "col-span-1 lg:col-span-4",
            aspect: "aspect-[4/3]"
        };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-bauhausWhite relative overflow-hidden">
        {/* Decorative background lines */}
        <div className="absolute top-0 left-[10%] bottom-0 w-px bg-bauhausBlack/5 hidden lg:block"></div>
        <div className="absolute top-0 right-[20%] bottom-0 w-px bg-bauhausBlack/5 hidden lg:block"></div>

        {/* Section Header */}
        <div className="container mx-auto px-6 md:px-12 lg:px-16 mb-16 md:mb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between border-b-4 border-bauhausBlack pb-8 relative z-10">
            <FadeIn>
                <h2 className="text-5xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter text-bauhausBlack leading-[0.9]">
                    ARCHIVE
                </h2>
            </FadeIn>
            <FadeIn delay={200}>
                <p className="text-bauhausBlack font-medium text-lg md:text-xl max-w-sm lg:text-right leading-relaxed mt-6 lg:mt-0">
                    A curated selection of structural honesty. <br/>
                    <span className="text-bauhausRed">Form over ornament.</span>
                </p>
            </FadeIn>
        </div>

        {/* Asymmetric Grid */}
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16 lg:gap-y-24">
                {projects.map((project, idx) => {
                    const { gridClass, aspect } = getLayoutProps(idx);
                    return (
                        <FadeIn key={project.id} delay={idx * 100} className={gridClass}>
                             <ProjectCard project={project} aspectClass={aspect} />
                        </FadeIn>
                    );
                })}
            </div>
        </div>

        {/* Decorative Footer Strip for Section */}
        <div className="w-full h-3 md:h-5 flex mt-24 md:mt-40">
            <div className="w-2/3 bg-bauhausBlack h-full"></div>
            <div className="w-1/6 bg-bauhausRed h-full"></div>
            <div className="w-1/6 bg-bauhausYellow h-full"></div>
        </div>
    </section>
  );
};

export default Projects;