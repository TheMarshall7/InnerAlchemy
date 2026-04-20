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
    { name: 'Certification', path: '/certification' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-sand/90 backdrop-blur-xl py-6 border-b border-deepbrown/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-serif font-light tracking-[0.2em] uppercase text-deepbrown">
          Inner<span className="text-ochre italic ml-1">Alchemy</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-[10px] uppercase tracking-widest-xl text-earth hover:text-ochre transition-colors duration-500">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="text-[10px] uppercase tracking-widest-xl text-deepbrown hover:text-ochre transition-colors duration-500 flex items-center gap-2">
            Book <div className="w-1 h-1 rounded-full bg-terracotta"></div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-deepbrown" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dust border-t border-sand py-12 px-6 flex flex-col space-y-8 glass-panel h-screen">
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
