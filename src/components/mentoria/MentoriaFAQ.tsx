import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    pergunta: "A mentoria é presencial ou online?",
    resposta: "100% online! Todas as sessões são realizadas via Zoom, então você pode participar de qualquer lugar. As aulas ficam gravadas caso você não possa assistir ao vivo.",
  },
  {
    pergunta: "Preciso ter conhecimento prévio em gestão?",
    resposta: "Não! A mentoria foi desenvolvida justamente para empreendedoras que estão começando ou que nunca tiveram formação em gestão empresarial. Vamos do básico ao avançado.",
  },
  {
    pergunta: "Quanto tempo por semana preciso dedicar?",
    resposta: "Recomendamos de 2 a 3 horas semanais: 1h para a sessão ao vivo + 1-2h para implementar as estratégias no seu negócio. Quanto mais você se dedicar, melhores os resultados!",
  },
  {
    pergunta: "E se eu perder uma aula ao vivo?",
    resposta: "Todas as sessões ficam gravadas e disponíveis na plataforma por tempo indeterminado. Você pode assistir quando quiser!",
  },
  {
    pergunta: "Funciona para qualquer tipo de negócio?",
    resposta: "Sim! Os princípios de gestão que ensinamos se aplicam a qualquer segmento: comércio, serviços, indústria, negócios digitais, etc. Adaptamos as estratégias para sua realidade.",
  },
  {
    pergunta: "Posso parcelar o investimento?",
    resposta: "Sim! Você pode parcelar em até 12x no cartão de crédito sem juros.",
  },
  {
    pergunta: "Como funciona a garantia de 7 dias?",
    resposta: "Você pode participar da primeira sessão e, se não gostar, basta solicitar o reembolso em até 7 dias. Devolvemos 100% do valor, sem perguntas.",
  },
  {
    pergunta: "Vou ter acesso ao mentor?",
    resposta: "Sim! Todos os planos incluem as sessões em grupo com o Eriksen. Nos planos Crescimento e Transformação, você também tem sessões individuais 1:1.",
  },
  {
    pergunta: "Qual a diferença entre os planos?",
    resposta: "A diferença está no número de sessões individuais (1:1). O plano Essencial é focado em grupo, o Crescimento tem 2 sessões individuais, e o Transformação tem 3 sessões individuais para acompanhamento mais próximo.",
  },
  {
    pergunta: "Quando começa a próxima turma?",
    resposta: "A próxima turma inicia em Março. As vagas são limitadas para garantir qualidade no atendimento, então recomendamos garantir sua vaga o quanto antes.",
  },
  {
    pergunta: "Vou receber certificado?",
    resposta: "Sim! Ao concluir a mentoria, você recebe um certificado digital de participação.",
  },
  {
    pergunta: "E depois dos 90 dias, o que acontece?",
    resposta: "Você mantém acesso vitalício aos materiais, planilhas e gravações. Além disso, pode continuar no grupo do WhatsApp e fazer parte da nossa comunidade.",
  },
];

const MentoriaFAQ = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {perguntas.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-background rounded-xl border border-border shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  <span className="text-base">❓ {item.pergunta}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-muted-foreground">→ {item.resposta}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MentoriaFAQ;
