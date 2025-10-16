import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Persona InCasa",
      text: "Estou muito feliz com o desenvolvimento e crescimento pessoal e da minha empresa, as mentorias tem sido bem direcionais e com muitooooo conhecimento e direção. Gostei muito da didática e dinâmica e muito satisfeita com toda a entrega. Indicarei sempre!"
    },
    {
      name: "Edmais Açaí",
      text: "Recomendo fortemente os serviços da Consult Estratégias Consultoria Empresarial para empresas que buscam excelência em consultoria e resultados incríveis para seus negócios."
    },
    {
      name: "Mateus Silva",
      text: "Incrível a riqueza de detalhes sobre os treinamentos ministrados"
    },
    {
      name: "Davi Santos",
      text: "Ótima consultoria! Procurei a Consult Estratégias para me orientar a precificar e foi muito assertivo. Um ótimo trabalho!"
    },
    {
      name: "Vagner Lopes",
      text: "Excelente qualificação....super recomendo... material e equipamentos necessários para o ótimo desenvolvimento do curso.... palestrante muito bem qualificado!!!!!"
    },
    {
      name: "Auanny Gomes",
      text: "Fiz o curso de oratória com o Eriksen, o curso foi maravilhoso e com materiais muito completos. Aprendi muitas coisas e melhorei muito minha comunicação!"
    },
    {
      name: "Thais Karoline",
      text: "Atendimento excelente. Eriksen é um profissional muito prestativo, me tirou todas as dúvidas e ofereceu todo o suporte necessário com o MEI."
    },
    {
      name: "Shelem Ohana",
      text: "Consultoria nota mil. Um profissional super experiente. Ele responde às necessidades do cliente, identifica soluções e faz recomendações."
    },
    {
      name: "Giselly Pereira",
      text: "Excelente profissional, nos ajudou a organizar melhor nossas ideias e identificar problemas que estavam atrapalhando nosso desenvolvimento empresarial. Super Recomendo!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias de sucesso e transformação empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 relative"
            >
              <Quote className="w-8 h-8 text-secondary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-primary">
                {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
