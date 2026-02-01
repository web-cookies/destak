import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Logo />
          <ul className="flex gap-6">
            <li><a href="#inicio" className="hover:text-blue-600 transition">Início</a></li>
            <li><a href="#servicos" className="hover:text-blue-600 transition">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-blue-600 transition">Sobre</a></li>
            <li><a href="#contato" className="hover:text-blue-600 transition">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Destak Pinturas e Gesso</h1>
          <p className="text-xl mb-8">Transformando ambientes com qualidade e profissionalismo</p>
          <a 
            href="#contato" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Solicite um Orçamento
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold mb-3">Pintura Residencial</h3>
              <p className="text-gray-600">
                Pintura interna e externa com acabamento impecável para sua residência.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold mb-3">Pintura Comercial</h3>
              <p className="text-gray-600">
                Serviços profissionais para empresas, escritórios e estabelecimentos comerciais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-semibold mb-3">Aplicação de Gesso</h3>
              <p className="text-gray-600">
                Instalação e acabamento de gesso liso, texturizado e decorativo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-3">Acabamentos</h3>
              <p className="text-gray-600">
                Texturas, efeitos especiais e acabamentos personalizados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-semibold mb-3">Preparação de Superfície</h3>
              <p className="text-gray-600">
                Massa corrida, lixamento e preparação completa para pintura.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-semibold mb-3">Impermeabilização</h3>
              <p className="text-gray-600">
                Proteção contra umidade e infiltrações em paredes e tetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Sobre a Destak</h2>
            <p className="text-lg text-gray-700 mb-4">
              Com anos de experiência no mercado, a Destak é especializada em serviços de pintura 
              e gesso de alta qualidade. Nossa equipe de profissionais qualificados está pronta 
              para transformar seu ambiente com dedicação, atenção aos detalhes e compromisso 
              com a excelência.
            </p>
            <p className="text-lg text-gray-700">
              Utilizamos apenas materiais de primeira linha e técnicas modernas para garantir 
              resultados duradouros e satisfação total dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">📞 Telefone</h3>
                  <p className="text-blue-100">(00) 0000-0000</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
                  <p className="text-blue-100">contato@destak.com.br</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">📍 Endereço</h3>
                  <p className="text-blue-100">Sua cidade, Seu estado</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🕒 Horário de Atendimento</h3>
                  <p className="text-blue-100">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-blue-100">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Destak Pinturas e Gesso. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
