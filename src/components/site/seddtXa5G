import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CTASection({
  eyebrow = "Let's build",
  title = "Ready to turn traffic into revenue?",
  body = "Book a free 30-minute strategy call. I'll review your store, surface the biggest conversion leaks, and outline a path to measurable growth.",
}: { eyebrow?: string; title?: string; body?: string }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="rounded-3xl bg-ink text-paper px-6 md:px-16 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
               style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0, transparent 40%), radial-gradient(circle at 70% 80%, white 0, transparent 35%)" }} />
          <div className="relative max-w-3xl">
            <p className="eyebrow text-paper/60">{eyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-5xl text-paper">{title}</h2>
            <p className="mt-5 text-paper/70 text-base md:text-lg max-w-2xl">{body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-paper text-ink text-sm font-medium hover:scale-[1.02] transition-transform">
                Book a call <ArrowUpRight size={16} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-paper/30 text-paper text-sm hover:bg-paper/10 transition-colors">
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
