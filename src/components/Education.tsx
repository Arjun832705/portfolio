import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            My <span className="text-white/30 italic font-serif">Journey</span>
          </motion.h2>
          <p className="text-white/40">Academic background and certifications.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-white/60 font-medium">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {edu.period}
                  </span>
                  <p className="text-white/30 text-xs mt-2 font-mono">{edu.grade}</p>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed max-w-2xl font-light">
                {edu.details}
              </p>
            </motion.div>
          ))}

          {/* Certifications and Internships */}
          <div className="mt-20">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8 px-4 flex items-center gap-3">
              <GraduationCap size={16} /> Certifications & More
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <h5 className="text-white font-bold mb-1">{cert.name}</h5>
                  <p className="text-white/40 text-sm">{cert.issuer}</p>
                  {cert.date && <p className="text-white/20 text-xs mt-4 font-mono">{cert.date}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
