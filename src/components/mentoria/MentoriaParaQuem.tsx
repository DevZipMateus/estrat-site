import { CheckCircle, XCircle } from "lucide-react";

const paraQuem = [
  "É empreendedora iniciante ou está há menos de 5 anos no mercado",
  "Fatura entre R$ 5 mil e R$ 50 mil por mês",
  "Quer estruturar seu negócio de forma profissional",
  "Busca crescer de forma sustentável e organizada",
];

const naoParaQuem = [
  "Busca fórmulas mágicas ou resultados sem esforço",
  "Não está disposta a implementar as estratégias ensinadas",
  "Quer apenas teoria sem aplicação prática",
  "Não tem tempo mínimo para dedicar ao seu negócio",
];

const MentoriaParaQuem = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Para quem é */}
            <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-primary/20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Essa Mentoria é Para Você Se...
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {paraQuem.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm sm:text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Para quem NÃO é */}
            <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-destructive/20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Essa Mentoria NÃO é Para Você Se...
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {naoParaQuem.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm sm:text-base md:text-lg">{item}</p>
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

export default MentoriaParaQuem;
