
import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  category,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className="product-card group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground mb-3">
              {category}
            </span>
            <h3 className="text-xl font-serif">{title}</h3>
          </div>
          <span className="text-lg font-semibold text-primary">{price}</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 w-full py-2 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
