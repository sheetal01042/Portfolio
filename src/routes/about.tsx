import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASection } from "../components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Studio Vela" },
      { name: "description", content: "Independent designer-developer specializing in premium Shopify, WordPress and CRO programs for eCommerce brands." },
      { property: "og:title", content: "About — Studio Vela" },
      { property: "og:description", content: "A senior partner for Shopify, WordPress and CRO." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x pt-16 md:pt-28 pb-12">
        <p className="eyebrow">About the studio</p>
        <h1 className="mt-5 text-[2.5rem] md:text-6xl max-w-4xl">A studio of one, built around senior craft and measurable outcomes.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I'm Eli Vela — an independent designer-developer working with eCommerce founders, in-house teams and agencies on Shopify, WordPress and CRO. Every engagement is led by me, end to end.
        </p>
      </section>

      <section className="section-y border-y border-border bg-paper-2/40">
        <div className="container-x grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
          <div>
            <p className="eyebrow">Story</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Nine years inside the cart.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>I started building Shopify themes in 2017 for indie founders who couldn't afford a full agency but refused to ship something generic. The work quickly grew from front-of-store design into the full lifecycle — performance, checkout, post-purchase, retention.</p>
            <p>Today I run a deliberately small studio. One senior practitioner, a handful of clients at a time, and an obsession with the details that move conversion. Most engagements turn into long-term CRO retainers because the work compounds.</p>
            <p>If you're shipping fast, measuring everything, and have a high bar for craft — we'll get along.</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">Expertise</p>
            <h2 className="mt-3 text-3xl md:text-4xl">A focused stack.</h2>
            <p className="mt-4 text-muted-foreground">Specialization over breadth. These are the areas I take to a senior level — not a list of every framework I've touched.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { t: "Shopify", d: "Plus, headless (Hydrogen / Next), apps, theme architecture." },
              { t: "WordPress", d: "Custom themes, Gutenberg blocks, WooCommerce, ACF, headless." },
              { t: "CRO", d: "Research, experimentation, A/B testing on Convert and GrowthBook." },
              { t: "Performance", d: "Core Web Vitals, edge caching, asset pipelines, image strategy." },
              { t: "Design systems", d: "Component libraries your team can extend without rewrites." },
              { t: "Analytics", d: "GA4, Mixpanel, server-side tagging, attribution hygiene." },
            ].map((x) => (
              <div key={x.t} className="p-6 rounded-2xl border border-border bg-card">
                <p className="font-display text-xl">{x.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border">
        <div className="container-x">
          <p className="eyebrow">Tools of the trade</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Shopify Plus","Hydrogen","Liquid","WordPress","WooCommerce","Next.js","React","TypeScript","Tailwind","Figma","Convert.com","GrowthBook","Hotjar","GA4","Klaviyo","Recharge","Stripe","Algolia"].map((t)=>(
              <span key={t} className="px-4 py-2 rounded-full border border-border bg-card text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Ship the version you can defend in six months.</h2>
            <p className="mt-5 text-muted-foreground">Trends decay. The work that lasts is fast, accessible, and obvious to the person trying to buy. Everything I build is measured against that bar.</p>
            <Link to="/contact" className="btn-ink mt-7">Start a conversation <ArrowRight size={16} /></Link>
          </div>
          <ul className="space-y-4">
            {[
              "Senior practitioner on every engagement.",
              "Research before redesign. Always.",
              "Performance is a feature, not a phase.",
              "Decisions are evidence-backed, not opinion-backed.",
              "Documentation as a deliverable.",
            ].map((p,i)=>(
              <li key={i} className="flex gap-4 items-start border-b border-border pb-4">
                <span className="font-display text-muted-foreground w-8">0{i+1}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Want to work together?" body="I take on a small number of projects each quarter. Get in early." />
    </>
  );
}
