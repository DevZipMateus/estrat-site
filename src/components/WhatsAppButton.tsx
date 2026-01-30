import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5561999840109"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-lg"
      />
    </a>
  );
};

export default WhatsAppButton;
