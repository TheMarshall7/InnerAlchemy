import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full pt-32 md:pt-48 bg-sand relative z-10">
      
      <section className="section-padding pt-10 text-center relative z-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-[1400px] mx-auto border-b border-deepbrown/10 pb-24">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Biography</span>
          <h1 className="text-6xl md:text-9xl font-serif text-deepbrown mb-12 leading-[1.1] uppercase tracking-wider">
            Nefa <br/>
            <span className="italic text-rust lowercase">Jebrin</span>
          </h1>
          <p className="text-2xl text-earth max-w-4xl mx-auto font-light leading-relaxed">
            Welcome — I’m grateful your path has brought you here. I guide souls into deeper consciousness through hypnotherapy, energy healing, spiritual psychology, and Source remembrance work.
          </p>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 bg-sand relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-0 w-1/3 h-[1px] bg-terracotta/20 hidden md:block"></div>
        <div className="absolute bottom-20 right-0 w-1/4 h-[1px] bg-deepbrown/10 hidden md:block"></div>
        
        <div className="max-w-4xl mx-auto px-6 space-y-16 md:space-y-24 text-earth leading-loose font-light text-lg md:text-xl relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-3xl font-serif text-deepbrown mb-8">My Path of Awakening</h3>
            <p className="mb-12">I didn’t arrive here through theory — I arrived here through transformation. My journey began with emotional pain, unanswered questions, and a deep knowing that something greater lived inside me. That knowing led me into subconscious work, spiritual alchemy, inner child healing, and the deeper teachings of human consciousness.</p>
            <p className="mb-12">Over time, I learned that healing is not about “fixing” anything. It is about remembering: that you are more than your wounds, that your body holds ancient intelligence, that your emotions carry messages, that your subconscious is programmable, and that your soul is always guiding you.</p>
            
            <div className="my-16 pl-8 border-l border-terracotta">
              <p className="text-2xl text-deepbrown font-serif italic mb-4">"This work is the bridge between the subconscious and the soul."</p>
            </div>
            
            <h3 className="text-3xl font-serif text-deepbrown mb-8 mt-16">My Teaching Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
               <div>
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">1. Compassion</h4>
                  <p className="text-base">Healing does not require force — only safety.</p>
               </div>
               <div>
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">2. Clarity</h4>
                  <p className="text-base">When the mind becomes clear, the soul can speak.</p>
               </div>
               <div>
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">3. Consciousness</h4>
                  <p className="text-base">You are not broken. You are evolving. Your system simply needs to remember its natural state.</p>
               </div>
            </div>

            <p>Whether you join the 7-Path Self-Hypnosis Course, book a healing session, or walk your own path of inner alchemy — I am here to support you with honesty, depth, and presence. Your healing matters. Your story matters. Your soul matters.</p>
            <p className="mt-8 font-serif text-deepbrown italic text-2xl">Welcome home to yourself.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center pt-24 md:pt-32 mt-24 md:mt-32 border-t border-deepbrown/5">
            <h3 className="text-4xl md:text-5xl font-serif text-deepbrown mb-12 px-4">Ready to begin your work?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6">
              <Link to="/certification" className="btn-primary backdrop-blur-md bg-terracotta/90 border border-transparent">7-Path Certification</Link>
              <Link to="/services" className="btn-secondary">Private Sessions</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
