import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Target, Star, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";

const MentoriaSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold border border-secondary/30 animate-pulse">
              🚀 NOVA MENTORIA EXCLUSIVA — VAGAS LIMITADAS
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
                Mentoria Crescimento Estratégico{" "}
                <span className="text-secondary">90 Dias</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                O método completo para estruturar, organizar e escalar seu negócio em apenas 3 meses com acompanhamento personalizado.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20 text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary-foreground text-sm">Sessões em Grupo</h3>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20 text-center">
                  <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary-foreground text-sm">Crescimento Real</h3>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20 text-center">
                  <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary-foreground text-sm">Acompanhamento</h3>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 mb-8 text-primary-foreground/90 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>3 meses de mentoria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>A partir de 12x R$ 39,99</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
              
              {/* CTA */}
              <Link to="/mentoria">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-bold group shadow-strong w-full sm:w-auto"
                >
                  CONHECER A MENTORIA
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            {/* Right Content - Mentor Card */}
            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 overflow-hidden">
                <CardContent className="p-0">
                  {/* Mentor Photo */}
                  <div className="relative">
                    <img 
                      src={mentorPhoto} 
                      alt="Eriksen - Mentor" 
                      className="w-full h-64 sm:h-72 object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                      <h3 className="text-xl font-bold text-primary-foreground">Eriksen</h3>
                      <p className="text-secondary text-sm font-medium">Consultor Empresarial</p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="p-4 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 text-primary-foreground/90 text-sm">
                      <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>+100 empresas consultadas</span>
                    </div>
                    <div className="flex items-center gap-3 text-primary-foreground/90 text-sm">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>500+ horas de mentorias</span>
                    </div>
                    <div className="flex items-center gap-3 text-primary-foreground/90 text-sm">
                      <Star className="w-5 h-5 text-secondary fill-secondary flex-shrink-0" />
                      <span>Nota 4.9/5 no Google</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
