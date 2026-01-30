import { Clock, Users } from "lucide-react";

const MentoriaUrgencyBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-3 px-4 text-center mt-20">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-medium">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Últimas vagas disponíveis</span>
        </div>
        <span className="hidden md:inline">|</span>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>Inscrições encerram em breve</span>
        </div>
      </div>
    </div>
  );
};

export default MentoriaUrgencyBar;
