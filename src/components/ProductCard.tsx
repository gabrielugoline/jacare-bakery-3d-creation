
import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/use-toast';

type ProductCardProps = {
  id?: number;
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
};

const ProductCard = ({ id = Math.floor(Math.random() * 1000), image, title, description, price, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ 
      id, 
      image, 
      title, 
      price, 
      category, 
      quantity: 1 
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${title} foi adicionado ao seu carrinho.`,
      duration: 3000,
    });
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md product-card h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-medium">{price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
