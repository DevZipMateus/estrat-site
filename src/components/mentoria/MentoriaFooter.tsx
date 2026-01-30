import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const MentoriaFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Info principal */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">CONSULT ESTRATÉGIAS</h3>
            <p className="text-background/70">Mentoria Empresarial | Brasília-DF</p>
          </div>
          
          {/* Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-secondary" />
              <a href="tel:+5561999840109" className="hover:text-secondary transition-colors">
                (61) 99984-0109
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              <a href="mailto:consultsolucoesgestao@gmail.com" className="hover:text-secondary transition-colors text-sm">
                consultsolucoesgestao@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-sm">QNN 26 Conjunto A Lote 53, Ceilândia - DF</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Instagram className="w-5 h-5 text-secondary" />
              <a 
                href="https://instagram.com/consult.estratégias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                @consult.estratégias
              </a>
            </div>
          </div>
          
          {/* Horário */}
          <div className="flex items-center justify-center gap-2 text-background/70 text-sm mb-8">
            <Clock className="w-4 h-4" />
            <span>Segunda a Sexta: 8h às 18h | Sábados: 8h às 12h</span>
          </div>
          
          {/* Links legais */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-background/60 mb-6">
            <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-secondary transition-colors">Política de Reembolso</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-background/50 text-sm">
            <p>© {new Date().getFullYear()} CONSULT ESTRATÉGIAS - CNPJ: 62.766.465/0001-05</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MentoriaFooter;
