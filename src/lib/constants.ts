export const SITE = {
  name: "Mawj Digital Agency",
  tagline: "Sites web premium pour entreprises marocaines",
  description:
    "Agence web au Maroc. On conçoit des sites web premium pour les entreprises marocaines qui veulent se démarquer. Landing pages, sites vitrines, e-commerce.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212600000000",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "mawj.agency",
  email: "hello@mawj.agency",
  location: "Casablanca, Morocco",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mawj-agency.vercel.app",
};

export const SERVICES = {
  landing: {
    title: "Landing Page Pro",
    price: 3500,
    features: [
      "Site one-page premium",
      "Design sur-mesure",
      "Mobile responsive",
      "Formulaire de contact",
      "SEO de base",
      "Livraison: 5-7 jours",
    ],
  },
  website: {
    title: "Site Vitrine Complet",
    price: 7500,
    popular: true,
    features: [
      "5-7 pages",
      "Design premium + animations",
      "CMS pour modifier le contenu",
      "SEO avancé + Google Analytics",
      "Formulaires + WhatsApp intégré",
      "Livraison: 2-3 semaines",
    ],
  },
  ecommerce: {
    title: "E-commerce / Sur-mesure",
    price: 15000,
    custom: true,
    features: [
      "Boutique en ligne complète",
      "Paiement intégré (CMI/Stripe)",
      "Gestion produits & commandes",
      "Formation incluse",
      "Support 30 jours",
      "Livraison: 4-6 semaines",
    ],
  },
};

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    subtitle: "15 min gratuit",
    desc: "On discute de votre projet, vos objectifs et votre vision.",
  },
  {
    step: "02",
    title: "Proposition + Devis",
    subtitle: "Sous 48h",
    desc: "Je vous envoie une proposition détaillée avec le devis.",
  },
  {
    step: "03",
    title: "Design & Développement",
    subtitle: "Création complète",
    desc: "Design sur-mesure, développement, révisions jusqu'à validation.",
  },
  {
    step: "04",
    title: "Lancement & Support",
    subtitle: "Mise en ligne",
    desc: "Votre site est en ligne. Formation + support 30 jours inclus.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Combien de temps pour livrer un site ?",
    a: "Une landing page en 5-7 jours. Un site vitrine complet en 2-3 semaines. Un e-commerce en 4-6 semaines. Tout dépend de la complexité et de votre réactivité pour les validations.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "50% d'acompte au démarrage, 50% à la livraison. Paiement par virement bancaire, PayPal, ou en espèces (Cash).",
  },
  {
    q: "Faites-vous le contenu et les photos ?",
    a: "Je peux travailler avec le contenu que vous fournissez, ou vous mettre en relation avec des photographes/rédacteurs de mon réseau. Le contenu texte de base est inclus dans tous les packs.",
  },
  {
    q: "Hébergement et nom de domaine inclus ?",
    a: "Je vous guide pour acheter votre nom de domaine (~100 MAD/an) et je configure l'hébergement. Les frais d'hébergement sont à votre charge (à partir de 150 MAD/mois).",
  },
  {
    q: "Maintenance après livraison ?",
    a: "Oui ! 30 jours de support inclus après livraison. Ensuite, des forfaits maintenance sont disponibles à partir de 500 MAD/mois pour les mises à jour et le support continu.",
  },
  {
    q: "Travaillez-vous avec des entreprises hors Maroc ?",
    a: "Absolument. Je travaille avec des clients au Maroc, en France, en Belgique, au Canada et aux Émirats. 100% en remote.",
  },
];

export const STATS = [
  { value: "15+", label: "Projets livrés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "Casablanca", label: "Basé à" },
  { value: "48h", label: "Devis envoyé en" },
];

export const TESTIMONIALS = [
  {
    name: "Karim B.",
    role: "Fondateur",
    company: "Atlas Consulting",
    text: "Aymane a transformé notre présence en ligne. Notre nouveau site nous a apporté 3 nouveaux clients en 2 semaines. Travail propre, rapide et professionnel.",
  },
  {
    name: "Salma M.",
    role: "CEO",
    company: "Oasis Beauté",
    text: "Résultat incroyable. Le site est magnifique et reflète parfaitement notre marque. Mes clientes me disent qu'elles ont réservé après avoir visité le site.",
  },
  {
    name: "Youssef H.",
    role: "Directeur",
    company: "Sahara Logistics",
    text: "Professionnel du début à la fin. Livraison dans les délais, communication impeccable. Je recommande à 100%.",
  },
];

export const formatMAD = (amount: number) =>
  amount.toLocaleString("fr-FR") + " MAD";