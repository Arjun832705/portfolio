import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolio';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background artifacts */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40 mb-6"
        >
          MERN Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.8] mb-8"
        >
          {portfolioData.name.split(' ')[0]} <br />
          <span className="text-white/20">{portfolioData.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed font-light mb-12 px-4"
        >
          Building high-performance, full-stack applications with modern web technologies and AI integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all text-sm uppercase tracking-widest"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/20 font-semibold rounded-full hover:bg-white/5 transition-all text-sm uppercase tracking-widest"
          >
            Contact Me
          </a>
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white/50 border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-widest text-center"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
