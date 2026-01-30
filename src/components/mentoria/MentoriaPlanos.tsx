import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield, CreditCard, Users } from "lucide-react";

const planos = [
  {
    nome: "PLANO ESSENCIAL",
    destaque: false,
    preco: "R$ 399,90",
    parcela: "ou 12x de R$ 39,99",
    beneficios: [
      "4 sessões em grupo por mês",
      "Material de apoio completo",
      "Grupo exclusivo WhatsApp",
      "Acesso à plataforma",
      "Gravações das aulas",
      "Certificado de conclusão",
      "Garantia de 7 dias",
    ],
    ideal: "Ideal para: Quem está começando e quer aprender com o grupo.",
  },
  {
    nome: "PLANO CRESCIMENTO",
    destaque: true,
    badge: "⭐ MAIS ESCOLHIDO",
    preco: "R$ 599,90",
    parcela: "ou 12x de R$ 59,99",
    beneficios: [
      "TUDO DO PLANO ESSENCIAL +",
      "2 sessões individuais (1:1)",
      "Análise personalizada do negócio",
      "Estratégias customizadas",
      "Plano de ação individual",
      "Suporte prioritário",
      "Garantia de 7 dias",
    ],
    ideal: "Ideal para: Quem quer atenção personalizada + aprendizado em grupo.",
  },
  {
    nome: "PLANO TRANSFORMAÇÃO",
    destaque: false,
    badge: "RESULTADO MÁXIMO",
    preco: "R$ 999,90",
    parcela: "ou 12x de R$ 99,99",
    beneficios: [
      "TUDO DO PLANO CRESCIMENTO +",
      "3 sessões individuais (1:1)",
      "Mentoria intensiva personalizada",
      "Acompanhamento semanal de KPIs",
      "Revisão completa de processos",
      "Consultoria estratégica exclusiva",
      "Acesso VIP ao mentor",
      "Garantia de 7 dias",
    ],
    ideal: "Ideal para: Quem quer transformação profunda e acompanhamento total.",
  },
];

const MentoriaPlanos = () => {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Escolha o Plano Ideal Para o Momento do Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Todos os planos incluem garantia incondicional de 7 dias
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {planos.map((plano, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 border-2 ${
                  plano.destaque 
                    ? "border-secondary bg-secondary/5 shadow-strong scale-105" 
                    : "border-border bg-card shadow-medium"
                }`}
              >
                {plano.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${
                    plano.destaque 
                      ? "bg-secondary text-secondary-foreground" 
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {plano.badge}
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground text-center mb-4 mt-2">
                  {plano.nome}
                </h3>
                
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-primary">{plano.preco}</p>
                  <p className="text-muted-foreground">{plano.parcela}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plano.beneficios.map((beneficio, beneficioIndex) => (
                    <li key={beneficioIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        beneficioIndex === 0 && index > 0 
                          ? "text-secondary" 
                          : "text-primary"
                      }`} />
                      <span className={`text-sm ${
                        beneficioIndex === 0 && index > 0 
                          ? "font-semibold text-foreground" 
                          : "text-muted-foreground"
                      }`}>
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground text-center mb-6 italic">
                  {plano.ideal}
                </p>
                
                <Button 
                  className={`w-full py-6 text-lg font-bold ${
                    plano.destaque 
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  QUERO ESTE PLANO
                </Button>
              </div>
            ))}
          </div>
          
          {/* Urgência e segurança */}
          <div className="mt-12 space-y-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-secondary" />
                <span>Vagas limitadas por turma</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-secondary" />
                <span>85% das vagas preenchidas</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>Aceitamos todos os cartões</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaPlanos;
