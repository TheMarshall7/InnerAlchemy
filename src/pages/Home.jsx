import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import nefaImg from '../assets/nefa.png';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-sand selection:bg-rust selection:text-sand" ref={containerRef}>
      
      {/* 1. HERO RE-IMAGINED (Editorial Split with Arch) */}
      <section className="relative min-h-[100svh] pt-32 pb-20 md:py-0 flex items-center overflow-hidden">
        {/* Soft atmospheric glow orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-terracotta/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-white/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-0 items-center relative z-10">
          
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }} className="md:col-span-6 lg:col-span-7 pt-20 md:pt-16 pl-6 md:pl-24 z-20">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-terracotta/40"></div>
              <span className="text-ochre tracking-[0.25em] text-[8px] md:text-[10px] uppercase font-semibold">Eternal Source Academy</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-deepbrown mb-6 leading-[1.05] tracking-tight">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light">Awaken Your</span>
              <span className="block text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] italic text-terracotta md:-mt-4">Inner</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light pl-8 md:pl-24 -mt-2 md:-mt-8">Alchemy.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-earth text-base md:text-xl font-light leading-relaxed max-w-md mt-10 md:mt-16 pl-6 border-l w-[calc(100%-1.5rem)] border-deepbrown/10">
              A sanctuary for those who are ready to heal, evolve, and remember. Bridging subconscious reprogramming with profound energy work.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pl-6">
              <Link to="/program" className="btn-primary w-full sm:w-auto text-center">Begin Your Journey</Link>
              <Link to="/services" className="text-xs flex items-center gap-2 tracking-widest uppercase text-earth hover:text-terracotta transition-colors group">
                Private Sessions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side: Arched window with image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5 h-[60vh] md:h-[85vh] w-full relative mt-16 md:mt-0 pt-0 md:pt-12 pr-6 md:pr-24"
          >
            {/* The Arch Frame */}
            <div className="w-full h-full rounded-t-[200px] overflow-hidden relative shadow-[0_20px_50px_rgba(42,31,26,0.05)] border-t-4 border-l border-r border-white/60 bg-dust flex items-center justify-center">
               <img 
                 src={nefaImg} 
                 alt="Nefa Jebrin" 
                 className="w-full h-full object-cover object-top"
               />

            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. INFINITE MARQUEE (Dynamic Break) */}
      <div className="w-full overflow-hidden bg-earth py-4 border-y border-deepbrown/10 shadow-inner">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap text-sand/80 text-xs md:text-sm tracking-[0.3em] uppercase font-light"
        >
          {Array(8).fill("✧ HOLISTIC HYPNOTHERAPY ✧ ENERGY HEALING ✧ SUBCONSCIOUS WORK ✧ INNER ALCHEMY ").map((text, i) => (
            <span key={i} className="mx-6">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* 3. ATMOSPHERIC STATEMENT (Upgraded Premium Design) */}
      <section className="py-32 md:py-56 relative bg-sand z-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          
          {/* Ornamental Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <div className="w-16 h-16 border border-terracotta/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-terracotta rounded-full shadow-[0_0_15px_rgba(196,87,60,0.5)]"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-deepbrown leading-[1.1] tracking-tight mb-16">
              I guide you into <span className="italic text-terracotta">alignment</span> <br className="hidden md:block" />
              with your <span className="italic">highest self.</span>
            </h2>
            
            <div className="w-12 h-px bg-terracotta/30 mx-auto mb-16"></div>
            
            <p className="text-earth max-w-2xl mx-auto text-xl md:text-2xl font-light leading-relaxed mb-12 italic">
              "A certified hypnotherapist and holistic healer. Helping you connect with your true essence, release deep emotional blocks, and awaken inner peace."
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 bg-ochre/20"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-ochre font-bold">Nefa Jebrin</span>
              <div className="h-[1px] w-8 bg-ochre/20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE BENTO GRID OFFERINGS (High Visual Density) */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-dust relative z-20">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between md:items-end gap-8 border-b border-deepbrown/10 pb-12">
            <div>
              <span className="text-ochre tracking-[0.3em] text-[10px] uppercase font-semibold mb-4 block">Our Offerings</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-deepbrown leading-none">Explore <span className="italic text-clay">Pathways</span></h2>
            </div>
            <Link to="/services" className="group flex items-center gap-3 text-xs uppercase tracking-widest text-ochre hover:text-deepbrown transition-colors">
              View full catalog <span className="w-8 h-px bg-ochre group-hover:w-12 group-hover:bg-deepbrown transition-all"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 auto-rows-[400px] md:auto-rows-[500px]">
            
            {/* BENTO CARD 1: Large Feature - Sacred Healing */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="md:col-span-8 lg:col-span-8 row-span-2 group relative overflow-hidden rounded-[40px] md:rounded-[80px] shadow-3xl bg-sand"
            >
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" alt="Sacred Healing" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-70 saturate-[0.2] contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-deepbrown via-deepbrown/40 to-transparent"></div>
              </div>
              
              {/* Floating element for depth */}
              <div className="absolute top-12 right-12 w-32 h-32 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute inset-x-10 bottom-10 md:inset-x-20 md:bottom-20 z-10 flex flex-col items-start text-white">
                <span className="uppercase tracking-[0.4em] text-[9px] mb-6 text-white/60 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">Sacred Sanctuary</span>
                <h3 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Private <br/><span className="italic text-sand/60">Alchemy</span></h3>
                <p className="font-light text-white/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed border-l border-white/20 pl-8">
                  Experience profound 1:1 containers designed to melt away limitations and guide you home to your true nature.
                </p>
                <Link to="/services" className="group/btn relative overflow-hidden bg-white text-deepbrown px-10 py-5 uppercase text-xs tracking-widest transition-all rounded-full flex items-center gap-4">
                  Explore Sessions
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BENTO CARD 2: Training - Professional Mastery */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-4 lg:col-span-4 row-span-1 border border-deepbrown/10 bg-white/40 backdrop-blur-xl p-10 md:p-16 flex flex-col justify-between hover:bg-white transition-all duration-700 group rounded-[40px] md:rounded-[60px] shadow-xl hover:shadow-2xl overflow-hidden relative"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl group-hover:bg-terracotta/10 transition-colors"></div>
              
              <div className="relative z-10">
                 <div className="w-12 h-px bg-terracotta/40 mb-8"></div>
                 <span className="text-terracotta text-[11px] tracking-[0.3em] uppercase mb-4 block font-semibold">Professional Mastery</span>
                 <h3 className="text-4xl font-serif text-deepbrown mb-6 group-hover:text-terracotta transition-colors leading-tight">7-Path <br/><span className="italic">Certification</span></h3>
                 <p className="font-light text-earth text-base md:text-lg leading-relaxed">Join an elite circle of practitioners trained in the mind–body–spirit self-hypnosis system.</p>
              </div>
              <Link to="/certification" className="relative z-10 inline-flex items-center gap-4 text-xs uppercase tracking-widest text-ochre font-bold hover:text-deepbrown transition-colors group/link">
                View Curriculum 
                <span className="p-2 border border-ochre/20 rounded-full group-hover/link:bg-ochre group-hover/link:text-white transition-all">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>

            {/* BENTO CARD 3: Courses - Digital Alchemy */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
              className="md:col-span-4 lg:col-span-4 row-span-1 bg-deepbrown p-10 md:p-16 flex flex-col justify-between overflow-hidden relative group rounded-[40px] md:rounded-[60px] shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              {/* Abstract decorative graphic */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-[60px] group-hover:bg-terracotta/20 transition-all duration-1000 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                 <div className="w-12 h-px bg-white/20 mb-8"></div>
                 <span className="text-white/40 text-[11px] tracking-[0.3em] uppercase mb-4 block">Independent Study</span>
                 <h3 className="text-4xl font-serif text-white mb-6 leading-tight">Digital <br/><span className="italic text-terracotta/80">Alchemy</span></h3>
                 <p className="font-light text-white/60 text-base md:text-lg leading-relaxed">Self-paced programs and guided audio activations for consistent inner evolution.</p>
              </div>
              <Link to="/program" className="relative z-10 inline-flex items-center gap-4 text-xs uppercase tracking-widest text-white font-bold hover:text-terracotta transition-colors group/link">
                Browse Catalog
                <span className="p-2 border border-white/20 rounded-full group-hover/link:bg-terracotta group-hover/link:border-terracotta transition-all">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. THE ECHO (Testimonial Highlight) */}
      <section className="py-24 md:py-40 relative z-20 bg-sand overflow-hidden flex items-center justify-center border-t border-dust px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/60 backdrop-blur-xl border border-white shadow-2xl p-12 md:p-20 rounded-[40px] rounded-tl-none relative">
            <svg className="absolute -top-6 -left-6 w-16 h-16 text-terracotta/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
            <p className="text-2xl md:text-4xl font-serif text-deepbrown leading-relaxed italic mb-10 font-light">
              "It brought me peace, positivity, calm and joy. Thank you so much for sharing... this is exactly what I needed to hear to keep going."
            </p>
            <p className="text-terracotta uppercase tracking-[0.2em] text-[10px] font-semibold flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-terracotta/30"></span> 
              Verified Student
              <span className="w-8 h-[1px] bg-terracotta/30"></span>
            </p>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
