
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const heroImages = [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80',
  ];

  return (
    <div ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, opacity, y: translateY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />
        
        {heroImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Vitrine da padaria"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`absolute inset-0 h-full w-full object-cover hero-img ${i === 0 ? 'block' : 'hidden'}`}
            style={{ 
              zIndex: 5 - i,
            }}
            onAnimationComplete={() => {
              if (i < heroImages.length - 1) {
                const elements = document.querySelectorAll('.hero-img');
                if (elements[i + 1]) {
                  (elements[i + 1] as HTMLElement).style.display = 'block';
                }
              }
            }}
          />
        ))}
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-bread-crumb text-warm-brown font-medium text-sm"
          >
            Pães e Doces Artesanais
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight"
          >
            Onde a Tradição Encontra <br />
            <span className="text-bread-crumb">a Inovação</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Produtos artesanais feitos com cuidado usando métodos tradicionais e os melhores ingredientes.
            Experimente o sabor autêntico de produtos recém-assados na Jacaré Padaria.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link 
              to="/products"
              className="px-8 py-3 rounded-md bg-bread-crust text-white font-medium hover:bg-bread-crust/90 transition-colors flex items-center space-x-2"
            >
              <span>Nossos Produtos</span>
              <ArrowRight size={16} />
            </Link>
            
            <Link 
              to="/cake-builder"
              className="px-8 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition-colors"
            >
              Monte seu Bolo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm mb-2">Role para explorar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-1"
            >
              <motion.div
                animate={{ height: [6, 12, 6] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 bg-white/60 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
