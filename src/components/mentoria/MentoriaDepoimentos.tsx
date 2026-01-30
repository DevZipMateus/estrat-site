import { Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Persona InCasa",
    cargo: "Designer de Interiores",
    texto: "Depois da mentoria, consegui estruturar meu fluxo de caixa e aumentei meu lucro em 40% em apenas 2 meses. O Eriksen me ensinou a precificar corretamente e agora trabalho menos e ganho mais!",
  },
  {
    nome: "Davi Santos",
    cargo: "Empreendedor",
    texto: "A consultoria foi um divisor de águas. Finalmente consegui enxergar meu negócio de forma estratégica. O método de precificação valeu o investimento inteiro!",
  },
  {
    nome: "Auanny Gomes",
    cargo: "Consultora",
    texto: "O curso de oratória mudou minha forma de me comunicar com clientes. Consegui dobrar minhas vendas depois que aprendi a apresentar meu serviço com confiança!",
  },
  {
    nome: "Giselly Pereira",
    cargo: "Empresária",
    texto: "Profissional excepcional! Me ajudou a identificar gargalos que eu nem sabia que existiam. Hoje minha empresa é outra, muito mais organizada e lucrativa.",
  },
  {
    nome: "Mariana Costa",
    cargo: "Empreendedora",
    texto: "Em 90 dias, saí de uma empresa desorganizada para ter processos claros e uma equipe alinhada. O investimento se pagou no primeiro mês!",
  },
  {
    nome: "Fernanda Lima",
    cargo: "Dona de Salão de Beleza",
    texto: "Nunca imaginei que meu negócio pudesse ser tão organizado. Agora tenho tempo para minha família e minha empresa continua crescendo.",
  },
];

const metricas = [
  { valor: "87%", label: "das mentoradas aumentaram faturamento em 90 dias" },
  { valor: "35%", label: "crescimento médio no lucro" },
  { valor: "4.9⭐", label: "de satisfação" },
  { valor: "100+", label: "empresas transformadas em Brasília" },
];

const MentoriaDepoimentos = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-3 sm:mb-4">
            O Que Empreendedores Como Você Estão Dizendo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-12">
            Resultados reais de quem passou pela mentoria
          </p>
          
          {/* Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {metricas.map((metrica, index) => (
              <div key={index} className="bg-primary/5 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">{metrica.valor}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{metrica.label}</p>
              </div>
            ))}
          </div>
          
          {/* Depoimentos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {depoimentos.map((depoimento, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-soft border border-border"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 sm:mb-6 italic text-sm sm:text-base">"{depoimento.texto}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{depoimento.nome}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{depoimento.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Badge Google */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-muted px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary fill-secondary" />
              <span className="text-foreground font-medium text-sm sm:text-base">
                Avaliado com 4.9⭐ no Google por mais de 50 clientes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaDepoimentos;
