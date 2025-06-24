import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Users, 
  Shield, 
  Clock,
  ChevronRight,
  Instagram,
  ExternalLink,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Implantodontia",
      description: "Implantes dentários de última geração com tecnologia avançada",
      icon: "🦷"
    },
    {
      title: "Ortodontia",
      description: "Aparelhos ortodônticos tradicionais e estéticos",
      icon: "✨"
    },
    {
      title: "Estética Dental",
      description: "Clareamento, facetas e lentes de contato dental",
      icon: "💎"
    },
    {
      title: "Periodontia",
      description: "Tratamento especializado de gengivas e estruturas de suporte",
      icon: "🌟"
    },
    {
      title: "Endodontia",
      description: "Tratamento de canal com tecnologia microscópica",
      icon: "🔬"
    },
    {
      title: "Cirurgia Oral",
      description: "Procedimentos cirúrgicos com máxima segurança",
      icon: "⚕️"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente atendimento! Profissionais muito qualificados e ambiente acolhedor. Recomendo!"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Fiz meu implante aqui e o resultado superou minhas expectativas. Equipe nota 10!"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Clínica moderna com equipamentos de ponta. Me senti muito segura durante todo o tratamento."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Float Button */}
      <a
        href="https://mechamenozap.com.br/odontosheider/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      >
        <MessageCircle size={24} />
      </a>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">OS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Odonto Sheider
                </h1>
                <p className="text-sm text-gray-600">Clínica Odontológica</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Sobre
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Contato
              </a>
              <a
                href="https://maps.google.com/place/odontosheider/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink size={16} />
                <span>Tour 360º</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t bg-white/95 backdrop-blur-md rounded-lg">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-4">
                  Início
                </a>
                <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-4">
                  Serviços
                </a>
                <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-4">
                  Sobre
                </a>
                <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-4">
                  Depoimentos
                </a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-4">
                  Contato
                </a>
                <a
                  href="https://maps.google.com/place/odontosheider/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 mx-4"
                >
                  <ExternalLink size={16} />
                  <span>Tour 360º</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Seu Sorriso
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Nossa Paixão
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Excelência em odontologia com tecnologia de ponta e atendimento humanizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contato"
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Agendar Consulta
              </a>
              <a
                href="https://www.instagram.com/institutosheider/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Instagram size={20} />
                <span>Siga-nos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer">
                  <span>Saiba mais</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Excelência em Odontologia
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A Odonto Sheider é referência em tratamentos odontológicos de alta qualidade, 
                combinando tecnologia de ponta com atendimento humanizado e personalizado.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Qualidade</h4>
                    <p className="text-gray-600 text-sm">Tratamentos de excelência</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Experiência</h4>
                    <p className="text-gray-600 text-sm">Profissionais especializados</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Segurança</h4>
                    <p className="text-gray-600 text-sm">Protocolos rigorosos</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Pontualidade</h4>
                    <p className="text-gray-600 text-sm">Horários flexíveis</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/place/odontosheider/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} />
                <span>Conheça Nossa Clínica - Tour 360º</span>
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">OS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Odonto Sheider</h3>
                    <p className="text-gray-600 mb-6">
                      Transformando sorrisos com dedicação, tecnologia e cuidado personalizado
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A satisfação dos nossos pacientes é nossa maior recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos prontos para cuidar do seu sorriso. Agende sua consulta!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-yellow-400">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-300">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-gray-300">contato@odontosheider.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-300">Rua das Flores, 123 - Centro<br />São Paulo, SP - CEP 01234-567</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="https://www.instagram.com/institutosheider/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://mechamenozap.com.br/odontosheider/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Agende sua Consulta</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">OS</span>
              </div>
              <div>
                <h3 className="font-bold">Odonto Sheider</h3>
                <p className="text-sm text-gray-400">Clínica Odontológica</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Odonto Sheider. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-500 mt-1">Desenvolvido com ❤️ para seu sorriso</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;