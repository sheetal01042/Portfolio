import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASection } from "../components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Studio Vela" },
      { name: "description", content: "Shopify, WordPress, CRO audits, eCommerce strategy and landing page design." },
      { property: "og:title", content: "Services — Sheetal Sharma" },
      { property: "og:description", content: "Shopify, WordPress, CRO and eCommerce strategy." },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    t: "Shopify Development",
    d: "Custom storefronts built for performance, scalability, and conversions — whether theme-based or headless.",
    process: ["Audit & strategy", "Information architecture", "Design system", "Theme build / Hydrogen", "Launch + measurement"],
    benefits: ["Sub-second LCP", "Composable component library", "Conversion-ready PDP & checkout"],
  },
  {
    n: "02",
    t: "WordPress Development",
    d: "Custom WordPress themes, Gutenberg block libraries, WooCommerce and headless setups for editorial and commerce brands.",
    process: ["Content modeling", "Block / ACF system", "Custom theme build", "WooCommerce integration", "SEO & performance"],
    benefits: ["Editor-friendly blocks", "SEO foundations baked in", "Scales with content team"],
  },
  {
    n: "03",
    t: "CRO Audit & Optimization",
    d: "Research-led conversion programs. Quant + qual, hypothesis backlog, weekly experimentation cadence.",
    process: ["Heuristic audit", "Analytics + qual research", "Test roadmap", "Build & QA", "Analyze & iterate"],
    benefits: ["Compounding revenue lift", "Decisions backed by data", "Reusable test playbook"],
  },
  {
    n: "04",
    t: "eCommerce Strategy",
    d: "Roadmaps for founders and in-house teams that align design, development, retention and growth.",
    process: ["Stakeholder discovery", "Customer journey audit", "Tech stack review", "Quarterly roadmap", "KPI definition"],
    benefits: ["Clear quarterly priorities", "Cross-functional alignment", "Measurable KPIs"],
  },
  {
    n: "05",
    t: "Landing Page Design",
    d: "High-converting landing pages and programmatic systems for paid acquisition.",
    process: ["Offer + audience workshop", "Wireframe + copy", "Design + build", "Variant testing", "Iteration"],
    benefits: ["Higher paid CVR", "Lower CAC", "Reusable page system"],
  },
];

function Services() {
  return (
    <>
      <section className="container-x pt-16 md:pt-28 pb-12">
        <p className="eyebrow">Services</p>
        <h1 className="mt-5 text-[2.5rem] md:text-6xl max-w-4xl">Senior Craft, End To End.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">Seven disciplines. One Practitioner. Designed to help eCommerce brands build, optimize, and scale — without unnecessary complexity.</p>
      </section>

      <section className="container-x">
        <div className="space-y-5 md:space-y-6">
          {services.map((s) => (
            <article key={s.n} className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <div className="grid md:grid-cols-[auto_1fr_1fr_1fr] gap-10">
                <span className="font-display text-muted-foreground text-lg">{s.n}</span>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl">{s.t}</h2>
                  <p className="mt-3 text-muted-foreground">{s.d}</p>
                </div>
                <div>
                  <p className="eyebrow mb-3">Process</p>
                  <ul className="space-y-1.5 text-sm">
                    {s.process.map((p, i) => <li key={i} className="text-stone">{i+1}. {p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Benefits</p>
                  <ul className="space-y-1.5 text-sm">
                    {s.benefits.map((b, i) => <li key={i} className="text-stone">→ {b}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Engagements from 4 weeks.</p>
                <Link to="/contact" className="link-underline text-sm inline-flex items-center gap-1">Enquire <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CTASection />
      </div>
    </>
  );
}
