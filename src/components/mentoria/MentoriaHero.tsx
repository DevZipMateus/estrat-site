import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const MentoriaHero = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMzZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo */}
            <img src={logo} alt="Consult Estratégias" className="h-16 w-auto mb-6 mx-auto lg:mx-0" />
            
            {/* Pre-headline */}
            <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-secondary/30">
              🎯 WEBINAR GRATUITO: Data a definir às 19h
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Transforme Seu Negócio em 90 Dias: O Método Que Já Ajudou Mais de 100 Empreendedoras em Brasília a Estruturar e Escalar Suas Empresas
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              No webinar gratuito você vai descobrir os <strong>3 pilares</strong> que toda empreendedora precisa dominar para ter um negócio estruturado, lucrativo e escalável
            </p>
            
            {/* CTA */}
            <Button 
              size="lg" 
              onClick={scrollToPlanos}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-7 text-xl font-bold group shadow-strong"
            >
              QUERO PARTICIPAR DO WEBINAR GRATUITO
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Social proof */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>Mais de 100 empreendedoras já participaram</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span>Nota 4.9/5.0 no Google</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>100% online e ao vivo</span>
              </div>
            </div>
          </div>
          
          {/* Image/Video placeholder */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary-foreground/10 rounded-xl flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-24 h-24 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="text-lg font-semibold">Eriksen</p>
                    <p className="text-sm opacity-80">Mentor de Negócios</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaHero;
