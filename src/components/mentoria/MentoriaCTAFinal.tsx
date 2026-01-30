import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield, CreditCard } from "lucide-react";

const beneficios = [
  "3 meses de mentoria intensiva",
  "Sessões em grupo toda semana",
  "Material completo de gestão empresarial",
  "Grupo exclusivo no WhatsApp",
  "Acesso vitalício à plataforma",
  "R$ 985 em bônus exclusivos",
  "Garantia incondicional de 7 dias",
  "Certificado de conclusão",
];

const MentoriaCTAFinal = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Está Pronta Para Transformar Seu Negócio em 90 Dias?
          </h2>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 text-left border border-primary-foreground/20">
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-4 sm:mb-6">
              Você está a uma decisão de distância de ter o negócio estruturado, lucrativo e organizado que você sempre sonhou.
            </p>
            
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-3 sm:mb-4">
              <strong className="text-primary-foreground">Daqui a 90 dias você pode estar:</strong>
            </p>
            
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Com processos claros e funcionando mesmo na sua ausência</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Sabendo exatamente quanto lucra por mês</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Com uma equipe alinhada e produtiva</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Crescendo de forma sustentável e planejada</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Tendo mais tempo livre e qualidade de vida</span>
              </li>
            </ul>
            
            <p className="text-primary-foreground/80 italic text-sm sm:text-base">
              Ou... pode continuar na mesma situação de hoje. A escolha é sua.
            </p>
          </div>
          
          {/* Recap */}
          <div className="bg-primary-foreground/5 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-base sm:text-lg font-bold text-primary-foreground mb-3 sm:mb-4">
              RECAPITULANDO, VOCÊ VAI RECEBER:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-left">{beneficio}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-secondary">
              INVESTIMENTO: A partir de 12x de R$ 39,99
            </p>
          </div>
          
          {/* CTA */}
          <Button 
            size="lg" 
            onClick={scrollToPlanos}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 md:px-12 py-6 sm:py-7 md:py-8 text-base sm:text-lg md:text-xl font-bold group shadow-strong mb-4 sm:mb-6 w-full sm:w-auto"
          >
            <span className="hidden sm:inline">SIM, QUERO TRANSFORMAR MEU NEGÓCIO AGORA!</span>
            <span className="sm:hidden">QUERO TRANSFORMAR MEU NEGÓCIO!</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {/* Selos de segurança */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Até 12x sem juros</span>
            </div>
          </div>
          
          {/* Urgência */}
          <p className="mt-6 sm:mt-8 text-primary-foreground/70 text-xs sm:text-sm">
            ⚠️ Essa é uma oportunidade única. A próxima turma só abre em Junho. <br className="hidden sm:inline" />
            O investimento promocional é válido apenas para essa turma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentoriaCTAFinal;
