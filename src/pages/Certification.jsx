import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Award, HeartHandshake } from 'lucide-react';

const Certification = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full pt-32 md:pt-48 bg-sand relative z-10">
      
      {/* HERO */}
      <section className="section-padding bg-dust relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sand/40 z-10"></div>
          <img src="https://images.unsplash.com/photo-1549421263-596ea62a6fdf?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover object-top opacity-30 contrast-125 saturate-50 mix-blend-color-burn" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl relative z-20 mx-auto text-center">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Professional Training</span>
          <h1 className="text-5xl md:text-8xl font-serif text-deepbrown mb-10 leading-[1] uppercase tracking-wider">
            7-Path Self Hypnosis <br/>
            <span className="italic text-terracotta lowercase">Certification</span>
          </h1>
          <p className="text-lg md:text-xl text-deepbrown/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            A Mind–Body–Spirit Approach to Deep Subconscious Healing. Heal yourself completely, then build a practice facilitating profound transformation for others.
          </p>
          <Link to="/contact" className="btn-primary backdrop-blur-md bg-terracotta/90 border border-deepbrown/10 text-white">Apply for Training</Link>
        </motion.div>
      </section>

      {/* IDENTITY SHIFT */}
      <section className="py-40 bg-sand text-center relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6">
          <Compass className="mx-auto text-terracotta mb-12" size={48} strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-12 leading-tight">Heal. Release. <br/><span className="italic text-clay">Transform. Awaken.</span></h2>
          <p className="text-earth leading-loose font-light text-xl">
            The 7th Path™ Self-Hypnosis method is a unique inner journey that empowers you to become your own healer. Unlike traditional hypnosis, this system integrates spiritual psychology and the Delta recognitions into a mind–body–spirit approach that deeply reconnects you with the higher power within.
          </p>
        </motion.div>
      </section>

      {/* THE 9 RECOGNITIONS */}
      <section className="py-32 bg-dust border-y border-deepbrown/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-24 flex md:flex-row flex-col justify-between items-start md:items-end border-b border-deepbrown/10 pb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-4 md:mb-0">The Core <span className="italic text-ochre">Recognitions</span></h2>
            <p className="text-earth font-light max-w-sm md:text-right">What you will learn & integrate inside this paradigm-shifting journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "01", title: "Release Programming", desc: "Release painful emotional programming and clear trauma stored in the subconscious." },
              { num: "02", title: "Free from the Past", desc: "Forgive and free yourself from the past, planting new seeds for your aligned future." },
              { num: "03", title: "Spiritual Connection", desc: "Strengthen your connection with your higher self or GOD through Delta state connection practices." },
              { num: "04", title: "Pattern Interruption", desc: "Stop repeating old patterns and build true self-love and inner strength." },
              { num: "05", title: "Elevated Perspective", desc: "See life from a spiritual perspective, deepening your gratitude and inner peace." },
              { num: "06", title: "Awaken Purpose", desc: "Grow into your purpose and step into your role as both a teacher and a student." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="group p-8 border-b border-deepbrown/10 hover:border-ochre transition-colors duration-500 bg-sand/30">
                <span className="text-ochre/50 group-hover:text-ochre transition-colors font-serif text-5xl mb-8 block">{item.num}</span>
                <h3 className="text-2xl font-serif text-deepbrown mb-4">{item.title}</h3>
                <p className="text-earth font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME & CTA */}
      <section className="section-padding bg-sand text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-deepbrown mb-20">What's <span className="italic text-terracotta">Included?</span></h2>
          <div className="grid md:grid-cols-2 gap-16 mb-24 text-left">
            <div className="glass-panel p-16 relative overflow-hidden bg-white/40">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Award size={120} strokeWidth={0.5} className="text-deepbrown"/></div>
              <h3 className="text-3xl font-serif text-deepbrown mb-6 relative z-10">The Curriculum</h3>
              <ul className="text-earth font-light leading-relaxed relative z-10 space-y-4">
                 <li>✔ 9 Video Lessons</li>
                 <li>✔ Full explanations of all Recognitions</li>
                 <li>✔ Guided Self-Hypnosis Sessions</li>
                 <li>✔ PDF Worksheets & Journal Prompts</li>
                 <li>✔ Delta Connection Practices</li>
              </ul>
            </div>
            <div className="glass-panel p-16 relative overflow-hidden bg-white/40">
               <div className="absolute top-0 right-0 p-8 opacity-5"><HeartHandshake size={120} strokeWidth={0.5} className="text-deepbrown"/></div>
              <h3 className="text-3xl font-serif text-deepbrown mb-6 relative z-10">Build Your Holistic Business</h3>
              <p className="text-earth font-light leading-relaxed relative z-10">You will receive an official certification that empowers you to start your own holistic business. Step into your purpose, utilizing a highly profound framework that commands premium rates and changes lives globally.</p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary">Apply for Certification</Link>
        </div>
      </section>
    </div>
  );
};

export default Certification;
