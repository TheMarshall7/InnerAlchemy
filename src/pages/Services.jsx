import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const services = [
    {
      num: "01",
      title: "Access BARS",
      duration: "90 minutes",
      description: "A gentle hands-on process that releases mental clutter, emotional heaviness, and energetic blockages stored for years. We release over 200,000 limiting thoughts and beliefs by activating 32 energy points on the head.",
      benefits: "Overthinking, Emotional exhaustion, Deep relaxation, Lightness and mental clarity. Activates your Parasympathetic Nervous System."
    },
    {
      num: "02",
      title: "MTVSS Immune System Activation",
      duration: "60 minutes",
      description: "A powerful Access Consciousness hands-on body process to boost immunity by activating 32 energies focused on the liver, spleen, glands, and kidneys.",
      benefits: "Immune strength, Cellular regeneration, Chronic fatigue, Physical stress. Your body begins to remember its natural intelligence."
    },
    {
      num: "03",
      title: "Emotional Trauma Release",
      duration: "60 minutes",
      description: "A subconscious–somatic clearing process that melts emotional blockages stored along the spine by accessing and releasing energetic memory and tension.",
      benefits: "Childhood wounds, Panic, Heart heaviness, Nervous system overload. Gives the inner child safety and release."
    },
    {
      num: "04",
      title: "Energetic Facelift",
      duration: "60 minutes",
      description: "A high-frequency hands-on process that rejuvenates your face and body by lifting stagnant energy, restoring vitality, and renewing your glow from within.",
      benefits: "Emotional softness, Rejuvenation, Glow and vitality, Energetic harmony."
    },
    {
      num: "05",
      title: "Brain Capacity Activation",
      duration: "60 minutes",
      description: "A session that awakens dormant mental pathways and clears subconscious blocks around clarity, focus, and decision-making.",
      benefits: "Intelligence activation, Memory, Creativity, Intuition, Mental expansion. Perfect for students, creators, and healers."
    },
    {
      num: "06",
      title: "Manifestation Energy Activation",
      duration: "60 minutes",
      description: "A deep energetic process that aligns your frequency with your desires, dissolving resistance and activating receiving energy.",
      benefits: "Removing blocks to abundance, Increasing magnetic energy, Aligning mind + energy + intention, Attracting new opportunities."
    }
  ];

  return (
    <div className="w-full pt-32 md:pt-48 bg-sand relative z-10">
      <section className="section-padding relative z-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-[1400px] mx-auto border-b border-deepbrown/10 pb-20">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Private Practice</span>
          <h1 className="text-5xl md:text-8xl font-serif text-deepbrown mb-12 leading-[1.1] uppercase tracking-wider">
            Healing <br/>
            <span className="italic text-rust lowercase">Sessions</span>
          </h1>
          <p className="text-xl md:text-2xl text-earth max-w-3xl font-light leading-relaxed">
            Welcome to a sanctuary where your mind, body, and soul finally exhale. Each session activates a different dimension of your inner system to release, realign, and return home to yourself.
          </p>
        </motion.div>
      </section>

      <section className="py-20 md:py-40 bg-sand">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="grid md:grid-cols-12 gap-8 md:gap-16 items-start relative group">
              <div className="md:col-span-1 hidden md:block">
                 <span className="text-deepbrown/20 font-serif text-5xl block">{service.num}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif text-deepbrown mb-4 leading-tight">{service.title}</h2>
                <h3 className="text-terracotta tracking-widest-xl uppercase text-xs mb-8">{service.duration}</h3>
                <Link to="/contact" className="btn-secondary hidden md:inline-block">Book a Session</Link>
              </div>
              <div className="md:col-span-6 space-y-8 md:space-y-12">
                <div className="border-l border-terracotta pl-6 md:pl-8 py-2">
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">The Process</h4>
                  <p className="text-earth font-light leading-relaxed">{service.description}</p>
                </div>
                <div className="border-l border-deepbrown/20 pl-6 md:pl-8 py-2">
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">Supports & Benefits</h4>
                  <p className="text-earth font-light leading-relaxed italic">{service.benefits}</p>
                </div>
                <Link to="/contact" className="btn-secondary w-full text-center md:hidden mt-8">Book a Session</Link>
              </div>
            </motion.div>
          ))}
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center pt-24 border-t border-deepbrown/10">
            <h3 className="text-3xl font-serif text-deepbrown mb-6">How to Book</h3>
            <p className="text-earth font-light mb-8 max-w-xl mx-auto">All sessions available In-Person, on Zoom, or via WhatsApp.<br/>Availability: Monday–Friday | 10 AM – 5 PM</p>
            <Link to="/contact" className="btn-primary">Schedule Your Healing Experience</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
