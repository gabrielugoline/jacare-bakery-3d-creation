
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-display mb-8">Meu Carrinho</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-card p-8 rounded-xl text-center">
              <h2 className="text-2xl font-serif mb-4">Seu carrinho está vazio</h2>
              <p className="text-muted-foreground mb-8">
                Adicione alguns produtos deliciosos para começar sua compra.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-card rounded-xl overflow-hidden shadow-md mb-8">
                <div className="p-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <h2 className="text-lg font-medium">Produto</h2>
                    <h2 className="text-lg font-medium">Subtotal</h2>
                  </div>
                  
                  {cartItems.map((item) => {
                    const priceNum = parseFloat(item.price.replace('R$', '').replace(',', '.'));
                    const subtotal = (priceNum * item.quantity).toFixed(2).replace('.', ',');
                    
                    return (
                      <div 
                        key={item.id}
                        className="py-6 border-b border-border last:border-0"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div>
                              <h3 className="font-medium mb-1">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{item.price} cada</p>
                              <div className="flex items-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 rounded-md hover:bg-secondary"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 rounded-md hover:bg-secondary"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-4 p-1 rounded-md text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">R${subtotal}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <button
                  onClick={clearCart}
                  className="px-6 py-3 rounded-md border border-border hover:bg-secondary transition-colors"
                >
                  Limpar Carrinho
                </button>
                
                <div className="bg-card rounded-xl shadow-md p-6 w-full md:w-80">
                  <h3 className="text-xl font-serif mb-4">Resumo do Pedido</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>R${totalPrice.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entrega</span>
                      <span>Grátis</span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>R${totalPrice.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                  <Link
                    to="/checkout"
                    className="w-full inline-flex justify-center items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <span>Finalizar Compra</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
