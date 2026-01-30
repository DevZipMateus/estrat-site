import { Award, Clock, Users, Star } from "lucide-react";
import mentorPhoto from "@/assets/mentor-photo.jpg";

const credenciais = [
  { icon: Users, label: "Mais de 100 empresas consultadas" },
  { icon: Clock, label: "500+ horas de mentorias realizadas" },
  { icon: Star, label: "Nota 4.9/5 no Google" },
  { icon: Award, label: "98% de satisfação dos clientes" },
];

const MentoriaMentor = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">
            Quem Vai Te Guiar Nessa Jornada
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Foto do mentor */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 md:w-64 lg:w-80 sm:h-56 md:h-64 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-primary/20 shadow-strong">
                <img 
                  src={mentorPhoto} 
                  alt="Eriksen - Consultor Empresarial e Mentor de Negócios" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* Bio */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">Eriksen</h3>
              <p className="text-secondary font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Consultor Empresarial e Mentor de Negócios</p>
              
              <div className="space-y-3 sm:space-y-4 text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                <p>
                  Com mais de <strong className="text-foreground">10 anos de experiência</strong> em consultoria empresarial, Eriksen já ajudou mais de <strong className="text-foreground">100 empreendedoras em Brasília</strong> a estruturar e escalar seus negócios.
                </p>
                <p>
                  Especialista em gestão 360°, ele combina conhecimento técnico com uma abordagem humanizada, focando não apenas nos números, mas no <strong className="text-foreground">desenvolvimento completo do empreendedor</strong>.
                </p>
                <p className="hidden sm:block">
                  Certificado em gestão empresarial, palestrante e professor de cursos de gestão, Eriksen é conhecido por transformar negócios desorganizados em empresas lucrativas e estruturadas.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground mb-6 sm:mb-8 text-sm sm:text-base text-left">
                "Minha missão é provar que toda empreendedora pode ter um negócio próspero, organizado e que dá liberdade, não apenas trabalho."
              </blockquote>
              
              {/* Credenciais */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {credenciais.map((credencial, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 bg-background p-2 sm:p-3 rounded-lg">
                    <credencial.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{credencial.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaMentor;
