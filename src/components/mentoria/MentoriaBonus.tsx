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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
              <Gift className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bônus Exclusivos Para Quem Se Inscrever Hoje
            </h2>
          </div>
          
          <div className="space-y-4 mb-12">
            {bonus.map((item) => (
              <div 
                key={item.numero}
                className="bg-background rounded-xl p-6 shadow-soft border border-border flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">#{item.numero}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.titulo}</h3>
                  <p className="text-muted-foreground text-sm">{item.descricao}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm text-muted-foreground line-through">{item.valor}</p>
                  <p className="text-secondary font-bold">GRÁTIS</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
            <p className="text-lg mb-2">VALOR TOTAL DOS BÔNUS:</p>
            <p className="text-4xl font-bold mb-4">R$ {valorTotal.toLocaleString("pt-BR")}</p>
            <p className="text-2xl">VOCÊ GANHA TUDO ISSO DE GRAÇA! 🎁</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaBonus;
