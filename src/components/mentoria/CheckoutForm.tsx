import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

const planos = [
  {
    id: "essencial",
    nome: "PLANO ESSENCIAL",
    preco: 399.9,
    precoFormatado: "R$ 399,90",
    parcela: "ou 12x de R$ 39,99",
    bonus: ["Material de apoio completo", "Grupo exclusivo WhatsApp"],
  },
  {
    id: "crescimento",
    nome: "PLANO CRESCIMENTO",
    preco: 599.9,
    precoFormatado: "R$ 599,90",
    parcela: "ou 12x de R$ 59,99",
    destaque: true,
    badge: "⭐ MAIS ESCOLHIDO",
    bonus: [
      "Tudo do Essencial",
      "2 sessões individuais (1:1)",
      "Análise personalizada",
    ],
  },
  {
    id: "transformacao",
    nome: "PLANO TRANSFORMAÇÃO",
    preco: 999.9,
    precoFormatado: "R$ 999,90",
    parcela: "ou 12x de R$ 99,99",
    badge: "RESULTADO MÁXIMO",
    bonus: [
      "Tudo do Crescimento",
      "3 sessões individuais (1:1)",
      "Acesso VIP ao mentor",
    ],
  },
];

const checkoutSchema = z.object({
  plano: z.string().min(1, { message: "Selecione um plano" }),
  nome: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  telefone: z
    .string()
    .trim()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(15, { message: "Telefone deve ter no máximo 15 dígitos" }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  initialPlan?: string;
  onBack: () => void;
  onSuccess: (data: CheckoutFormData & { planoNome: string }) => void;
}

const CheckoutForm = ({ initialPlan = "crescimento", onBack, onSuccess }: CheckoutFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      plano: initialPlan,
      nome: "",
      telefone: "",
    },
  });

  const selectedPlanId = form.watch("plano");
  const selectedPlan = planos.find((p) => p.id === selectedPlanId);

  const handleSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    
    const planoNome = selectedPlan?.nome || "Mentoria";
    
    // Redirecionar para WhatsApp com mensagem
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no ${planoNome} da Mentoria Crescimento Estratégico 90 Dias.\n\nMeu nome é ${data.nome} e meu telefone é ${data.telefone}.\n\nGostaria de mais informações, por favor!`
    );
    
    window.open(`https://wa.me/5561999840109?text=${mensagem}`, '_blank');
    
    setIsSubmitting(false);
    onSuccess({ ...data, planoNome });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para os planos
          </Button>

          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Tenho Interesse na Mentoria
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Preencha seus dados e entraremos em contato pelo WhatsApp com todas as informações
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {/* Plan selection */}
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-medium">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                  1. Escolha o plano de interesse
                </h2>
                <FormField
                  control={form.control}
                  name="plano"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          {planos.map((plano) => (
                            <div
                              key={plano.id}
                              className={`relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 cursor-pointer transition-all ${
                                field.value === plano.id
                                  ? "border-secondary bg-secondary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                              onClick={() => field.onChange(plano.id)}
                            >
                              {plano.badge && (
                                <div
                                  className={`absolute -top-2 sm:-top-3 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
                                    plano.destaque
                                      ? "bg-secondary text-secondary-foreground"
                                      : "bg-primary text-primary-foreground"
                                  }`}
                                >
                                  {plano.badge}
                                </div>
                              )}
                              <RadioGroupItem
                                value={plano.id}
                                id={plano.id}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <Label
                                  htmlFor={plano.id}
                                  className="font-bold text-foreground cursor-pointer text-sm sm:text-base"
                                >
                                  {plano.nome}
                                </Label>
                                <p className="text-base sm:text-lg font-bold text-primary mt-1">
                                  {plano.precoFormatado}{" "}
                                  <span className="text-xs sm:text-sm font-normal text-muted-foreground">
                                    {plano.parcela}
                                  </span>
                                </p>
                                <ul className="mt-2 space-y-1">
                                  {plano.bonus.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Personal data - simplified */}
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-medium">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                  2. Seus dados
                </h2>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} className="h-10 sm:h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Telefone/WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(61) 99999-9999" {...field} className="h-10 sm:h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Info message */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg sm:rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">
                      Próximos passos
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Após enviar seus dados, você será redirecionado(a) para o WhatsApp onde nossa equipe entrará em contato com todas as informações sobre a mentoria, formas de pagamento e próximas turmas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-auto min-h-12 sm:min-h-14 py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-md hover:shadow-strong transition-all duration-200 text-sm sm:text-base md:text-lg font-extrabold group"
              >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <span className="flex items-center gap-2">
                  GARANTIR MINHA VAGA
                </span>
              )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                🔒 Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
