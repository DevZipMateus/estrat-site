import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="CONSULT ESTRATEGIAS Logo" className="h-16 w-auto" />
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Ampliando resultados empresariais através de consultoria e treinamentos personalizados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")} 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")} 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicos")} 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("depoimentos")} 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")} 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <a 
                  href="https://wa.me/5561999840109" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  (61) 99984-0109
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <a 
                  href="mailto:consultsolucoesgestao@gmail.com" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm break-all"
                >
                  consultsolucoesgestao@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  QNN 26 CONJUNTO A LOTE 53
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <a 
                  href="https://instagram.com/consult.estratégias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  @consult.estratégias
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horário de atendimento</h3>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
              <div className="text-sm text-primary-foreground/80">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábados: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} CONSULT ESTRATÉGIAS CONSULTORIA E TREINAMENTOS. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-primary-foreground/60 mt-2">
            CNPJ: 62.766.465/0001-05
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
