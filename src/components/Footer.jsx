import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-deepbrown pt-20 md:pt-32 pb-10 md:pb-12 relative z-20 overflow-hidden text-sand">
      {/* Decorative atmospheric background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sand/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 pr-0 md:pr-24">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-light tracking-[0.15em] md:tracking-[0.3em] uppercase text-white block mb-6 md:mb-8 group leading-tight">
              <span className="block">Holistic</span>
              <span className="text-terracotta italic block group-hover:text-sand transition-colors">Alchemy</span>
            </Link>
            <p className="text-sand/60 text-lg md:text-xl font-light leading-relaxed mb-12">
              Bridging the gap between ancient spiritual wisdom and modern subconscious reprogramming. Return to your original blueprint.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiInstagram />, link: "https://www.instagram.com/goddessinhumanform_alchemist?igsh=cTg1ZGdja21oMjN6" },
                { icon: <FiMail />, link: "mailto:nefnefa1968@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white/60 hover:text-white hover:border-terracotta hover:bg-terracotta transition-all duration-500 backdrop-blur-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2">
            <h4 className="text-white font-serif tracking-[0.2em] text-[10px] uppercase mb-10 border-b border-white/10 pb-4 inline-block">Sanctuary</h4>
            <ul className="space-y-5">
              {[
                { name: "Healing Sessions", link: "/services" },
                { name: "Professional Mastery", link: "/certification" },
                { name: "Independent Evolution", link: "/program" },
                { name: "Full Moon Rituals", link: "/services" }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.link} className="text-sm text-sand/50 hover:text-terracotta hover:translate-x-1 transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-terracotta transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="text-white font-serif tracking-[0.2em] text-[10px] uppercase mb-10 border-b border-white/10 pb-4 inline-block">Connect</h4>
            <ul className="space-y-5">
              {[
                { name: "The Alchemist", link: "/about" },
                { name: "Free Training", link: "/funnel" },
                { name: "Session Inquiry", link: "/contact" },
                { name: "Our Philosophy", link: "/about" }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.link} className="text-sm text-sand/50 hover:text-terracotta hover:translate-x-1 transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-terracotta transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-3">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                <h4 className="text-white font-serif text-xl mb-4 italic">Ready to align?</h4>
                <p className="text-sand/50 text-xs mb-8 leading-relaxed font-light">Join our collective and receive seasonal wisdom and session availability updates.</p>
                <Link to="/contact" className="w-full py-4 bg-terracotta text-white text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-deepbrown transition-all rounded-xl shadow-lg">
                  Get Started <FiArrowRight />
                </Link>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-sand/30 font-light">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Holistic Alchemy Healing Hypnosis</p>
            <div className="flex gap-8">
              <Link to="#" className="hover:text-sand transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-sand transition-colors">Terms</Link>
            </div>
          </div>
          <p className="mt-8 md:mt-0 text-center">Awakening the delta consciousness within.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
