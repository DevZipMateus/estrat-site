import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, MessageCircle, Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface WebinarConfirmationProps {
  nome: string;
  onClose: () => void;
}

const WebinarConfirmation = ({ nome, onClose }: WebinarConfirmationProps) => {
  const whatsappGroupLink = "https://wa.me/5561999840109?text=" + encodeURIComponent("Olá! Me inscrevi no webinar gratuito e gostaria de entrar no grupo exclusivo!");

  const addToGoogleCalendar = () => {
    const eventTitle = encodeURIComponent("Webinar Gratuito - Consult Estratégias");
    const eventDetails = encodeURIComponent("Webinar gratuito: Transforme Seu Negócio em 90 Dias");
    const eventLocation = encodeURIComponent("Online - Link será enviado por e-mail");
    // Date to be defined - using placeholder
    const startDate = "20250301T190000";
    const endDate = "20250301T203000";
    
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${eventLocation}&dates=${startDate}/${endDate}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-strong text-center">
            {/* Success icon */}
            <div className="w-14 h-14 sm:w-16 md:w-20 sm:h-16 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-secondary" />
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Parabéns, {nome}! 🎉
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Sua inscrição no webinar gratuito foi confirmada com sucesso!
            </p>

            {/* Event details */}
            <div className="bg-muted rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Detalhes do Webinar</h2>
              <div className="space-y-2 sm:space-y-3 text-left">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">Data a definir</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">19h (horário de Brasília)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 sm:space-y-4">
              <Button
                onClick={addToGoogleCalendar}
                variant="outline"
                className="w-full h-10 sm:h-12 text-sm sm:text-base"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Adicionar ao Google Agenda
              </Button>

              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-10 sm:h-12 text-sm sm:text-base"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Entrar no Grupo Exclusivo do WhatsApp</span>
                  <span className="sm:hidden">Entrar no Grupo do WhatsApp</span>
                </Button>
              </a>
            </div>

            {/* Welcome video placeholder */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Assista ao Vídeo de Boas-Vindas
              </h3>
              <div className="aspect-video bg-muted rounded-lg sm:rounded-xl flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Play className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary-foreground ml-0.5 sm:ml-1" />
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">Clique para assistir</p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-left">
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-center text-sm sm:text-base">
                Próximos Passos
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Verifique seu e-mail (inclusive a caixa de spam) para receber o link de acesso</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Adicione o evento ao seu calendário para não esquecer</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Entre no grupo do WhatsApp para receber lembretes e conteúdos exclusivos</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Prepare suas dúvidas - haverá tempo para perguntas ao vivo!</span>
                </li>
              </ul>
            </div>

            {/* Back button */}
            <div className="mt-6 sm:mt-8">
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-muted-foreground text-sm sm:text-base"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para a página
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarConfirmation;
