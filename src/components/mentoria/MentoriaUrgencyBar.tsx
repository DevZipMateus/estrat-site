import { Clock, Users } from "lucide-react";

const MentoriaUrgencyBar = () => {
  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-secondary text-secondary-foreground py-2 sm:py-3 px-4 text-center">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-xs sm:text-sm md:text-base font-medium">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Últimas vagas disponíveis</span>
        </div>
        <span className="hidden sm:inline">|</span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Inscrições encerram em breve</span>
        </div>
      </div>
    </div>
  );
};

export default MentoriaUrgencyBar;
