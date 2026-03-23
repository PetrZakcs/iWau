import { CheckCircle, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const steps = [
  { title: "Připoj se na Discord", desc: "Klikni na odkaz a vstup do naší pre-launch komunity." },
  { title: "Přijmi pravidla", desc: "Přečti si pravidla komunity a potvrď je." },
  { title: "Odemkni kanály", desc: "Získej přístup k herním kanálům a začni svou cestu." },
];

export default function Start() {
  return (
    <section className="py-20 min-h-screen">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-display tracking-widest mb-8">
            ONBOARDING
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="sr-only">Začít hrát Hru Reality - připoj se k nám. </span>
            Tohle není hotová hra,<br />
            ale <span className="neon-text">zrod světa.</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Zapojení do komunity <strong>Hra Reality</strong> je velmi jednoduché. Zvládneš to ve 3 snadných krocích a staneš se prvním, kdo si vyzkouší nové pojetí gamifikace osobního rozvoje.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="glass-card-hover p-6 flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold mb-1">
                    Krok {i + 1}: {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="https://discord.gg/hra-reality"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm rounded-xl pulse-glow hover:brightness-110 transition-all"
            >
              <ArrowRight size={18} />
              Vstoupit do Discordu
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
