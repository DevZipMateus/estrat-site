import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const isMentoriaPage = location.pathname === "/mentoria";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-soft">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src={logo} alt="CONSULT ESTRATEGIAS Logo" className="h-28 w-auto" />
            </Link>
            <span className="font-bold text-lg text-primary-foreground hidden md:block">
              CONSULT ESTRATÉGIAS
            </span>
          </div>

          {isMentoriaPage ? (
            /* Menu para página da Mentoria */
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
              <Button 
                onClick={() => {
                  const element = document.getElementById("planos");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Ver Planos
              </Button>
            </div>
          ) : (
            /* Menu para página principal */
            <>
              <ul className="hidden md:flex items-center gap-8">
                <li>
                  <button onClick={() => scrollToSection("inicio")} className="text-primary-foreground hover:text-secondary transition-colors font-medium">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("sobre")} className="text-primary-foreground hover:text-secondary transition-colors font-medium">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("servicos")} className="text-primary-foreground hover:text-secondary transition-colors font-medium">
                    Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("depoimentos")} className="text-primary-foreground hover:text-secondary transition-colors font-medium">
                    Depoimentos
                  </button>
                </li>
                <li>
                  <Link to="/mentoria" className="text-secondary hover:text-secondary/80 transition-colors font-bold">
                    Mentoria
                  </Link>
                </li>
                <li>
                  <Button onClick={() => scrollToSection("contato")} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Contato
                  </Button>
                </li>
              </ul>

              <Button className="md:hidden bg-secondary hover:bg-secondary/90" size="sm" onClick={() => scrollToSection("contato")}>
                Contato
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;