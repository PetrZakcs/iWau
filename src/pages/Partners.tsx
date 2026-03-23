import { useState } from "react";
import { Leaf, Waves, Sprout, Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const partners = [
  { name: "Justice for Nature", icon: Leaf, theme: "Životní prostředí", role: "Výzvy zaměřené na přírodu a udržitelnost." },
  { name: "Whaleden", icon: Waves, theme: "Oceány & wildlife", role: "Propojení výzev s ochranou oceánů." },
  { name: "EasyGrow", icon: Sprout, theme: "Osobní růst", role: "Nástroje pro měřitelný osobní rozvoj." },
];

export default function Partners() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Děkujeme za váš zájem! Ozveme se.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="section-container max-w-4xl">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-display tracking-widest mb-8">
            PARTNEŘI
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="sr-only">Firemní partneři Hry Reality. </span>
            Firmy jako součást <span className="neon-text">zážitku</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Spolupracující firmy a partneři <strong>Hry Reality</strong> se stávají přirozenou součástí našich herních příběhů a výzev. Neprodávají produkty, ale přispívají k exkluzivním zážitkům a reálným odměnám, které formují cestu osobního růstu každého hráče.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {partners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full">
                <p.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-sm font-bold mb-1">{p.name}</h3>
                <p className="text-xs text-primary mb-2">{p.theme}</p>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="hud-line mb-16" />

        {/* Contact Form */}
        <FadeIn>
          <div className="glass-card p-8 max-w-xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-6 text-center">
              Staň se <span className="neon-text">partnerem</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1 block">Jméno / Firma</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors min-h-[44px]"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1 block">E-mail</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors min-h-[44px]"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1 block">Zpráva</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm rounded-xl hover:brightness-110 transition-all min-h-[44px]"
              >
                <Send size={16} />
                Odeslat
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
