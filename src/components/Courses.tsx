import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Courses = () => {
  return (
    <section id="cursos" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cursos de Capacitação
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aprimore seus conhecimentos com nossos cursos especializados em gestão empresarial, 
            contabilidade e tecnologia para negócios.
          </p>
          
          <Button 
            size="lg"
            asChild
            className="text-lg px-8 py-6 h-auto"
          >
            <a 
              href="https://go.hotmart.com/D102666601D" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Veja nossos cursos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
