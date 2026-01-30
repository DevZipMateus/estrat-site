import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const MentoriaGarantia = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-primary/20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 rounded-full bg-primary/10 mb-4 sm:mb-6">
              <Shield className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-primary" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Garantia Incondicional de 7 Dias
            </h2>
            
            <div className="text-left bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-soft">
              <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                Você está <strong className="text-foreground">100% protegida</strong>. Se nos primeiros 7 dias você participar da primeira sessão e sentir que a mentoria não é para você, basta enviar um e-mail e devolvemos <strong className="text-foreground">TODO o seu investimento</strong>, sem perguntas, sem burocracia.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                Assumimos todo o risco para que você possa experimentar sem medo.
              </p>
              <p className="text-base sm:text-lg text-foreground font-semibold">
                Nossa garantia é simples: ou você fica ENCANTADA com os resultados ou seu dinheiro volta.
              </p>
            </div>
            
            <Button 
              size="lg" 
              onClick={scrollToPlanos}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 md:px-10 py-5 sm:py-6 text-sm sm:text-base md:text-lg font-bold group w-full sm:w-auto"
            >
              <span className="hidden sm:inline">QUERO COMEÇAR MINHA TRANSFORMAÇÃO SEM RISCOS</span>
              <span className="sm:hidden">COMEÇAR SEM RISCOS</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaGarantia;
