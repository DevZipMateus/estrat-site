import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import mentoriaHeroImg from "@/assets/mentoria-hero.jpg";

const MentoriaHero = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-8 pb-16 md:py-20 bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMzZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <img src={logo} alt="Consult Estratégias" className="h-12 sm:h-14 md:h-16 w-auto mb-4 sm:mb-6 mx-auto lg:mx-0" />
            
            {/* Pre-headline */}
            <div className="inline-block bg-secondary/20 text-secondary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-secondary/30">
              🎯 WEBINAR GRATUITO: Data a definir às 19h
            </div>
            
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Transforme Seu Negócio em 90 Dias: O Método Que Já Ajudou Mais de 100 Empreendedoras em Brasília a Estruturar e Escalar Suas Empresas
            </h1>
            
            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              No webinar gratuito você vai descobrir os <strong>3 pilares</strong> que toda empreendedora precisa dominar para ter um negócio estruturado, lucrativo e escalável
            </p>
            
            {/* CTA */}
            <Button 
              size="lg" 
              onClick={scrollToPlanos}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl font-bold group shadow-strong w-full sm:w-auto"
            >
              <span className="hidden sm:inline">QUERO PARTICIPAR DO WEBINAR GRATUITO</span>
              <span className="sm:hidden">PARTICIPAR DO WEBINAR</span>
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Social proof */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mt-6 sm:mt-8 text-primary-foreground/80 text-xs sm:text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>Mais de 100 empreendedoras já participaram</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span>Nota 4.9/5.0 no Google</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>100% online e ao vivo</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg order-1 lg:order-2">
            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary-foreground/20 overflow-hidden">
                <img 
                  src={mentoriaHeroImg} 
                  alt="Empreendedora em consultoria de negócios" 
                  className="w-full h-auto rounded-lg sm:rounded-xl object-cover aspect-square"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaHero;
