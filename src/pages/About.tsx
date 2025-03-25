
import React from 'react';
import { motion } from 'framer-motion';
import { useRevealAnimation } from '@/hooks/use-animations';
import { MapPin, Phone, Mail, Clock, Award, Users, Cake } from 'lucide-react';

const About = () => {
  useRevealAnimation();

  const timeline = [
    {
      year: '1987',
      title: 'The Beginning',
      description: 'Jacaré Padaria was founded as a small family bakery in São Paulo.',
      image: 'https://images.unsplash.com/photo-1510741149781-d50bda7f6eb4?auto=format&fit=crop&q=80'
    },
    {
      year: '1995',
      title: 'Expansion',
      description: 'Due to popular demand, we expanded our operations and opened our signature store.',
      image: 'https://images.unsplash.com/photo-1518982380835-a3d9073a033d?auto=format&fit=crop&q=80'
    },
    {
      year: '2005',
      title: 'Award Winning',
      description: 'Recognized as the best local bakery in São Paulo, winning multiple awards.',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80'
    },
    {
      year: '2015',
      title: 'Innovation',
      description: 'Introduced new artisanal techniques and expanded our product range.',
      image: 'https://images.unsplash.com/photo-1536751048178-14a73ca468c4?auto=format&fit=crop&q=80'
    },
    {
      year: 'Today',
      title: 'Continuing the Tradition',
      description: 'Still family-owned, we continue to serve our community with the same dedication and quality.',
      image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80'
    }
  ];

  const team = [
    {
      name: 'Carlos Almeida',
      role: 'Master Baker & Founder',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80',
      bio: 'With over 35 years of baking experience, Carlos founded Jacaré Padaria with a vision of bringing traditional baking to the neighborhood.'
    },
    {
      name: 'Ana Silva',
      role: 'Head Pastry Chef',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Ana has been crafting exquisite pastries for 15 years and leads our pastry innovation with creativity and precision.'
    },
    {
      name: 'Miguel Santos',
      role: 'Cake Specialist',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      bio: 'Miguel specializes in creating stunning custom cakes for all occasions, combining artistry with delicious flavors.'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1525858097-9f4e1eba2981?auto=format&fit=crop&q=80" 
            alt="Bakery background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-display mb-6">Our Story</h1>
            <p className="text-xl text-white/90 mb-6">
              For over 35 years, Jacaré Padaria has been a cornerstone of our community, 
              providing delicious baked goods made with love and tradition.
            </p>
            <div className="flex flex-wrap gap-6 mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Established</p>
                  <p className="text-white font-medium">Since 1987</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Awards</p>
                  <p className="text-white font-medium">12+ Recognitions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Team</p>
                  <p className="text-white font-medium">15+ Expert Bakers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
                Our Mission
              </span>
              <h2 className="text-4xl font-serif mb-6">
                Bringing Joy Through <br/>Traditional Baking
              </h2>
              <p className="text-muted-foreground mb-6">
                At Jacaré Padaria, our mission is to preserve and share the art of traditional 
                baking. We believe that well-crafted bread and pastries can bring joy and 
                create meaningful connections in our community.
              </p>
              <p className="text-muted-foreground mb-6">
                We are committed to using time-honored techniques, the finest ingredients, 
                and avoiding artificial preservatives or additives. Each product that leaves 
                our bakery is made with care, expertise, and a deep respect for tradition.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cake className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Traditional Methods</h3>
                    <p className="text-muted-foreground">We preserve traditional baking techniques that have been perfected over generations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cake className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Quality Ingredients</h3>
                    <p className="text-muted-foreground">We source the finest ingredients to ensure exceptional flavor and quality in every bite.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cake className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Community Connection</h3>
                    <p className="text-muted-foreground">We aim to be more than a bakery - we're a gathering place for the community we serve.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551500189-f9cd88d65330?auto=format&fit=crop&q=80" 
                    alt="Bakery interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1589985270958-354cf050755d?auto=format&fit=crop&q=80" 
                    alt="Fresh bread" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?auto=format&fit=crop&q=80" 
                    alt="Baker kneading dough" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1605186598843-80ef9d9c867f?auto=format&fit=crop&q=80" 
                    alt="Fresh pastries" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Our Journey
            </span>
            <h2 className="text-4xl font-serif mb-6">From Small Beginnings</h2>
            <p className="text-muted-foreground">
              Over three decades of passion, dedication, and commitment to quality baking.
              Here's how our story unfolded.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto pt-8">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-16 flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <span className="inline-block mb-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                {/* Spacer */}
                <div className="w-1/12"></div>
                
                {/* Image */}
                <div className="w-5/12">
                  <div className={`aspect-[4/3] rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Our Team
            </span>
            <h2 className="text-4xl font-serif mb-6">Meet the Bakers</h2>
            <p className="text-muted-foreground">
              The skilled artisans behind our delicious products. Our team brings together
              years of experience and a shared passion for exceptional baking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location & Contact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
                Visit Us
              </span>
              <h2 className="text-4xl font-serif mb-6">Find Our Bakery</h2>
              <p className="text-muted-foreground mb-8">
                We're conveniently located in the heart of São Paulo. Come visit us and experience 
                the warm atmosphere, delightful aromas, and exceptional baked goods. 
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Bakery Street, São Paulo, Brazil</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">+55 (11) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@jacarepadaria.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Opening Hours</h3>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 7:00 - 19:00</p>
                      <p>Saturday: 7:00 - 18:00</p>
                      <p>Sunday: 8:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Get Directions
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                {/* Here you would typically embed a Google Map. For now, using a placeholder image */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
                  alt="Bakery location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
