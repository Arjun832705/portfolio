import { motion } from 'motion/react';
import arjunImg from "../arjun.png";
import {portfolioData} from "../data.js"

export default function About() {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={arjunImg}
                alt={portfolioData.name}
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            {/* Decal */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white flex items-center justify-center rounded-2xl rotate-12 z-20 hidden md:flex">
              <span className="text-black font-bold text-xs uppercase tracking-tighter text-center leading-tight">
                MERN STACK <br /> ENGINEER
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              A developer focused on <br />
              <span className="text-white/30 italic font-serif">crafting intelligent systems.</span>
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed font-light mb-8">
              {portfolioData.summary}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-2">Location</h4>
                <p className="text-white/90 font-medium">{portfolioData.location}</p>
              </div>
              <div>
                <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-2">Education</h4>
                <p className="text-white/90 font-medium">BSc in IT</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 text-white font-medium group"
            >
              <span>Get in touch</span>
              <div className="h-[1px] w-12 bg-white transition-all group-hover:w-20" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
