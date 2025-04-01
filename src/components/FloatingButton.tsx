
import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const FloatingButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Use a direct MP3 file URL instead of Google Drive
  // If you need to use Google Drive, you need proper access permissions
  // This is a backup approach using a different method to access the file
  const audioUrl = "https://docs.google.com/uc?export=open&id=1PEBv1_8Sy1dVO8Tg9UiXcc4VtzQqv7UZ";

  const initializeAudio = () => {
    if (!audioRef.current) {
      console.log("Initializing audio player");
      const audio = new Audio();
      
      // Setting up event listeners before setting source
      audio.oncanplaythrough = () => {
        console.log("Audio can play through");
      };
      
      audio.onended = () => {
        console.log("Audio playback ended");
        setIsPlaying(false);
      };
      
      audio.onerror = (e) => {
        console.error('Error playing audio:', e);
        toast({
          title: "Erro ao reproduzir áudio",
          description: "Não foi possível reproduzir a mensagem de boas-vindas.",
          variant: "destructive",
        });
        setIsPlaying(false);
      };
      
      // Set source after attaching listeners
      audio.src = audioUrl;
      audioRef.current = audio;
    }
  };

  const togglePlay = () => {
    console.log("Button clicked, toggling play state");
    // Initialize audio on first click
    initializeAudio();
    
    if (!audioRef.current) {
      console.error("Audio element not initialized");
      return;
    }
    
    if (isPlaying) {
      console.log("Pausing audio");
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      console.log("Attempting to play audio");
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio started playing successfully");
            setIsPlaying(true);
          })
          .catch(error => {
            console.error('Error playing audio:', error);
            toast({
              title: "Erro ao reproduzir áudio",
              description: "Não foi possível reproduzir a mensagem de boas-vindas.",
              variant: "destructive",
            });
            setIsPlaying(false);
          });
      }
    }
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      console.log("Cleaning up audio resources");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

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
