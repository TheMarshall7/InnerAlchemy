import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-32 md:pt-48 pb-32 bg-deepbrown relative z-10">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-start relative z-20">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pt-10">
          <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Connect</span>
          <h1 className="text-6xl md:text-8xl font-serif text-sand mb-12 leading-[1.1] uppercase tracking-wider">
            Begin the <br/>
            <span className="italic text-terracotta lowercase">Conversation.</span>
          </h1>
          <p className="text-dust mb-16 leading-relaxed max-w-md font-light text-xl">
            Whether you are looking to book a 1:1 session, apply for the 7-Path certification, or have questions about the 21-Day Journey, you can reach us here.
          </p>

          <div className="space-y-10 text-sm text-dust uppercase tracking-widest">
            <div>
              <strong className="text-sand block font-serif tracking-widest-xl mb-3 text-lg lowercase italic">Email</strong>
              <p>support@inneralchemy.com</p>
            </div>
            <div>
              <strong className="text-sand block font-serif tracking-widest-xl mb-3 text-lg lowercase italic">Location</strong>
              <p>Los Angeles, CA / Global Virtual</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="glass-panel p-12 md:p-16 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-terracotta/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <h3 className="text-3xl font-serif text-sand mb-8 border-b border-sand/10 pb-6">Send an Inquiry</h3>
              <div className="grid grid-cols-2 gap-8">
                <input type="text" placeholder="First Name" required className="bg-transparent border-b border-sand/20 py-4 text-sand placeholder:text-sand/30 focus:border-ochre outline-none transition-colors font-light" />
                <input type="text" placeholder="Last Name" required className="bg-transparent border-b border-sand/20 py-4 text-sand placeholder:text-sand/30 focus:border-ochre outline-none transition-colors font-light" />
              </div>
              <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-sand/20 py-4 text-sand placeholder:text-sand/30 focus:border-ochre outline-none transition-colors font-light" />
              <div className="relative">
                <select required className="w-full bg-transparent border-b border-sand/20 py-4 text-sand focus:border-ochre outline-none transition-colors appearance-none font-light">
                  <option value="" disabled selected className="text-deepbrown">I am interested in...</option>
                  <option value="1:1" className="text-deepbrown">1:1 Sessions</option>
                  <option value="cert" className="text-deepbrown">7-Path Certification</option>
                  <option value="program" className="text-deepbrown">21-Day Journey</option>
                  <option value="other" className="text-deepbrown">Other Inquiry</option>
                </select>
              </div>
              <textarea placeholder="Your Message" rows="4" required className="w-full bg-transparent border-b border-sand/20 py-4 text-sand placeholder:text-sand/30 focus:border-ochre outline-none transition-colors font-light resize-none"></textarea>
              <button type="submit" className="btn-primary w-full mt-4">Send Message</button>
            </form>
          ) : (
            <div className="text-center py-20 relative z-10">
              <h3 className="text-4xl font-serif text-sand mb-6">Message Received.</h3>
              <p className="text-dust font-light leading-relaxed">Our clinical team will be in touch within 24-48 hours. Thank you for reaching out.</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Calendar Placeholder */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-40">
        <div className="border-t border-sand/10 pt-24 text-center">
          <h2 className="text-4xl font-serif text-sand mb-12">Book a Discovery Call</h2>
          <div className="w-full h-[600px] border border-sand/5 bg-earth/50 rounded-sm flex items-center justify-center backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549421263-596ea62a6fdf?q=80&w=2000&auto=format&fit=crop')] opacity-5 object-cover mix-blend-overlay"></div>
            <p className="text-dust/50 tracking-widest uppercase text-xs relative z-10">[ Calendar View Embed Space ]</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
