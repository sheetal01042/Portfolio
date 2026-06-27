import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="container-x py-16 md:py-24 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="font-display text-lg">Studio Vela</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Conversion-focused Shopify, WordPress and CRO for ambitious eCommerce brands.
          </p>
          <Link to="/contact" className="btn-ink mt-6">
            Start a project <ArrowUpRight size={16} />
          </Link>
        </div>

        <FooterCol title="Studio" links={[
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/projects", label: "Work" },
        ]} />
        <FooterCol title="Specialties" links={[
          { to: "/cro-audit", label: "CRO Audit" },
          { to: "/services", label: "Shopify" },
          { to: "/services", label: "WordPress" },
        ]} />
        <FooterCol title="Connect" links={[
          { to: "/contact", label: "Contact" },
          { to: "/testimonials", label: "Testimonials" },
        ]} />
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Studio Vela. All rights reserved.</p>
          <p>Crafted with intent.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-stone hover:text-ink link-underline">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
