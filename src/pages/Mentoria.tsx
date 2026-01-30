import Header from "@/components/Header";
import MentoriaHero from "@/components/mentoria/MentoriaHero";
import MentoriaProblema from "@/components/mentoria/MentoriaProblema";
import MentoriaSolucao from "@/components/mentoria/MentoriaSolucao";
import MentoriaParaQuem from "@/components/mentoria/MentoriaParaQuem";
import MentoriaModulos from "@/components/mentoria/MentoriaModulos";
import MentoriaFormato from "@/components/mentoria/MentoriaFormato";
import MentoriaPlanos from "@/components/mentoria/MentoriaPlanos";
import MentoriaBonus from "@/components/mentoria/MentoriaBonus";
import MentoriaGarantia from "@/components/mentoria/MentoriaGarantia";
import MentoriaMentor from "@/components/mentoria/MentoriaMentor";
import MentoriaDepoimentos from "@/components/mentoria/MentoriaDepoimentos";
import MentoriaFAQ from "@/components/mentoria/MentoriaFAQ";
import MentoriaCTAFinal from "@/components/mentoria/MentoriaCTAFinal";
import MentoriaFooter from "@/components/mentoria/MentoriaFooter";
import MentoriaUrgencyBar from "@/components/mentoria/MentoriaUrgencyBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Mentoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MentoriaUrgencyBar />
      <MentoriaHero />
      <MentoriaProblema />
      <MentoriaSolucao />
      <MentoriaParaQuem />
      <MentoriaModulos />
      <MentoriaFormato />
      <MentoriaPlanos />
      <MentoriaBonus />
      <MentoriaGarantia />
      <MentoriaMentor />
      <MentoriaDepoimentos />
      <MentoriaFAQ />
      <MentoriaCTAFinal />
      <MentoriaFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Mentoria;
