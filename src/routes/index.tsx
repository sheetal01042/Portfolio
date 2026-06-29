import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Sparkles, Gauge, ShoppingBag, LayoutGrid, Quote, Star } from "lucide-react";
import { Counter } from "../components/site/Counter";
import { CTASection } from "../components/site/CTA";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheetal Sharma — Shopify, WordPress & CRO that converts" },
      { name: "description", content: "Premium Shopify and WordPress builds plus CRO programs that turn traffic into revenue for ambitious eCommerce brands." },
      { property: "og:title", content: "Sheetal Sharma — Shopify, WordPress & CRO that converts" },
      { property: "og:description", content: "Premium Shopify, WordPress and CRO for ambitious eCommerce brands." },
    ],
  }),
  component: Home,
});


const logos = [
  "/Images/Logos/ataara-logo.png",
  "/Images/Logos/betteralt-logo.png",
  "/Images/Logos/bhava-earth-logo.png",
  "/Images/Logos/blitzgro-logo.png",
  "/Images/Logos/Bloom-Up-logo.png",
  "/Images/Logos/cha-logo.png",
  "/Images/Logos/clazep-logo.png",
  "/Images/Logos/eternal-logo.png",
  "/Images/Logos/ethnic-trends-logo.png",
  "/Images/Logos/glamsutra-logo.png",
  "/Images/Logos/glosense-logo.png",
  "/Images/Logos/gulmohar-logo.png",
  "/Images/Logos/heena-logo.png",
  "/Images/Logos/hoc-logo.png",
  "/Images/Logos/honeyflo-logo.png",
  "/Images/Logos/i-blame-beads-logo.png",
  "/Images/Logos/indcop-logo.png",
  "/Images/Logos/inej-logo.png",
  "/Images/Logos/ivf-logo.png",
  "/Images/Logos/kindsoul-logo.png",
  "/Images/Logos/ko-logo.png",
  "/Images/Logos/kuddi-logo.png",
  "/Images/Logos/L_F-logo.png",
  "/Images/Logos/lille-barn-logo.png",
  "/Images/Logos/love-a-lot-logo.png",
  "/Images/Logos/m_m-logo.png",
  "/Images/Logos/maayavi-logo.png",
  "/Images/Logos/matsya-logo.png",
  "/Images/Logos/messy-corner-logo.png",
  "/Images/Logos/misora-logo.png",
  "/Images/Logos/nackers-logo.png",
  "/Images/Logos/ninobello-logo.png",
  "/Images/Logos/niswarth-logo.png",
  "/Images/Logos/nutrealis-logo.png",
  "/Images/Logos/organic-wisdom-logo.png",
  "/Images/Logos/phuljhadi-logo.png",
  "/Images/Logos/powersutra-logo.png",
  "/Images/Logos/repello-logo.png",
  "/Images/Logos/reyya-logo.png",
  "/Images/Logos/satras-logo.png",
  "/Images/Logos/sila-logo.png",
  "/Images/Logos/street9-logo.png",
  "/Images/Logos/terrapy-logo.png",
  "/Images/Logos/threadit-logo.png",
  "/Images/Logos/tikl-logo.png",
  "/Images/Logos/udd-logo.png",
  "/Images/Logos/vennyab-logo.png",
  "/Images/Logos/weaving-cult-logo.png",
  "/Images/Logos/within-logo.png",
  "/Images/Logos/yell-logo.png",
  "/Images/Logos/yuri-logo.png",
  "/Images/Logos/zingavita-logo.png"
];

function Home() {
  const featured = projects.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-16 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-5xl">
            <p className="eyebrow animate-fade-up">Shopify · WordPress · CRO</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.05] sm:text-5xl md:text-[4.5rem] md:leading-[1] animate-fade-up" style={{ animationDelay: "60ms" }}>
              Stores designed<br />
              <span className="italic font-normal text-stone">to convert,</span> not just to ship.
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "140ms" }}>
              I help D2C brands and growing eCommerce teams build high-performing Shopify and WordPress stores — then optimize them with CRO systems that compound revenue month after month.
            </p>
            <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "140ms" }}>
              Trusted by 50+ brands including Powersutra, HoneyFlo, Within Beauty, and more.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <Link to="/contact" className="btn-ink">Hire me <ArrowUpRight size={16} /></Link>
              <Link to="/projects" className="btn-ghost">View work <ArrowRight size={16} /></Link>
            </div>
          </div>

          {/* Hero visual band */}
          <div className="mt-16 md:mt-24 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden border border-border" style={{ background: featured[0].hero }}>
              <div className="h-full w-full p-8 flex flex-col justify-between text-paper">
                <span className="text-xs uppercase tracking-widest opacity-80">Featured · {featured[0].category}</span>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-ink">{featured[0].client}</p>
                  <p className="text-ink/70 text-sm md:text-base mt-1">{featured[0].result}</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
                <span className="eyebrow">Avg. uplift</span>
                <p className="font-display text-4xl"><Counter to={47} suffix="%" /></p>
                <p className="text-xs text-muted-foreground">Avg. Conversion Uplift</p>
              </div>
              <div className="rounded-2xl bg-ink text-paper p-6 flex flex-col justify-between">
                <span className="eyebrow text-paper/60">ROI generated</span>
                <p className="font-display text-2xl text-paper">3.2x – 18x</p>
                <Link to="/contact" className="text-xs text-paper/80 link-underline w-fit">Get A Quote →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee logos */}
        <div className="border-y border-border py-10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="mx-14 flex items-center justify-center"
                style={{ minWidth: "120px" }}
              >
                <img
                  src={logo}
                  alt={`brand-${i}`}
                  className="h-12 md:h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="eyebrow">Why work with me</p>
              <h2 className="mt-4 text-4xl md:text-5xl">A partner who doesn’t just build — but improves what matters.</h2>
              <p className="mt-5 text-muted-foreground max-w-lg">
                Most stores look good. Very few convert. I work closely with founders and teams to design, build, and continuously optimize stores using real user behavior, data, and proven CRO frameworks.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { i: <Sparkles size={20} />, t: "Crafted For Conversion", d: "High-performing storefronts designed to guide users toward action." },
                { i: <Gauge size={20} />, t: "Performance-driven Decisions", d: "Built using analytics, heatmaps, and real customer behavior." },
                { i: <ShoppingBag size={20} />, t: "Commerce-first Approach", d: "Every page, section, and interaction is built to increase revenue." },
                { i: <LayoutGrid size={20} />, t: "Systems, Not Guesswork", d: "Structured testing, iteration, and scalable growth strategies." },
              ].map((u, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:-translate-y-0.5 transition-transform">
                  <div className="h-9 w-9 rounded-full bg-paper-2 grid place-items-center">{u.i}</div>
                  <p className="mt-5 font-display text-lg">{u.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{u.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick about */}
      <section className="section-y border-y border-border bg-paper-2/40">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Five years inside the growth engines of Shopify and WordPress.</h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              I’m Sheetal Sharma, an eCommerce specialist building and optimizing stores that don’t just look good — but perform. Over 5+ years, I’ve worked with 50+ brands to improve conversions, increase AOV, and drive sustainable growth.
            </p>
            <Link to="/about" className="btn-ghost mt-7">Read More <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["50+", "Projects Delivered"],
              ["40+", "Happy Brands"],
              ["47%", "Avg. CRO lift"],
              ["5+", "Years Experience"],
            ].map(([v, l], i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-6">
                <p className="font-display text-3xl md:text-4xl">{v}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Built to perform.</h2>
            </div>
            <Link to="/projects" className="link-underline text-sm hidden md:inline-flex items-center gap-1">All projects <ArrowRight size={14} /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elev"
              >
                <div className="aspect-[16/10] relative overflow-hidden" style={{ background: p.hero }}>
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]" style={{ background: p.hero }} />
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[10px] tracking-widest uppercase bg-paper/90 rounded-full">{p.category}</div>
                  <div className="absolute inset-0 z-10 bg-ink/0 group-hover:bg-ink/35 transition-colors duration-500 flex items-end p-5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper text-ink text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      View case study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
                <div className="p-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="font-display text-xl">{p.client}</p>
                    <p className="text-sm text-muted-foreground mt-1">{p.summary}</p>
                  </div>
                  <p className="font-display text-sm whitespace-nowrap">{p.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="section-y border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {[
            { v: 50, s: "+", l: "projects Delivered" },
            { v: 100, s: "%", l: "Projects Completed" },
            { v: 47, s: "%", l: "Avg. Conversion Lift" },
            { v: 10, s: " Hours", l: "Avg. Response Time" },
          ].map((c, i) => (
            <div key={i} className="text-center md:text-left md:pl-8 md:border-l md:border-border first:md:border-l-0">
              <p className="font-display text-5xl md:text-6xl">
                <Counter to={c.v} suffix={c.s} />
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{c.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-4xl md:text-5xl">A focused stack of capabilities built for growth.</h2>
              <Link to="/services" className="btn-ghost mt-7">Explore services <ArrowRight size={16} /></Link>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {[
                ["01", "Shopify Development", "Custom storefronts, theme customization, performance optimization."],
                ["02", "WordPress Development", "High-converting websites using Elementor, custom builds, and headless setups."],
                ["03", "CRO Audit & Optimization", "Data-driven audits, funnel analysis, A/B testing, and UX improvements."],
                ["04", "Store Revamp & Migration", "Upgrade existing stores or migrate seamlessly to Shopify/WordPress."],
                ["05", "UI/UX Design", "Clean, conversion-focused interfaces designed for modern eCommerce."],
                ["06", "Website Maintenance", "Ongoing support, updates, performance monitoring, and improvements."],
              ].map(([n, t, d]) => (
                <li key={n} className="py-6 grid grid-cols-[auto_1fr_auto] gap-6 items-center group">
                  <span className="font-display text-muted-foreground">{n}</span>
                  <div>
                    <p className="font-display text-xl md:text-2xl">{t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-ink transition-colors" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y bg-paper-2/40 border-y border-border">
        <div className="container-x">
          <p className="eyebrow">What clients say</p>
          <h2 className="mt-3 text-4xl md:text-5xl max-w-2xl">Trusted by founders and in-house teams.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { q: "Our conversion rate improved by over 40% within the first few months. The biggest difference was how data-driven everything felt.", a: "Priya N.", r: "Founder, Maison Verre" },
              { q: "The most thorough Shopify partner we've worked with. Senior from day one.", a: "Marcus T.", r: "Head of Ecom, Aurelia" },
              { q: "Shipped a 14-test roadmap without missing a release. Rare.", a: "Hannah L.", r: "Growth Lead, Orbit" },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl bg-card border border-border p-7 flex flex-col">
                <Quote size={18} className="text-muted-foreground" />
                <blockquote className="mt-5 text-base">{t.q}</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{t.a}</p>
                    <p className="text-xs text-muted-foreground">{t.r}</p>
                  </div>
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={12} className="fill-ink text-ink" />))}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
