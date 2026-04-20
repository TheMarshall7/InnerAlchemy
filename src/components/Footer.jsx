import { Link } from 'react-router-dom';
import { FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dust pt-32 pb-12 border-t border-sand relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-2 pr-12">
            <Link to="/" className="text-2xl font-serif font-light tracking-[0.2em] uppercase text-deepbrown block mb-6">
              Inner<span className="text-ochre italic ml-1">Alchemy</span>
            </Link>
            <p className="text-earth text-sm max-w-sm mb-10 leading-relaxed font-light">
              You are not broken. You are running subconscious patterns that can be changed. Experience identity-level transformation in the sanctuary of your own mind.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/goddessinhumanform_alchemist?igsh=cTg1ZGdja21oMjN6" target="_blank" rel="noopener noreferrer" className="p-3 border border-deepbrown/10 rounded-full text-deepbrown hover:bg-terracotta hover:border-terracotta transition-all duration-500"><FiInstagram size={18} /></a>
              <a href="mailto:nefnefa1968@gmail.com" className="p-3 border border-deepbrown/10 rounded-full text-deepbrown hover:bg-terracotta hover:border-terracotta transition-all duration-500"><FiMail size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="pt-2">
            <h4 className="text-deepbrown font-serif tracking-widest text-sm uppercase mb-8">Offerings</h4>
            <ul className="space-y-4">
              <li><Link to="/program" className="text-sm text-earth hover:text-ochre transition-colors">21-Day Journey</Link></li>
              <li><Link to="/certification" className="text-sm text-earth hover:text-ochre transition-colors">7-Path Certification</Link></li>
              <li><Link to="/services" className="text-sm text-earth hover:text-ochre transition-colors">1:1 Hypnotherapy</Link></li>
              <li><Link to="/contact" className="text-sm text-earth hover:text-ochre transition-colors">Book Session</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="pt-2">
            <h4 className="text-deepbrown font-serif tracking-widest text-sm uppercase mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-earth hover:text-ochre transition-colors">About</Link></li>
              <li><Link to="/funnel" className="text-sm text-earth hover:text-ochre transition-colors">Free Training</Link></li>
              <li><Link to="/lead-magnet" className="text-sm text-earth hover:text-ochre transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-deepbrown/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-earth/60">
          <p>&copy; {new Date().getFullYear()} Inner Alchemy Hypnosis. All Rights Reserved.</p>
          <div className="space-x-8 mt-6 md:mt-0">
            <Link to="#" className="hover:text-deepbrown tracking-widest uppercase">Privacy Policy</Link>
            <Link to="#" className="hover:text-deepbrown tracking-widest uppercase">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
