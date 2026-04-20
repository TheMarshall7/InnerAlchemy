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
      title: "Clinical Hypnotherapy",
      solves: "Deep-seated limiting beliefs, childhood conditioning, chronic anxiety, and repeating destructive relationship or financial patterns.",
      happens: "We bypass the conscious mind to access the subconscious. While you remain in complete control and deeply relaxed, we rewrite the foundational stories driving your behavior.",
      outcome: "An identity-level shift. Responses that used to trigger anxiety now yield calm logic. Self-sabotage is replaced with natural, effortless alignment."
    },
    {
      num: "02",
      title: "Energy & Somatic Release",
      solves: "Trapped emotions in the physical body, feeling disconnected from intuition, lingering grief, and chronic nervous system dysregulation.",
      happens: "Using advanced energetic techniques and gentle somatic tracking, we locate where your body is holding past trauma and create a safe pathway for it to disperse.",
      outcome: "A profound sense of physical lightness. A regulated nervous system. High mental clarity and a restored connection to your authentic self."
    },
    {
      num: "03",
      title: "Conscious Breathwork",
      solves: "Mental fog, stagnant creativity, suppressed anger or sadness, and difficulty staying present in your daily life.",
      happens: "Guided active breathing sequences designed to safely lower the mind's defenses, flush the system with oxygen, and allow blocked emotions to surface and release.",
      outcome: "Immediate stress reduction, massive creative clarity, emotional catharsis, and a deep, restful state of physical being."
    }
  ];

  return (
    <div className="w-full pt-32 md:pt-48 bg-deepbrown relative z-10">
      <section className="section-padding relative z-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-[1400px] mx-auto border-b border-sand/10 pb-20">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Private Practice</span>
          <h1 className="text-5xl md:text-8xl font-serif text-sand mb-12 leading-[1.1] uppercase tracking-wider">
            Personal <br/>
            <span className="italic text-rust lowercase">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-dust max-w-3xl font-light leading-relaxed">
            Highly customized, clinical sessions for individuals ready to stop managing symptoms and start rewriting the source code.
          </p>
        </motion.div>
      </section>

      <section className="pb-40 bg-deepbrown">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          {services.map((service, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid md:grid-cols-12 gap-16 items-start relative group">
              <div className="md:col-span-1 hidden md:block">
                 <span className="text-sand/20 font-serif text-5xl block">{service.num}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif text-sand mb-8 leading-tight">{service.title}</h2>
                <Link to="/contact" className="btn-secondary hidden md:inline-block">Book a Session</Link>
              </div>
              <div className="md:col-span-6 space-y-12">
                <div className="border-l border-terracotta pl-8 py-2">
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">What it Solves</h4>
                  <p className="text-dust font-light leading-relaxed">{service.solves}</p>
                </div>
                <div className="border-l border-sand/20 pl-8 py-2">
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">What Happens</h4>
                  <p className="text-dust font-light leading-relaxed">{service.happens}</p>
                </div>
                <div className="border-l border-sand/20 pl-8 py-2">
                  <h4 className="text-ochre uppercase tracking-widest text-[10px] font-semibold mb-4">Expected Outcome</h4>
                  <p className="text-sand font-serif text-xl leading-relaxed italic">{service.outcome}</p>
                </div>
                <Link to="/contact" className="btn-secondary w-full text-center md:hidden mt-8">Book a Session</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
