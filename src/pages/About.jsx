import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-sand relative z-10 selection:bg-rust selection:text-sand" ref={containerRef}>
      
      {/* HERO WITH PORTRAIT ARCH */}
      <section className="relative min-h-[90svh] pt-32 pb-20 md:py-0 flex items-center overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] -left-[10%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }} className="md:col-span-6 lg:col-span-7 pt-12 md:pt-0 z-20">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-terracotta/40"></div>
              <span className="text-ochre tracking-[0.25em] text-[8px] md:text-[10px] uppercase font-semibold">Biography</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-deepbrown mb-6 leading-[1.05] tracking-tight">
              <span className="block text-6xl md:text-8xl lg:text-[10rem] font-light">Nefa</span>
              <span className="block text-7xl md:text-9xl lg:text-[11rem] italic text-terracotta md:-mt-8 md:pl-20">Jebrin.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-earth text-lg md:text-xl font-light leading-relaxed max-w-lg mt-10 md:mt-12 pl-6 border-l border-deepbrown/10">
              Welcome — I’m grateful your path has brought you here. I guide souls into deeper consciousness through hypnotherapy, energy healing, spiritual psychology, and Source remembrance work.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-6 lg:col-span-5 relative mt-16 md:mt-0 flex justify-center">
            {/* The Arch Frame */}
            <div className="w-[85%] md:w-full h-[60vh] md:h-[75vh] rounded-t-full overflow-hidden relative shadow-2xl border-t-2 border-white/60 bg-dust">
               <motion.img 
                 style={{ y: yParallax }}
                 src="https://images.unsplash.com/photo-1506126613632-1a43a08bdfdb?q=80&w=2000&auto=format&fit=crop" 
                 alt="Portrait/Meditation" 
                 className="absolute top-[-10%] left-0 w-full h-[120%] object-cover contrast-110 saturate-50 mix-blend-multiply opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-sand/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="w-full overflow-hidden bg-earth py-4 border-y border-deepbrown/10 shadow-inner">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex whitespace-nowrap text-sand/80 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
          {Array(8).fill("✧ THE BRIDGE BETWEEN SUBCONSCIOUS & SOUL ").map((text, i) => (
            <span key={i} className="mx-6">{text}</span>
          ))}
        </motion.div>
      </div>

      <section className="py-24 md:py-48 bg-sand relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-20">
          
          {/* Left Column: Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-12 md:space-y-16">
            <h3 className="text-4xl md:text-6xl font-serif text-deepbrown mb-8 leading-tight">My Path of <br/><span className="italic text-terracotta">Awakening</span></h3>
            <p className="text-earth leading-loose font-light text-lg md:text-xl">I didn’t arrive here through theory — I arrived here through transformation. My journey began with emotional pain, unanswered questions, and a deep knowing that something greater lived inside me. That knowing led me into subconscious work, spiritual alchemy, inner child healing, and the deeper teachings of human consciousness.</p>
            <p className="text-earth leading-loose font-light text-lg md:text-xl">Over time, I learned that healing is not about “fixing” anything. It is about remembering: that you are more than your wounds, that your body holds ancient intelligence, that your emotions carry messages, that your subconscious is programmable, and that your soul is always guiding you.</p>
            <div className="mt-16 pl-8 border-l border-terracotta relative">
              <span className="absolute -top-4 -left-4 text-6xl text-terracotta/20 font-serif leading-none">"</span>
              <p className="text-2xl md:text-3xl text-deepbrown font-serif italic mb-4">This work is the bridge between the subconscious and the soul.</p>
            </div>
          </motion.div>

          {/* Right Column: Floating Philosophy Cards */}
          <div className="space-y-6 md:space-y-8 mt-12 lg:mt-32 relative">
            <h3 className="text-2xl font-serif text-deepbrown mb-8 md:mb-12">My Teaching Philosophy</h3>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-panel p-8 md:p-10 relative overflow-hidden bg-white/40 shadow-xl ml-0 md:ml-12 border-l-4 border-l-terracotta">
              <h4 className="text-deepbrown uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-4"><span className="text-terracotta font-serif text-xl italic">01</span> Compassion</h4>
              <p className="text-earth font-light">Healing does not require force — only safety.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="glass-panel p-8 md:p-10 relative overflow-hidden bg-white/40 shadow-xl ml-0 md:ml-4 border-l-4 border-l-ochre">
              <h4 className="text-deepbrown uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-4"><span className="text-ochre font-serif text-xl italic">02</span> Clarity</h4>
              <p className="text-earth font-light">When the mind becomes clear, the soul can speak.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="glass-panel p-8 md:p-10 relative overflow-hidden bg-white/40 shadow-xl border-l-4 border-l-clay">
              <h4 className="text-deepbrown uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-4"><span className="text-clay font-serif text-xl italic">03</span> Consciousness</h4>
              <p className="text-earth font-light">You are not broken. You are evolving. Your system simply needs to remember its natural state.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 md:py-40 bg-sand text-center relative overflow-hidden border-t border-dust">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-12">Welcome home <br/> <span className="italic text-terracotta">to yourself.</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6">
            <Link to="/certification" className="btn-primary">7-Path Certification</Link>
            <Link to="/services" className="btn-secondary bg-white/50 border-white">Private Sessions</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
