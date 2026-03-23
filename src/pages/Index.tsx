import { ArrowRight, Target, Globe, Zap, Key, Gift, Rocket, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import heroImg from "@/assets/hero-character.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { icon: Target, title: "1. Téma", desc: "Vyber si oblast – Zdraví, Finance, Vztahy." },
  { icon: Globe, title: "2. Výběr Světa", desc: "Vstup do světa, který tě zajímá." },
  { icon: Zap, title: "3. Výzvy", desc: "5–20 min denní výzvy v reálném životě." },
  { icon: Key, title: "4. Klíče", desc: "Postupuj a odemykej nové úrovně." },
  { icon: Gift, title: "5. Mystery Box", desc: "Reálné odměny za splnění." },
  { icon: Rocket, title: "6. Změň svůj svět", desc: "Transformace reality začíná." },
];

const team = [
  { name: "Tomáš", role: "Founder", desc: "Autor vize & Ithaca." },
  { name: "Vítek", role: "Co-founder", desc: "Strategie, values & integrity." },
  { name: "Marián", role: "Co-founder", desc: "Provozní pilíř." },
  { name: "Lucie", role: "Co-founder", desc: "Duše projektu & empatie." },
];

const faqs = [
  { q: "Co je Hra Reality?", a: "Příběhový systém výzev v reálném životě. Nejde o mobilní appku – jde o reálné zážitky propojené s komunitou na Discordu." },
  { q: "Musím platit?", a: "Pre-launch fáze je zcela zdarma. Připojíš se na Discord a budeš mezi prvními, kdo hru testuje." },
  { q: "Pro koho je to?", a: "Pro každého, kdo cítí, že se chce posunout – bez guru, bez teorie, jen přes zážitek." },
  { q: "Kdy to startuje?", a: "Testování první verze pro 1000 hráčů začíná v roce 2026." },
  { q: "Jak se zapojím?", a: "Vstup do pre-launch Discordu, přijmi pravidla komunity a odemkni si přístup do herních kanálů." },
];

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <FadeIn>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-display tracking-widest mb-8">
                PRE-LAUNCH
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <span className="sr-only">Hra Reality - osobní rozvoj a systém výzev. </span>
                Možná svět{" "}
                <span className="neon-text">nezachráníme.</span>
                <br />
                Ale můžeme ho probudit.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                <strong>Hra Reality</strong> je unikátní příběhový systém výzev v reálném životě. Gamifikace osobního rozvoje, která tě donutí jednat. Připoj se k naší pre-launch komunitě.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discord.gg/hra-reality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm rounded-xl pulse-glow hover:brightness-110 transition-all min-h-[44px]"
                >
                  <ArrowRight size={18} />
                  Vstoupit do Discordu
                </a>
                <Link
                  to="/jak-to-funguje"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display text-sm rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all min-h-[44px]"
                >
                  Jak to funguje
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Pre-launch komunita • První verze pro 1 000 hráčů • Start testování 2026
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative flex justify-center group">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75 animate-pulse" />
              <img
                src={heroImg}
                alt="Hra Reality – herní postava"
                className="w-full max-w-md lg:max-w-lg animate-float rounded-2xl relative z-10 drop-shadow-[0_0_30px_hsl(270,100%,65%,0.4)]"
                loading="eager"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="hud-line" />

      {/* CO JE HRA REALITY */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-center">
              Co je to <span className="neon-text">Hra Reality?</span>
            </h2>
            <div className="max-w-2xl mx-auto text-center space-y-4 text-muted-foreground">
              <p><strong>Hra Reality</strong> je příběhový systém výzev odehrávající se v reálném životě.</p>
              <p>Žádná fixace na digitální obrazovky. Žádná zdlouhavá teorie bez praxe. <strong>Hra Reality propojuje gamifikaci s osobním rozvojem</strong> pomocí reálných zážitků a systematického posouvání vlastních limitů.</p>
              <p>Celý obsah staví na zkušenostech, úkolech od expertů a síle naší komunity.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="hud-line" />

      {/* JAK SE HRAJE */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">
              Jak se Hra Reality <span className="neon-text">hraje</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="glass-card-hover p-6 h-full">
                  <step.icon className="text-primary mb-4" size={32} />
                  <h3 className="font-display text-sm font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="hud-line" />

      {/* TÝM */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">
              Kdo za tím <span className="neon-text">stojí</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-primary text-xl font-bold">
                      {person.name[0]}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold">{person.name}</h3>
                  <p className="text-xs text-primary mb-2">{person.role}</p>
                  <p className="text-xs text-muted-foreground">{person.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="hud-line" />

      {/* FAQ */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">
              <HelpCircle className="inline-block text-primary mr-2 -mt-1" size={28} />
              FAQ
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card border border-border/50 px-6 rounded-xl">
                  <AccordionTrigger className="text-sm font-medium hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              Připraven <span className="neon-text">vstoupit</span>?
            </h2>
            <a
              href="https://discord.gg/hra-reality"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm rounded-xl pulse-glow hover:brightness-110 transition-all"
            >
              <ArrowRight size={18} />
              Vstoupit do pre-launch Discordu
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
