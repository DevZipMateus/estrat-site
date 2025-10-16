import { 
  Building2, 
  Users, 
  Presentation, 
  TrendingUp, 
  Workflow, 
  FileCheck, 
  Heart, 
  Monitor,
  GraduationCap 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Consultoria empresarial 360°",
      description: "Abordagem completa desde a estrutura financeira até processos operacionais, com foco em pequenas e médias empresas."
    },
    {
      icon: Users,
      title: "Assessoria administrativa online",
      description: "Suporte administrativo remoto personalizado para otimizar sua gestão empresarial."
    },
    {
      icon: Presentation,
      title: "Palestras e treinamentos comportamentais",
      description: "Desenvolvimento de liderança e habilidades comportamentais para sua equipe."
    },
    {
      icon: TrendingUp,
      title: "Estudo mercadológico",
      description: "Análise de mercado aprofundada para embasar decisões estratégicas."
    },
    {
      icon: Workflow,
      title: "Desenho de processos",
      description: "Mapeamento e otimização de processos empresariais para maior eficiência."
    },
    {
      icon: FileCheck,
      title: "Certificados digitais",
      description: "Emissão e gestão de certificados digitais para sua empresa."
    },
    {
      icon: Heart,
      title: "Planos de saúde",
      description: "Soluções em benefícios para colaboradores e gestão de planos de saúde."
    },
    {
      icon: Monitor,
      title: "Sistema de gestão online",
      description: "Implementação de sistemas integrados para gestão empresarial eficiente."
    },
    {
      icon: GraduationCap,
      title: "Mentorias",
      description: "Acompanhamento personalizado com mentores especializados em gestão empresarial."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas e personalizadas para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-medium transition-all duration-300 border-2 hover:border-secondary/30 group"
              >
                <div className="w-14 h-14 bg-secondary-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
