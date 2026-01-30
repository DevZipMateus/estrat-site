import { Award, Clock, Users, Star } from "lucide-react";

const credenciais = [
  { icon: Users, label: "Mais de 100 empresas consultadas" },
  { icon: Clock, label: "500+ horas de mentorias realizadas" },
  { icon: Star, label: "Nota 4.9/5 no Google" },
  { icon: Award, label: "98% de satisfação dos clientes" },
];

const MentoriaMentor = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Quem Vai Te Guiar Nessa Jornada
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Foto placeholder */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/20 shadow-strong">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Foto do Mentor</p>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">Eriksen</h3>
              <p className="text-secondary font-semibold mb-6">Consultor Empresarial e Mentor de Negócios</p>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Com mais de <strong className="text-foreground">10 anos de experiência</strong> em consultoria empresarial, Eriksen já ajudou mais de <strong className="text-foreground">100 empreendedoras em Brasília</strong> a estruturar e escalar seus negócios.
                </p>
                <p>
                  Especialista em gestão 360°, ele combina conhecimento técnico com uma abordagem humanizada, focando não apenas nos números, mas no <strong className="text-foreground">desenvolvimento completo do empreendedor</strong>.
                </p>
                <p>
                  Certificado em gestão empresarial, palestrante e professor de cursos de gestão, Eriksen é conhecido por transformar negócios desorganizados em empresas lucrativas e estruturadas.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground mb-8">
                "Minha missão é provar que toda empreendedora pode ter um negócio próspero, organizado e que dá liberdade, não apenas trabalho."
              </blockquote>
              
              {/* Credenciais */}
              <div className="grid grid-cols-2 gap-4">
                {credenciais.map((credencial, index) => (
                  <div key={index} className="flex items-center gap-3 bg-background p-3 rounded-lg">
                    <credencial.icon className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-foreground">{credencial.label}</span>
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
