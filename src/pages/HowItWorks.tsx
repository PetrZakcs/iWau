import FadeIn from "@/components/FadeIn";

const points = [
  "Discord jako brána – tady se vše odehrává.",
  "Výzvy místo učení – žádná teorie, jen akce.",
  "Žádné porovnávání – hraješ sám se sebou.",
  "Příběhy jako motor – každé téma má svůj narativ.",
  "Reálné odměny – za splnění výzev čekají skutečné odměny.",
  "Komunita, ne publikum – pomáháme si navzájem.",
  "Tvůj posun je tvůj – sleduj svůj vlastní růst.",
];

export default function HowItWorks() {
  return (
    <section className="py-20 min-h-screen">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-display tracking-widest mb-8">
            FILOZOFIE
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-8">
            Jak <span className="neon-text">Hra Reality</span> funguje
          </h1>
          <p className="text-base text-muted-foreground mb-12">
            Hra Reality je inovativní systém osobního rozvoje, který tě posouvá vpřed prostřednictvím plnění reálných výzev pomocí gamifikace. Základem naší filozofie je akce v reálném světě namísto pouhé teorie. Podívej se na základní principy:
          </p>
        </FadeIn>

        <div className="space-y-6 mb-16">
          {points.map((point, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card-hover p-5 flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-display text-xs text-primary font-bold">
                  {i + 1}
                </span>
                <p className="text-sm">{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="glass-card neon-border p-8 text-center">
            <p className="text-xl sm:text-2xl font-display font-bold neon-text leading-relaxed">
              „Způsob, jakým přemýšlíš a jednáš, mění tvou realitu."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
