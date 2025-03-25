
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, CopyIcon, Clock } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'completed'>('pending');
  const [countdown, setCountdown] = useState(300); // 5 minutos em segundos
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Validar se tem itens no carrinho
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/carrinho');
    }
  }, [cartItems, navigate]);

  // Simular a contagem regressiva do pagamento
  useEffect(() => {
    if (paymentStatus === 'pending') {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            // Simular pagamento concluído após o tempo expirar
            setPaymentStatus('completed');
            // Limpar o carrinho quando o pagamento for concluído
            clearCart();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [paymentStatus, clearCart]);

  // Formatar o tempo restante
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Código Pix falso
  const pixCode = "00020126580014BR.GOV.BCB.PIX0136a629534e-7e14-43e4-9213-67a934d8045205204000053039865802BR5925JACARE PADARIA LTDA6009SAO PAULO62070503***6304E2CA";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode).then(() => {
      setCopied(true);
      toast({
        title: "Código copiado!",
        description: "O código Pix foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-display mb-8 text-center">Pagamento</h1>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-md mb-8">
            <div className="p-8">
              {paymentStatus === 'pending' ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-serif mb-3">Pague com Pix</h2>
                    <p className="text-muted-foreground">
                      Escaneie o QR code abaixo ou copie o código para pagar
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">Expira em {formatTime(countdown)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    {/* QR Code (simulado) */}
                    <div className="bg-white p-4 rounded-lg mb-6 w-64 h-64 flex items-center justify-center">
                      <img 
                        src="data:image/png;base64,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"
                        alt="QR Code para pagamento"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="w-full bg-secondary p-4 rounded-lg mb-6 relative">
                      <p className="text-xs font-mono break-all pr-10">{pixCode}</p>
                      <button 
                        onClick={copyToClipboard}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        {copied ? 
                          <Check className="h-5 w-5 text-green-500" /> : 
                          <CopyIcon className="h-5 w-5" />
                        }
                      </button>
                    </div>
                    
                    <div className="w-full border-t border-border pt-6 mt-2">
                      <h3 className="text-lg font-medium mb-3">Detalhes do Pedido</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total de itens</span>
                          <span>{cartItems.length}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Valor Total</span>
                          <span>R${totalPrice.toFixed(2).replace('.', ',')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-serif mb-3">Pagamento Confirmado!</h2>
                  <p className="text-muted-foreground mb-8">
                    Seu pedido foi processado com sucesso e está sendo preparado.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    Voltar para Início
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
