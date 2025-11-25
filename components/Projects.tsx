import React from 'react';
import { Project } from '../types';
import { FadeIn } from './ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'HAUS A', category: 'RESIDENTIAL', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600', size: 'large', year: '2024' },
  { id: 2, title: 'MUSEUM X', category: 'CULTURAL', image: 'https://images.unsplash.com/photo-1563284888-251c8801d9f0?auto=format&fit=crop&q=80&w=1600', size: 'medium', year: '2023' },
  { id: 3, title: 'LOFT 99', category: 'INTERIOR', image: 'https://images.unsplash.com/photo-1556912173-3db996ea0622?auto=format&fit=crop&q=80&w=1600', size: 'small', year: '2022' },
  { id: 4, title: 'VOID TOWER', category: 'COMMERCIAL', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1600', size: 'large', year: '2024' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group cursor-pointer block">
      <div className="overflow-hidden mb-8 relative aspect-[4/5] md:aspect-[3/4]">
         {/* Subtle colored overlay on hover */}
         <div className="absolute inset-0 bg-bauhausBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        <div className="absolute top-4 right-4 bg-white p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20">
            <ArrowUpRight size={24} />
        </div>
      </div>
      
      <div className="flex flex-col border-t border-bauhausBlack/20 pt-6 group-hover:border-bauhausBlack transition-colors duration-500">
        <div className="flex justify-between items-start">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-bauhausBlack mb-2 group-hover:text-bauhausBlue transition-colors">{project.title}</h3>
            <span className="text-sm font-bold tracking-widest text-bauhausBlack/50 group-hover:text-bauhausBlack transition-colors mt-2">{project.year}</span>
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-bauhausRed uppercase">{project.category}</span>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-40 bg-bauhausWhite relative">
        <div className="container mx-auto px-6 md:px-12">
            
            <div className="mb-32">
                <FadeIn>
                    <h2 className="text-[12px] font-bold tracking-[0.4em] mb-8 text-bauhausBlack uppercase">Selected Works</h2>
                    <div className="w-full h-[1px] bg-bauhausBlack/10 mb-8"></div>
                    <p className="text-4xl md:text-6xl font-bold tracking-tight text-bauhausBlack max-w-5xl leading-[1.1]">
                        Architecture is not about space but about <span className="bg-bauhausYellow/30 px-2 italic">time</span>.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
                {projects.map((project, idx) => (
                    <FadeIn key={project.id} delay={idx * 150} className={idx % 2 !== 0 ? 'md:mt-32' : ''}>
                         <ProjectCard project={project} />
                    </FadeIn>
                ))}
            </div>
            
            <div className="mt-40 text-center">
                 <a href="#" className="inline-block relative group py-2">
                    <span className="text-xl font-bold tracking-widest">VIEW ARCHIVE</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-bauhausBlack origin-left transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-bauhausRed origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                 </a>
            </div>
        </div>
    </section>
  );
};

export default Projects;