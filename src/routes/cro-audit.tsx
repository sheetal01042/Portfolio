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
          <p className="eyebrow">CRO Audit · 14-day delivery</p>
          <h1 className="mt-5 text-[2.5rem] md:text-6xl">Find the revenue your store is quietly losing.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A 14-day expert audit of your Shopify or WordPress storefront. You get a prioritized fix list, a 90-day test roadmap, and a clear estimate of the revenue at stake.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-ink">Book the audit <ArrowUpRight size={16} /></Link>
            <a href="#whats-included" className="btn-ghost">What's included</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Check size={14} /> Fixed-scope, fixed-fee</span>
            <span className="inline-flex items-center gap-2"><Check size={14} /> Loom walkthrough + PDF</span>
            <span className="inline-flex items-center gap-2"><Check size={14} /> Money-back if no actionable insight</span>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-y border-y border-border bg-paper-2/40">
        <div className="container-x">
          <p className="eyebrow">If any of this sounds familiar…</p>
          <h2 className="mt-3 text-3xl md:text-5xl max-w-3xl">Traffic is up. Revenue isn't.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              "Ad spend is climbing but CVR is flat.",
              "Your PDP looks polished but visitors bounce.",
              "Cart and checkout abandonment over 70%.",
              "You're guessing what to ship next.",
              "Analytics is set up — but unused.",
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
            <p className="eyebrow">What's included</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Everything you need to take action on Monday.</h2>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {[
              ["Heuristic UX audit", "20+ point review across home, PDP, cart, checkout."],
              ["Analytics health check", "GA4, server-side tagging, event accuracy."],
              ["Quant deep-dive", "Funnel drop-off, segment behavior, device breakdown."],
              ["Qual research", "Session recordings + on-site survey synthesis."],
              ["Performance review", "Core Web Vitals, asset audit, render pipeline."],
              ["Prioritized fix list", "Effort × impact scored, ready for sprint."],
              ["90-day test roadmap", "12+ hypotheses with success criteria."],
              ["Loom walkthrough", "60-min recorded review of every finding."],
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
          <h2 className="mt-3 text-3xl md:text-5xl">Two weeks. Three milestones.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ["Day 1–3", "Kickoff & access", "Goals, KPIs, and read-only access to your analytics, store and session tools."],
              ["Day 4–10", "Research & analysis", "Quant + qual deep-dive. We find the leaks, not just the symptoms."],
              ["Day 11–14", "Deliverables & walkthrough", "Audit PDF, prioritized list, 90-day roadmap and a 60-min Loom review."],
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
            <p className="mt-5 text-muted-foreground">A clear, evidence-backed view of where revenue is leaking — and the exact tests to plug it.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Clarity on your highest-impact fixes",
              "Revenue estimate per recommendation",
              "A roadmap your team can execute on",
              "Benchmark vs. category peers",
              "Analytics you can finally trust",
              "Optional implementation by Studio Vela",
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
              ["Maison Verre", "+38% RPV", "14 tests shipped over 6 months."],
              ["Aurelia", "+62% CVR", "Headless rebuild + PDP redesign."],
              ["Orbit", "−34% CAC", "Programmatic LP system."],
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

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {[
            { q: "The audit paid for itself within 30 days. The roadmap kept paying for another six months.", a: "Priya N., Maison Verre" },
            { q: "Finally, a CRO partner who reads the data and ships the work. Both. Without drama.", a: "Marcus T., Aurelia" },
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
        title="Two weeks from now, you'll know exactly what to fix."
        body="Fixed scope. Fixed fee. Money-back if there isn't a single actionable insight."
      />
    </>
  );
}
