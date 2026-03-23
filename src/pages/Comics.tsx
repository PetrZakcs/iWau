import { Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import cover1 from "@/assets/comic-cover-1.png";
import cover2 from "@/assets/comic-cover-2.png";

const comics = [
  {
    title: "Probuď Hráče v Sobě",
    desc: "Příběh o probuzení. O tom, co se stane, když přestaneš čekat a začneš jednat.",
    img: cover1,
  },
  {
    title: "Dr. Wetom: Kód naděje",
    desc: "Temný svět. Jediná naděje. Kdo je Dr. Wetom a proč na něm záleží?",
    img: cover2,
  },
];

export default function Comics() {
  return (
    <section className="py-20 min-h-screen">
      <div className="section-container max-w-4xl">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-display tracking-widest mb-8">
            KOMIKSY
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="sr-only">Komiksy Hra Reality zdarma. </span>
            Příběhy, které <span className="neon-text">probouzí</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Přečti si originální komiksy ze světa <strong>Hry Reality</strong>. Poznej příběhy plné výzev, osobního rozvoje a dobrodružství, které tě motivují jednat v reálném životě. Komiksy jsou k dispozici ke stažení zdarma.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {comics.map((comic, i) => (
            <FadeIn key={comic.title} delay={i * 0.15}>
              <div className="glass-card-hover overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={comic.img}
                    alt={comic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold mb-2">{comic.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{comic.desc}</p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 text-primary font-display text-xs font-bold rounded-lg hover:bg-primary/20 transition-colors min-h-[44px]">
                    <Download size={16} />
                    Zdarma ke stažení
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
