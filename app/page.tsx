import Header from "./components/Header";
import GalleryCarousel from "./components/GalleryCarousel";
import ContactForm from "./components/ContactForm";

export default function Home() {
  // Array com as imagens da galeria
  const galleryImages = Array.from({ length: 25 }, (_, i) => `/images/gallery/image-${i + 1}.jpeg`);
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden text-white py-20 pt-28 mt-24" style={{ background: 'linear-gradient(to bottom right, #3a64ff, #2d4fcc, #1e3a99)' }}>
        {/* Efeitos de tinta - Hero: Gotas grandes e ondas suaves */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gotas de tinta grandes em posições variadas */}
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(58, 100, 255, 0.3)' }}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(58, 100, 255, 0.25)', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(58, 100, 255, 0.2)', animationDelay: '4s' }}></div>
          
          {/* Ondas suaves na parte inferior */}
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,120 Q300,80 600,100 T1200,120 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.1)"
            />
            <path 
              d="M0,120 Q200,60 400,90 T800,110 T1200,120 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.08)"
            />
          </svg>
          
          {/* Forma orgânica no topo direito */}
          <svg className="absolute top-0 right-0 w-96 h-96 opacity-20" viewBox="0 0 200 200">
            <path 
              d="M100,0 Q150,50 120,100 Q90,150 100,200 Q110,150 130,100 Q160,50 100,0 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        
        {/* Conteúdo */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Destak Drywall e Pintura</h1>
          <p className="text-xl mb-8 drop-shadow-md">Transformando ambientes com qualidade e profissionalismo</p>
          <a 
            href="#contato" 
            className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all inline-block shadow-lg"
            style={{ color: '#3a64ff' }}
          >
            Solicite um Orçamento
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Pintura Residencial e Comercial</h3>
              </div>
              <p className="text-gray-600">
                Serviços de pintura em geral para residências e estabelecimentos comerciais com acabamento profissional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Cimento Queimado</h3>
              </div>
              <p className="text-gray-600">
                Aplicação de cimento queimado para acabamentos modernos e elegantes em paredes e superfícies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Texturas em Geral</h3>
              </div>
              <p className="text-gray-600">
                Aplicação de diversos tipos de texturas para criar efeitos visuais únicos e personalizados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Aplicação de Papel de Parede</h3>
              </div>
              <p className="text-gray-600">
                Instalação profissional de papel de parede com acabamento perfeito e sem bolhas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Drywall - Paredes</h3>
              </div>
              <p className="text-gray-600">
                Construção e instalação de paredes em drywall com acabamento impecável e profissional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Boisserie</h3>
              </div>
              <p className="text-gray-600">
                Instalação de boisserie (revestimento em madeira) para criar ambientes elegantes e sofisticados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Forros</h3>
              </div>
              <p className="text-gray-600">
                Instalação de forros em drywall com acabamento perfeito para modernizar e valorizar seu ambiente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Sancas</h3>
              </div>
              <p className="text-gray-600">
                Construção e instalação de sancas em drywall para criar iluminação indireta e design moderno.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-semibold text-black">Molduras</h3>
              </div>
              <p className="text-gray-600">
                Instalação de molduras em drywall para dar acabamento elegante e sofisticado aos ambientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Galeria de Trabalhos</h2>
          <GalleryCarousel images={galleryImages} />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative overflow-hidden text-white py-20" style={{ background: 'linear-gradient(to bottom right, #e06e00, #cc6300, #b85800)' }}>
        {/* Efeitos de tinta - Sobre: Gotas menores e formas elípticas */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gotas menores em posições diferentes */}
          <div className="absolute top-20 right-10 w-48 h-48 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(224, 110, 0, 0.25)' }}></div>
          <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(224, 110, 0, 0.2)', animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-52 h-52 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(224, 110, 0, 0.18)', animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-44 h-44 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(224, 110, 0, 0.22)', animationDelay: '4.5s' }}></div>
          
          {/* Formas elípticas */}
          <div className="absolute top-0 left-1/4 w-96 h-48 rounded-full blur-3xl opacity-15" style={{ backgroundColor: 'rgba(224, 110, 0, 0.3)', transform: 'rotate(-15deg)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-40 rounded-full blur-3xl opacity-15" style={{ backgroundColor: 'rgba(224, 110, 0, 0.25)', transform: 'rotate(20deg)' }}></div>
          
          {/* Ondas mais pronunciadas na parte superior */}
          <svg className="absolute top-0 left-0 w-full h-40" viewBox="0 0 1200 160" preserveAspectRatio="none">
            <path 
              d="M0,0 Q400,40 800,20 T1200,0 L1200,160 Q800,120 400,140 T0,160 Z" 
              fill="rgba(255,255,255,0.08)"
            />
          </svg>
          
          {/* Círculos decorativos */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full border-2 border-white/10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-2 border-white/10"></div>
        </div>
        
        {/* Conteúdo */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Sobre a Destak</h2>
            <p className="text-lg mb-4 drop-shadow-md">
              Com anos de experiência no mercado, a Destak é especializada em serviços de pintura 
              residencial e comercial, aplicação de cimento queimado, texturas em geral, papel de parede, 
              drywall (paredes, forros, sancas e molduras) e boisserie.
            </p>
            <p className="text-lg mb-4 drop-shadow-md">
              Nossa equipe de profissionais qualificados está pronta para transformar seu ambiente 
              com dedicação, atenção aos detalhes e compromisso com a excelência. Utilizamos apenas 
              materiais de primeira linha e técnicas modernas para garantir resultados duradouros 
              e satisfação total dos nossos clientes.
            </p>
            <p className="text-lg drop-shadow-md">
              Seja para renovar sua residência ou modernizar seu espaço comercial, a Destak oferece 
              soluções completas em drywall e pintura, sempre com qualidade superior e acabamento impecável.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative overflow-hidden text-white py-20" style={{ background: 'linear-gradient(to bottom right, #61a600, #559000, #4a7d00)' }}>
        {/* Efeitos de tinta - formas orgânicas */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Contato: Formas geométricas e linhas onduladas */}
          {/* Formas retangulares arredondadas */}
          <div className="absolute top-16 left-16 w-40 h-40 rounded-3xl blur-2xl rotate-45 animate-paint-drip" style={{ backgroundColor: 'rgba(97, 166, 0, 0.2)' }}></div>
          <div className="absolute bottom-16 right-16 w-36 h-36 rounded-3xl blur-2xl -rotate-45 animate-paint-drip" style={{ backgroundColor: 'rgba(97, 166, 0, 0.18)', animationDelay: '2.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-2xl blur-2xl rotate-12 animate-paint-drip" style={{ backgroundColor: 'rgba(97, 166, 0, 0.15)', animationDelay: '5s' }}></div>
          
          {/* Gotas médias em posições diferentes */}
          <div className="absolute top-1/4 left-1/3 w-56 h-56 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(97, 166, 0, 0.22)', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full blur-3xl animate-paint-drip" style={{ backgroundColor: 'rgba(97, 166, 0, 0.2)', animationDelay: '3.5s' }}></div>
          
          {/* Linhas onduladas nas laterais */}
          <svg className="absolute top-0 left-0 w-64 h-full opacity-15" viewBox="0 0 200 800" preserveAspectRatio="none">
            <path 
              d="M0,0 Q50,100 0,200 T0,400 T0,600 T0,800" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
          <svg className="absolute top-0 right-0 w-64 h-full opacity-15" viewBox="0 0 200 800" preserveAspectRatio="none">
            <path 
              d="M200,0 Q150,100 200,200 T200,400 T200,600 T200,800" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
          
          {/* Padrão de ondas na parte inferior */}
          <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1200 96" preserveAspectRatio="none">
            <path 
              d="M0,96 C200,80 400,96 600,80 C800,96 1000,80 1200,96 L1200,96 L0,96 Z" 
              fill="rgba(255,255,255,0.1)"
            />
            <path 
              d="M0,96 C150,88 300,96 450,88 C600,96 750,88 900,96 C1050,88 1200,96 1200,96 L1200,96 L0,96 Z" 
              fill="rgba(255,255,255,0.06)"
            />
          </svg>
          
          {/* Formas hexagonais decorativas */}
          <svg className="absolute top-1/3 left-1/5 w-24 h-24 opacity-10" viewBox="0 0 100 100">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-1/3 right-1/5 w-20 h-20 opacity-10" viewBox="0 0 100 100">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
          </svg>
        </div>
        
        {/* Conteúdo */}
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">Entre em Contato</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 drop-shadow-md">Informações</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 drop-shadow-md">📞 Telefone</h4>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a 
                      href="https://wa.me/5534996507784" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-2.5 rounded-lg inline-flex items-center justify-center transition-all hover:scale-110 shadow-lg drop-shadow-md"
                      aria-label="Fale conosco no WhatsApp"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                    <p className="text-white/90 drop-shadow-sm">(34) 99650-7784</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 drop-shadow-md">📧 Email</h4>
                  <p className="text-white/90 drop-shadow-sm">destak.ofc@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 drop-shadow-md">📍 Endereço</h4>
                  <p className="text-white/90 drop-shadow-sm">Uberlândia, Minas Gerais</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 drop-shadow-md">🕒 Horário de Atendimento</h4>
                  <p className="text-white/90 drop-shadow-sm">Segunda a Sábado: 7h às 18h</p>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 drop-shadow-md">Envie sua Mensagem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">&copy;{new Date().getFullYear()} Destak Pinturas e Gesso. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm text-gray-400">
            Site desenvolvido por{" "}
            <a 
              href="https://webcookies.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              WebCookies
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
