import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Calendar, Mail, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio Vela" },
      { name: "description", content: "Start a Shopify, WordPress or CRO project with Studio Vela. Book a call or send a brief." },
      { property: "og:title", content: "Contact — Studio Vela" },
      { property: "og:description", content: "Start a project with Studio Vela." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container-x pt-16 md:pt-28 pb-12">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-5 text-[2.5rem] md:text-6xl max-w-4xl">Let's build something that converts.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Tell me about the brand and the goals. I'll come back within one business day with next steps.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-ink text-paper grid place-items-center"><Check size={20} /></div>
                <h2 className="mt-6 text-3xl">Thanks — message received.</h2>
                <p className="mt-3 text-muted-foreground">I'll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Company" name="company" />
                <SelectField label="Service" name="service" options={["Shopify Development","WordPress Development","CRO Audit","eCommerce Strategy","Landing Page","Not sure yet"]} />
                <SelectField label="Budget" name="budget" options={["< $10k","$10k – $25k","$25k – $50k","$50k+"]} />
                <div>
                  <label className="eyebrow">Project details</label>
                  <textarea
                    name="details"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink"
                    placeholder="A few words about the brand, the goals, and the timeline."
                  />
                </div>
                <button type="submit" className="btn-ink w-fit">Send message <ArrowUpRight size={16} /></button>
                <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your project.</p>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-ink text-paper p-8">
              <p className="eyebrow text-paper/60">Prefer to talk?</p>
              <h3 className="mt-3 text-2xl text-paper">Book a 30-min strategy call.</h3>
              <p className="mt-2 text-sm text-paper/70">Free. No pitch. We'll diagnose your biggest opportunity together.</p>
              <a href="https://calendly.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper text-ink text-sm font-medium hover:scale-[1.02] transition-transform">
                <Calendar size={16} /> Open Calendly
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 space-y-5">
              <Item icon={<Mail size={16} />} label="Email" value="hello@studiovela.co" />
              <Item icon={<MapPin size={16} />} label="Based in" value="Lisbon · Working worldwide" />
              <div>
                <p className="eyebrow">Elsewhere</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["LinkedIn","Twitter","Dribbble","Read.cv"].map((s) => (
                    <a key={s} href="#" className="px-3 py-1.5 rounded-full border border-border text-xs hover:bg-paper-2 transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="eyebrow">Now booking</p>
              <p className="font-display text-2xl mt-2">Q3 — 2026</p>
              <p className="text-sm text-muted-foreground mt-2">2 retainer slots open · 1 audit slot open</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow">{label}{required && " *"}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow">{label}</label>
      <select name={name} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Item({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-9 w-9 rounded-full bg-paper-2 grid place-items-center">{icon}</div>
      <div>
        <p className="eyebrow">{label}</p>
        <p className="text-sm mt-1">{value}</p>
      </div>
    </div>
  );
}
