import { XCircle } from "lucide-react";

const problemas = [
  "Seu negócio não tem processos definidos e você vive \"apagando incêndios\"",
  "Não consegue precificar corretamente e sente que trabalha muito, mas lucra pouco",
  "Tem dificuldade em delegar porque \"só você sabe fazer\"",
  "Seu faturamento é irregular e você não sabe prever quanto vai entrar no próximo mês",
  "Sente que trabalha 12h por dia, mas a empresa não cresce",
  "Não tem controle financeiro e mistura dinheiro pessoal com empresarial",
  "Quer crescer, mas não sabe por onde começar a estruturar o negócio",
];

const MentoriaProblema = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Você Se Reconhece em Alguma Dessas Situações?
          </h2>
          
          <div className="grid gap-4 md:gap-6 text-left max-w-3xl mx-auto">
            {problemas.map((problema, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-background p-5 rounded-lg shadow-soft border border-destructive/20"
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-lg">{problema}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Se você respondeu SIM para pelo menos 2 dessas situações, essa mentoria foi feita para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaProblema;
