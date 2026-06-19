import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: '21-Day Journey', path: '/program' },
    { name: '7-Path Awakening', path: '/certification' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-sand/90 backdrop-blur-xl py-4 md:py-6 border-b border-deepbrown/5' : 'bg-transparent py-5 md:py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-sm sm:text-lg md:text-2xl font-serif font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase text-deepbrown leading-tight shrink-0">
          Holistic<span className="text-ochre italic ml-0.5 sm:ml-1">Alchemy</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-[9px] xl:text-[10px] uppercase tracking-widest-xl text-earth hover:text-ochre transition-colors duration-500 whitespace-nowrap">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="text-[9px] xl:text-[10px] uppercase tracking-widest-xl text-deepbrown hover:text-ochre transition-colors duration-500 flex items-center gap-2 whitespace-nowrap">
            Book <div className="w-1 h-1 rounded-full bg-terracotta"></div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-deepbrown shrink-0 p-1" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[60px] sm:top-[72px] left-0 w-full bg-dust border-t border-sand py-10 px-6 flex flex-col space-y-6 glass-panel overflow-y-auto max-h-[calc(100vh-60px)] z-50">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-deepbrown text-lg font-serif uppercase tracking-widest">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary w-full text-center mt-8">
            Book a Session
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
