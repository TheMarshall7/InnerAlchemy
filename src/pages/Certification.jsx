import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Award, HeartHandshake } from 'lucide-react';

const Certification = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full pt-32 md:pt-48 bg-deepbrown relative z-10">
      
      {/* HERO */}
      <section className="section-padding bg-earth relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deepbrown/40 z-10"></div>
          <img src="https://images.unsplash.com/photo-1549421263-596ea62a6fdf?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover object-top opacity-50 contrast-125 saturate-50" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl relative z-20 mx-auto text-center">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Professional Training</span>
          <h1 className="text-6xl md:text-9xl font-serif text-sand mb-10 leading-[1] uppercase tracking-wider">
            7-Path <br/>
            <span className="italic text-terracotta lowercase">Mastery</span>
          </h1>
          <p className="text-lg md:text-xl text-sand/80 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Become someone who truly understands the mind. Heal yourself completely, then build a practice facilitating profound transformation for others.
          </p>
          <Link to="/checkout" className="btn-primary backdrop-blur-md bg-terracotta/90 border border-sand/20">Apply for Certification</Link>
        </motion.div>
      </section>

      {/* IDENTITY SHIFT */}
      <section className="py-40 bg-deepbrown text-center relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6">
          <Compass className="mx-auto text-terracotta mb-12" size={48} strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-serif text-sand mb-12 leading-tight">More Than a Modality. <br/><span className="italic text-clay">An Identity Shift.</span></h2>
          <p className="text-dust leading-loose font-light text-xl">
            This is not just another cognitive tool to add to your coaching belt. The 7-Path System is a deeply robust architecture for the human mind. By taking this training, you are first undertaking your own subconscious excavation. You can only guide others as deeply as you have gone yourself.
          </p>
        </motion.div>
      </section>

      {/* THE 9 RECOGNITIONS */}
      <section className="py-32 bg-earth border-y border-sand/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-24 flex justify-between items-end border-b border-sand/10 pb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-sand">The 9 <span className="italic text-ochre">Principles</span></h2>
            <p className="text-dust font-light hidden md:block max-w-sm text-right">The foundational framework you will master over the course of the training.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "01", title: "Illusion of Willpower", desc: "Understanding why cognitive force fails and how the subconscious dictates behavior." },
              { num: "02", title: "Emotional Resonance", desc: "How the body traps emotional memory and the exact protocol to release it organically." },
              { num: "03", title: "The Critical Factor", desc: "Bypassing the conscious mind's firewall to access deep neuro-plasticity safely." },
              { num: "04", title: "Identity Scaffolding", desc: "Deconstructing false identities formed during developmental trauma." },
              { num: "05", title: "Somatic State Regulation", desc: "Bringing the nervous system back to baseline before introducing new beliefs." },
              { num: "06", title: "Power of Suggestion", desc: "Linguistic mastery to plant seeds of transformation that the mind accepts as truth." },
              { num: "07", title: "Pattern Interruption", desc: "Stopping habitual neural loops the moment they trigger in waking life." },
              { num: "08", title: "Energetic Alignment", desc: "Synchronizing conscious desire with subconscious expectation." },
              { num: "09", title: "Integration & Mastery", desc: "Cementing the changes so the new identity becomes automatic and permanent." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="group p-8 border-b border-sand/10 hover:border-ochre transition-colors duration-500">
                <span className="text-ochre/30 group-hover:text-ochre transition-colors font-serif text-5xl mb-8 block">{item.num}</span>
                <h3 className="text-2xl font-serif text-sand mb-4">{item.title}</h3>
                <p className="text-dust font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME & CTA */}
      <section className="section-padding bg-deepbrown text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif text-sand mb-20">The <span className="italic text-terracotta">Outcome</span></h2>
          <div className="grid md:grid-cols-2 gap-16 mb-24 text-left">
            <div className="glass-panel p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Award size={120} strokeWidth={0.5} className="text-sand"/></div>
              <h3 className="text-3xl font-serif text-sand mb-6 relative z-10">Certified Practitioner</h3>
              <p className="text-dust font-light leading-relaxed relative z-10">You will hold an official 7-Path certification, granting you the profound credibility and the clinical framework to facilitate this work globally.</p>
            </div>
            <div className="glass-panel p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><HeartHandshake size={120} strokeWidth={0.5} className="text-sand"/></div>
              <h3 className="text-3xl font-serif text-sand mb-6 relative z-10">Build Your Practice</h3>
              <p className="text-dust font-light leading-relaxed relative z-10">Stop charging hourly for simple advice. Offer a high-end, deeply transformational architecture that commands premium rates and changes lives.</p>
            </div>
          </div>
          <Link to="/checkout" className="btn-primary">Initialize Application</Link>
        </div>
      </section>
    </div>
  );
};

export default Certification;
