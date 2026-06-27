import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { CTASection } from "../components/site/CTA";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Studio Vela" },
      { name: "description", content: "What founders and in-house teams say about working with Studio Vela on Shopify, WordPress and CRO." },
      { property: "og:title", content: "Testimonials — Studio Vela" },
      { property: "og:description", content: "Reviews from founders and in-house teams." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  { q: "Our CVR jumped 38% in three months. The work pays for itself many times over.", a: "Priya Narayan", r: "Founder, Maison Verre", initials: "PN", metric: "+38% CVR" },
  { q: "The most thorough Shopify partner we've worked with. Senior from day one.", a: "Marcus Tanaka", r: "Head of Ecom, Aurelia Cosmetics", initials: "MT", metric: "+62% lift" },
  { q: "Shipped a 14-test roadmap without missing a release. Rare.", a: "Hannah Lowe", r: "Growth Lead, Orbit Athletics", initials: "HL", metric: "−34% CAC" },
  { q: "Replatformed our store in 8 weeks with zero traffic loss. Smoothest launch we've had.", a: "Daniel Wexler", r: "Co-founder, Fielder Coffee", initials: "DW", metric: "2.1× LTV" },
  { q: "Eli is the rare partner who can hold strategy, design and engineering at a senior level.", a: "Sofia Reyes", r: "CMO, Halden Interiors", initials: "SR", metric: "3.4× leads" },
  { q: "The audit alone unlocked six months of clear, prioritized work. Worth every dollar.", a: "Theo Karim", r: "Founder, Lumen Skin", initials: "TK", metric: "+22% AOV" },
  { q: "Our WordPress build finally feels like a product, not a CMS hack.", a: "Anya Petrova", r: "Editor in Chief, Kinto Journal", initials: "AP", metric: "+41% organic" },
  { q: "Performance work was transformative. LCP went from 4s to under a second.", a: "Jamal Brooks", r: "CTO, North Supply", initials: "JB", metric: "0.9s LCP" },
  { q: "Honest, evidence-backed and refreshingly free of agency theater.", a: "Mira Halvorsen", r: "Founder, Verre & Co.", initials: "MH", metric: "+19% RPV" },
];

function Testimonials() {
  return (
    <>
      <section className="container-x pt-16 md:pt-28 pb-12">
        <p className="eyebrow">Reviews</p>
        <h1 className="mt-5 text-[2.5rem] md:text-6xl max-w-4xl">Trusted by founders<br/>and in-house teams.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">A selection of recent reviews from Shopify, WordPress and CRO engagements.</p>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-card p-7 flex flex-col">
                <div className="flex items-center justify-between">
                  <Quote size={18} className="text-muted-foreground" />
                  <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} size={12} className="fill-ink text-ink" />)}</div>
                </div>
                <blockquote className="mt-5 flex-1">{t.q}</blockquote>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-paper-2 grid place-items-center font-display text-sm">{t.initials}</div>
                    <div>
                      <p className="text-sm font-medium">{t.a}</p>
                      <p className="text-xs text-muted-foreground">{t.r}</p>
                    </div>
                  </div>
                  <span className="font-display text-sm whitespace-nowrap">{t.metric}</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Be the next case study." body="Spots are limited each quarter. Let's see if it's a fit." />
    </>
  );
}
