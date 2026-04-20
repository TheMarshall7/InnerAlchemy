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
    <div className="w-full bg-sand selection:bg-rust selection:text-sand" ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed immersive background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-sand"
          style={{ y: yParallax, opacity: opacityFade }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sand z-10 w-full h-full"></div>
          <div className="absolute inset-0 bg-terracotta/10 mix-blend-color-burn z-10"></div>
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
            <div className="w-12 h-px bg-deepbrown/40"></div>
            <span className="text-deepbrown tracking-[0.3em] text-[10px] uppercase font-semibold">Eternal Source Academy</span>
            <div className="w-12 h-px bg-deepbrown/40"></div>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-display font-serif text-deepbrown mb-6 tracking-widest uppercase px-4">
            <span className="block font-light">Inner</span>
            <span className="block italic -mt-6 md:-mt-12 text-terracotta">Alchemy</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-deepbrown/80 tracking-widest-xl text-xs uppercase mb-16">Healing & Hypnosis</motion.p>
          
          <motion.div variants={fadeUp} className="mt-16 sm:mt-12">
            <Link to="/program" className="group flex flex-col items-center gap-4 text-xs tracking-widest-xl uppercase text-deepbrown uppercase hover:text-terracotta transition-colors duration-500">
              <span>Begin Your Journey</span>
              <div className="w-px h-12 bg-deepbrown/30 group-hover:bg-terracotta group-hover:h-20 transition-all duration-700 ease-out"></div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ATMOSPHERIC STATEMENT */}
      <section className="py-40 md:py-64 relative bg-sand z-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-7xl font-serif text-deepbrown leading-tight mb-12"
          >
            A sanctuary for those who <br/>
            are ready to <span className="italic text-clay">heal, evolve,</span> <br/>
            and remember.
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeUp}
            className="text-earth max-w-lg mx-auto text-lg/loose font-light"
          >
            I blend hypnosis, energy healing, and spiritual wisdom to guide you into alignment with your highest self. Helping you connect with your true essence, release deep emotional blocks, and awaken inner peace.
          </motion.p>
        </div>
      </section>

      {/* 3. ASYMMETRICAL PATHWAYS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-dust relative z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto bg-dust">
          
          <div className="mb-32 md:mb-48 border-b border-deepbrown/10 pb-12 flex justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-serif text-deepbrown">Transformational Pathways</h2>
            <Link to="/services" className="text-xs uppercase tracking-widest text-ochre hover:text-deepbrown transition-colors hidden md:block">View All Offerings</Link>
          </div>

          <div className="space-y-32 md:space-y-48">
            {/* Pathway 1 */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} className="md:col-span-7 h-[600px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-sand/10 mix-blend-overlay z-10 transition-all duration-1000"></div>
                <img src="https://images.unsplash.com/photo-1600011689027-0b11210bbf9b?q=80&w=2000&auto=format&fit=crop" alt="Desert wellness" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className="md:col-span-4 md:col-start-9 space-y-8">
                <span className="text-terracotta text-xs tracking-widest-xl uppercase">1:1 Work</span>
                <h3 className="text-3xl md:text-5xl font-serif text-deepbrown leading-tight">Healing & <br/><span className="italic text-clay">Body Process</span></h3>
                <p className="text-earth font-light leading-relaxed">Access Consciousness BARS, MTVSS Immune Activation, and Emotional Trauma Release. Transform subconscious limitations and come back to wholeness.</p>
                <Link to="/services" className="inline-block border-b border-deepbrown/30 pb-2 text-sm text-deepbrown hover:border-deepbrown transition-colors uppercase tracking-widest">Explore Sessions</Link>
              </motion.div>
            </div>

            {/* Pathway 2 */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="md:col-span-4 space-y-8 order-2 md:order-1">
                <span className="text-terracotta text-xs tracking-widest-xl uppercase">Professional Training</span>
                <h3 className="text-3xl md:text-5xl font-serif text-deepbrown leading-tight">7-Path <br/><span className="italic text-clay">Certification</span></h3>
                <p className="text-earth font-light leading-relaxed">A Mind–Body–Spirit Approach to Deep Subconscious Healing. Heal yourself completely, then build a high-end practice helping others transform.</p>
                <Link to="/certification" className="inline-block border-b border-deepbrown/30 pb-2 text-sm text-deepbrown hover:border-deepbrown transition-colors uppercase tracking-widest">View Certification</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }} className="md:col-span-7 md:col-start-6 h-[600px] overflow-hidden relative group order-1 md:order-2">
                 <div className="absolute inset-0 bg-dust/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-1000"></div>
                <img src="https://images.unsplash.com/photo-1549421263-596ea62a6fdf?q=80&w=2000&auto=format&fit=crop" alt="Abstract clay" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out brightness-110" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL TESTIMONIAL VIEW */}
      <section className="py-40 relative z-20 bg-sand overflow-hidden flex items-center justify-center border-t border-dust">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-3xl md:text-5xl font-serif text-deepbrown leading-relaxed italic mb-12 font-light">
              "It brought me peace, positivity, calm and joy. Thank you so much for sharing... this is exactly what I needed to hear."
            </p>
            <p className="text-terracotta uppercase tracking-widest-xl text-[10px] font-semibold">— Student Review</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
