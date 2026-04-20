import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, PlayCircle, Lock, Smartphone } from 'lucide-react';

const Program = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full pt-32 md:pt-48 bg-deepbrown relative z-10">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* HERO */}
      <section className="section-padding pt-10 relative z-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold">Self-Guided Course</span>
            <div className="w-12 h-px bg-sand/30"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-sand mb-12 leading-[1.1] uppercase tracking-widest">
            The 21-Day <br/>
            <span className="italic text-clay lowercase">Reprogramming</span> <br/>
            Journey
          </h1>
          <p className="text-lg md:text-xl text-dust mb-16 max-w-2xl font-light leading-relaxed">
            A step-by-step audio protocol to release old emotional patterns and regulate your nervous system from the comfort of your sanctuary.
          </p>
          <Link to="/checkout" className="btn-primary w-full sm:w-auto">Start Journey — $197</Link>
        </motion.div>
      </section>

      {/* IF THIS IS YOU */}
      <section className="py-32 bg-earth border-y border-sand/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-deepbrown/50 to-transparent pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-serif text-sand mb-8 leading-tight">If you're reading this, <br/>you've tried <span className="italic text-terracotta">everything.</span></h2>
            <p className="text-dust mb-6 font-light leading-relaxed text-lg">You've read the books. You've talked about it in therapy. You understand logically why you feel the way you do.</p>
            <p className="text-dust font-light leading-relaxed text-lg">But for some reason, your body hasn't caught up. The trigger still hits. The anxiety still spikes. The pattern still repeats.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="bg-deepbrown/50 backdrop-blur-xl p-12 border border-sand/5 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ochre/5 blur-3xl rounded-full"></div>
            <div className="space-y-6 relative z-10">
              {[
                "You know what you need to do, but feel paralyzed to do it.",
                "You struggle with people-pleasing and weak boundaries.",
                "You intellectualize your feelings instead of feeling them.",
                "You feel a constant, low-grade hum of anxiety in your chest.",
                "You self-sabotage just when things start going well."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-5">
                  <CheckCircle2 className="text-ochre shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <p className="text-sand font-light tracking-wide">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS DAILY */}
      <section className="section-padding bg-deepbrown">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-serif text-sand mb-8 leading-tight">The <span className="italic text-clay">Protocol</span></h2>
          <p className="text-dust max-w-2xl text-lg font-light">It only takes 20 minutes a day to rewrite years of conditioning.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-[1400px] mx-auto text-left">
          {[
            { icon: <Lock className="mb-8 text-terracotta" size={40} strokeWidth={1} />, title: "Release", days: "Days 1-7", desc: "We focus purely on safety. We guide your nervous system out of fight-or-flight and softly release trapped somatic energy." },
            { icon: <PlayCircle className="mb-8 text-terracotta" size={40} strokeWidth={1} />, title: "Rewire", days: "Days 8-14", desc: "Using deep theta wave audios, we bypass the critical mind and plant new core beliefs around worthiness, safety, and power." },
            { icon: <Smartphone className="mb-8 text-terracotta" size={40} strokeWidth={1} />, title: "Integrate", days: "Days 15-21", desc: "We lock the changes into your waking state, creating a new behavioral baseline that requires zero willpower to maintain." }
          ].map((phase, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.2 }} className="glass-panel p-12 hover:bg-earth/80 transition-colors duration-500">
              {phase.icon}
              <span className="text-[10px] uppercase tracking-widest-xl text-ochre font-semibold mb-4 block">{phase.days}</span>
              <h3 className="text-3xl font-serif text-sand mb-6">{phase.title}</h3>
              <p className="text-sm text-dust leading-relaxed font-light">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 bg-terracotta text-center relative overflow-hidden">
        {/* Abstract pattern via mix-blend */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 mix-blend-multiply object-cover"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif text-sand mb-12">Ready to change <br/> <span className="italic text-deepbrown">the code?</span></h2>
          <Link to="/checkout" className="btn-primary bg-deepbrown text-sand hover:bg-sand hover:text-deepbrown w-full sm:w-auto">
            Start the 21-Day Journey
          </Link>
          <p className="mt-10 text-sand/70 text-sm tracking-widest uppercase">Instant access. 30-day guarantee.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Program;
