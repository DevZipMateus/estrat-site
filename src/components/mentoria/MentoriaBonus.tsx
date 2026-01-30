import { Gift } from "lucide-react";

const bonus = [
  {
    numero: 1,
    titulo: "Kit Completo de Planilhas de Gestão",
    descricao: "15+ planilhas profissionais prontas para uso: controle financeiro, fluxo de caixa, precificação, KPIs",
    valor: "R$ 297",
  },
  {
    numero: 2,
    titulo: "Templates de Processos Empresariais",
    descricao: "Modelos editáveis de SOPs e processos, checklists de operação e qualidade",
    valor: "R$ 197",
  },
  {
    numero: 3,
    titulo: "Masterclass \"Vendas para Empreendedoras\"",
    descricao: "Aula gravada de 2h sobre técnicas de vendas, scripts de atendimento e fechamento",
    valor: "R$ 197",
  },
  {
    numero: 4,
    titulo: "Guia de Ferramentas Digitais Gratuitas",
    descricao: "Lista curada de 50+ ferramentas para gestão com tutoriais de configuração e uso",
    valor: "R$ 97",
  },
  {
    numero: 5,
    titulo: "Sessão de Planejamento 2025",
    descricao: "Workshop ao vivo de planejamento estratégico com método OKR simplificado",
    valor: "R$ 197",
  },
];

const MentoriaBonus = () => {
  const valorTotal = bonus.reduce((acc, b) => {
    const valor = parseInt(b.valor.replace(/[^\d]/g, ""));
    return acc + valor;
  }, 0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-full bg-secondary/10 mb-4 sm:mb-6">
              <Gift className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-secondary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Bônus Exclusivos Para Quem Se Inscrever Hoje
            </h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            {bonus.map((item) => (
              <div 
                key={item.numero}
                className="bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft border border-border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm sm:text-base">#{item.numero}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{item.titulo}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.descricao}</p>
                </div>
                <div className="flex-shrink-0 text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                  <p className="text-xs sm:text-sm text-muted-foreground line-through">{item.valor}</p>
                  <p className="text-secondary font-bold text-sm sm:text-base">GRÁTIS</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="bg-primary text-primary-foreground rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg mb-1 sm:mb-2">VALOR TOTAL DOS BÔNUS:</p>
            <p className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">R$ {valorTotal.toLocaleString("pt-BR")}</p>
            <p className="text-lg sm:text-xl md:text-2xl">VOCÊ GANHA TUDO ISSO DE GRAÇA! 🎁</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaBonus;
