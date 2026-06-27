export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Shopify" | "WordPress" | "CRO" | "eCommerce";
  year: string;
  summary: string;
  hero: string;
  result: string;
  industry?: string;
  duration?: string;
  tools?: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  process: string;
  cro: string[];
  beforeAfter: { before: string; after: string };
  gallery?: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "aurelia-cosmetics",
    title: "Rebuilding a luxury beauty storefront",
    client: "Aurelia Cosmetics",
    category: "Shopify",
    year: "2025",
    summary: "Headless Shopify rebuild for a fast-growing prestige skincare brand.",
    hero: "linear-gradient(135deg,#e8e4dd,#cfc7b5)",
    result: "+62% conversion rate",
    metrics: [
      { label: "Conversion lift", value: "+62%" },
      { label: "Page speed", value: "0.9s" },
      { label: "AOV growth", value: "+28%" },
    ],
    problem: "A slow, theme-bloated storefront was bleeding revenue at checkout and on PDPs.",
    approach: [
      "Replatform onto a lean Shopify 2.0 architecture",
      "Rebuild the PDP around social proof and urgency",
      "Streamline checkout with one-page Shop Pay flow",
    ],
    process: "Two-week discovery, eight-week build, four-week experimentation cycle.",
    cro: [
      "PDP: hero rework, sticky ATC, ingredient drawer",
      "Cart: gift threshold progress + cross-sells",
      "Checkout: trust seals, express pay above the fold",
    ],
    beforeAfter: { before: "1.4% CVR, 4.6s LCP", after: "2.3% CVR, 0.9s LCP" },
  },
  {
    slug: "north-supply",
    title: "Editorial WordPress for an outdoor brand",
    client: "North Supply Co.",
    category: "WordPress",
    year: "2024",
    summary: "A custom WordPress + WooCommerce build with an editorial content engine.",
    hero: "linear-gradient(135deg,#2d2d2d,#0d0d0d)",
    result: "+41% organic traffic",
    metrics: [
      { label: "Organic traffic", value: "+41%" },
      { label: "Avg. session", value: "3m 12s" },
      { label: "Newsletter signups", value: "5.4×" },
    ],
    problem: "Content and commerce were siloed across two platforms with poor SEO performance.",
    approach: [
      "Unify content + commerce on WordPress",
      "Custom Gutenberg block library",
      "Schema and Core Web Vitals overhaul",
    ],
    process: "Six-week design sprint, ten-week build, ongoing CRO retainer.",
    cro: [
      "Article-to-product modules",
      "Sticky newsletter capture with intent triggers",
      "Refined navigation with predictive search",
    ],
    beforeAfter: { before: "DR 31, 18k monthly visits", after: "DR 46, 64k monthly visits" },
  },
  {
    slug: "maison-verre",
    title: "CRO program for a glassware DTC",
    client: "Maison Verre",
    category: "CRO",
    year: "2025",
    summary: "Six-month CRO retainer on Shopify Plus with a 14-test roadmap.",
    hero: "linear-gradient(135deg,#f5f3ee,#cccab8)",
    result: "+38% revenue per visitor",
    metrics: [
      { label: "RPV", value: "+38%" },
      { label: "Add-to-cart", value: "+24%" },
      { label: "Tests shipped", value: "14" },
    ],
    problem: "High traffic, soft conversion. Heatmaps showed PDP and cart friction.",
    approach: [
      "Quant + qual research stack",
      "Hypothesis-driven test backlog",
      "Weekly experimentation cadence",
    ],
    process: "Audit → research → roadmap → biweekly test releases on Convert.com.",
    cro: [
      "PDP rebuild with usage imagery",
      "Bundle builder + volume pricing",
      "Checkout: postcode autofill, Apple Pay priority",
    ],
    beforeAfter: { before: "$1.42 RPV", after: "$1.96 RPV" },
  },
  {
    slug: "fielder-coffee",
    title: "Subscription-first Shopify storefront",
    client: "Fielder Coffee",
    category: "eCommerce",
    year: "2024",
    summary: "Subscription + retail Shopify storefront with a custom quiz funnel.",
    hero: "linear-gradient(135deg,#d9c8a8,#8a6b3a)",
    result: "+2.1× subscriber LTV",
    metrics: [
      { label: "Subscriber LTV", value: "2.1×" },
      { label: "Quiz CVR", value: "31%" },
      { label: "Churn", value: "−18%" },
    ],
    problem: "One-off purchases dominated; the subscription path was buried.",
    approach: [
      "Lead with a taste-profile quiz",
      "Custom Recharge integration",
      "Member portal with skip/swap",
    ],
    process: "Discovery, prototype, build, post-launch optimization.",
    cro: [
      "Quiz funnel with progressive disclosure",
      "Subscription PDP with savings calculator",
      "Reactivation flow + win-back offers",
    ],
    beforeAfter: { before: "12% sub mix", after: "34% sub mix" },
  },
  {
    slug: "halden-interiors",
    title: "Trade-focused WordPress catalog",
    client: "Halden Interiors",
    category: "WordPress",
    year: "2025",
    summary: "B2B trade portal on WordPress with quote builder and gated pricing.",
    hero: "linear-gradient(135deg,#efece5,#a39a86)",
    result: "+3.4× qualified leads",
    metrics: [
      { label: "Qualified leads", value: "3.4×" },
      { label: "Time on portal", value: "+88%" },
      { label: "Quote close rate", value: "41%" },
    ],
    problem: "Trade buyers couldn't browse, save, or quote without a sales call.",
    approach: ["Gated trade pricing", "Quote builder with PDF export", "CRM sync"],
    process: "Sales-led discovery, design system, phased rollout.",
    cro: ["Streamlined account creation", "Save-for-later collections", "Inline shipping calc"],
    beforeAfter: { before: "4% lead rate", after: "13.6% lead rate" },
  },
  {
    slug: "orbit-athletics",
    title: "Performance landing pages at scale",
    client: "Orbit Athletics",
    category: "CRO",
    year: "2024",
    summary: "Programmatic landing page system for paid acquisition.",
    hero: "linear-gradient(135deg,#1a1a1a,#3a3a3a)",
    result: "−34% CAC",
    metrics: [
      { label: "CAC", value: "−34%" },
      { label: "Landing CVR", value: "8.2%" },
      { label: "Pages shipped", value: "60+" },
    ],
    problem: "Paid traffic landed on slow, generic pages with poor message match.",
    approach: ["Modular Shopify section library", "Per-campaign LP templates", "Message-match playbook"],
    process: "Audit, system design, build, weekly variant releases.",
    cro: ["Above-fold proof bar", "Single-CTA flows", "Sticky purchase rail"],
    beforeAfter: { before: "3.1% LP CVR", after: "8.2% LP CVR" },
  },
];

const enrich: Record<string, Partial<Project>> = {
  "aurelia-cosmetics": {
    industry: "Prestige skincare · DTC",
    duration: "14 weeks",
    tools: ["Shopify Plus", "Hydrogen", "Figma", "Klaviyo", "GA4"],
    testimonial: { quote: "The most thorough Shopify partner we've worked with. Senior from day one.", author: "Marcus Tanaka", role: "Head of Ecom, Aurelia" },
  },
  "north-supply": {
    industry: "Outdoor apparel · Editorial commerce",
    duration: "16 weeks",
    tools: ["WordPress", "WooCommerce", "ACF", "Algolia", "GA4"],
    testimonial: { quote: "Our WordPress build finally feels like a product, not a CMS hack.", author: "Jamal Brooks", role: "CTO, North Supply" },
  },
  "maison-verre": {
    industry: "Home & lifestyle · DTC",
    duration: "6-month retainer",
    tools: ["Shopify Plus", "Convert.com", "Hotjar", "GA4"],
    testimonial: { quote: "Our CVR jumped 38% in three months. The work pays for itself many times over.", author: "Priya Narayan", role: "Founder, Maison Verre" },
  },
  "fielder-coffee": {
    industry: "F&B subscription · DTC",
    duration: "12 weeks",
    tools: ["Shopify", "Recharge", "Klaviyo", "Figma"],
    testimonial: { quote: "Replatformed our store in 8 weeks with zero traffic loss. Smoothest launch we've had.", author: "Daniel Wexler", role: "Co-founder, Fielder Coffee" },
  },
  "halden-interiors": {
    industry: "B2B trade · Interiors",
    duration: "18 weeks",
    tools: ["WordPress", "WooCommerce", "Gravity Forms", "HubSpot"],
    testimonial: { quote: "Eli is the rare partner who can hold strategy, design and engineering at a senior level.", author: "Sofia Reyes", role: "CMO, Halden Interiors" },
  },
  "orbit-athletics": {
    industry: "Athletic performance · DTC",
    duration: "Ongoing",
    tools: ["Shopify Plus", "GrowthBook", "Figma", "GA4"],
    testimonial: { quote: "Shipped a 14-test roadmap without missing a release. Rare.", author: "Hannah Lowe", role: "Growth Lead, Orbit Athletics" },
  },
};

for (const p of projects) {
  Object.assign(p, enrich[p.slug] ?? {});
  p.gallery = [p.hero, "linear-gradient(135deg,#0d0d0d,#2d2d2d)", "linear-gradient(135deg,#e8e4dd,#f5f3ee)"];
}

export const categories = ["All", "Shopify", "WordPress", "CRO", "eCommerce"] as const;
