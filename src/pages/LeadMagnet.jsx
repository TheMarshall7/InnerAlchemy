import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LeadMagnet = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-deepbrown flex flex-col relative z-10 selection:bg-rust selection:text-sand">
      <div className="noise-overlay"></div>
      
      <div className="flex-grow flex items-center justify-center py-20 px-6 relative z-20">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="max-w-[1000px] w-full grid md:grid-cols-2 gap-0 overflow-hidden shadow-2xl shadow-terracotta/5">
          
          <div className="p-12 md:p-16 bg-earth/80 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden border-r border-sand/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549421263-596ea62a6fdf?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-color z-0 object-cover"></div>
            
            <div className="relative z-10">
              <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Free Audio Resource</span>
              <h1 className="text-4xl md:text-5xl font-serif text-sand mb-8 leading-tight">
                The Nervous System <br/>
                <span className="italic text-clay">Reset Audio.</span>
              </h1>
              <p className="text-dust mb-10 leading-relaxed font-light">
                Before you can do the deep work of rewriting your formatting, your body must feel safe. Download our proprietary 12-minute physiological sigh protocol.
              </p>
              <ul className="space-y-4 text-dust font-light mb-12">
                <li className="flex gap-4"><span className="text-terracotta font-serif">I.</span> Shift out of fight-or-flight in minutes</li>
                <li className="flex gap-4"><span className="text-terracotta font-serif">II.</span> Lower baseline cortisol instantly</li>
                <li className="flex gap-4"><span className="text-terracotta font-serif">III.</span> Prepare the mind for deep neuroplasticity</li>
              </ul>
            </div>
          </div>

          <div className="p-12 md:p-16 flex flex-col justify-center bg-earth/50 backdrop-blur-xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-3xl font-serif text-sand mb-3">Where should we send it?</h3>
                  <p className="text-sm font-light text-dust mb-8">Join 15,000+ others receiving our weekly subconscious insights.</p>
                </div>
                <input type="text" placeholder="First Name" required className="w-full bg-transparent border-b border-sand/20 py-4 text-sand placeholder:text-sand/30 focus:border-ochre outline-none transition-colors font-light" />
                <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-sand/20 py-4 text-sand placeholder:text-sand/30 focus:border-ochre outline-none transition-colors font-light" />
                <button type="submit" className="btn-primary w-full mt-4">Send Me The Audio</button>
                <div className="text-center mt-8">
                  <Link to="/" className="text-[10px] tracking-widest uppercase text-dust/50 hover:text-ochre transition-colors">Return to Sanctuary</Link>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-8 relative z-10">
                <h3 className="text-4xl font-serif text-sand">It's on the way.</h3>
                <p className="text-dust font-light leading-relaxed">Check your inbox in the next 5 minutes for the link, and make sure to move us to your primary folder.</p>
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
