import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/agatha-hero.jpg";
import proc1 from "@/assets/agatha-procedure-1.jpg";
import proc2 from "@/assets/agatha-procedure-2.jpg";
import tricoImg from "@/assets/agatha-tricologia.jpg";
import scienceImg from "@/assets/agatha-science.jpg";
import clinicImg from "@/assets/agatha-clinic.jpg";
import logo from "@/assets/agatha-logo.png";
import cert1 from "@/assets/agatha-cert-1.jpg";
import cert2 from "@/assets/agatha-cert-2.jpg";

const WHATSAPP_URL = "https://wa.me/5531992003849";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Ágatha Emanuelle — Biomédica Esteta" },
      {
        name: "description",
        content:
          "Estética com propósito: procedimentos seguros, naturais e personalizados. Dra. Ágatha Emanuelle — Especialista em Tricologia e Estética em Belo Horizonte/MG.",
      },
      { property: "og:title", content: "Dra. Ágatha Emanuelle — Biomédica Esteta" },
      {
        property: "og:description",
        content: "Beleza com segurança, técnica e sensibilidade.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Tricologia",
    desc: "Diagnóstico tricoscópico aprofundado e protocolos individualizados para queda, afinamento e saúde do couro cabeludo.",
    img: tricoImg,
  },
  {
    title: "Skin & Limpeza de Pele",
    desc: "Cuidado clínico para acne, melasma, manchas e revitalização — uma pele equilibrada é o ponto de partida da beleza.",
    img: proc2,
  },
  {
    title: "Injetáveis & Toxina",
    desc: "Toxina botulínica e intradermoterapia com técnica refinada e resultado natural, respeitando sua expressão.",
    img: proc1,
  },
];

const pillars = [
  {
    title: "Segurança em primeiro lugar",
    desc: "Materiais descartáveis, produtos certificados e protocolos baseados em evidência. Cada procedimento começa por uma avaliação criteriosa.",
  },
  {
    title: "Resultado natural",
    desc: "Acredito em uma beleza que respeita seus traços. Nada de excessos — o objetivo é realçar, nunca mascarar.",
  },
  {
    title: "Atendimento humanizado",
    desc: "Escuta atenta, plano personalizado e acompanhamento próximo. Você é o centro de cada decisão.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Dra. Ágatha Emanuelle" className="h-20 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
            <div className="hidden sm:block leading-tight">
              <span className="font-serif text-base tracking-tight block">Dra. Ágatha Emanuelle</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Biomédica Esteta</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#procedimentos" className="hover:text-foreground transition">
              Procedimentos
            </a>
            <a href="#sobre" className="hover:text-foreground transition">
              Sobre
            </a>
            <a href="#contato" className="hover:text-foreground transition">
              Contato
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-agendar text-xs px-5 py-2.5 rounded-full hover:opacity-95 transition"
          >
            Agende uma consulta
          </a>
        </div>
      </header>

      {/* 1. HERO — gatilho para agendar */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden">
        {/* Mobile: foto como fundo completo */}
        <img
          src={heroImg}
          alt="Dra. Ágatha Emanuelle"
          className="md:hidden absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="md:hidden absolute inset-0 bg-background/15 z-0" />
        <div className="absolute inset-0 hero-gold-lines pointer-events-none z-0" />

        {/* Layout: flex-col no mobile (texto em cima), grid 2 colunas no desktop */}
        <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 min-h-[100svh]">

          {/* Texto + CTA — topo no mobile, coluna esquerda no desktop */}
          <div className="flex flex-col justify-start md:justify-center px-6 md:px-12 lg:px-20 pt-28 pb-12 md:py-0 text-center md:text-left md:bg-background">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-white md:text-foreground mb-5 drop-shadow-lg md:drop-shadow-none">
              Sua essência em evidência
            </h1>
            <p className="text-base md:text-lg text-white/95 md:text-muted-foreground max-w-xl mb-8 leading-relaxed font-medium drop-shadow-md md:drop-shadow-none mx-auto md:mx-0">
              Transformamos cuidado em autoestima, com tratamentos personalizados e atendimento pensados para você.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground text-sm md:text-base px-8 py-4 rounded-xl hover:opacity-90 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg font-semibold uppercase tracking-wider"
              >
                AGENDE UMA CONSULTA!
              </a>
            </div>
          </div>

          {/* Foto — coluna direita apenas no desktop */}
          <div className="hidden md:block relative overflow-hidden">
            <img
              src={heroImg}
              alt="Dra. Ágatha Emanuelle"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </section>

      {/* 2. PROCEDIMENTOS */}
      <section id="procedimentos" className="py-20 md:py-28 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Procedimentos</div>
            <h2 className="font-serif text-4xl md:text-5xl text-balance max-w-2xl mx-auto mb-4">
              Cuidado completo, da raiz à pele.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Protocolos personalizados, com produtos certificados e técnica refinada —
              pensados para o seu momento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex btn-agendar text-sm px-8 py-3.5 rounded-full hover:opacity-95 transition"
            >
              Agende sua avaliação
            </a>
          </div>
        </div>
      </section>

      {/* 3. SOBRE ELA */}
      <section id="sobre" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            <div className="md:col-span-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-border">
                <img
                  src={scienceImg}
                  alt="Dra. Ágatha Emanuelle em atendimento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Sobre a Dra. Ágatha</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
                Beleza com propósito, cuidado com verdade.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sou a <strong className="text-foreground font-medium">Dra. Ágatha Emanuelle</strong>,
                biomédica esteta (CRBM). Acredito em uma estética que respeita seu tempo, seus
                traços e sua história — entregando resultados naturais com a segurança que você
                merece.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mais do que procedimentos, ofereço uma experiência: um espaço seguro para você
                cuidar de si com leveza, sem pressões e sem padrões. Cada plano de tratamento
                nasce da sua história, dos seus objetivos e do tempo que cada pele pede.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Minha promessa é simples: você sairá daqui se sentindo ouvida, respeitada e mais
                bonita — sempre você, sempre natural.
              </p>

              <div className="mb-8 p-6 rounded-2xl bg-secondary/50 border border-border">
                <h3 className="font-serif text-xl mb-2">Formação e especialização</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dra. Ágatha une o rigor científico da biomedicina à sensibilidade estética.
                  Com especializações reconhecidas e protocolos baseados em evidência, sua
                  prática é focada em resultados seguros e naturais — atendendo em Belo Horizonte/MG.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img src={cert1} alt="Certificado de especialização" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img src={cert2} alt="Certificado de especialização" className="w-full h-auto" />
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex btn-agendar text-sm px-6 py-3 rounded-full hover:opacity-95 transition"
              >
                Conhecer e agendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section id="diferencial" className="py-20 md:py-28 px-6 gradient-marsala text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Por que escolher</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance max-w-3xl">
            Três compromissos que guiam cada atendimento.
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mb-12">
            Estética é detalhe — e detalhe é cuidado. Veja o que torna a experiência aqui diferente.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-primary p-8 hover:bg-primary/80 transition-colors"
              >
                <div className="text-accent font-serif text-3xl mb-4">0{i + 1}</div>
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Galeria</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-balance max-w-2xl">
            Bastidores do cuidado.
          </h2>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={clinicImg} alt="Ambiente da clínica" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={proc1} alt="Procedimento injetável" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={tricoImg} alt="Tricologia" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={proc2} alt="Cuidado com a pele" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={scienceImg} alt="Atendimento" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 md:py-28 px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Contato</div>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-balance">
            Vamos conversar sobre o seu próximo passo.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Avaliação personalizada, escuta atenta e um plano feito sob medida para os seus
            objetivos.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent transition"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                WhatsApp
              </div>
              <div className="font-serif text-lg">(31) 99200-3849</div>
            </a>
            <a
              href="mailto:agaemanuelle@outlook.com"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent transition"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                E-mail
              </div>
              <div className="font-serif text-lg break-all">agaemanuelle@outlook.com</div>
            </a>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Localização
              </div>
              <div className="font-serif text-lg">Planalto · BH/MG</div>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex btn-agendar text-sm px-8 py-4 rounded-full hover:opacity-95 transition"
          >
            Agendar avaliação no WhatsApp →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-auto object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]" />
            <span className="font-serif text-base text-foreground">
              Dra. Ágatha Emanuelle <span className="text-accent">·</span> Biomédica Esteta
            </span>
          </div>
          <div>© {new Date().getFullYear()} — Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
