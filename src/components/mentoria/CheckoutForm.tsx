import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  CreditCard,
  Shield,
  Lock,
  Gift,
  ArrowLeft,
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
  cpfCnpj: z
    .string()
    .trim()
    .min(11, { message: "CPF/CNPJ inválido" })
    .max(18, { message: "CPF/CNPJ inválido" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  telefone: z
    .string()
    .trim()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(15, { message: "Telefone deve ter no máximo 15 dígitos" }),
  cep: z
    .string()
    .trim()
    .min(8, { message: "CEP inválido" })
    .max(9, { message: "CEP inválido" }),
  endereco: z
    .string()
    .trim()
    .min(5, { message: "Endereço deve ter pelo menos 5 caracteres" })
    .max(200, { message: "Endereço deve ter no máximo 200 caracteres" }),
  numero: z.string().trim().min(1, { message: "Número obrigatório" }),
  complemento: z.string().optional(),
  bairro: z
    .string()
    .trim()
    .min(2, { message: "Bairro obrigatório" })
    .max(100, { message: "Bairro deve ter no máximo 100 caracteres" }),
  cidade: z
    .string()
    .trim()
    .min(2, { message: "Cidade obrigatória" })
    .max(100, { message: "Cidade deve ter no máximo 100 caracteres" }),
  estado: z
    .string()
    .trim()
    .min(2, { message: "Estado obrigatório" })
    .max(2, { message: "Use a sigla do estado" }),
  formaPagamento: z.enum(["cartao", "pix"], {
    required_error: "Selecione a forma de pagamento",
  }),
  parcelas: z.string().optional(),
  termos: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos de uso",
  }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  initialPlan?: string;
  onBack: () => void;
  onSuccess: (data: CheckoutFormData) => void;
}

const CheckoutForm = ({ initialPlan = "crescimento", onBack, onSuccess }: CheckoutFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      plano: initialPlan,
      nome: "",
      cpfCnpj: "",
      email: "",
      telefone: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      formaPagamento: "cartao",
      parcelas: "12",
      termos: false,
    },
  });

  const selectedPlanId = form.watch("plano");
  const formaPagamento = form.watch("formaPagamento");
  const selectedPlan = planos.find((p) => p.id === selectedPlanId);

  const handleSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    onSuccess(data);
  };

  const getParcelaValue = (preco: number, parcelas: number) => {
    return (preco / parcelas).toFixed(2).replace(".", ",");
  };

  return (
    <section className="py-20 bg-muted min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para os planos
          </Button>

          <h1 className="text-3xl font-bold text-foreground text-center mb-8">
            Finalizar Inscrição
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left column - Form */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Plan selection */}
                  <div className="bg-card rounded-xl p-6 shadow-medium">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      1. Escolha seu plano
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
                                  className={`relative flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                    field.value === plano.id
                                      ? "border-secondary bg-secondary/5"
                                      : "border-border hover:border-primary/50"
                                  }`}
                                  onClick={() => field.onChange(plano.id)}
                                >
                                  {plano.badge && (
                                    <div
                                      className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold ${
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
                                      className="font-bold text-foreground cursor-pointer"
                                    >
                                      {plano.nome}
                                    </Label>
                                    <p className="text-lg font-bold text-primary mt-1">
                                      {plano.precoFormatado}{" "}
                                      <span className="text-sm font-normal text-muted-foreground">
                                        {plano.parcela}
                                      </span>
                                    </p>
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

                  {/* Personal data */}
                  <div className="bg-card rounded-xl p-6 shadow-medium">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      2. Dados pessoais
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cpfCnpj"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CPF/CNPJ</FormLabel>
                            <FormControl>
                              <Input placeholder="000.000.000-00" {...field} />
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
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="seu@email.com"
                                {...field}
                              />
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
                            <FormLabel>Telefone/WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(61) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cep"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CEP</FormLabel>
                            <FormControl>
                              <Input placeholder="00000-000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="endereco"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Endereço</FormLabel>
                            <FormControl>
                              <Input placeholder="Rua, Avenida..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="numero"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="complemento"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Complemento (opcional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Apto, Sala..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bairro"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bairro</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu bairro" {...field} />
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
                            <FormLabel>Cidade</FormLabel>
                            <FormControl>
                              <Input placeholder="Sua cidade" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="estado"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estado</FormLabel>
                            <FormControl>
                              <Input placeholder="DF" maxLength={2} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="bg-card rounded-xl p-6 shadow-medium">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      3. Forma de pagamento
                    </h2>

                    <FormField
                      control={form.control}
                      name="formaPagamento"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid md:grid-cols-2 gap-4"
                            >
                              <div
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  field.value === "cartao"
                                    ? "border-secondary bg-secondary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                                onClick={() => field.onChange("cartao")}
                              >
                                <RadioGroupItem value="cartao" id="cartao" />
                                <div className="flex items-center gap-3">
                                  <CreditCard className="w-6 h-6 text-primary" />
                                  <div>
                                    <Label
                                      htmlFor="cartao"
                                      className="font-semibold cursor-pointer"
                                    >
                                      Cartão de Crédito
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                      Até 12x sem juros
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  field.value === "pix"
                                    ? "border-secondary bg-secondary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                                onClick={() => field.onChange("pix")}
                              >
                                <RadioGroupItem value="pix" id="pix" />
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-bold">
                                    PIX
                                  </div>
                                  <div>
                                    <Label
                                      htmlFor="pix"
                                      className="font-semibold cursor-pointer"
                                    >
                                      PIX
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                      Pagamento à vista
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {formaPagamento === "cartao" && selectedPlan && (
                      <FormField
                        control={form.control}
                        name="parcelas"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Número de parcelas</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione as parcelas" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                  (num) => (
                                    <SelectItem key={num} value={String(num)}>
                                      {num}x de R${" "}
                                      {getParcelaValue(selectedPlan.preco, num)}{" "}
                                      {num === 1 ? "(à vista)" : "sem juros"}
                                    </SelectItem>
                                  )
                                )}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Pagamento processado com segurança. Seus dados estão
                      protegidos.
                    </p>
                  </div>

                  {/* Terms */}
                  <div className="bg-card rounded-xl p-6 shadow-medium">
                    <FormField
                      control={form.control}
                      name="termos"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="cursor-pointer">
                              Li e aceito os{" "}
                              <a
                                href="/termos"
                                target="_blank"
                                className="text-primary underline"
                              >
                                Termos de Uso
                              </a>{" "}
                              e a{" "}
                              <a
                                href="/privacidade"
                                target="_blank"
                                className="text-primary underline"
                              >
                                Política de Privacidade
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Right column - Order summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card rounded-xl p-6 shadow-medium sticky top-24">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Resumo do Pedido
                    </h2>

                    {selectedPlan && (
                      <>
                        <div className="border-b border-border pb-4 mb-4">
                          <p className="font-semibold text-foreground">
                            {selectedPlan.nome}
                          </p>
                          <p className="text-2xl font-bold text-primary mt-1">
                            {selectedPlan.precoFormatado}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {selectedPlan.parcela}
                          </p>
                        </div>

                        <div className="space-y-3 mb-6">
                          <p className="font-semibold text-foreground flex items-center gap-2">
                            <Gift className="w-4 h-4 text-secondary" />
                            Bônus inclusos:
                          </p>
                          {selectedPlan.bonus.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 mb-6">
                          <div className="flex items-center gap-2 text-secondary">
                            <Shield className="w-5 h-5" />
                            <span className="font-semibold">
                              Garantia de 7 dias
                            </span>
                          </div>
                          <p className="text-sm text-secondary/80 mt-1">
                            Se não gostar, devolvemos 100% do seu dinheiro.
                          </p>
                        </div>
                      </>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-bold"
                    >
                      {isSubmitting ? (
                        "Processando..."
                      ) : (
                        <>
                          <Lock className="mr-2 h-5 w-5" />
                          FINALIZAR COMPRA
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>Compra segura</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Lock className="w-4 h-4" />
                        <span>Dados protegidos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
