
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CakeCanvas from '@/components/CakeCanvas';
import { Cake, Download, Save, Share } from 'lucide-react';
import { toast } from 'sonner';

const CakeBuilder = () => {
  const [savedImage, setSavedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of 3D components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSaveImage = (imageData: string) => {
    setSavedImage(imageData);
    toast.success("Cake design saved successfully!");
  };

  const handleShareDesign = () => {
    if (savedImage) {
      toast.success("Sharing functionality would be implemented here");
      // In a real implementation, you would open a share dialog
    } else {
      toast.error("Please save your cake design first");
    }
  };

  const handleOrderCake = () => {
    if (savedImage) {
      toast.success("Your cake order has been submitted!");
      // In a real implementation, you would send the order to a backend
    } else {
      toast.error("Please save your cake design first");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-terracotta text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center"
            >
              <Cake className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-display mb-6">Create Your Dream Cake</h1>
            <p className="text-lg text-white/80 mb-8">
              Design a stunning 3D cake with our interactive builder. Customize layers, 
              flavors, and decorations to create your perfect celebration cake.
              Save your design and bring it to life at our bakery!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Cake Builder Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1"
            >
              <div className="glass p-6 rounded-xl sticky top-32">
                <h2 className="text-2xl font-serif mb-4">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Design Your Cake</h3>
                      <p className="text-muted-foreground text-sm">
                        Use the controls to adjust layers, flavors, and toppings.
                        Rotate the 3D view to see your cake from all angles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Save Your Design</h3>
                      <p className="text-muted-foreground text-sm">
                        Once you're happy with your creation, save the image to your device.
                        You can share it or bring it to our bakery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Place Your Order</h3>
                      <p className="text-muted-foreground text-sm">
                        Visit our bakery with your design, or upload it when ordering online.
                        Our bakers will bring your vision to life!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="font-medium">Cake Options:</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• Up to 5 layers with different flavors</p>
                    <p>• Various cake bases: Vanilla, Chocolate, Red Velvet, etc.</p>
                    <p>• Multiple frosting options and decorations</p>
                    <p>• Custom text and toppers available in-store</p>
                  </div>
                </div>
                
                {savedImage && (
                  <div className="mt-8">
                    <h3 className="font-medium mb-2">Your Saved Design:</h3>
                    <div className="aspect-square rounded-lg overflow-hidden border border-border">
                      <img 
                        src={savedImage} 
                        alt="Your custom cake design" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <button 
                        onClick={handleShareDesign}
                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <Share className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                      
                      <button 
                        onClick={handleOrderCake}
                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        <Cake className="h-4 w-4" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Cake Builder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass p-6 rounded-xl">
                <h2 className="text-2xl font-serif mb-6">3D Cake Builder</h2>
                
                {isLoading ? (
                  <div className="cake-canvas-container flex items-center justify-center bg-secondary/30">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading 3D cake builder...</p>
                    </div>
                  </div>
                ) : (
                  <CakeCanvas onSaveImage={handleSaveImage} />
                )}
                
                <div className="mt-8">
                  <h3 className="text-xl font-serif mb-4">Customization Tips</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Click and drag to rotate the cake view</li>
                    <li>Use the scroll wheel to zoom in and out</li>
                    <li>Add or remove layers using the controls below the preview</li>
                    <li>Change the color of each layer to represent different flavors</li>
                    <li>Save your design when you're happy with it</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Customer Stories
            </span>
            <h2 className="text-4xl font-serif mb-6">Cake Dreams Come True</h2>
            <p className="text-muted-foreground">
              See how our customers have used the cake builder to create memorable celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I designed my daughter's birthday cake exactly how she wanted it. The online builder was so easy to use, and the final cake looked just like the 3D model!",
                author: "Fernanda M.",
                event: "Birthday Celebration",
                image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80"
              },
              {
                quote: "For our 10th anniversary, I surprised my wife with a cake I designed myself. The team at Jacaré Padaria recreated it perfectly. It was truly special!",
                author: "Rafael T.",
                event: "Wedding Anniversary",
                image: "https://images.unsplash.com/photo-1583529246148-e4bd258acc27?auto=format&fit=crop&q=80"
              },
              {
                quote: "The 3D builder helped me visualize exactly what I wanted for my graduation party. The result was not only beautiful but delicious too!",
                author: "Camila S.",
                event: "Graduation Party",
                image: "https://images.unsplash.com/photo-1674667171458-b9d6c9a8b946?auto=format&fit=crop&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt="Custom cake" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-primary text-sm">{testimonial.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-6"
            >
              Ready to Create Your Perfect Cake?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8"
            >
              Start designing now or visit our bakery for personalized assistance.
              Our talented bakers are ready to bring your vision to life!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="px-8 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors">
                Start Designing
              </button>
              <button className="px-8 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CakeBuilder;
