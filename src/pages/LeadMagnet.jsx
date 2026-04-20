import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';

const LeadMagnet = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-sand flex flex-col relative z-10 selection:bg-rust selection:text-sand">
      
      <div className="flex-grow flex items-center justify-center py-20 px-6 relative z-20">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="max-w-[1000px] w-full grid md:grid-cols-2 gap-0 overflow-hidden shadow-2xl shadow-deepbrown/10 bg-white border border-dust">
          
          <div className="p-12 md:p-16 bg-dust/30 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden border-r border-deepbrown/5">
            <div className="relative z-10">
              <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 flex items-center gap-3"><Headphones size={14}/> Free Audio Resource</span>
              <h1 className="text-4xl md:text-5xl font-serif text-deepbrown mb-8 leading-tight">
                Subconscious <br/>
                <span className="italic text-clay">Reset Audio.</span>
              </h1>
              <p className="text-earth mb-10 leading-relaxed font-light text-xl italic font-serif">
                You are not stuck... you are programmed.
              </p>
              <p className="text-earth font-light mb-8">
                In just 10 minutes, this guided audio will help you begin to reprogram your subconscious mind while you relax.
              </p>
              <ul className="space-y-4 text-earth font-light mb-12">
                <li className="flex gap-4"><span className="text-terracotta font-serif">I.</span> Release emotional tension</li>
                <li className="flex gap-4"><span className="text-terracotta font-serif">II.</span> Calm your mind and body</li>
                <li className="flex gap-4"><span className="text-terracotta font-serif">III.</span> Let go of old patterns</li>
              </ul>
              <p className="text-xs uppercase tracking-widest text-deepbrown/50">✨ Best used with headphones</p>
            </div>
          </div>

          <div className="p-12 md:p-16 flex flex-col justify-center bg-white relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-3xl font-serif text-deepbrown mb-3">Where should we send it?</h3>
                  <p className="text-sm font-light text-earth mb-8">If you feel even a small shift… this is just the beginning.</p>
                </div>
                <input type="text" placeholder="First Name" required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-ochre outline-none transition-colors font-light" />
                <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/40 focus:border-ochre outline-none transition-colors font-light" />
                <button type="submit" className="btn-primary w-full mt-4 text-white">Send Me The Audio</button>
                <div className="text-center mt-8">
                  <Link to="/" className="text-[10px] tracking-widest uppercase text-earth/50 hover:text-ochre transition-colors">Return to Sanctuary</Link>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-8 relative z-10">
                <h3 className="text-4xl font-serif text-deepbrown">It's on the way.</h3>
                <p className="text-earth font-light leading-relaxed">Check your inbox in the next 5 minutes for the link. Lie down, put your headphones on, and let's begin.</p>
                <Link to="/" className="btn-secondary mt-12 w-full block">Return to Sanctuary</Link>
              </div>
            )}
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default LeadMagnet;
