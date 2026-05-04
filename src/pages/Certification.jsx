import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Award, HeartHandshake, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import nefaImg from '../assets/nefa.png';
import mirrorsImg from '../assets/essence_mirrors.jpg';

const Certification = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-sand relative z-10 selection:bg-rust selection:text-sand" ref={containerRef}>
      
      {/* HERO WITH PARALLAX & GLOW */}
      <section className="relative min-h-[90svh] pt-32 pb-20 flex items-center overflow-hidden bg-dust">
        {/* Soft background orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sand/60 rounded-full blur-[120px] pointer-events-none"></div>


        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl relative z-20 mx-auto text-center px-6">
          <span className="text-terracotta tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block drop-shadow-sm">Professional Training</span>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-deepbrown mb-10 leading-[0.85] uppercase tracking-wider drop-shadow-2xl">
            7-Path <br/>
            <span className="italic text-terracotta lowercase md:pl-20">Certification</span>
          </h1>
          <p className="text-lg md:text-xl text-deepbrown/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed border-l-2 border-r-2 border-terracotta/20 px-8">
            A Mind–Body–Spirit Approach to Deep Subconscious Healing. Heal yourself completely, then build a practice facilitating profound transformation for others.
          </p>
          <Link to="/contact" className="btn-primary backdrop-blur-md bg-terracotta/90 border border-deepbrown/10 text-white shadow-xl">Apply for Training</Link>
        </motion.div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="w-full overflow-hidden bg-earth py-4 border-y border-deepbrown/10 shadow-inner">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex whitespace-nowrap text-sand/80 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
          {Array(8).fill("✧ SUBCONSCIOUS REPROGRAMMING ✧ MIND BODY SPIRIT ✧ HIGHER SELF CONNECTION ").map((text, i) => (
            <span key={i} className="mx-6">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* IDENTITY SHIFT */}
      <section className="py-24 md:py-40 bg-clay text-center relative z-20 shadow-inner">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 relative z-10">
          <Compass className="mx-auto text-white mb-12 animate-[spin_40s_linear_infinite]" size={64} strokeWidth={0.5} />
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 leading-tight">Heal. Release. <br/><span className="italic text-sand/80">Transform. Awaken.</span></h2>
          <p className="text-white/90 leading-loose font-light text-lg md:text-xl">
            The 7th Path™ Self-Hypnosis method is a unique inner journey that empowers you to become your own healer. Unlike traditional hypnosis, this system integrates spiritual psychology and the Delta recognitions into a mind–body–spirit approach that deeply reconnects you with the higher power within.
          </p>
        </motion.div>
      </section>

      {/* THE 9 RECOGNITIONS MASONRY */}
      <section className="py-20 md:py-40 bg-dust border-y border-deepbrown/5 relative overflow-hidden">
        {/* Abstract Geometry */}
        <svg className="absolute -top-10 -right-10 w-96 h-96 text-terracotta/5 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100"><polygon fill="currentColor" points="50,0 100,25 100,75 50,100 0,75 0,25"/></svg>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-16 md:mb-24 flex md:flex-row flex-col justify-between items-start md:items-end border-b border-deepbrown/10 pb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-4 md:mb-0">The Core <br/><span className="italic text-ochre">Recognitions</span></h2>
            <p className="text-earth font-light max-w-sm md:text-right text-lg">What you will learn & integrate inside this paradigm-shifting journey.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "I", title: "Release Programming", desc: "Release painful emotional programming and clear trauma stored in the subconscious." },
              { num: "II", title: "Free from the Past", desc: "Forgive and free yourself from the past, planting new seeds for your aligned future." },
              { num: "III", title: "Spiritual Connection", desc: "Strengthen your connection with your higher self or GOD through Delta state practices." },
              { num: "IV", title: "Pattern Interruption", desc: "Stop repeating old patterns and build true self-love and inner strength." },
              { num: "V", title: "Elevated Perspective", desc: "See life from a spiritual perspective, deepening your gratitude and inner peace." },
              { num: "VI", title: "Awaken Purpose", desc: "Grow into your purpose and step into your role as both a teacher and a student." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="group p-10 md:p-12 relative overflow-hidden bg-white/40 hover:bg-white backdrop-blur-sm border border-white/50 shadow-xl transition-all duration-500 rounded-[40px]">
                {/* Massive Dropcap Numeral */}
                <span className="absolute -top-10 -right-6 text-sand group-hover:text-terracotta/5 transition-colors duration-700 font-serif text-[12rem] italic leading-none pointer-events-none select-none z-0">{item.num}</span>
                
                <div className="relative z-10">
                  <span className="text-ochre tracking-widest uppercase text-[10px] font-semibold mb-4 block">Recognition {item.num}</span>
                  <h3 className="text-3xl font-serif text-deepbrown mb-6">{item.title}</h3>
                  <p className="text-earth font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SEVEN ESSENCE MIRRORS */}
      <section className="py-24 md:py-40 bg-sand relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <span className="text-ochre tracking-[0.3em] text-[10px] uppercase font-semibold mb-6 block">The Mirror Principle</span>
             <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-8 leading-tight">The Seven <br/><span className="italic text-clay">Essence Mirrors</span></h2>
             <p className="text-earth font-light text-lg leading-relaxed mb-10 border-l border-terracotta/20 pl-8">
               A cornerstone of our training. Learn to read the world as a reflection of your internal state. These mirrors provide a profound map for understanding relationships, repeating patterns, and the hidden facets of your own soul.
             </p>
             <ul className="space-y-4 text-deepbrown/60 font-light text-sm italic">
                <li>✧ Recognition of the Self in others</li>
                <li>✧ Understanding your judgments and attractions</li>
                <li>✧ Reclaiming your projections to return to wholeness</li>
             </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group p-4 md:p-0"
          >
            <div className="absolute -inset-4 bg-terracotta/5 rounded-full blur-3xl -z-10 group-hover:bg-terracotta/10 transition-all duration-1000"></div>
            <div className="rounded-[40px] md:rounded-[80px] overflow-hidden shadow-3xl border-2 border-white/60 bg-white/20 p-2 md:p-4 backdrop-blur-sm">
               <img src={mirrorsImg} alt="The Seven Essence Mirrors" className="w-full h-auto rounded-[32px] md:rounded-[64px] object-cover object-center" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BECOME THE HEALER (High-Impact CTA) */}
      <section className="py-24 md:py-32 bg-clay relative overflow-hidden z-20 shadow-inner">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-12 leading-tight">
              Ready to awaken your <br/><span className="italic text-sand/80">inner master?</span>
            </h2>
            <Link to="/contact" className="group relative inline-flex items-center gap-6 px-12 py-6 bg-white text-clay text-xs tracking-[0.3em] uppercase font-bold rounded-full overflow-hidden transition-all hover:pr-16 hover:bg-sand">
              Apply for Certification
              <ArrowRight size={18} className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
