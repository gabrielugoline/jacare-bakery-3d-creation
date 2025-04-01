
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const FloatingButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  
  // URL do áudio compartilhado
  const audioUrl = "https://screenapp-io.s3.amazonaws.com/33e5fcfa-55f7-4d07-9e01-61d6b8a0e96e/audio-output.mp3";

  // Inicializar o áudio quando o componente for montado
  React.useEffect(() => {
    const audioElement = new Audio(audioUrl);
    
    audioElement.onended = () => {
      setIsPlaying(false);
    };
    
    audioElement.onerror = (e) => {
      console.error('Erro ao carregar áudio:', e);
      toast({
        title: "Erro ao reproduzir áudio",
        description: "Não foi possível reproduzir a mensagem de boas-vindas.",
        variant: "destructive",
      });
      setIsPlaying(false);
    };
    
    // Pré-carregar o áudio
    audioElement.load();
    setAudio(audioElement);
    
    // Limpar o áudio quando o componente for desmontado
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play().catch(error => {
        console.error('Erro ao reproduzir áudio:', error);
        toast({
          title: "Erro ao reproduzir áudio",
          description: "Não foi possível reproduzir a mensagem de boas-vindas.",
          variant: "destructive",
        });
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={togglePlay}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center text-white z-50 relative"
      aria-label={isPlaying ? "Pausar assistente de voz" : "Ouvir assistente de voz"}
    >
      {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      
      <span className="sr-only">
        {isPlaying ? "Pausar assistente de voz" : "Ouvir assistente de voz"}
      </span>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isPlaying ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -top-12 whitespace-nowrap bg-background text-foreground px-4 py-2 rounded-lg shadow-md text-sm"
      >
        {isPlaying ? "Assistente falando..." : ""}
      </motion.div>
    </motion.button>
  );
};

export default FloatingButton;
