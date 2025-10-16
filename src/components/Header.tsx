import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CONSULT ESTRATEGIAS Logo" className="h-12 w-auto" />
            <span className="font-bold text-lg text-primary hidden md:block">
              CONSULT ESTRATÉGIAS
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Depoimentos
              </button>
            </li>
            <li>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Contato
              </Button>
            </li>
          </ul>

          <Button
            className="md:hidden bg-secondary hover:bg-secondary/90"
            size="sm"
            onClick={() => scrollToSection("contato")}
          >
            Contato
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
