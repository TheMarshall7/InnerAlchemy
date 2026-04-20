import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="w-full min-h-screen bg-sand flex items-center justify-center py-20 px-6 relative z-10 selection:bg-rust selection:text-deepbrown">
      <div className="noise-overlay"></div>
      
      <div className="max-w-[1200px] w-full grid md:grid-cols-12 gap-16 relative z-20">
        
        {/* Left: Form */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="md:col-span-7 space-y-12">
          <div className="mb-12 border-b border-deepbrown/10 pb-8">
            <Link to="/" className="text-2xl font-serif text-deepbrown tracking-[0.2em] uppercase font-light">
              Inner<span className="text-ochre italic ml-1 lowercase">Alchemy</span>
            </Link>
            <h1 className="text-4xl font-serif text-deepbrown mt-8">Secure Checkout</h1>
          </div>

          <form onSubmit={handleCheckout} className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-deepbrown mb-4 flex items-center gap-4">
                <span className="text-ochre text-sm">01</span> Contact Information
              </h3>
              <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/30 focus:border-ochre outline-none transition-colors font-light" />
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-serif text-deepbrown mb-4 flex items-center gap-4">
                <span className="text-ochre text-sm">02</span> Payment Details
                <span className="text-xs text-earth font-sans ml-2 tracking-widest uppercase">(Mock UI)</span>
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <input type="text" placeholder="First Name" required className="bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/30 focus:border-ochre outline-none transition-colors font-light" />
                <input type="text" placeholder="Last Name" required className="bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/30 focus:border-ochre outline-none transition-colors font-light" />
              </div>
              <div className="relative">
                <input type="text" placeholder="Card Number" required className="w-full bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/30 focus:border-ochre outline-none transition-colors font-light pl-12" />
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-earth" size={18} strokeWidth={1} />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <input type="text" placeholder="MM/YY" required className="bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/30 focus:border-ochre outline-none transition-colors font-light" />
                <input type="text" placeholder="CVC" required className="bg-transparent border-b border-deepbrown/20 py-4 text-deepbrown placeholder:text-deepbrown/30 focus:border-ochre outline-none transition-colors font-light" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-sm py-6 mt-12 flex items-center justify-center gap-3">
              <Lock size={16} strokeWidth={1.5} /> Complete Secure Order
            </button>
            <p className="text-center text-xs text-earth font-light tracking-wide uppercase">All transactions are encrypted and secure.</p>
          </form>
        </motion.div>

        {/* Right: Summary */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="md:col-span-5 h-fit">
          <div className="glass-panel p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-deepbrown/5 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-xl font-serif text-deepbrown mb-8 pb-6 border-b border-deepbrown/10">Order Summary</h3>
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-deepbrown font-serif text-lg">21-Day Subconscious Reprogramming Journey</h4>
                <p className="text-xs text-ochre mt-2 tracking-widest uppercase block">Instant Lifetime Access</p>
              </div>
              <span className="text-deepbrown font-light text-lg">$197</span>
            </div>

            <div className="border-t border-deepbrown/10 pt-8 space-y-6 text-sm text-earth font-light">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$197</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated next step</span>
              </div>
              <div className="flex justify-between text-deepbrown text-xl pt-6 border-t border-deepbrown/10">
                <span className="font-serif">Total</span>
                <span className="font-light">$197 <span className="text-xs text-earth uppercase tracking-widest ml-1">USD</span></span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-deepbrown/10 flex gap-6 items-start relative z-10">
              <ShieldCheck className="text-ochre shrink-0 mt-1" strokeWidth={1} size={24} />
              <div>
                <p className="text-deepbrown font-serif text-lg mb-2">30-Day Guarantee</p>
                <p className="text-sm text-earth font-light leading-relaxed">If you complete the 21-day program and do not experience a shift in your emotional baseline, email us for a full refund.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Checkout;
