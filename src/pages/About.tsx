
import React from 'react';
import { motion } from 'framer-motion';
import { useRevealAnimation } from '@/hooks/use-animations';
import { MapPin, Phone, Mail, Clock, Award, Users, Cake } from 'lucide-react';

const About = () => {
  useRevealAnimation();

  const timeline = [
    {
      year: '1987',
      title: 'O Início',
      description: 'A Jacaré Padaria foi fundada como uma pequena padaria familiar em Contagem.',
      image: 'https://images.unsplash.com/photo-1510741149781-d50bda7f6eb4?auto=format&fit=crop&q=80'
    },
    {
      year: '1995',
      title: 'Expansão',
      description: 'Devido à grande demanda, expandimos nossas operações e abrimos nossa loja principal.',
      image: 'https://images.unsplash.com/photo-1518982380835-a3d9073a033d?auto=format&fit=crop&q=80'
    },
    {
      year: '2005',
      title: 'Premiação',
      description: 'Reconhecida como a melhor padaria local em Contagem, ganhando múltiplos prêmios.',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80'
    },
    {
      year: '2015',
      title: 'Inovação',
      description: 'Introduzimos novas técnicas artesanais e expandimos nossa linha de produtos.',
      image: 'https://images.unsplash.com/photo-1536751048178-14a73ca468c4?auto=format&fit=crop&q=80'
    },
    {
      year: 'Hoje',
      title: 'Continuando a Tradição',
      description: 'Ainda uma empresa familiar, continuamos a servir nossa comunidade com a mesma dedicação e qualidade.',
      image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80'
    }
  ];

  const team = [
    {
      name: 'Carlos Almeida',
      role: 'Mestre Padeiro & Fundador',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80',
      bio: 'Com mais de 35 anos de experiência em panificação, Carlos fundou a Jacaré Padaria com a visão de trazer panificação tradicional para o bairro.'
    },
    {
      name: 'Ana Silva',
      role: 'Chef de Confeitaria',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Ana está criando doces requintados há 15 anos e lidera nossa inovação em confeitaria com criatividade e precisão.'
    },
    {
      name: 'Miguel Santos',
      role: 'Especialista em Bolos',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      bio: 'Miguel se especializa em criar bolos personalizados deslumbrantes para todas as ocasiões, combinando arte com sabores deliciosos.'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1525858097-9f4e1eba2981?auto=format&fit=crop&q=80" 
            alt="Fundo da padaria" 
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
            <h1 className="text-5xl font-display mb-6">Nossa História</h1>
            <p className="text-xl text-white/90 mb-6">
              Por mais de 35 anos, a Jacaré Padaria tem sido um pilar da nossa comunidade, 
              fornecendo deliciosos produtos de panificação feitos com amor e tradição.
            </p>
            <div className="flex flex-wrap gap-6 mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Estabelecida</p>
                  <p className="text-white font-medium">Desde 1987</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Prêmios</p>
                  <p className="text-white font-medium">12+ Reconhecimentos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Equipe</p>
                  <p className="text-white font-medium">15+ Padeiros Experientes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Nossa Missão */}
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
                Nossa Missão
              </span>
              <h2 className="text-4xl font-serif mb-6">
                Trazendo Alegria Através <br/>da Panificação Tradicional
              </h2>
              <p className="text-muted-foreground mb-6">
                Na Jacaré Padaria, nossa missão é preservar e compartilhar a arte da 
                panificação tradicional. Acreditamos que pães e doces bem elaborados podem trazer 
                alegria e criar conexões significativas em nossa comunidade.
              </p>
              <p className="text-muted-foreground mb-6">
                Estamos comprometidos em usar técnicas consagradas pelo tempo, os melhores ingredientes, 
                e evitar conservantes artificiais ou aditivos. Cada produto que sai da nossa 
                padaria é feito com cuidado, expertise e um profundo respeito pela tradição.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cake className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Métodos Tradicionais</h3>
                    <p className="text-muted-foreground">Preservamos técnicas de panificação tradicional que foram aperfeiçoadas ao longo de gerações.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cake className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Ingredientes de Qualidade</h3>
                    <p className="text-muted-foreground">Selecionamos os melhores ingredientes para garantir sabor e qualidade excepcionais em cada mordida.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cake className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Conexão com a Comunidade</h3>
                    <p className="text-muted-foreground">Buscamos ser mais que uma padaria - somos um ponto de encontro para a comunidade que servimos.</p>
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
                    alt="Interior da padaria" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1589985270958-354cf050755d?auto=format&fit=crop&q=80" 
                    alt="Pão fresco" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?auto=format&fit=crop&q=80" 
                    alt="Padeiro amassando massa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1605186598843-80ef9d9c867f?auto=format&fit=crop&q=80" 
                    alt="Doces frescos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Linha do tempo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Nossa Jornada
            </span>
            <h2 className="text-4xl font-serif mb-6">De Pequenos Começos</h2>
            <p className="text-muted-foreground">
              Mais de três décadas de paixão, dedicação e compromisso com a panificação de qualidade.
              Aqui está como nossa história se desenvolveu.
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
      
      {/* Seção da Equipe */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm">
              Nossa Equipe
            </span>
            <h2 className="text-4xl font-serif mb-6">Conheça os Padeiros</h2>
            <p className="text-muted-foreground">
              Os artesãos habilidosos por trás dos nossos produtos deliciosos. Nossa equipe reúne
              anos de experiência e uma paixão compartilhada pela panificação excepcional.
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
      
      {/* Localização e Contato */}
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
                Visite-nos
              </span>
              <h2 className="text-4xl font-serif mb-6">Encontre Nossa Padaria</h2>
              <p className="text-muted-foreground mb-8">
                Estamos convenientemente localizados no coração de Contagem. Venha nos visitar e experimente 
                o ambiente acolhedor, os aromas deliciosos e os produtos de panificação excepcionais. 
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Endereço</h3>
                    <p className="text-muted-foreground">R. Inglaterra, 735 - Bairro da Glória, Contagem - MG, 32340-130</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(31) 2567-6757</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@jacarepadaria.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Horário de Funcionamento</h3>
                    <div className="text-muted-foreground">
                      <p>Segunda - Sexta: 7:00 - 19:00</p>
                      <p>Sábado: 7:00 - 18:00</p>
                      <p>Domingo: 8:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Como Chegar
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                {/* Aqui normalmente seria incorporado um Mapa do Google. Por enquanto, usando uma imagem de espaço reservado */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
                  alt="Localização da padaria" 
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
