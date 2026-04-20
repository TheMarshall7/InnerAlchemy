import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou = () => {
  return (
    <div className="w-full min-h-screen bg-sand flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="noise-overlay"></div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627914041113-1f148dceeafe?q=80&w=2000&auto=format&fit=crop')] opacity-10 object-cover mix-blend-overlay"></div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="max-w-2xl w-full text-center glass-panel p-16 md:p-24 relative z-20">
        <span className="text-ochre tracking-widest-xl text-[10px] uppercase font-semibold mb-8 block">Order Confirmed</span>
        <h1 className="text-5xl md:text-6xl font-serif text-deepbrown mb-6">Your Journey <br/><span className="italic text-clay">Begins Now.</span></h1>
        <p className="text-earth mb-16 text-lg font-light leading-relaxed">Welcome to Inner Alchemy. Your subconscious architecture is about to change.</p>
        
        <div className="text-left space-y-10 mb-16">
          <h3 className="text-deepbrown tracking-widest text-xs uppercase font-semibold border-b border-deepbrown/10 pb-4 mb-8">Next Steps</h3>
          
          <div className="flex gap-6 items-start">
            <span className="text-ochre font-serif text-2xl font-light shrink-0">01</span>
            <div>
              <p className="text-deepbrown font-serif text-xl mb-2">Check Your Email</p>
              <p className="text-earth font-light leading-relaxed">You will receive an email from support@inneralchemy.com with your receipt and immediate private portal access link.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <span className="text-ochre font-serif text-2xl font-light shrink-0">02</span>
            <div>
              <p className="text-deepbrown font-serif text-xl mb-2">Create Your Login</p>
              <p className="text-earth font-light leading-relaxed">Click the link in the email to set your password. You will use this to access the daily audios.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <span className="text-ochre font-serif text-2xl font-light shrink-0">03</span>
            <div>
              <p className="text-deepbrown font-serif text-xl mb-2">Prepare Your Space</p>
              <p className="text-earth font-light leading-relaxed">Find a quiet, dimly lit place where you won't be interrupted for 20 minutes when you are ready to begin Day 1.</p>
            </div>
          </div>
        </div>

        <Link to="/" className="btn-secondary w-full text-center tracking-widest uppercase text-xs">Return to Sanctuary</Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
