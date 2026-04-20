import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Funnel = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-deepbrown min-h-screen text-lg relative z-10 selection:bg-rust selection:text-sand overflow-hidden">
      <div className="noise-overlay delay-500"></div>
      
      {/* Immersive background gradient */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-terracotta/10 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto px-6 py-32 md:py-48 relative z-20">
        
        {/* HOOK */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-32">
          <h1 className="text-4xl md:text-6xl font-serif text-sand mb-12 border-b border-terracotta/30 pb-16 inline-block leading-tight uppercase tracking-widest">
            If you've done <br/> the healing... <br/>
            <span className="italic text-clay lowercase">Read this.</span>
          </h1>
        </motion.div>

        {/* PAIN */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-8 text-dust font-light leading-loose text-xl">
          <p className="tracking-widest uppercase text-[10px] text-ochre mb-12">Dear Friend,</p>
          <p>I know how exhausting it is.</p>
          <p>You've read the personal development books. You've sat in therapy for years. You conceptually understand exactly why you do what you do.</p>
          <p>You know why you push people away. You know why you self-sabotage when you get close to success. You know why your nervous system is always humming with anxiety.</p>
          
          <div className="my-20 relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-terracotta/50"></div>
            <p className="text-sand font-serif text-3xl md:text-4xl leading-tight italic pl-2">
              "But knowing logically why you are broken doesn't fix you."
            </p>
          </div>

          <p>The truth is, cognitive understanding only operates in the conscious mind—which makes up roughly 5% of your brain's processing power.</p>
          <p>The other 95%? That's your subconscious.</p>
        </motion.div>

        {/* MECHANISM */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-32 space-y-8 text-dust font-light leading-loose text-xl">
          <h2 className="text-5xl font-serif text-sand mb-12 tracking-wide">The Mechanism</h2>
          <p>Your subconscious mind is not logical. It doesn't care that you want to be happy. It only cares about keeping you safe, based on rules it learned when you were very young.</p>
          <p>If it learned that "being seen" is dangerous, it will sabotage your business. Once we bypass the critical factor and speak directly to the subconscious in the language it understands, change isn't hard—it's automatic.</p>
        </motion.div>

        {/* CTA 1 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="my-32 text-center">
          <Link to="/checkout" className="btn-primary w-full sm:w-auto hover:scale-105 transition-transform duration-700">
             Unlock the 21-Day Audio Protocol
          </Link>
        </motion.div>

        {/* BENEFITS & PITCH */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel p-12 md:p-20 mb-32 border border-ochre/20">
          <h2 className="text-4xl font-serif text-sand mb-12 text-center">The 21-Day Journey</h2>
          <ul className="space-y-6 mb-16 text-dust font-light">
            <li className="flex gap-6 items-start"><span className="text-ochre">✓</span> <span className="pt-1">20 minutes a day of guided theta-wave audio</span></li>
            <li className="flex gap-6 items-start"><span className="text-ochre">✓</span> <span className="pt-1">Complete somatic nervous system reset</span></li>
            <li className="flex gap-6 items-start"><span className="text-ochre">✓</span> <span className="pt-1">Install new core beliefs around worth and safety</span></li>
            <li className="flex gap-6 items-start"><span className="text-ochre">✓</span> <span className="pt-1">Requires zero willpower to maintain</span></li>
          </ul>
          <div className="text-center">
            <Link to="/checkout" className="btn-secondary w-full sm:w-auto">Start Now for $197</Link>
          </div>
        </motion.div>

        {/* FINAL PITCH */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-32 text-center">
          <h3 className="text-5xl font-serif text-sand mb-12">Don't run old code.</h3>
          <Link to="/checkout" className="btn-primary w-full sm:w-auto px-16">
            Begin Your Inner Alchemy Today
          </Link>
          <p className="mt-12 text-xs uppercase tracking-widest text-dust/50 pt-12 border-t border-earth inline-block">
            <Link to="/" className="hover:text-terracotta transition-colors">Return to Main Sanctuary</Link>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Funnel;
