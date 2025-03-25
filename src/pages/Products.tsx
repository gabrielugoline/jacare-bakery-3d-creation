
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  // Categorias de produtos
  const categories = ['Todos', 'Pães', 'Doces', 'Bolos', 'Sobremesas', 'Salgados'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Produtos dados
  const allProducts = [
    {
      id: 1,
      title: 'Pão Sourdough',
      description: 'Pão sourdough tradicional com uma crosta crocante e interior macio e aerado',
      price: 'R$14,99',
      category: 'Pães',
      image: 'https://images.unsplash.com/photo-1586444248516-60098ca688e1?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Croissant de Chocolate',
      description: 'Croissant amanteigado e folhado recheado com chocolate rico',
      price: 'R$8,99',
      category: 'Doces',
      image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Torta de Morango',
      description: 'Massa doce recheada com creme de baunilha e coberta com morangos frescos',
      price: 'R$12,99',
      category: 'Sobremesas',
      image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Pão de Queijo',
      description: 'Tradicional pão de queijo brasileiro com exterior crocante e interior macio e queijoso',
      price: 'R$5,99',
      category: 'Pães',
      image: 'https://images.unsplash.com/photo-1598233847491-f16487adee2f?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Bolo de Chocolate',
      description: 'Bolo de chocolate rico com cobertura de ganache suave',
      price: 'R$49,99',
      category: 'Bolos',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Empada de Frango',
      description: 'Empada saborosa recheada com frango suculento, legumes e molho cremoso',
      price: 'R$16,99',
      category: 'Salgados',
      image: 'https://images.unsplash.com/photo-1585325701660-9db1ecaad234?auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Cinnamon Roll',
      description: 'Massa doce e macia com recheio de canela e açúcar, coberta com cream cheese',
      price: 'R$9,99',
      category: 'Doces',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      title: 'Baguete Francesa',
      description: 'Pão francês clássico com crosta crocante e interior leve e aerado',
      price: 'R$12,99',
      category: 'Pães',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'Bolo de Cenoura',
      description: 'Bolo de cenoura úmido com cobertura de cream cheese e decoração de nozes',
      price: 'R$45,99',
      category: 'Bolos',
      image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?auto=format&fit=crop&q=80'
    },
  ];

  // Produtos filtrados
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Simular carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filtrar produtos com base na categoria e busca
  useEffect(() => {
    let filtered = allProducts;
    
    if (selectedCategory !== 'Todos') {
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
            <h1 className="text-5xl font-display mb-6">Nossos Produtos</h1>
            <p className="text-lg text-white/80 mb-8">
              Descubra nossa ampla variedade de produtos recém-assados feitos com amor e os melhores ingredientes.
              De pães artesanais a doces decadentes, temos algo para todos os gostos.
            </p>
            
            {/* Barra de Busca */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Seção de Produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filtro de Categorias */}
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
          
          {/* Grade de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                // Esqueletos de carregamento
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
                      id={product.id}
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
                    Nenhum produto encontrado com esses critérios.
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
