import { useState } from "react";
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
import WebinarRegistrationForm from "@/components/mentoria/WebinarRegistrationForm";
import WebinarConfirmation from "@/components/mentoria/WebinarConfirmation";
import CheckoutForm from "@/components/mentoria/CheckoutForm";

type ViewState = "landing" | "webinar-confirmation" | "checkout";

interface WebinarData {
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
}

const Mentoria = () => {
  const [currentView, setCurrentView] = useState<ViewState>("landing");
  const [webinarData, setWebinarData] = useState<WebinarData | null>(null);

  const handleWebinarSuccess = (data: WebinarData) => {
    setWebinarData(data);
    setCurrentView("webinar-confirmation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckoutSuccess = (data: any) => {
    // Handle checkout success - could redirect to thank you page
    const mensagem = encodeURIComponent(
      `Olá! Acabei de me inscrever no ${data.plano} da Mentoria. Meu nome é ${data.nome} e meu email é ${data.email}. Aguardo contato!`
    );
    window.open(`https://wa.me/5561999840109?text=${mensagem}`, '_blank');
  };

  if (currentView === "webinar-confirmation" && webinarData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <WebinarConfirmation
          nome={webinarData.nome.split(" ")[0]}
          onClose={() => setCurrentView("landing")}
        />
      </div>
    );
  }

  if (currentView === "checkout") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <CheckoutForm
          onBack={() => setCurrentView("landing")}
          onSuccess={handleCheckoutSuccess}
        />
      </div>
    );
  }

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
      <WebinarRegistrationForm onSuccess={handleWebinarSuccess} />
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
