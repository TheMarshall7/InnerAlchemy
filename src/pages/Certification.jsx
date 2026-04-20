import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Award, HeartHandshake } from 'lucide-react';
import { useRef } from 'react';

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

        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1506126613632-1a43a08bdfdb?q=80&w=2500&auto=format&fit=crop" 
            className="w-full h-[120%] object-cover object-top opacity-20 contrast-125 saturate-50 mix-blend-color-burn" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/30 to-sand z-10"></div>
        </div>

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
      <section className="py-24 md:py-40 bg-sand text-center relative z-20">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dust rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 relative z-10">
          <Compass className="mx-auto text-terracotta mb-12 animate-[spin_40s_linear_infinite]" size={64} strokeWidth={0.5} />
          <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-12 leading-tight">Heal. Release. <br/><span className="italic text-clay">Transform. Awaken.</span></h2>
          <p className="text-earth leading-loose font-light text-lg md:text-xl">
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

      {/* OUTCOME & CTA */}
      <section className="py-32 md:py-48 bg-sand text-center relative overflow-hidden px-6">
        <div className="absolute -left-1/4 -bottom-1/4 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-deepbrown mb-16 md:mb-24">What's <span className="italic text-terracotta">Included?</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 text-left">
            <div className="p-12 md:p-16 relative bg-dust hover:bg-white transition-colors duration-500 rounded-[40px] shadow-xl overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] opacity-5 group-hover:text-terracotta transition-colors duration-700 pointer-events-none"><Award size={250} strokeWidth={0.2} className="text-deepbrown"/></div>
              <h3 className="text-3xl md:text-5xl font-serif text-deepbrown mb-8 relative z-10">The Curriculum</h3>
              <ul className="text-earth font-light leading-relaxed relative z-10 space-y-4 text-sm md:text-base border-l border-terracotta/30 pl-6">
                 <li>✧ 9 Video Lessons</li>
                 <li>✧ Full explanations of all Recognitions</li>
                 <li>✧ Guided Self-Hypnosis Sessions</li>
                 <li>✧ PDF Worksheets & Journal Prompts</li>
                 <li>✧ Delta Connection Practices</li>
              </ul>
            </div>
            
            <div className="p-12 md:p-16 relative bg-dust hover:bg-white transition-colors duration-500 rounded-[40px] shadow-xl overflow-hidden group">
               <div className="absolute top-[-20%] right-[-10%] opacity-5 group-hover:text-terracotta transition-colors duration-700 pointer-events-none"><HeartHandshake size={250} strokeWidth={0.2} className="text-deepbrown"/></div>
              <h3 className="text-3xl md:text-5xl font-serif text-deepbrown mb-8 relative z-10">Build Your Practice</h3>
              <p className="text-earth font-light leading-relaxed relative z-10 border-l border-terracotta/30 pl-6 text-sm md:text-base">You will receive an official certification that empowers you to start your own holistic business. Step into your purpose, utilizing a highly profound framework that commands premium rates and changes lives globally.</p>
            </div>
          </div>

          <Link to="/contact" className="btn-primary shadow-2xl hover:shadow-terracotta/20 w-full sm:w-auto">Apply for Certification</Link>
        </div>
      </section>
    </div>
  );
};

export default Certification;
