
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CartButton from './CartButton';

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

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/products', label: 'Produtos' },
    { path: '/about', label: 'Sobre Nós' },
    { path: '/cake-builder', label: 'Monte seu Bolo' },
  ];

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
          {navItems.map((item, index) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="relative group"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`text-sm font-medium ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-200 hover:text-primary`}
              >
                {item.label}
              </motion.span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 bg-primary/70 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Cart Button */}
        <div className="flex items-center">
          <CartButton />
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 ml-4"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-background/95 backdrop-blur-md md:hidden z-40 flex flex-col"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-xl font-serif ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-200 hover:text-primary`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/carrinho" className="text-xl font-serif text-muted-foreground hover:text-primary">
              Carrinho
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
