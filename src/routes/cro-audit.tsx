import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Quote, Star } from "lucide-react";
import { CTASection } from "../components/site/CTA";

export const Route = createFileRoute("/cro-audit")({
  head: () => ({
    meta: [
      { title: "CRO Audit — Find the revenue you're leaving on the table" },
      { name: "description", content: "A 14-day expert CRO audit for Shopify and WordPress stores. Find the conversion leaks and the roadmap to fix them." },
      { property: "og:title", content: "CRO Audit — Studio Vela" },
      { property: "og:description", content: "Find the revenue you're leaving on the table." },
    ],
  }),
  component: CroAudit,
});

function CroAudit() {
  return (
    <>
      <section className="container-x pt-16 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow">CRO Audit</p>
          <h1 className="mt-5 text-[2.5rem] md:text-6xl">Find the revenue your store is quietly losing.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A focused CRO audit for Shopify & WordPress stores — built to uncover what’s hurting conversions and exactly how to fix it.
          </p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            You’ll get a clear breakdown of issues, prioritized fixes, and a roadmap to improve performance — without the fluff.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-ink">Book the audit <ArrowUpRight size={16} /></Link>
            <a href="#whats-included" className="btn-ghost">Chat On WhatsApp</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Check size={14} /> Fixed starting price ₹1,500</span>
            <span className="inline-flex items-center gap-2"><Check size={14} /> Delivered in 5–7 days</span>
            <span className="inline-flex items-center gap-2"><Check size={14} /> Limited to 5 audits/week</span>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-y border-y border-border bg-paper-2/40">
        <div className="container-x">
          <p className="eyebrow">If any of this sounds familiar…</p>
          <h2 className="mt-3 text-3xl md:text-5xl max-w-3xl">Traffic is up. Revenue isn't.</h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Most stores don’t have a traffic problem — they have a conversion problem.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              "Your product pages look decent — but don’t convert.",
              "Visitors browse, but rarely add to cart.",
              "Mobile experience feels clunky or confusing.",
              "Trust signals are weak or missing.",
              "Checkout flow creates unnecessary friction.",
              "You've never shipped a real A/B test.",
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-muted-foreground text-sm">Symptom · {String(i+1).padStart(2,"0")}</p>
                <p className="mt-3 text-base">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whats included */}
      <section id="whats-included" className="section-y">
        <div className="container-x grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">What You Get</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Everything you need to fix what’s broken.</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A complete, no-fluff audit focused on real impact — not generic advice.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {[
              ["Heuristic UX Audit", "Deep review of Homepade, collection page, product pages, cart, checkout & overall flow."],
              ["Conversion-focused Insights", "What’s stopping users from buying (and how to fix it)."],
              ["Heatmap & Session Analysis", "Using tools like Clarity & Hotjar to understand behavior."],
              ["Mobile-first Review", "Because most of your users are on mobile."],
              ["Performance & Trust Checks", "Speed, credibility, and decision friction points."],
              ["Prioritized Action List", "Clear “what to fix first” roadmap."],
              ["5–7 Day Delivery", "Fast turnaround without compromising depth."],
              ["PDF / PPT Audit Report", "Clean, structured, and easy to implement."],
            ].map(([t, d], i) => (
              <li key={i} className="py-6 grid grid-cols-[auto_1fr] gap-6">
                <Check size={20} className="mt-1" />
                <div>
                  <p className="font-display text-lg">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-y border-y border-border">
        <div className="container-x">
          <p className="eyebrow">The process</p>
          <h2 className="mt-3 text-3xl md:text-5xl">5–7 Days. Clear Insights. No Confusion.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ["Day 1–2", "Store Analysis", "Review UX, product pages, and key flows."],
              ["Day 3–4", "Behavior Analysis", "Heatmaps, recordings & friction points."],
              ["Day 5–7", "Audit & Delivery", "Detailed report with prioritized fixes."],
            ].map(([d, t, body], i) => (
              <div key={i} className="rounded-2xl border border-border p-7 bg-card">
                <p className="font-display text-muted-foreground text-sm">{d}</p>
                <p className="mt-3 font-display text-xl">{t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Outcomes</p>
            <h2 className="mt-3 text-3xl md:text-4xl">What you walk away with.</h2>
            <p className="mt-5 text-muted-foreground">A clear understanding of where your store is leaking revenue — and how to fix it.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Identify what’s hurting conversions",
              "Fix high-impact issues first",
              "Improve add-to-cart rate",
              "Reduce checkout drop-offs",
              "Increase AOV with better UX",
              "Make data-backed decisions",
            ].map((b, i) => (
              <li key={i} className="rounded-2xl border border-border p-5 bg-card text-sm">
                <Check size={14} className="mb-2" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Snippets */}
      <section className="section-y border-y border-border bg-paper-2/40">
        <div className="container-x">
          <p className="eyebrow">From recent audits</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              ["D2C Fashion Brand", "+32% CVR", "PDP + trust signal fixes."],
              ["Skincare Brand", "+27% Add-to-Cart", "Mobile UX improvements."],
              ["Wellness Brand", "-22% Checkout Drop-offs", "Simplified checkout flow"],
            ].map(([c, m, d], i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-2xl">{m}</p>
                <p className="text-sm mt-1">{c}</p>
                <p className="text-xs text-muted-foreground mt-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="whats-included" className="section-y">
        <div className="container-x grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">Differentiator</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Not Just Another Audit.</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Most audits give you a report. This gives you clarity.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {[
              ["Built For D2C Brands", "Understands real user behavior, pricing psychology & COD-heavy markets."],
              ["Development + CRO Combined", "Not just insights — fixes are technically feasible and practical."],
              ["Execution-first Approach", "Focused on what actually moves numbers, not theory or fluff."],
              ["Founder Mindset", "Every suggestion is made with growth, revenue, and scalability in mind."],
              ["Clear, No-BS Audits", "Straight to the point — what’s wrong, why it matters, how to fix it."],
              ["Fast Turnaround", "Get actionable insights in 5–7 days, not weeks."],
            ].map(([t, d], i) => (
              <li key={i} className="py-6 grid grid-cols-[auto_1fr] gap-6">
                <Check size={20} className="mt-1" />
                <div>
                  <p className="font-display text-lg">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {[
            { q: "The audit paid for itself within 30 days. The roadmap kept paying for months.", a: "Prachi Khanduja, Phuljhadi" },
            { q: "Finally, a CRO partner who actually understands the work. Clear, practical, and straight to the point.", a: "Aayushi Jain Mehta, Weaving Cult" },
          ].map((t, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-8">
              <Quote size={18} />
              <blockquote className="mt-4 text-lg">{t.q}</blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <p className="text-sm">{t.a}</p>
                <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} size={12} className="fill-ink text-ink" />)}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Book the audit"
        title="Two weeks from now, you’ll know exactly what to fix."
        body="No guesswork. No generic advice. Just clear, actionable insights you can implement immediately."
      />
    </>
  );
}
