import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { projects, type Project } from "../lib/projects";
import { CTASection } from "../components/site/CTA";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.client} — Case study | Studio Vela` : "Case study" },
        { name: "description", content: p?.summary ?? "Case study" },
        { property: "og:title", content: p ? `${p.client} — Case study` : "Case study" },
        { property: "og:description", content: p?.summary ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl">Project not found</h1>
      <Link to="/projects" className="btn-ghost mt-8">All projects</Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const p = Route.useLoaderData() as Project;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="animate-fade-up" key={p.slug}>
      {/* HERO */}
      <section className="container-x pt-10 md:pt-16 pb-10">
        <Link to="/projects" className="text-sm text-muted-foreground link-underline inline-flex items-center gap-1.5">
          <ArrowLeft size={14} /> All work
        </Link>
        <div className="mt-10 grid md:grid-cols-[2fr_1fr] gap-10 items-end">
          <div>
            <p className="eyebrow">{p.category} · {p.year}</p>
            <h1 className="mt-5 text-[2.25rem] md:text-5xl max-w-3xl">
              {p.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="accent-serif text-stone">{p.title.split(" ").slice(-2).join(" ")}</span>
            </h1>
            <p className="mt-5 text-muted-foreground max-w-xl">{p.summary}</p>
          </div>
          <div className="rounded-2xl border border-border p-6 bg-card">
            <p className="eyebrow">Headline result</p>
            <p className="font-display text-4xl mt-2">{p.result}</p>
            <p className="text-sm text-muted-foreground mt-1">for {p.client}</p>
          </div>
        </div>
      </section>

      <section className="container-x">
        <div className="aspect-[16/9] rounded-3xl border border-border overflow-hidden" style={{ background: p.hero }} />
      </section>

      {/* OVERVIEW */}
      <section className="section-y">
        <div className="container-x grid sm:grid-cols-3 gap-y-8 border-y border-border py-10">
          <Detail label="Industry" value={p.industry ?? "eCommerce"} />
          <Detail label="Duration" value={p.duration ?? "—"} />
          <Detail label="Tools" value={(p.tools ?? []).join(" · ")} />
        </div>
      </section>

      {/* METRICS */}
      <section className="section-y border-b border-border -mt-12 md:-mt-24">
        <div className="container-x grid grid-cols-2 md:grid-cols-3 gap-y-8">
          {p.metrics.map((m, i) => (
            <div key={i} className="md:px-8 md:border-l md:border-border first:md:border-l-0">
              <p className="font-display text-4xl md:text-5xl">{m.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">01 — The problem</p>
            <h2 className="mt-3 text-3xl md:text-4xl">What was broken.</h2>
          </div>
          <p className="text-lg text-muted-foreground">{p.problem}</p>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="section-y border-y border-border bg-paper-2/40">
        <div className="container-x grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">02 — Strategy</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Approach &amp; key decisions.</h2>
          </div>
          <ul className="space-y-4">
            {p.approach.map((a, i) => (
              <li key={i} className="flex gap-5 border-b border-border pb-4">
                <span className="font-display text-muted-foreground w-8">0{i+1}</span>
                <span className="text-base">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXECUTION */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">03 — Execution</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Design, dev &amp; CRO.</h2>
            <p className="mt-4 text-muted-foreground">{p.process}</p>
          </div>
          <ul className="space-y-3">
            {p.cro.map((c, i) => (
              <li key={i} className="flex gap-3 border-b border-border pb-3"><span className="text-muted-foreground">→</span><span>{c}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section-y border-y border-border">
        <div className="container-x">
          <p className="eyebrow">04 — Before &amp; after</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Measured against the baseline.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border p-8 bg-card relative">
              <span className="absolute top-5 right-5 eyebrow">Before</span>
              <div className="aspect-[16/10] rounded-xl border border-border opacity-60" style={{ background: "linear-gradient(135deg,#ddd9d0,#bcb7a8)" }} />
              <p className="font-display text-2xl mt-6">{p.beforeAfter.before}</p>
            </div>
            <div className="rounded-2xl border border-border p-8 bg-ink text-paper relative">
              <span className="absolute top-5 right-5 eyebrow text-paper/60">After</span>
              <div className="aspect-[16/10] rounded-xl border border-paper/10" style={{ background: p.hero }} />
              <p className="font-display text-2xl mt-6 text-paper">{p.beforeAfter.after}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS HIGHLIGHT */}
      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-ink text-paper p-8 md:p-14">
            <p className="eyebrow text-paper/60">05 — Results</p>
            <p className="mt-4 font-display text-3xl md:text-5xl text-paper max-w-3xl">
              {p.result}<span className="accent-serif text-paper/60"> — and the system to keep it growing.</span>
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-y-6">
              {p.metrics.map((m, i) => (
                <div key={i} className="sm:px-6 sm:border-l sm:border-paper/15 first:sm:border-l-0">
                  <p className="font-display text-3xl text-paper">{m.value}</p>
                  <p className="text-xs uppercase tracking-widest text-paper/60 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {p.gallery && p.gallery.length > 0 && (
        <section className="section-y border-y border-border">
          <div className="container-x">
            <p className="eyebrow">06 — Gallery</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Selected screens.</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {p.gallery.map((g, i) => (
                <div key={i} className={`rounded-2xl border border-border overflow-hidden ${i === 0 ? "md:col-span-2 aspect-[16/8]" : "aspect-[16/10]"}`} style={{ background: g }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      {p.testimonial && (
        <section className="section-y">
          <div className="container-x max-w-4xl text-center">
            <Quote size={20} className="mx-auto text-muted-foreground" />
            <blockquote className="mt-6 font-display text-2xl md:text-4xl leading-tight">
              "{p.testimonial.quote}"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({length:5}).map((_,i)=><Star key={i} size={12} className="fill-ink text-ink" />)}
            </div>
            <p className="mt-4 text-sm">{p.testimonial.author}</p>
            <p className="text-xs text-muted-foreground">{p.testimonial.role}</p>
          </div>
        </section>
      )}

      {/* NEXT */}
      <section className="container-x pb-8">
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="group block rounded-2xl border border-border overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1fr]">
            <div className="aspect-[16/10] overflow-hidden relative">
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]" style={{ background: next.hero }} />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="eyebrow">Next case</p>
              <p className="font-display text-3xl mt-3">{next.client}</p>
              <p className="text-muted-foreground mt-2">{next.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm link-underline w-fit">Read case <ArrowRight size={14} /></span>
            </div>
          </div>
        </Link>
      </section>

      <CTASection
        eyebrow="Let's work together"
        title="Want similar results?"
        body="Tell me about the brand and the goals. I'll come back with a plan within one business day."
      />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="md:px-8 md:border-l md:border-border first:md:border-l-0">
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-base">{value}</p>
    </div>
  );
}
