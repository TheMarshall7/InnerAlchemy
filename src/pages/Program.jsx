import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, Moon, Activity, ArrowRight } from 'lucide-react';

const Program = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-sand relative z-10 selection:bg-rust selection:text-sand">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/60 rounded-full blur-[150px] pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="pt-40 md:pt-64 pb-20 relative z-20 px-6 max-w-[1400px] mx-auto text-center md:text-left">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <div className="h-px w-12 bg-deepbrown/30"></div>
            <span className="text-terracotta tracking-[0.25em] text-[10px] uppercase font-semibold">Self-Guided Work</span>
            <div className="h-px w-12 bg-deepbrown/30 md:hidden"></div>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-deepbrown mb-10 leading-[0.9] tracking-tight">
            Courses & <br className="hidden md:block"/>
            <span className="italic text-clay md:pl-24 block">Trainings.</span>
          </h1>
          <p className="text-lg md:text-xl text-earth mb-16 max-w-2xl font-light leading-relaxed mx-auto md:mx-0 border-l border-deepbrown/10 pl-6">
            Welcome to your portal of awakening, healing, and inner mastery. Programs created to support your emotional, energetic, and spiritual evolution.
          </p>
        </motion.div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="w-full overflow-hidden bg-dust py-4 border-y border-deepbrown/10">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex whitespace-nowrap text-deepbrown/60 text-xs tracking-[0.3em] uppercase font-light">
          {Array(8).fill("✧ 21 DAY RESET ✧ ASTRAL TRAVEL ✧ FULL MOON MANTRAS ✧ ALCHEMY OF FEELINGS ").map((text, i) => (
            <span key={i} className="mx-6">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* BENTO CATALOG GRID */}
      <section className="py-24 md:py-40 bg-sand relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 auto-rows-[350px] md:auto-rows-[450px]">
            
            {/* Massive Hero Audio Module */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-1 lg:col-span-8 row-span-2 group relative overflow-hidden bg-deepbrown border border-dust rounded-[40px] md:rounded-[60px] shadow-2xl">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000&auto=format&fit=crop" alt="Subconscious Reset" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-40 saturate-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-deepbrown via-deepbrown/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end z-10">
                <PlayCircle className="mb-8 text-terracotta bg-white p-2 rounded-full hidden md:block" size={60} strokeWidth={1} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 border border-white/20 rounded-full px-4 py-1 self-start mb-6 backdrop-blur-sm">21-Day Audio System</span>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-sand mb-6">Subconscious Reset</h3>
                <p className="text-sand/80 leading-relaxed font-light text-base md:text-lg max-w-xl mb-10 border-l border-white/20 pl-6">A deep 21-day audio journey to calm your mind and body, release old patterns, and begin reprogramming your limiting beliefs while you relax.</p>
                <Link to="/funnel" className="bg-white/10 hover:bg-white text-white hover:text-deepbrown self-start px-8 py-4 uppercase text-xs tracking-widest transition-all backdrop-blur-md rounded-full shadow-lg">Start Reset Protocol</Link>
              </div>
            </motion.div>

            {/* Inner Journey Module */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="col-span-1 lg:col-span-4 row-span-1 bg-white/40 hover:bg-white backdrop-blur-md transition-colors duration-500 border border-deepbrown/10 p-10 md:p-12 flex flex-col justify-between rounded-[40px] md:rounded-[60px] shadow-xl group">
              <div>
                <Activity className="mb-6 text-terracotta opacity-50 group-hover:opacity-100 transition-opacity" size={32} strokeWidth={1} />
                <span className="text-[10px] uppercase tracking-widest-xl text-ochre font-semibold mb-4 block">Inner Journey — $150</span>
                <h3 className="text-3xl font-serif text-deepbrown mb-4 group-hover:text-terracotta transition-colors">The Secret Alchemy of Feelings</h3>
                <p className="text-sm md:text-base text-earth leading-relaxed font-light">True alchemy begins when we stop judging our emotions. Learn how sadness becomes softness, and anger becomes truth.</p>
              </div>
              <Link to="/funnel" className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-deepbrown font-semibold pt-6 border-t border-deepbrown/10 group-hover:text-terracotta transition-colors w-max">
                Enroll <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Full Moon Workshop */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }} className="col-span-1 lg:col-span-4 row-span-1 bg-dust hover:bg-terracotta/10 transition-colors duration-500 border border-deepbrown/5 p-10 md:p-12 flex flex-col justify-between rounded-[40px] md:rounded-[60px] shadow-xl overflow-hidden relative group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/40 rounded-full blur-[20px] group-hover:bg-terracotta/20 transition-all duration-1000"></div>
              <div className="relative z-10">
                <Moon className="mb-6 text-deepbrown opacity-50 group-hover:opacity-100 transition-opacity" size={32} strokeWidth={1} />
                <span className="text-[10px] uppercase tracking-widest-xl text-deepbrown/60 font-semibold mb-4 block">Meditation — $45</span>
                <h3 className="text-3xl font-serif text-deepbrown mb-4">Full Moon Mantras</h3>
                <p className="text-sm md:text-base text-earth leading-relaxed font-light">A cosmic portal for inner illumination and release based on Practical Astrology. Connect to the Moon's sign and receive insight.</p>
              </div>
              <Link to="/checkout" className="relative z-10 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-deepbrown font-semibold pt-6 border-t border-deepbrown/10 w-max group-hover:text-terracotta transition-colors">
                Purchase Audio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 bg-sand text-center relative overflow-hidden px-6 border-t border-dust">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-12">Want to become your <br/> <span className="italic text-terracotta">own healer?</span></h2>
          <Link to="/certification" className="btn-primary inline-flex text-white w-full sm:w-auto">
            View 7-Path Certification
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Program;
