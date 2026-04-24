import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Instagram } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sending message:', formData);
    // Add logic here to send email or save to DB
    alert('Thank you! Your message has been simulated.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8"
            >
              Let's build <br />
              <span className="text-white/30 italic font-serif">the future together.</span>
            </motion.h2>
            
            <p className="text-lg text-white/50 leading-relaxed font-light mb-12 max-w-sm">
              Have a project in mind or just want to chat? Reach out and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Email Me</p>
                  <a href={`mailto:${portfolioData.email}`} className="text-white font-medium hover:text-white/70 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-4">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={portfolioData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-2 px-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-2 px-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-2 px-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-2xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all group"
              >
                <span>Send Message</span>
                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
