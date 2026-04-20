import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full min-h-screen bg-sand flex flex-col relative z-10 selection:bg-rust selection:text-sand overflow-hidden">
      
      {/* BREATHING ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-terracotta/10 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-dust/50 rounded-full blur-[150px] animate-[pulse_15s_ease-in-out_infinite_alternate]"></div>
      </div>

      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative z-20">
        
        <div className="max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pr-0 lg:pr-24 lg:border-r border-deepbrown/10 relative">
            <span className="text-ochre tracking-[0.25em] text-[10px] uppercase font-semibold mb-8 flex items-center gap-4"><div className="w-8 h-px bg-terracotta/50"></div> Book A Session</span>
            <h1 className="text-5xl md:text-8xl font-serif text-deepbrown mb-8 leading-[0.9] tracking-tight">
              Begin your <br/>
              <span className="italic text-clay">Journey.</span>
            </h1>
            <p className="text-earth font-light text-lg md:text-xl leading-relaxed mb-12">
              Whether you are ready for a private hypnotherapy session, energy work, or enrolling in our certification programs—reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-earth">
                <span className="text-terracotta tracking-widest text-[10px] uppercase font-semibold w-24">Location</span>
                <span className="font-light text-sm">Global via Zoom & WhatsApp</span>
              </div>
              <div className="flex items-center gap-4 text-earth">
                <span className="text-terracotta tracking-widest text-[10px] uppercase font-semibold w-24">Availability</span>
                <span className="font-light text-sm">Mon - Fri | 10 AM - 5 PM</span>
              </div>
            </div>
            
            {/* Minimalist Compass SVG */}
            <svg className="absolute -bottom-24 -left-12 w-48 h-48 text-terracotta/5 animate-[spin_60s_linear_infinite] pointer-events-none" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="1"/></svg>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="lg:pl-24 relative">
            
            <div className="glass-panel p-10 md:p-16 relative overflow-hidden bg-white/60 shadow-2xl rounded-[40px] md:rounded-[60px] border border-white">
              {/* Corner accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-dust rounded-full blur-3xl pointer-events-none"></div>
        
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-serif text-deepbrown mb-8 border-b border-deepbrown/10 pb-6">Send an Inquiry</h3>
                  
                  <div className="space-y-4">
                    <input type="text" placeholder="Your Name" required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light text-sm md:text-base"/>
                    <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light text-sm md:text-base"/>
                    <select required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown focus:border-terracotta outline-none transition-colors font-light cursor-pointer text-sm md:text-base appearance-none">
                      <option value="" disabled selected>Select an Interest</option>
                      <option value="access-bars">Access BARS Session</option>
                      <option value="trauma-release">Emotional Trauma Release</option>
                      <option value="energy-facelift">Energetic Facelift</option>
                      <option value="certification">7-Path Certification</option>
                      <option value="other">General Inquiry</option>
                    </select>
                    <textarea placeholder="Your Message" rows={3} required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light resize-none mt-4 text-sm md:text-base"></textarea>
                  </div>

                  <button type="submit" className="btn-secondary w-full mt-8 bg-sand border-dust hover:bg-terracotta hover:text-white transition-all text-sm shadow-xl">Send Message</button>
                </form>
              ) : (
                <div className="text-center space-y-8 relative z-10 py-12">
                  <div className="w-20 h-20 bg-dust rounded-full flex items-center justify-center mx-auto mb-8 border border-white">
                    <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-4xl font-serif text-deepbrown">Message Sent.</h3>
                  <p className="text-earth font-light leading-relaxed">Thank you for reaching out. We will connect with you shortly regarding your request.</p>
                  <Link to="/" className="btn-secondary mt-12 w-full block bg-sand border-transparent">Return to Sanctuary</Link>
                </div>
              )}
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
