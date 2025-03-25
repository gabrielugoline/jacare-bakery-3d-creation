
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { useRevealAnimation } from '@/hooks/use-animations';
import { ArrowRight, Star, Cake, Award, Clock } from 'lucide-react';

const Index = () => {
  useRevealAnimation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      title: 'Sourdough Bread',
      description: 'Traditional sourdough with a perfectly crispy crust and soft, airy interior',
      price: 'R$14,99',
      category: 'Breads',
      image: 'https://images.unsplash.com/photo-1586444248516-60098ca688e1?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Chocolate Croissant',
      description: 'Buttery, flaky croissant filled with rich chocolate',
      price: 'R$8,99',
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Strawberry Tart',
      description: 'Sweet pastry crust filled with vanilla cream and topped with fresh strawberries',
      price: 'R$12,99',
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&q=80'
    },
  ];

  // Benefits
  const benefits = [
    { 
      icon: <Star className="w-8 h-8 text-soft-gold" />,
      title: 'Premium Quality',
      description: 'Made with the finest and freshest ingredients for exceptional taste and quality.'
    },
    { 
      icon: <Cake className="w-8 h-8 text-soft-gold" />,
      title: 'Artisanal Craftsmanship',
      description: 'Each product is handcrafted using traditional techniques passed down through generations.'
    },
    { 
      icon: <Award className="w-8 h-8 text-soft-gold" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in baking with multiple local and national awards.'
    },
    { 
      icon: <Clock className="w-8 h-8 text-soft-gold" />,
      title: 'Daily Fresh',
      description: 'Baked fresh every day, ensuring you get the best quality and taste in every bite.'
    },
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* About Section */}
      <section ref={targetRef} className="relative py-24 bg-cream overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0 opacity-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bread-crumb to-transparent opacity-40" />
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                Baking with passion <br/>since <span className="text-primary">1987</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Jacaré Padaria started as a small family-owned bakery in São Paulo. For over three decades, 
                we've been creating delicious breads, pastries, and cakes using traditional recipes and techniques.
                Our commitment to quality and authenticity has made us a beloved neighborhood institution.
              </p>
              <p className="text-muted-foreground mb-8">
                Everything we make is crafted with care, using only the finest ingredients and without 
                artificial preservatives. We believe in bringing the authentic taste of traditional 
                Brazilian and European baking to our community.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1591688515527-f7b20bd05902?auto=format&fit=crop&q=80" 
                  alt="Bakery interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 glass rounded-lg p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-soft-gold text-soft-gold" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">500+ Reviews</span>
                </div>
                <p className="text-sm font-medium italic">
                  "The best bakery in town! Their sourdough bread is absolutely incredible 
                  and their pastries are to die for!"
                </p>
                <div className="mt-3 text-sm text-muted-foreground">
                  - Maria S., Local Customer
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Featured Products
            </span>
            <h2 className="text-4xl font-serif mb-6">Our Most Popular Items</h2>
            <p className="text-muted-foreground">
              Discover our customers' favorites - handcrafted with love and the finest ingredients. 
              These popular items fly off our shelves every day!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="reveal">
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cake Builder Promo */}
      <section className="py-24 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white font-medium text-sm">
                Interactive Experience
              </span>
              <h2 className="text-4xl md:text-5xl text-white font-serif leading-tight mb-6">
                Design Your Dream Cake in 3D
              </h2>
              <p className="text-white/80 mb-8">
                Our innovative 3D cake builder allows you to customize every detail of your cake. 
                Choose flavors, toppings, decorations, and see your creation come to life in 
                real-time. Once perfected, save an image of your masterpiece and bring it to life 
                with our talented bakers.
              </p>
              <Link 
                to="/cake-builder"
                className="inline-flex items-center px-6 py-3 rounded-md bg-white text-primary hover:bg-white/90 transition-colors"
              >
                <span>Start Creating</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-8">
                <motion.img 
                  initial={{ y: 20 }}
                  animate={{ y: -20 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut" 
                  }}
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80" 
                  alt="3D Cake Builder" 
                  className="w-full h-full object-contain rounded-lg drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-serif mb-6">The Jacaré Difference</h2>
            <p className="text-muted-foreground">
              What sets our bakery apart is our unwavering commitment to quality, 
              tradition, and exceptional customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bread-crumb to-transparent opacity-30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl text-white font-serif mb-6">
              Visit Us Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Come experience the warm atmosphere, heavenly aromas, and delightful tastes at Jacaré Padaria. 
              We look forward to welcoming you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products"
                className="px-8 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
              >
                Browse Our Products
              </Link>
              <Link 
                to="/about"
                className="px-8 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition-colors"
              >
                Find Our Location
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
