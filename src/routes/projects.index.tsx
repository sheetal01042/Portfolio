import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, categories } from "../lib/projects";
import { CTASection } from "../components/site/CTA";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Studio Vela" },
      { name: "description", content: "Selected Shopify, WordPress and CRO case studies from Studio Vela." },
      { property: "og:title", content: "Work — Studio Vela" },
      { property: "og:description", content: "Selected case studies across Shopify, WordPress and CRO." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [filter, setFilter] = useState<typeof categories[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="container-x pt-16 md:pt-28 pb-10">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-5 text-[2.5rem] md:text-6xl max-w-4xl">Outcomes worth measuring.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">A curated set of Shopify, WordPress and CRO engagements. Every case shows the work and the numbers.</p>
      </section>

      <section className="container-x">
        <div className="flex flex-wrap gap-2 border-y border-border py-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === c ? "bg-ink text-paper" : "border border-border hover:bg-paper-2"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-5 md:gap-6">
          {list.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elev"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]" style={{ background: p.hero }} />
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[10px] tracking-widest uppercase bg-paper/90 rounded-full">{p.category}</div>
                <div className="absolute inset-0 z-10 bg-ink/0 group-hover:bg-ink/35 transition-colors duration-500 flex items-end p-5">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper text-ink text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-6">
                  <p className="font-display text-xl">{p.client}</p>
                  <p className="font-display text-sm whitespace-nowrap">{p.result}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
