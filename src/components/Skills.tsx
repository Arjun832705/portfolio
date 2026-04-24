import { motion } from 'motion/react';
import { portfolioData } from '@/src/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Technical <span className="text-white/30 italic font-serif">Arsenals</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white/20 font-mono text-xs">0{idx + 1}</span>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/70 hover:bg-white hover:text-black transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
