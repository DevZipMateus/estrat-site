import { Target, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa consultoria empresarial oferece uma abordagem abrangente e eficaz, utilizando a metodologia 360°. Seja você um empreendedor iniciante, uma empresa consolidada ou alguém que planeja expandir, nossa expertise cobre desde a concepção da ideia até a inovação nos processos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser a principal parceira de negócios para empresas em busca de excelência, reconhecida pela transformação positiva que proporcionamos, impulsionando organizações a atingirem seu máximo potencial.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
            <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empoderar empreendedores(as), guiando-os através de uma consultoria abrangente que promove eficiência, inovação e crescimento contínuo por meio de estratégias e soluções personalizadas.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Valores</h3>
            <ul className="text-left text-muted-foreground space-y-2 text-sm">
              <li>• <strong>Excelência:</strong> Elevando padrões</li>
              <li>• <strong>Integridade:</strong> Transparência e ética</li>
              <li>• <strong>Inovação:</strong> Soluções criativas</li>
              <li>• <strong>Parceria:</strong> Colaboração ativa</li>
              <li>• <strong>Resultados sustentáveis:</strong> Crescimento a longo prazo</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
