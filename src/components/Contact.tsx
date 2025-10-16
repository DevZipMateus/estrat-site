import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Fale conosco</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Telefone</p>
                <a 
                  href="https://wa.me/5561999840109" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (61) 99984-0109
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">E-mail</p>
                <a 
                  href="mailto:consultsolucoesgestao@gmail.com" 
                  className="text-muted-foreground hover:text-secondary transition-colors break-all"
                >
                  consultsolucoesgestao@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Endereço</p>
                <p className="text-muted-foreground">
                  QNN 26 CONJUNTO A LOTE 53
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Horário de funcionamento</p>
                <p className="text-muted-foreground">
                  Segunda a Sexta das 8h às 18h<br />
                  Sábados de 8h às 12h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Redes sociais</p>
                <a 
                  href="https://instagram.com/consult.estrategias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @consult.estratégias
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-6">Pronto para transformar seu negócio?</h3>
            <p className="mb-8 text-white/90 leading-relaxed">
              Entre em contato conosco pelo WhatsApp e descubra como podemos ajudar sua empresa a alcançar resultados extraordinários.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              asChild
            >
              <a href="https://wa.me/5561999840109" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80 mb-4">Avalie nossa empresa no Google:</p>
              <Button 
                variant="outline" 
                className="w-full bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary backdrop-blur-sm"
                asChild
              >
                <a href="https://share.google/bhT0WtEBgVGKFJo2t" target="_blank" rel="noopener noreferrer">
                  Avaliar no Google
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
