
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link to="/" className="relative z-50">
          <h1 className="text-2xl font-display tracking-wide text-primary">
            Jacaré <span className="text-warm-brown">Padaria</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['/', '/products', '/about', '/cake-builder'].map((path, index) => {
            const label = path === '/' 
              ? 'Home' 
              : path.substring(1).split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
            
            return (
              <Link 
                key={path} 
                to={path}
                className="relative group"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className={`text-sm font-medium ${location.pathname === path ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-200 hover:text-primary`}
                >
                  {label}
                </motion.span>
                {location.pathname === path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 bg-primary/70 transition-transform duration-300 origin-left" />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-background/95 backdrop-blur-md md:hidden z-40 flex flex-col"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['/', '/products', '/about', '/cake-builder'].map((path) => {
              const label = path === '/' 
                ? 'Home' 
                : path.substring(1).split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ');
              
              return (
                <Link 
                  key={path} 
                  to={path}
                  className={`text-xl font-serif ${location.pathname === path ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-200 hover:text-primary`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
