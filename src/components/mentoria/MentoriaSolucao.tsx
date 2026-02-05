import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Rocket } from "lucide-react";

const fases = [
  {
    mes: "MÊS 1",
    titulo: "ESTRUTURAÇÃO",
    descricao: "Organize as bases do seu negócio: processos, precificação, controle financeiro e definição de metas",
    icon: Sparkles,
    color: "bg-primary",
  },
  {
    mes: "MÊS 2",
    titulo: "OTIMIZAÇÃO",
    descricao: "Implemente sistemas de gestão, otimize operações e crie estratégias de crescimento sustentável",
    icon: TrendingUp,
    color: "bg-secondary",
  },
  {
    mes: "MÊS 3",
    titulo: "ESCALA",
    descricao: "Desenvolva seu plano de expansão, estratégias de vendas e liderança para crescer sem depender só de você",
    icon: Rocket,
    color: "bg-accent",
  },
];

const MentoriaSolucao = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Apresentando: Mentoria Crescimento Estratégico 90 Dias
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto">
            O método completo para estruturar, organizar e escalar seu negócio em apenas 3 meses
          </p>
          
          {/* Video placeholder */}
          <div className="bg-muted rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-8 sm:mb-12 max-w-2xl mx-auto">
            <video 
              className="w-full rounded-lg sm:rounded-xl aspect-video"
              controls
              preload="metadata"
              poster=""
            >
              <source src="/WhatsApp%20Video%202026-02-05%20at%2010.45.06.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
          
          {/* 3 Pilares */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {fases.map((fase, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border h-full">
                  <div className={`w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 ${fase.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <fase.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary-foreground" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-secondary mb-2">{fase.mes}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{fase.titulo}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{fase.descricao}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToPlanos}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 md:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold group w-full sm:w-auto"
          >
            <span className="hidden sm:inline">QUERO TRANSFORMAR MEU NEGÓCIO EM 90 DIAS</span>
            <span className="sm:hidden">TRANSFORMAR MEU NEGÓCIO</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSolucao;
