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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apresentando: Mentoria Crescimento Estratégico 90 Dias
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            O método completo para estruturar, organizar e escalar seu negócio em apenas 3 meses
          </p>
          
          {/* Video placeholder */}
          <div className="bg-muted rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">▶️</span>
                </div>
                <p className="text-muted-foreground">Vídeo de apresentação da mentoria</p>
              </div>
            </div>
          </div>
          
          {/* 3 Pilares */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {fases.map((fase, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-medium border border-border h-full">
                  <div className={`w-16 h-16 ${fase.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <fase.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-bold text-secondary mb-2">{fase.mes}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{fase.titulo}</h3>
                  <p className="text-muted-foreground">{fase.descricao}</p>
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
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg font-bold group"
          >
            QUERO TRANSFORMAR MEU NEGÓCIO EM 90 DIAS
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSolucao;
