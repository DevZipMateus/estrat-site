import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Clock, Calendar } from "lucide-react";

interface WebinarCTAProps {
  onOpenForm: () => void;
}

const WebinarCTA = ({ onOpenForm }: WebinarCTAProps) => {
  return (
    <section id="webinar-cta" className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary-foreground">
            Inscreva-se no Webinar Gratuito
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Descubra os 3 pilares que toda empreendedora precisa dominar para ter um negócio estruturado, lucrativo e escalável.
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 bg-primary-foreground/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base text-primary-foreground">Data a definir</p>
                <p className="text-xs text-primary-foreground/80">Aula ao vivo</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-primary-foreground/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base text-primary-foreground">19h (Brasília)</p>
                <p className="text-xs text-primary-foreground/80">Duração: 1h30</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-primary-foreground/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base text-primary-foreground">100% Online</p>
                <p className="text-xs text-primary-foreground/80">Vagas limitadas</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onOpenForm}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-auto min-h-14 sm:min-h-16 py-4 sm:py-5 px-8 sm:px-12 rounded-xl shadow-strong hover:shadow-lg transition-all duration-200 text-base sm:text-lg md:text-xl font-extrabold group"
          >
            <span className="flex items-center gap-3">
              <span>GARANTIR MINHA VAGA NO WEBINAR</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>

          {/* Trust badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <div className="flex items-center gap-2 text-primary-foreground/90 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Certificado de participação</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Material exclusivo</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>100% Gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCTA;
