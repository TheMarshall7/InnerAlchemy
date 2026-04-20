import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full pt-32 md:pt-48 bg-deepbrown relative z-10">
      
      <section className="section-padding pt-10 text-center relative z-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-[1400px] mx-auto border-b border-sand/10 pb-24">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">The Philosophy</span>
          <h1 className="text-6xl md:text-9xl font-serif text-sand mb-12 leading-[1.1] uppercase tracking-wider">
            You Are <br/>
            <span className="italic text-rust lowercase">Not Broken.</span>
          </h1>
          <p className="text-2xl text-dust max-w-4xl mx-auto font-light leading-relaxed">
            Inner Alchemy Hypnosis was founded on a singular premise: most of what we call "personality" is just deeply ingrained subconscious conditioning. And conditioning can be changed.
          </p>
        </motion.div>
      </section>

      <section className="py-32 bg-deepbrown relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-0 w-1/3 h-[1px] bg-terracotta/20"></div>
        <div className="absolute bottom-20 right-0 w-1/4 h-[1px] bg-sand/10"></div>
        
        <div className="max-w-4xl mx-auto px-6 space-y-16 text-dust leading-loose font-light text-xl relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-12">For years, the wellness industry has focused on adding more: more routines, more bio-hacking, more self-discipline. But true transformation isn't about adding to yourself. It is about subtracting the layers of conditioning that are not you.</p>
            <p className="mb-12">Our approach integrates classical clinical hypnotherapy with modern somatics to create profound shifts at the identity level. We bypass the critical conscious mind, which is inherently designed to protect the status quo, and speak directly to the emotional center where true change happens.</p>
            <p>Whether you choose to heal privately in a 1:1 format, integrate our audio protocols into your daily life, or become a practitioner yourself—our mission is to help you remember the truth of who you are, beneath the programming.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center pt-32 mt-32 border-t border-sand/5">
            <h3 className="text-4xl md:text-5xl font-serif text-sand mb-12">Ready to begin your work?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/program" className="btn-primary backdrop-blur-md bg-terracotta/90 border border-transparent">The 21-Day Journey</Link>
              <Link to="/services" className="btn-secondary">Private Sessions</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
