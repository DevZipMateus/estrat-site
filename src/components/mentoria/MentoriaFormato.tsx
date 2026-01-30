import { Video, User, FileText, MessageCircle, BookOpen } from "lucide-react";

const formatos = [
  {
    icon: Video,
    titulo: "SESSÕES EM GRUPO AO VIVO",
    descricao: [
      "4 encontros mensais (1 por semana)",
      "Conteúdo novo + Tira-dúvidas + Cases práticos",
      "Networking com outras empreendedoras",
      "Gravações disponíveis na plataforma",
    ],
  },
  {
    icon: User,
    titulo: "SESSÕES INDIVIDUAIS",
    descricao: [
      "Atendimento 1:1 com o mentor (planos intermediário e premium)",
      "Análise personalizada do seu negócio",
      "Estratégias customizadas para sua realidade",
      "Acompanhamento de resultados",
    ],
  },
  {
    icon: FileText,
    titulo: "MATERIAL DE APOIO COMPLETO",
    descricao: [
      "Planilhas de gestão financeira",
      "Templates de processos",
      "Checklists de implementação",
      "Ferramentas de planejamento estratégico",
      "Biblioteca de conteúdos complementares",
    ],
  },
  {
    icon: MessageCircle,
    titulo: "GRUPO EXCLUSIVO NO WHATSAPP",
    descricao: [
      "Suporte contínuo durante os 90 dias",
      "Networking com outras mentoradas",
      "Compartilhamento de experiências e vitórias",
      "Acesso direto ao time de consultoria",
    ],
  },
  {
    icon: BookOpen,
    titulo: "PLATAFORMA DE MEMBROS",
    descricao: [
      "Acesso vitalício aos materiais",
      "Aulas gravadas organizadas por módulo",
      "Área de recursos e downloads",
      "Acompanhamento de progresso",
    ],
  },
];

const MentoriaFormato = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-3 sm:mb-4">
            Como Funciona a Mentoria
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            3 meses de imersão com acompanhamento próximo, ferramentas práticas e uma comunidade de empreendedoras que, assim como você, querem crescer de forma estruturada.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {formatos.map((formato, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-soft border border-border"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <formato.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">{formato.titulo}</h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {formato.descricao.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm">
                      <span className="text-secondary mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaFormato;
