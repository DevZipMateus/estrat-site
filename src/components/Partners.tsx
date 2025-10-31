import partnerOtimizarte from "@/assets/partner-otimizarte.png";
import partnerEgestor from "@/assets/partner-egestor.png";
import partnerCertificacao from "@/assets/partner-certificacao-digital.png";

const Partners = () => {
  const partners = [
    { name: "Otimizarte", logo: partnerOtimizarte },
    { name: "Egestor", logo: partnerEgestor },
    { name: "Certificação Digital", logo: partnerCertificacao },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com os melhores parceiros para oferecer soluções completas e integradas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-sm flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
