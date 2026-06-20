import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FORMSPREE_CONTACT_ENDPOINT } from '../constants/links';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        return;
      }

      const data = await response.json().catch(() => ({}));
      setError(data.error || 'Something went wrong. Please try again.');
    } catch {
      setError('Unable to send your message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full min-h-screen bg-sand flex flex-col relative z-10 selection:bg-rust selection:text-sand overflow-hidden">
      
      {/* BREATHING ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-terracotta/10 rounded-full blur-[150px] pointer-events-none hidden md:block animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-dust/50 rounded-full blur-[150px] pointer-events-none hidden md:block animate-[pulse_15s_ease-in-out_infinite_alternate]"></div>
      </div>

      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative z-20">
        
        <div className="max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pr-0 lg:pr-24 lg:border-r border-deepbrown/10 relative">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-terracotta/60"></div>
              <span className="text-ochre tracking-[0.3em] text-[11px] uppercase font-semibold">Book A Session</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-serif text-deepbrown mb-6 leading-[0.9] sm:leading-[0.85] tracking-tight text-balance">
              Begin your <br/>
              <span className="italic text-terracotta relative inline-block mt-2 md:mt-4">
                Journey.
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-terracotta/50 to-transparent"></div>
              </span>
            </h1>

            <p className="text-earth font-light text-lg md:text-xl leading-relaxed mb-8 max-w-lg border-l-2 border-terracotta/20 pl-6">
              Whether you are ready for a private hypnotherapy session, energy work, or enrolling in our certification programs—reach out.
            </p>
            <Link to="/intake" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-terracotta hover:text-deepbrown transition-colors mb-16 border border-terracotta/30 rounded-full px-6 py-3">
              Complete Client Intake Form →
            </Link>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 pl-4">
              <div className="group relative">
                <div className="absolute -left-4 top-2 w-1 h-1 bg-terracotta/30 rounded-full group-hover:bg-terracotta group-hover:scale-150 transition-all duration-500"></div>
                <span className="text-terracotta tracking-[0.2em] text-[10px] uppercase font-semibold mb-2 block">Location</span>
                <span className="block text-earth font-light text-base group-hover:text-deepbrown transition-colors duration-300">Global via Zoom & WhatsApp</span>
              </div>
              
              <div className="group relative">
                <div className="absolute -left-4 top-2 w-1 h-1 bg-terracotta/30 rounded-full group-hover:bg-terracotta group-hover:scale-150 transition-all duration-500"></div>
                <span className="text-terracotta tracking-[0.2em] text-[10px] uppercase font-semibold mb-2 block">Availability</span>
                <span className="block text-earth font-light text-base group-hover:text-deepbrown transition-colors duration-300">Mon - Fri <span className="mx-2 text-earth/30">|</span> 10 AM - 5 PM</span>
              </div>
              
              <div className="group relative">
                <div className="absolute -left-4 top-2 w-1 h-1 bg-terracotta/30 rounded-full group-hover:bg-terracotta group-hover:scale-150 transition-all duration-500"></div>
                <span className="text-terracotta tracking-[0.2em] text-[10px] uppercase font-semibold mb-2 block">Email</span>
                <a href="mailto:nefnefa1968@gmail.com" className="block text-earth font-light text-base hover:text-terracotta transition-colors duration-300">
                  nefnefa1968@gmail.com
                </a>
              </div>
              
              <div className="group relative">
                <div className="absolute -left-4 top-2 w-1 h-1 bg-terracotta/30 rounded-full group-hover:bg-terracotta group-hover:scale-150 transition-all duration-500"></div>
                <span className="text-terracotta tracking-[0.2em] text-[10px] uppercase font-semibold mb-2 block">Phone</span>
                <a href="tel:+15192800056" className="block text-earth font-light text-base hover:text-terracotta transition-colors duration-300">
                  (519) 280-0056
                </a>
              </div>
            </div>
            
            {/* Minimalist Compass SVG */}
            <svg className="absolute -bottom-24 -left-12 w-48 h-48 text-terracotta/5 animate-[spin_60s_linear_infinite] pointer-events-none" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="1"/></svg>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="lg:pl-24 relative">
            
            <div className="glass-panel p-8 sm:p-10 md:p-16 relative overflow-hidden bg-white/60 shadow-2xl rounded-[32px] sm:rounded-[40px] md:rounded-[60px] border border-white">
              {/* Corner accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-dust rounded-full blur-3xl pointer-events-none"></div>
        
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-serif text-deepbrown mb-8 border-b border-deepbrown/10 pb-6">Send an Inquiry</h3>

                  <input type="hidden" name="_subject" value="New Holistic Alchemy Website Inquiry" />
                  
                  <div className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name" required disabled={loading} className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light text-sm md:text-base disabled:opacity-50"/>
                    <input type="email" name="email" placeholder="Email Address" required disabled={loading} className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light text-sm md:text-base disabled:opacity-50"/>
                    <select name="interest" required defaultValue="" disabled={loading} className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown focus:border-terracotta outline-none transition-colors font-light cursor-pointer text-sm md:text-base appearance-none disabled:opacity-50 disabled:cursor-not-allowed">
                      <option value="" disabled>Select an Interest</option>
                      <option value="Holistic Alchemy Hypnotherapy">Holistic Alchemy Hypnotherapy</option>
                      <option value="Access BARS Session (90 min · $75)">Access BARS Session (90 min · $75)</option>
                      <option value="MTVSS Immune System (60 min · $75)">MTVSS Immune System (60 min · $75)</option>
                      <option value="Emotional Trauma Release (60 min · $75)">Emotional Trauma Release (60 min · $75)</option>
                      <option value="Energetic Facelift (60 min · $75)">Energetic Facelift (60 min · $75)</option>
                      <option value="Brain Capacity Activation (60 min · $75)">Brain Capacity Activation (60 min · $75)</option>
                      <option value="Manifestation Energy Activation (60 min · $75)">Manifestation Energy Activation (60 min · $75)</option>
                      <option value="Full Moon Meditation & Mantras ($45)">Full Moon Meditation & Mantras ($45)</option>
                      <option value="7-Path Self-Hypnosis Certification">7-Path Self-Hypnosis Certification</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <textarea name="message" placeholder="Your Message" rows={3} required disabled={loading} className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-terracotta outline-none transition-colors font-light resize-none mt-4 text-sm md:text-base disabled:opacity-50"></textarea>
                  </div>

                  {error && (
                    <p className="text-sm text-terracotta font-light leading-relaxed">{error}</p>
                  )}

                  <button type="submit" disabled={loading} className="btn-secondary w-full mt-8 bg-sand border-dust hover:bg-terracotta hover:text-white transition-all text-sm shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
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
