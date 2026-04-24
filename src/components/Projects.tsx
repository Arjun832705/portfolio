import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Selected <span className="text-white/30 italic font-serif">Works</span>
            </motion.h2>
            <p className="text-white/40 max-w-md">
              A collection of full-stack applications showcasing MERN development and AI integration.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/20 text-8xl font-bold italic hidden lg:block select-none"
          >
            24 / 26
          </motion.div>
        </div>

        <div className="flex flex-col gap-32">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.links.live}
                      className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-4 bg-black/50 backdrop-blur rounded-full text-white hover:scale-110 transition-transform"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-white/40 font-mono text-sm underline underline-offset-4 decoration-white/20">
                    0{idx + 1}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5 py-1 px-2 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed font-light mb-8 lg:mb-12">
                  {project.description}
                </p>

                <div className="flex items-center gap-8">
                  <a
                    href={project.links.live}
                    className="text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white/20 pb-2 hover:border-white transition-all"
                  >
                    View Project
                  </a>
                  <a
                    href={project.links.github}
                    className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
