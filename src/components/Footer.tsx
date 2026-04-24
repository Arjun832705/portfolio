import { portfolioData } from '@/src/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-tighter">ARJUN</span>
            <span className="text-white/20 text-xs font-mono">© {currentYear}</span>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-white/30">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-[10px] uppercase tracking-widest font-bold text-white/20">
            Designed & Built with <span className="text-white/40">Passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
