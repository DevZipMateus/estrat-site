import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const MentoriaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-secondary/30">
            🚀 NOVA MENTORIA EXCLUSIVA
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Mentoria Crescimento Estratégico 90 Dias
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            O método completo para estruturar, organizar e escalar seu negócio em apenas 3 meses
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Users className="w-10 h-10 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Sessões em Grupo</h3>
              <p className="text-sm text-primary-foreground/80">Aprenda com outras empreendedoras e troque experiências</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Crescimento Real</h3>
              <p className="text-sm text-primary-foreground/80">Estratégias práticas para aumentar seu faturamento</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Target className="w-10 h-10 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Acompanhamento</h3>
              <p className="text-sm text-primary-foreground/80">Suporte contínuo durante toda a jornada</p>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>3 meses de mentoria</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>A partir de 12x R$ 39,99</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
          
          {/* CTA */}
          <Link to="/mentoria">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-7 text-xl font-bold group shadow-strong"
            >
              CONHECER A MENTORIA
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
