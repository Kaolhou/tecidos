
const Footer = () => {
  return (
    <footer className="bg-petrol-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/92719de6-bc2d-451a-b76c-e73440b0cfc3.png" 
                alt="Logo Letícia Tecidos" 
                className="h-16 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transformamos espaços através de tecidos excepcionais. 
              Cada peça conta uma história única de elegância e sofisticação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Início", href: "/" },
                { name: "Produtos", href: "/produtos" },
                { name: "Status do Pedido", href: "/status-pedido" },
                { name: "Sobre", href: "/sobre" },
                { name: "Contato", href: "/contato" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-antracite-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                "Consultoria Especializada",
                "Projetos Personalizados",
                "Amostras Gratuitas",
                "Entrega Expressa",
                "Atendimento VIP"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-petrol-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Leticia Tecidos. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-antracite-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-antracite-400 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
