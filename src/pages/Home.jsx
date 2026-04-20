import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-deepbrown selection:bg-rust selection:text-sand" ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed immersive background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-deepbrown"
          style={{ y: yParallax, opacity: opacityFade }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deepbrown z-10 w-full h-full"></div>
          <div className="absolute inset-0 bg-terracotta/20 mix-blend-overlay z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1627914041113-1f148dceeafe?q=80&w=2500&auto=format&fit=crop" 
            alt="Warm desert architecture" 
            className="w-full h-full object-cover object-center opacity-80"
          />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer} initial="hidden" animate="visible"
          className="relative z-20 text-center px-6 w-full mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-sand/50"></div>
            <span className="text-sand tracking-[0.3em] text-[10px] uppercase font-semibold">Reprogram Your Mind</span>
            <div className="w-12 h-px bg-sand/50"></div>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-display font-serif text-sand mb-6 tracking-widest uppercase">
            <span className="block font-light">Inner</span>
            <span className="block italic -mt-6 md:-mt-12">Alchemy</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} className="mt-16 sm:mt-24">
            <Link to="/program" className="group flex flex-col items-center gap-4 text-xs tracking-widest-xl uppercase text-sand uppercase hover:text-ochre transition-colors duration-500">
              <span>Begin Your Journey</span>
              <div className="w-px h-12 bg-sand/50 group-hover:bg-ochre group-hover:h-20 transition-all duration-700 ease-out"></div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ATMOSPHERIC STATEMENT */}
      <section className="py-40 md:py-64 relative bg-deepbrown z-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-7xl font-serif text-sand leading-tight mb-12"
          >
            You are not broken. <br/>
            <span className="italic text-clay">You are simply running</span> <br/>
            outdated code.
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeUp}
            className="text-dust max-w-lg mx-auto text-lg/loose font-light"
          >
            For years, the wellness industry has focused on adding more. We focus on subtracting the layers of conditioning that are not you. Welcome to the sanctuary of subconscious architecture.
          </motion.p>
        </div>
      </section>

      {/* 3. ASYMMETRICAL PATHWAYS (Replacing basic cards) */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-earth relative z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto bg-earth">
          
          <div className="mb-32 md:mb-48 border-b border-sand/10 pb-12 flex justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-serif text-sand">Curated Pathways</h2>
            <Link to="/services" className="text-xs uppercase tracking-widest text-ochre hover:text-sand transition-colors hidden md:block">View All Offerings</Link>
          </div>

          <div className="space-y-32 md:space-y-48">
            {/* Pathway 1 */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} className="md:col-span-7 h-[600px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-terracotta/20 mix-blend-color z-10 group-hover:bg-terracotta/0 transition-all duration-1000"></div>
                <img src="https://images.unsplash.com/photo-1600011689027-0b11210bbf9b?q=80&w=2000&auto=format&fit=crop" alt="Desert wellness" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className="md:col-span-4 md:col-start-9 space-y-8">
                <span className="text-ochre text-xs tracking-widest-xl uppercase">Self-Guided</span>
                <h3 className="text-4xl md:text-5xl font-serif text-sand leading-tight">21-Day <br/><span className="italic text-clay">Journey</span></h3>
                <p className="text-dust font-light leading-relaxed">An immersive audio-based journey to release blocks and regulate your nervous system from the sanctuary of your home.</p>
                <Link to="/program" className="inline-block border-b border-sand/30 pb-2 text-sm text-sand hover:border-sand transition-colors uppercase tracking-widest">Explore Program</Link>
              </motion.div>
            </div>

            {/* Pathway 2 */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="md:col-span-4 space-y-8 order-2 md:order-1">
                <span className="text-ochre text-xs tracking-widest-xl uppercase">Professional</span>
                <h3 className="text-4xl md:text-5xl font-serif text-sand leading-tight">7-Path <br/><span className="italic text-clay">Certification</span></h3>
                <p className="text-dust font-light leading-relaxed">Master the architecture of the mind. Heal yourself completely, then build a high-end practice helping others transform.</p>
                <Link to="/certification" className="inline-block border-b border-sand/30 pb-2 text-sm text-sand hover:border-sand transition-colors uppercase tracking-widest">View Certification</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }} className="md:col-span-7 md:col-start-6 h-[600px] overflow-hidden relative group order-1 md:order-2">
                 <div className="absolute inset-0 bg-rust/20 mix-blend-color z-10 group-hover:bg-rust/0 transition-all duration-1000"></div>
                <img src="https://images.unsplash.com/photo-1549421263-596ea62a6fdf?q=80&w=2000&auto=format&fit=crop" alt="Abstract clay" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL TESTIMONIAL VIEW */}
      <section className="py-40 relative z-20 bg-deepbrown border-t border-earth overflow-hidden flex items-center justify-center">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-3xl md:text-5xl font-serif text-sand leading-relaxed italic mb-12 font-light">
              "For years I intellectually understood my trauma. But Inner Alchemy actually changed how my body responds to the world. <br/><span className="text-clay">I feel at home in myself.</span>"
            </p>
            <p className="text-ochre uppercase tracking-widest-xl text-[10px] font-semibold">— Sarah M.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
