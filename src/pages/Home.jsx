import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-8 md:gap-16 items-center relative z-10">
          
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }} className="md:col-span-6 lg:col-span-7 pt-12 md:pt-0 z-20">
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
            className="md:col-span-6 lg:col-span-5 h-[60vh] md:h-[85vh] w-full relative mt-16 md:mt-0"
          >
            {/* The Arch Frame */}
            <div className="w-full h-full rounded-t-[200px] overflow-hidden relative shadow-[0_20px_50px_rgba(42,31,26,0.05)] border-t-4 border-l border-r border-white/60 bg-dust">
               <motion.img 
                 style={{ y: yParallax }}
                 src="https://images.unsplash.com/photo-1506126613632-1a43a08bdfdb?q=80&w=2000&auto=format&fit=crop" 
                 alt="Healing Hands" 
                 className="absolute top-[-10%] left-0 w-full h-[120%] object-cover contrast-110 saturate-50 mix-blend-multiply opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-sand via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Ornamental SVG */}
            <div className="absolute -bottom-6 -left-6 md:bottom-20 md:-left-16 bg-white/70 backdrop-blur-md p-6 rounded-full shadow-2xl animate-[spin_20s_linear_infinite]">
               <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 text-terracotta" fill="currentColor">
                 <path d="M50 0 C55 40 60 45 100 50 C60 55 55 60 50 100 C45 60 40 55 0 50 C40 45 45 40 50 0 Z" />
               </svg>
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

      {/* 3. ATMOSPHERIC STATEMENT (Refined) */}
      <section className="py-24 md:py-48 relative bg-sand z-20">
        <div className="absolute left-0 top-1/2 w-32 md:w-64 h-[1px] bg-terracotta/20"></div>
        <div className="absolute right-0 top-1/2 w-32 md:w-64 h-[1px] bg-terracotta/20"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative pointer-events-none">
          <span className="text-[10rem] md:text-[15rem] font-serif text-deepbrown/5 leading-none absolute -top-16 md:-top-32 left-1/2 -translate-x-1/2">"</span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-deepbrown leading-tight mb-12 relative z-10"
          >
            I guide you into alignment <br/>
            with your <span className="italic text-terracotta">highest self.</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeUp}
            className="text-earth max-w-lg mx-auto text-lg md:text-xl/loose font-light relative z-10"
          >
            A certified hypnotherapist and holistic healer. Helping you connect with your true essence, release deep emotional blocks, and awaken inner peace.
          </motion.p>
        </div>
      </section>

      {/* 4. THE BENTO GRID OFFERINGS (High Visual Density) */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-dust relative z-20">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-deepbrown/10 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deepbrown">Explore <span className="italic text-clay">Pathways</span></h2>
            <Link to="/services" className="text-xs uppercase tracking-widest text-ochre hover:text-deepbrown transition-colors">View the full catalog</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
            
            {/* BENTO CARD 1: Large Feature */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-8 lg:col-span-7 row-span-2 group relative overflow-hidden bg-sand">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1500&auto=format&fit=crop" alt="Holistic Healing" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60 saturate-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-deepbrown/80 via-deepbrown/20 to-transparent"></div>
              </div>
              <div className="absolute inset-x-8 bottom-8 md:bottom-12 z-10 flex flex-col items-start text-white">
                <span className="uppercase tracking-[0.2em] text-[10px] mb-4 text-white/70 border border-white/20 rounded-full px-4 py-1 backdrop-blur-sm">Private Practice</span>
                <h3 className="text-4xl md:text-5xl font-serif mb-4">Healing Sessions</h3>
                <p className="font-light text-white/80 max-w-md mb-8 leading-relaxed">Experience Access Consciousness, deep trauma release, and nervous system regulation in profound 1:1 containers.</p>
                <Link to="/services" className="bg-white/10 hover:bg-white text-white hover:text-deepbrown px-8 py-4 uppercase text-xs tracking-widest transition-all backdrop-blur-md">Explore Sessions</Link>
              </div>
            </motion.div>

            {/* BENTO CARD 2: Training */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-4 lg:col-span-5 row-span-1 border border-deepbrown/10 bg-white/40 backdrop-blur-md p-8 md:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-500 group">
              <div>
                 <span className="text-terracotta text-[10px] tracking-widest uppercase mb-4 block">Professional Training</span>
                 <h3 className="text-3xl font-serif text-deepbrown mb-2 group-hover:text-terracotta transition-colors">7-Path Certification</h3>
                 <p className="font-light text-earth text-sm md:text-base">Melt away limitations and learn to guide others into profound states of healing.</p>
              </div>
              <Link to="/certification" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-ochre font-semibold hover:text-deepbrown transition-colors">
                View Curriculum <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* BENTO CARD 3: Courses */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="md:col-span-4 lg:col-span-5 row-span-1 border border-deepbrown/10 bg-sand p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group">
              {/* Abstract decorative graphic */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-dust rounded-full blur-[40px] group-hover:bg-terracotta/20 transition-colors duration-1000"></div>
              
              <div className="relative z-10">
                 <span className="text-deepbrown/40 text-[10px] tracking-widest uppercase mb-4 block">Independent Study</span>
                 <h3 className="text-3xl font-serif text-deepbrown mb-2">Programs & Audios</h3>
                 <p className="font-light text-earth text-sm md:text-base">Accelerate your personal evolution with guided meditations and masterclasses.</p>
              </div>
              <Link to="/program" className="relative z-10 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-deepbrown font-semibold hover:text-terracotta transition-colors w-max border-b border-deepbrown pb-1">
                Browse Catalog
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
