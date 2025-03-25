
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  // Product categories
  const categories = ['All', 'Breads', 'Pastries', 'Cakes', 'Desserts', 'Savory'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Products data
  const allProducts = [
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
    {
      id: 4,
      title: 'Cheese Bread',
      description: 'Traditional Brazilian pão de queijo with a crispy exterior and chewy, cheesy interior',
      price: 'R$5,99',
      category: 'Breads',
      image: 'https://images.unsplash.com/photo-1598233847491-f16487adee2f?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Chocolate Cake',
      description: 'Rich chocolate cake with smooth ganache frosting',
      price: 'R$49,99',
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Chicken Pie',
      description: 'Savory pie filled with tender chicken, vegetables, and creamy sauce',
      price: 'R$16,99',
      category: 'Savory',
      image: 'https://images.unsplash.com/photo-1585325701660-9db1ecaad234?auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Cinnamon Roll',
      description: 'Soft, sweet roll with cinnamon-sugar filling and cream cheese frosting',
      price: 'R$9,99',
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      title: 'French Baguette',
      description: 'Classic French bread with a crispy crust and light, airy interior',
      price: 'R$12,99',
      category: 'Breads',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'Carrot Cake',
      description: 'Moist carrot cake with cream cheese frosting and walnut decoration',
      price: 'R$45,99',
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?auto=format&fit=crop&q=80'
    },
  ];

  // Filtered products
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter products based on category and search
  useEffect(() => {
    let filtered = allProducts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-5xl font-display mb-6">Our Products</h1>
            <p className="text-lg text-white/80 mb-8">
              Discover our wide range of freshly baked goods made with love and the finest ingredients.
              From artisanal breads to decadent pastries, we have something for every taste.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-card rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="aspect-square bg-muted animate-pulse" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                      <div className="h-8 bg-muted rounded animate-pulse mt-4" />
                    </div>
                  </motion.div>
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    layout
                  >
                    <ProductCard
                      image={product.image}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <p className="text-xl text-muted-foreground">
                    No products found matching your criteria.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
