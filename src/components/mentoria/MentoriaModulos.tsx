import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modulos = [
  {
    titulo: "MÓDULO 1: FUNDAMENTOS DA GESTÃO EMPRESARIAL",
    topicos: [
      "Como estruturar seu modelo de negócio de forma clara e lucrativa",
      "Definição de propósito, missão e valores que guiam decisões estratégicas",
      "Análise SWOT do seu negócio atual",
      "Identificação de oportunidades de crescimento",
    ],
  },
  {
    titulo: "MÓDULO 2: GESTÃO FINANCEIRA INTELIGENTE",
    topicos: [
      "Sistema de controle financeiro que você vai usar todos os dias",
      "Método de precificação que garante lucro real",
      "Separação de finanças pessoais e empresariais",
      "Projeção de fluxo de caixa e planejamento de investimentos",
    ],
  },
  {
    titulo: "MÓDULO 3: PROCESSOS E OPERAÇÕES",
    topicos: [
      "Mapeamento dos processos críticos do seu negócio",
      "Criação de SOPs (procedimentos operacionais padrão)",
      "Sistema de gestão de tempo e produtividade",
      "Como delegar sem perder qualidade",
    ],
  },
  {
    titulo: "MÓDULO 4: ESTRATÉGIAS DE CRESCIMENTO",
    topicos: [
      "Plano de marketing e vendas estruturado",
      "Funil de vendas e estratégias de conversão",
      "Como atrair e reter clientes ideais",
      "Diferenciação competitiva no mercado de Brasília",
    ],
  },
  {
    titulo: "MÓDULO 5: LIDERANÇA E MINDSET EMPREENDEDOR",
    topicos: [
      "Desenvolvimento de habilidades de liderança",
      "Gestão de equipe e cultura organizacional",
      "Tomada de decisão estratégica",
    ],
  },
  {
    titulo: "MÓDULO 6: PLANO DE EXPANSÃO SUSTENTÁVEL",
    topicos: [
      "Criação do seu plano de crescimento personalizado",
      "Indicadores-chave de performance (KPIs)",
      "Estratégias de escala sem perder a essência",
      "Próximos passos para os próximos 12 meses",
    ],
  },
];

const MentoriaModulos = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-3 sm:mb-4">
            O Que Você Vai Dominar nos Próximos 90 Dias
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-12">
            Conteúdo completo para transformar sua gestão empresarial
          </p>
          
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {modulos.map((modulo, index) => (
              <AccordionItem 
                key={index} 
                value={`modulo-${index}`}
                className="bg-card rounded-lg sm:rounded-xl border border-border shadow-soft px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 sm:py-6">
                  <span className="text-sm sm:text-base md:text-lg pr-2">{modulo.titulo}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {modulo.topicos.map((topico, topicoIndex) => (
                      <li key={topicoIndex} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                        <span className="text-secondary mt-0.5">→</span>
                        <span>{topico}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MentoriaModulos;
