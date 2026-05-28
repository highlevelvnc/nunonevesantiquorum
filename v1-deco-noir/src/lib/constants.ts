// Dados reais do cliente — único sítio para contactos e conteúdo.

export const WHATSAPP_NUMBER = "351963863208";

export const WHATSAPP_MESSAGE =
  "Olá! Vim através do vosso site e gostaria de pedir uma avaliação gratuita. Tenho uma peça / coleção / recheio que poderá ter interesse em comprar.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const COMPANY = {
  name: "Nuno Neves",
  suffix: "Antiquorum",
  fullName: "Nuno Neves Antiquorum",
  tagline: "Compramos a história que guarda em casa.",
  subtitle: "Avaliação gratuita, pagamento justo e imediato.",
  region: "Lisboa e todo o país",
  email: "antiguidadesnunoneves@gmail.com",
  phonePrimary: "963 863 208",
  phoneSecondary: "962 775 844",
  phonePrimaryTel: "+351963863208",
  phoneSecondaryTel: "+351962775844",
  hours: "Todos os dias · 9h às 19h",
  location: "Atendimento presencial por marcação, em Lisboa e arredores.",
} as const;

export const STATS = [
  { value: "+30", label: "anos no mercado" },
  { value: "+100.000", label: "peças adquiridas" },
  { value: "100%", label: "avaliação gratuita" },
  { value: "24h", label: "resposta a fotografias" },
] as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O que Compramos", href: "#categorias" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
] as const;

export type Category = {
  name: string;
  desc: string;
  img: string;
};

export const CATEGORIES: Category[] = [
  {
    name: "Mobiliário",
    desc: "Cómodas, contadores, mesas e cadeiras de época — marchetaria, talha e bronzes.",
    img: "/fotos/peca-05.jpg",
  },
  {
    name: "Porcelanas",
    desc: "Porcelana nacional e europeia: Vista Alegre, Limoges, Meissen, Saxe e biscuit.",
    img: "/fotos/cat-porcelanas-2.jpeg",
  },
  {
    name: "Cristais & Vidros",
    desc: "Cristal lapidado, Murano, vidro vaselina e serviços completos de mesa.",
    img: "/fotos/cat-cristais-1.jpeg",
  },
  {
    name: "Pratas",
    desc: "Prata de lei e prateado: faqueiros, baixelas, castiçais e ourivesaria.",
    img: "/fotos/cat-pratas-1.jpeg",
  },
  {
    name: "Arte",
    desc: "Pintura a óleo, aguarela, gravura e escultura de autor, emolduradas ou não.",
    img: "/fotos/peca-04.jpg",
  },
  {
    name: "Arte Sacra",
    desc: "Imaginária, oratórios, paramentos e objetos litúrgicos de devoção.",
    img: "/fotos/cat-artesacra-1.jpeg",
  },
  {
    name: "Bronzes",
    desc: "Esculturas e jarras em bronze, Art Nouveau e Art Déco, de escola ou assinadas.",
    img: "/fotos/peca-08.jpg",
  },
  {
    name: "Colecionismo",
    desc: "Coleções privadas, numismática, militaria e objetos de outras épocas.",
    img: "/fotos/cat-colecionismo-1.png",
  },
  {
    name: "Faianças & Cerâmicas",
    desc: "Caldas, Bordallo Pinheiro, cerâmica popular e azulejaria antiga.",
    img: "/fotos/peca-01.jpg",
  },
  {
    name: "Brinquedos Antigos",
    desc: "Brinquedos de lata, autómatos, miniaturas e jogos de outras gerações.",
    img: "/fotos/cat-brinquedos-1.jpeg",
  },
  {
    name: "Curiosidades",
    desc: "Peças raras e invulgares — do mecânico ao decorativo, com história para contar.",
    img: "/fotos/peca-06.jpg",
  },
  {
    name: "Livros & Manuscritos",
    desc: "Edições antigas, manuscritos, postais ilustrados e fotografia de coleção.",
    img: "/fotos/cat-livros-1.jpeg",
  },
];

export type Step = {
  num: string;
  title: string;
  desc: string;
};

export const PROCESS: Step[] = [
  {
    num: "01",
    title: "Contacte-nos",
    desc: "Envie fotografias por WhatsApp ou marque uma visita. Resposta no próprio dia.",
  },
  {
    num: "02",
    title: "Avaliação gratuita",
    desc: "Analisamos cada peça com rigor e damos-lhe uma estimativa honesta, sem custos.",
  },
  {
    num: "03",
    title: "Proposta justa",
    desc: "Apresentamos um valor de mercado transparente, sem qualquer compromisso.",
  },
  {
    num: "04",
    title: "Pagamento imediato",
    desc: "Fechado o negócio, pagamos na hora e tratamos da recolha das peças.",
  },
];

export type Value = {
  title: string;
  desc: string;
};

export const VALUES: Value[] = [
  {
    title: "Rigor e Confiança",
    desc: "Mais de três décadas a comprar com ética e total transparência.",
  },
  {
    title: "Conhecimento de Mercado",
    desc: "Especialistas em épocas, estilos e materiais — sabemos o que cada peça vale.",
  },
  {
    title: "Processo Simples e Rápido",
    desc: "Do primeiro contacto ao pagamento em poucos passos, sem burocracia.",
  },
];

export const ACQUISITIONS = [
  "Peças individuais",
  "Coleções privadas",
  "Recheios de casa completos",
  "Heranças e partilhas",
] as const;

export const SUBJECT_OPTIONS = [
  "Pedido de avaliação",
  "Venda de recheio de casa",
  "Venda de peça individual",
  "Outro assunto",
] as const;
