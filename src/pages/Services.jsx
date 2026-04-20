import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const services = [
    { num: "01", title: "Access BARS", duration: "90 minutes", desc: "A gentle hands-on process that releases mental clutter and emotional heaviness. We release over 200,000 limiting thoughts and beliefs by activating 32 energy points on the head.", benefits: "Deep relaxation, mental clarity. Activates your Parasympathetic Nervous System.", img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a" },
    { num: "02", title: "MTVSS Immune System", duration: "60 minutes", desc: "A powerful Access Consciousness hands-on body process to boost immunity by activating 32 energies focused on the liver, spleen, glands, and kidneys.", benefits: "Immune strength, Cellular regeneration, Chronic fatigue. Your body begins to remember its natural intelligence.", img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1" },
    { num: "03", title: "Emotional Trauma Release", duration: "60 minutes", desc: "A subconscious–somatic clearing process that melts emotional blockages stored along the spine by accessing and releasing energetic memory and tension.", benefits: "Childhood wounds, Panic, Heart heaviness. Gives the inner child safety and release.", img: "https://images.unsplash.com/photo-1470259078422-826894b933aa" },
    { num: "04", title: "Energetic Facelift", duration: "60 minutes", desc: "A high-frequency hands-on process that rejuvenates your face and body by lifting stagnant energy, restoring vitality, and renewing your glow from within.", benefits: "Emotional softness, Rejuvenation, Glow and vitality, Energetic harmony.", img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94" },
    { num: "05", title: "Brain Capacity Activation", duration: "60 minutes", desc: "A session that awakens dormant mental pathways and clears subconscious blocks around clarity, focus, and decision-making.", benefits: "Memory, Creativity, Intuition. Perfect for students, creators, and healers.", img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88" },
    { num: "06", title: "Manifestation Energy", duration: "60 minutes", desc: "A deep energetic process that aligns your frequency with your desires, dissolving resistance and activating receiving energy.", benefits: "Aligning mind + energy + intention, Attracting new opportunities.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }
  ];

  return (
    <div className="w-full bg-sand relative z-10 selection:bg-rust selection:text-sand">
      
      {/* HEADER */}
      <section className="pt-40 md:pt-64 pb-20 relative overflow-hidden bg-dust">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2500')] opacity-5 mix-blend-multiply object-cover object-center pointer-events-none"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-terracotta/40"></div>
            <span className="text-ochre tracking-[0.25em] text-[8px] md:text-[10px] uppercase font-semibold">Private Practice</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif text-deepbrown mb-8 leading-[0.9] tracking-tight">
            Healing <br/>
            <span className="italic text-terracotta md:pl-24 block">Sessions.</span>
          </h1>
          <p className="text-lg md:text-xl text-earth max-w-2xl font-light leading-relaxed border-l border-deepbrown/20 pl-6 mt-12">
            Welcome to a sanctuary where your mind, body, and soul finally exhale. Each session activates a different dimension of your inner system to release, realign, and return home to yourself.
          </p>
        </motion.div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="w-full overflow-hidden bg-earth py-4 border-y border-deepbrown/10 shadow-inner">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex whitespace-nowrap text-sand/80 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
          {Array(8).fill("✧ IN-PERSON ✧ ZOOM ✧ WHATSAPP ✧ GLOBAL SESSIONS ").map((text, i) => (
            <span key={i} className="mx-6">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* STAGGERED MASONRY MENU */}
      <section className="py-24 md:py-48 bg-sand relative overflow-hidden">
        {/* Soft atmospheric background gradients */}
        <div className="absolute left-0 top-[20%] w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-0 top-[60%] w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32 md:space-y-48 relative z-20">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid md:grid-cols-12 gap-8 md:gap-16 items-center group">
                
                {/* Image Side */}
                <div className={`md:col-span-5 h-[350px] md:h-[500px] relative overflow-hidden rounded-[40px] md:rounded-[80px] shadow-2xl ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                  <img src={`${service.img}?q=80&w=1200&auto=format&fit=crop`} alt={service.title} className="w-full h-full object-cover opacity-80 saturate-50 contrast-110 group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                  <div className="absolute inset-0 bg-deepbrown/10 mix-blend-multiply"></div>
                  {/* Floating Number overlap */}
                  <div className="absolute -top-6 -left-6 md:-top-4 md:-left-4 text-[6rem] md:text-[10rem] font-serif text-white/40 mix-blend-overlay leading-none italic pointer-events-none">{service.num}</div>
                </div>

                {/* Content Side */}
                <div className={`md:col-span-7 space-y-8 md:space-y-12 ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                  <div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-deepbrown mb-4 leading-tight group-hover:text-terracotta transition-colors">{service.title}</h2>
                    <h3 className="text-ochre tracking-widest-xl uppercase text-[10px] md:text-xs font-semibold">{service.duration}</h3>
                  </div>
                  <div className="border-l border-deepbrown/20 pl-6 md:pl-8 py-2 relative">
                    {/* Decorative abstract svg symbol */}
                    <svg className="absolute -left-3 top-[-10px] w-6 h-6 text-terracotta/40 bg-sand" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
                    <p className="text-earth font-light leading-relaxed text-lg mb-6">{service.desc}</p>
                    <p className="text-deepbrown/60 font-light leading-relaxed text-sm italic border-t border-deepbrown/5 pt-4">Benefits: {service.benefits}</p>
                  </div>
                  <Link to="/contact" className="btn-secondary text-sm">Book This Session</Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-dust text-center border-t border-deepbrown/5 flex flex-col items-center justify-center">
        <h3 className="text-4xl font-serif text-deepbrown mb-8">Ready to Align?</h3>
        <Link to="/contact" className="btn-primary">Schedule Your Healing Experience</Link>
      </section>

    </div>
  );
};

export default Services;
