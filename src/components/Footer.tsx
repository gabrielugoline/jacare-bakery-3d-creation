
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1"
          >
            <h2 className="text-3xl font-display tracking-wide mb-6">
              Jacaré <span className="text-bread-crumb">Padaria</span>
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Padaria artesanal oferecendo pães, doces e bolos personalizados de alta qualidade, 
              feitos com técnicas tradicionais e os melhores ingredientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-bread-crumb transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-bread-crumb transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-bread-crumb transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-xl font-serif mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {[
                { title: 'Início', path: '/' },
                { title: 'Produtos', path: '/products' },
                { title: 'Sobre Nós', path: '/about' },
                { title: 'Monte seu Bolo', path: '/cake-builder' },
                { title: 'Carrinho', path: '/carrinho' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-bread-crumb transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-xl font-serif mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Segunda - Sexta</span>
                <span>7:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Sábado</span>
                <span>7:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Domingo</span>
                <span>8:00 - 15:00</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-xl font-serif mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">R. Inglaterra, 735 - Bairro da Glória, Contagem - MG, 32340-130</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-primary-foreground/80">(31) 2567-6757</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span className="text-primary-foreground/80">contato@jacarepadaria.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60"
        >
          <p>&copy; {currentYear} Jacaré Padaria. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
