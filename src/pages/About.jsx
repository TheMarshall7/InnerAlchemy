import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ResponsiveNefaImage from '../components/ResponsiveNefaImage';
import { useIsMobile } from '../hooks/useIsMobile';

// Certificate Imports
import certAccess from '../assets/certificates/Access bars facilitator degree certificate.jpg';
import certConscious from '../assets/certificates/Access consciousness certificate.jpg';
import certNGH from '../assets/certificates/National Guild of hypnotist certificate.jpg';
import cert7Path from '../assets/certificates/Seven path hypnosis teacher certificate.jpg';

const About = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  const fadeUp = {
    hidden: { opacity: 0, y: isMobile ? 16 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.6 : 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 500 : window.innerWidth * 0.85;
      galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const certificates = [
    { 
      title: "NGH Certified Hypnotherapist", 
      blurb: "Member of the National Guild of Hypnotists, the world's oldest and largest hypnosis organization.", 
      img: certNGH 
    },
    { 
      title: "7-Path Hypnosis Teacher", 
      blurb: "Advanced certification to teach the Mind-Body-Spirit system of transformative self-hypnosis.", 
      img: cert7Path 
    },
    { 
      title: "Access Bars Facilitator", 
      blurb: "Certified to facilitate the clearing of 32 energetic points on the head to release mental clutter.", 
      img: certAccess 
    },
    { 
      title: "Access Consciousness Practitioner", 
      blurb: "Expertise in MTVSS and cellular memory body processes for profound physical restoration.", 
      img: certConscious 
    }
  ];

  return (
    <div className="w-full bg-sand relative z-10 selection:bg-rust selection:text-sand" ref={containerRef}>
      
      {/* HERO WITH PORTRAIT ARCH */}
      <section className="relative min-h-[90svh] pt-32 pb-20 md:py-0 flex items-center overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-[-10%] -left-[10%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] pointer-events-none hidden md:block"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }} className="md:col-span-6 lg:col-span-7 pt-12 md:pt-0 z-20">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-terracotta/40"></div>
              <span className="text-ochre tracking-[0.25em] text-[8px] md:text-[10px] uppercase font-semibold">Biography</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-deepbrown mb-6 leading-[1.05] tracking-tight text-balance">
              <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-light">Nefa</span>
              <span className="block text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] italic text-terracotta md:-mt-8 pl-4 sm:pl-8 md:pl-20">Jebrin.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-earth text-lg md:text-xl font-light leading-relaxed max-w-lg mt-10 md:mt-12 pl-6 border-l border-deepbrown/10">
              Welcome — I’m grateful your path has brought you here. I guide souls into deeper consciousness through hypnotherapy, energy healing, spiritual psychology, and Source remembrance work.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-6 lg:col-span-5 relative mt-10 sm:mt-16 md:mt-0 flex justify-center md:h-[75vh]">
            {/* The Arch Frame */}
            <div className="w-full sm:w-[85%] md:w-full h-auto md:h-full rounded-[24px] sm:rounded-t-[120px] md:rounded-t-full overflow-hidden relative shadow-2xl border border-white/60 md:border-t-2 bg-dust flex items-center justify-center">
               <ResponsiveNefaImage
                 className="w-full h-auto max-h-[75vh] md:max-h-none md:h-full object-contain object-center md:object-cover md:object-top"
                 loading="eager"
                 fetchPriority="high"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-sand/50 via-transparent to-transparent pointer-events-none hidden md:block"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="w-full overflow-hidden bg-earth py-4 border-y border-deepbrown/10 shadow-inner">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex whitespace-nowrap text-sand/80 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
          {Array(8).fill("✧ THE BRIDGE BETWEEN SUBCONSCIOUS & SOUL ").map((text, i) => (
            <span key={i} className="mx-6">{text}</span>
          ))}
        </motion.div>
      </div>

      <section className="py-24 md:py-48 bg-sand relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-20">
          
          {/* Left Column: Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-12 md:space-y-16">
            <h3 className="text-4xl md:text-6xl font-serif text-deepbrown mb-8 leading-tight">My Path of <br/><span className="italic text-terracotta">Awakening</span></h3>
            <p className="text-earth leading-loose font-light text-lg md:text-xl">I didn’t arrive here through theory — I arrived here through transformation. My journey began with emotional pain, unanswered questions, and a deep knowing that something greater lived inside me. That knowing led me into subconscious work, spiritual alchemy, inner child healing, and the deeper teachings of human consciousness.</p>
            <p className="text-earth leading-loose font-light text-lg md:text-xl">Over time, I learned that healing is not about “fixing” anything. It is about remembering: that you are more than your wounds, that your body holds ancient intelligence, that your emotions carry messages, that your subconscious is programmable, and that your soul is always guiding you.</p>
            <div className="mt-16 pl-8 border-l border-terracotta relative">
              <span className="absolute -top-4 -left-4 text-6xl text-terracotta/20 font-serif leading-none">"</span>
              <p className="text-2xl md:text-3xl text-deepbrown font-serif italic mb-4">This work is the bridge between the subconscious and the soul.</p>
            </div>
          </motion.div>

          {/* Right Column: Floating Philosophy Cards */}
          <div className="space-y-6 md:space-y-8 mt-12 lg:mt-32 relative">
            <h3 className="text-2xl font-serif text-deepbrown mb-8 md:mb-12">My Teaching Philosophy</h3>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-panel p-8 md:p-10 relative overflow-hidden bg-white/40 shadow-xl ml-0 md:ml-12 border-l-4 border-l-terracotta">
              <h4 className="text-deepbrown uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-4"><span className="text-terracotta font-serif text-xl italic">01</span> Compassion</h4>
              <p className="text-earth font-light">Healing does not require force — only safety.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="glass-panel p-8 md:p-10 relative overflow-hidden bg-white/40 shadow-xl ml-0 md:ml-4 border-l-4 border-l-ochre">
              <h4 className="text-deepbrown uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-4"><span className="text-ochre font-serif text-xl italic">02</span> Clarity</h4>
              <p className="text-earth font-light">When the mind becomes clear, the soul can speak.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="glass-panel p-8 md:p-10 relative overflow-hidden bg-white/40 shadow-xl border-l-4 border-l-clay">
              <h4 className="text-deepbrown uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-4"><span className="text-clay font-serif text-xl italic">03</span> Consciousness</h4>
              <p className="text-earth font-light">You are not broken. You are evolving. Your system simply needs to remember its natural state.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* EMOTIONAL ALCHEMY PHILOSOPHY */}
      <section className="py-24 md:py-40 bg-earth relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sand to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-sand/60 tracking-[0.3em] text-[9px] uppercase font-semibold mb-8 block">The Secret Alchemy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-sand mb-12 leading-tight">
              Emotions are not problems.<br/>
              <span className="italic text-terracotta">They are portals.</span>
            </h2>
            <p className="text-sand/70 font-light text-lg md:text-xl leading-loose max-w-3xl mx-auto mb-16">
              I teach a different relationship to feeling. When we meet our emotions with presence, devotion, and reverence — instead of avoidance — they purify rather than overwhelm. Sadness softens. Anger reveals truth. Fear initiates growth. Your soul already knows the way.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left mt-8">
              {[
                { emotion: "Sadness", alchemy: "Softens into compassion when held with safety." },
                { emotion: "Anger", alchemy: "Reveals truth and calls forth healthy boundaries." },
                { emotion: "Fear", alchemy: "Initiates growth when walked through with presence." }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="border border-sand/10 p-8 bg-white/5 backdrop-blur-sm">
                  <h4 className="text-terracotta font-serif text-2xl italic mb-3">{item.emotion}</h4>
                  <p className="text-sand/60 font-light text-sm leading-relaxed">{item.alchemy}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY ETERNAL SOURCE ACADEMY */}
      <section className="py-24 md:py-40 bg-dust relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:mb-24 border-b border-deepbrown/10 pb-12">
            <span className="text-ochre tracking-[0.25em] text-[9px] uppercase font-semibold mb-4 block">Why people choose</span>
            <h2 className="text-4xl md:text-6xl font-serif text-deepbrown leading-tight">Eternal Source<br/><span className="italic text-clay">Academy.</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Safe & Supportive", desc: "Every session and course is held in a compassionate, non-judgmental container where healing unfolds at the right pace for you." },
              { title: "Subconscious-First", desc: "We work at the level where real change happens — not the 5% conscious mind, but the 95% subconscious where your patterns truly live." },
              { title: "Practical Tools", desc: "You leave with real practices — self-hypnosis, recognitions, and somatic tools — not just concepts or temporary relief." },
              { title: "High-Frequency Teachings", desc: "Rooted in spiritual psychology, Access Consciousness, and Source remembrance work that elevates your entire frequency." },
              { title: "Authentic Presence", desc: "Nefa brings heart-centered, lived experience to every session. She has walked the path herself and guides from genuine embodiment." },
              { title: "Global Access", desc: "Work with Nefa in person, on Zoom, or via WhatsApp. Transformation is available wherever you are in the world." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 bg-white/50 border border-white shadow-xl hover:bg-white transition-colors duration-500">
                <span className="text-terracotta font-serif text-4xl italic leading-none block mb-6">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-deepbrown font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-earth font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL LINEAGE (Horizontal Scroll) */}
      <section className="py-24 md:py-40 bg-sand relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end border-b border-deepbrown/10 pb-12">
          <div>
            <span className="text-ochre tracking-[0.25em] text-[9px] uppercase font-semibold mb-4 block">Certified Excellence</span>
            <h2 className="text-4xl md:text-6xl font-serif text-deepbrown leading-tight">Lineage & <br/><span className="italic text-terracotta">Accreditations.</span></h2>
          </div>
          <div className="flex flex-col items-start md:items-end mt-6 md:mt-0">
            <p className="text-earth font-light max-w-sm md:text-right">Rigorous training from the world's leading institutions in hypnotherapy and energetic medicine.</p>
            <div className="flex items-center gap-4 mt-6">
              <button onClick={() => scrollGallery('left')} className="w-12 h-12 flex items-center justify-center rounded-full border border-rust text-terracotta hover:bg-rust hover:text-deepbrown transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button onClick={() => scrollGallery('right')} className="w-12 h-12 flex items-center justify-center rounded-full border border-rust text-terracotta hover:bg-rust hover:text-deepbrown transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div ref={galleryRef} className="flex overflow-x-auto pb-12 px-6 gap-8 no-scrollbar snap-x snap-mandatory scroll-smooth">
          {certificates.map((cert, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="w-[85vw] md:w-[500px] md:min-w-[500px] snap-center flex-shrink-0"
             >
                <div className="bg-white p-6 md:p-10 shadow-2xl border border-dust mb-10 group relative overflow-hidden rounded-sm flex items-center justify-center h-[300px] md:h-[450px]">
                  <img src={cert.img} alt={cert.title} className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-deepbrown/5 pointer-events-none mix-blend-multiply"></div>
                </div>
                <div className="px-4">
                  <h4 className="text-deepbrown font-serif text-2xl mb-4 leading-tight">{cert.title}</h4>
                  <p className="text-earth/70 text-base font-light leading-relaxed max-w-sm">{cert.blurb}</p>
                </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* BECOME YOUR OWN HEALER (High-Impact CTA) */}
      <section className="py-24 md:py-32 bg-clay relative overflow-hidden z-20 shadow-inner">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-12 leading-tight">
              Want to become your <br/><span className="italic text-sand/80">own healer?</span>
            </h2>
            <Link to="/certification" className="group relative inline-flex items-center gap-6 px-12 py-6 bg-white text-clay text-xs tracking-[0.3em] uppercase font-bold rounded-full overflow-hidden transition-all hover:pr-16 hover:bg-sand">
              View 7-Path Certification
              <ArrowRight size={18} className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
