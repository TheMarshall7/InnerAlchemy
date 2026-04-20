import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, Moon, Activity } from 'lucide-react';

const Program = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full pt-32 md:pt-48 bg-sand relative z-10">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[120px] pointer-events-none"></div>

      {/* HERO */}
      <section className="section-padding pt-10 relative z-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-terracotta tracking-widest-xl text-[10px] uppercase font-semibold">Self-Guided Work</span>
            <div className="w-12 h-px bg-deepbrown/30"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-deepbrown mb-12 leading-[1.1] uppercase tracking-widest">
            Courses & <br/>
            <span className="italic text-clay lowercase">Trainings</span>
          </h1>
          <p className="text-lg md:text-xl text-earth mb-16 max-w-2xl font-light leading-relaxed">
            Welcome to your portal of awakening, healing, and inner mastery. Programs created to support your emotional, energetic, and spiritual evolution.
          </p>
        </motion.div>
      </section>

      {/* CATALOG */}
      <section className="py-24 bg-dust border-y border-deepbrown/5 relative overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1400px] mx-auto text-left px-6">
          
          {/* Audio Tool */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel p-12 bg-sand/40 hover:bg-white/60 transition-colors duration-500 flex flex-col h-full border border-white">
            <PlayCircle className="mb-8 text-terracotta" size={40} strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest-xl text-ochre font-semibold mb-4 block">21-Day Audio System</span>
            <h3 className="text-3xl font-serif text-deepbrown mb-6">Subconscious Reset</h3>
            <p className="text-sm text-earth leading-relaxed font-light flex-grow">A deep 21-day audio journey to calm your mind and body, release old patterns, and begin reprogramming your limiting beliefs while you relax.</p>
            <div className="mt-8 pt-8 border-t border-deepbrown/10">
              <Link to="/checkout" className="text-sm text-deepbrown uppercase tracking-widest border-b border-deepbrown pb-1 font-semibold hover:text-terracotta hover:border-terracotta transition-colors">Start Reset Protocol</Link>
            </div>
          </motion.div>

          {/* New Course */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="glass-panel p-12 bg-sand/40 hover:bg-white/60 transition-colors duration-500 flex flex-col h-full border border-white">
            <Activity className="mb-8 text-terracotta" size={40} strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest-xl text-ochre font-semibold mb-4 block">Inner Journey — $150</span>
            <h3 className="text-3xl font-serif text-deepbrown mb-6">The Secret Alchemy of Feelings</h3>
            <p className="text-sm text-earth leading-relaxed font-light flex-grow">True alchemy begins when we stop judging our emotions and start listening to them. Learn how sadness becomes softness, anger becomes truth, and fear becomes initiation.</p>
            <div className="mt-8 pt-8 border-t border-deepbrown/10">
              <Link to="/checkout" className="text-sm text-deepbrown uppercase tracking-widest border-b border-deepbrown pb-1 font-semibold hover:text-terracotta hover:border-terracotta transition-colors">Enroll in Course</Link>
            </div>
          </motion.div>

          {/* Meditation Workshop */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="glass-panel p-12 bg-sand/40 hover:bg-white/60 transition-colors duration-500 flex flex-col h-full border border-white">
            <Moon className="mb-8 text-terracotta" size={40} strokeWidth={1} />
            <span className="text-[10px] uppercase tracking-widest-xl text-ochre font-semibold mb-4 block">Meditation — $45</span>
            <h3 className="text-3xl font-serif text-deepbrown mb-6">Full Moon Mantras</h3>
            <p className="text-sm text-earth leading-relaxed font-light flex-grow">A cosmic portal for inner illumination and release based on Practical Astrology. Connect to the Moon's sign, invoke elemental forces, and receive divine insight.</p>
            <div className="mt-8 pt-8 border-t border-deepbrown/10">
              <Link to="/checkout" className="text-sm text-deepbrown uppercase tracking-widest border-b border-deepbrown pb-1 font-semibold hover:text-terracotta hover:border-terracotta transition-colors">Buy Meditation</Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 bg-sand text-center relative overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-12">Want to become your <br/> <span className="italic text-terracotta">own healer?</span></h2>
          <Link to="/certification" className="btn-primary text-white w-full sm:w-auto">
            View 7-Path Certification
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Program;
