import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowRight, CheckCircle, Users, Clock, Calendar } from "lucide-react";

const webinarFormSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  whatsapp: z
    .string()
    .trim()
    .min(10, { message: "WhatsApp deve ter pelo menos 10 dígitos" })
    .max(15, { message: "WhatsApp deve ter no máximo 15 dígitos" })
    .regex(/^[0-9]+$/, { message: "WhatsApp deve conter apenas números" }),
  cidade: z
    .string()
    .trim()
    .min(2, { message: "Cidade deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Cidade deve ter no máximo 100 caracteres" }),
});

type WebinarFormData = z.infer<typeof webinarFormSchema>;

interface WebinarRegistrationFormProps {
  onSuccess: (data: WebinarFormData) => void;
}

const WebinarRegistrationForm = ({ onSuccess }: WebinarRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WebinarFormData>({
    resolver: zodResolver(webinarFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      cidade: "Brasília",
    },
  });

  const handleSubmit = async (data: WebinarFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onSuccess(data);
  };

  return (
    <section id="webinar-form" className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="text-primary-foreground order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                Inscreva-se no Webinar Gratuito
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 text-center lg:text-left">
                Descubra os 3 pilares que toda empreendedora precisa dominar para ter um negócio estruturado, lucrativo e escalável.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Data a definir</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Aula ao vivo e exclusiva</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">19h (horário de Brasília)</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Duração aproximada: 1h30</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">100% online e gratuito</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Vagas limitadas</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-primary-foreground/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                  <span>Certificado de participação</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                  <span>Material exclusivo</span>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-strong order-1 lg:order-2">
              <h3 className="text-lg sm:text-xl font-bold text-foreground text-center mb-4 sm:mb-6">
                Preencha seus dados para participar
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3 sm:space-y-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Nome completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            className="h-10 sm:h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            {...field}
                            className="h-10 sm:h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">WhatsApp</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="61999999999"
                            {...field}
                            className="h-10 sm:h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Cidade</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Sua cidade"
                            {...field}
                            className="h-10 sm:h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-auto min-h-12 sm:min-h-14 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold group mt-2 sm:mt-4"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <span className="flex items-center justify-center gap-2 text-center leading-tight">
                        <span className="hidden md:inline">GARANTIR MINHA VAGA NO WEBINAR GRATUITO</span>
                        <span className="hidden sm:inline md:hidden">GARANTIR MINHA VAGA GRATUITA</span>
                        <span className="sm:hidden">GARANTIR MINHA VAGA</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-3 sm:mt-4">
                    🔒 Seus dados estão seguros. Não enviamos spam.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarRegistrationForm;
