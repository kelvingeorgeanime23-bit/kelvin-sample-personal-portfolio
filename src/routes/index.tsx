import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { HeroScene } from "@/components/HeroScene";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kelvin George Nderi — Developer. Designer. Builder." },
      { name: "description", content: "Portfolio of Kelvin George Nderi, a Nairobi-based developer and designer building Android apps, web platforms and creative experiments." },
      { property: "og:title", content: "Kelvin George Nderi — Developer & Designer" },
      { property: "og:description", content: "Nairobi-based developer building Android apps, web platforms and creative experiments." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap" },
    ],
  }),
  component: Portfolio,
});

const EASE = [0.23, 1, 0.32, 1] as const;
const SECTIONS = ["home", "about", "work", "skills", "contact"] as const;

function Nav() {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(13,13,15,0.6)",
        borderBottom: "1px solid rgba(245,243,239,0.06)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-sm font-semibold tracking-tight">
          Kelvin<span style={{ color: "#F59E0B" }}>.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="font-display text-sm capitalize transition-opacity hover:opacity-100 flex items-center gap-1.5"
              style={{ opacity: active === s ? 1 : 0.55, transition: "opacity 160ms ease-out" }}
            >
              {active === s && (
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#F59E0B" }} />
              )}
              {s}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(245,158,11,0.08), transparent 60%), linear-gradient(180deg, transparent 60%, #0D0D0F 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, staggerChildren: 0.05 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            className="mb-6 font-display text-xs uppercase tracking-[0.3em]"
            style={{ color: "#F59E0B" }}
          >
            Nairobi · Kenya
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="font-display font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
          >
            Kelvin George<br />
            <span style={{ color: "#F59E0B" }}>Nderi.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
            className="mt-8 font-display text-xl md:text-2xl"
            style={{ opacity: 0.7 }}
          >
            Developer. Designer. Builder.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-sm font-medium active:scale-[0.97]"
              style={{
                background: "#F59E0B",
                color: "#0D0D0F",
                transition: "transform 160ms ease-out, background 160ms ease-out",
              }}
            >
              See selected work →
            </a>
            <a
              href="#contact"
              className="font-display text-sm"
              style={{ opacity: 0.6, transition: "opacity 160ms ease-out" }}
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.35, ease: EASE },
};

function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <motion.div {...reveal} className="md:col-span-7">
          <p className="mb-6 font-display text-xs uppercase tracking-[0.3em]" style={{ color: "#F59E0B" }}>
            01 — About
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
            I build software that feels designed, not assembled.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed" style={{ opacity: 0.75, maxWidth: "52ch" }}>
            <p>
              I'm a developer and designer based in Nairobi, working at the intersection of mobile, web,
              and product. I care about details — type, motion, the rhythm of a screen.
            </p>
            <p>
              Currently shipping Android with Kotlin and Jetpack Compose, and full-stack with Django,
              Python and Supabase on the backend.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
          className="md:col-span-5 md:mt-32"
        >
          <div className="glass-card rounded-2xl p-7">
            <p className="mb-5 font-display text-xs uppercase tracking-[0.25em]" style={{ color: "#F59E0B" }}>
              Stack
            </p>
            <dl className="space-y-3 font-display text-sm">
              {[
                ["Mobile", "Kotlin · Jetpack Compose"],
                ["Backend", "Django · Python"],
                ["Data", "Supabase · PostgreSQL"],
                ["Web", "HTML · CSS · React"],
                ["Tooling", "Git · Figma · Linux"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b pb-3" style={{ borderColor: "rgba(245,243,239,0.08)" }}>
                  <dt style={{ opacity: 0.5 }}>{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "LockIn",
    type: "Android App",
    desc: "A focus and productivity app for deep work sessions, built with Kotlin and Jetpack Compose.",
    tag: "Mobile",
    span: "md:col-span-8 md:row-span-2",
    h: "min-h-[420px]",
  },
  {
    title: "PlotWatch",
    type: "Rental Management",
    desc: "Django-powered platform for landlords to track tenants, leases and rent payments.",
    tag: "Full-stack",
    span: "md:col-span-4",
    h: "min-h-[200px]",
  },
  {
    title: "Midnight Love Card",
    type: "Creative Dev",
    desc: "A small interactive web piece exploring typography, motion and intimate digital expression.",
    tag: "Experiment",
    span: "md:col-span-4",
    h: "min-h-[200px]",
  },
];

function ProjectCard({ p, i }: { p: typeof PROJECTS[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: EASE, delay: i * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 ${p.span} ${p.h}`}
      style={{
        background: "#121215",
        border: "1px solid rgba(245,243,239,0.07)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 20px 60px -20px rgba(245,158,11,0.25)" : "0 0 0 transparent",
        transition: "transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out",
        borderColor: hover ? "rgba(245,158,11,0.3)" : "rgba(245,243,239,0.07)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ opacity: 0.5 }}>
          {p.type}
        </span>
        <span
          className="rounded-full px-2.5 py-1 font-display text-[10px] uppercase tracking-wider"
          style={{ border: "1px solid rgba(245,158,11,0.3)", color: "#F59E0B" }}
        >
          {p.tag}
        </span>
      </div>
      <div>
        <h3 className="font-display text-3xl font-semibold md:text-4xl">{p.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ opacity: 0.65 }}>
          {p.desc}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-sm" style={{ color: "#F59E0B" }}>
          View case study →
        </span>
      </div>
    </motion.article>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal} className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em]" style={{ color: "#F59E0B" }}>
              02 — Selected work
            </p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">A few things I've built.</h2>
          </div>
          <p className="hidden max-w-xs text-sm md:block" style={{ opacity: 0.55 }}>
            Spanning mobile, web platforms and creative one-offs.
          </p>
        </motion.div>
        <div className="grid auto-rows-min grid-cols-1 gap-5 md:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILLS = ["Kotlin", "Jetpack Compose", "Django", "Python", "HTML", "CSS", "Supabase", "Android"];

function Skills() {
  const row = [...SKILLS, ...SKILLS];
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto mb-14 max-w-6xl px-6">
        <motion.p {...reveal} className="mb-4 font-display text-xs uppercase tracking-[0.3em]" style={{ color: "#F59E0B" }}>
          03 — Toolkit
        </motion.p>
        <motion.h2 {...reveal} className="font-display text-4xl font-semibold md:text-5xl">
          The tools I reach for.
        </motion.h2>
      </div>
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}>
        <div className="marquee-track flex w-max gap-4 py-2">
          {row.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="whitespace-nowrap rounded-full px-6 py-3 font-display text-sm"
              style={{
                border: "1px solid rgba(245,243,239,0.1)",
                background: "rgba(20,20,23,0.6)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="mb-4 font-display text-xs uppercase tracking-[0.3em]" style={{ color: "#F59E0B" }}>
          04 — Contact
        </motion.p>
        <motion.h2 {...reveal} className="font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
          Let's build something together.
        </motion.h2>
        <motion.p {...reveal} className="mt-5 text-lg" style={{ opacity: 0.65, maxWidth: "48ch" }}>
          Open to freelance projects, collaborations and full-time roles.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, ease: EASE, delay: 0.1 }}
          onSubmit={onSubmit}
          className="mt-14 space-y-10"
        >
          {[
            { id: "name", label: "Your name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-2 block font-display text-xs uppercase tracking-[0.25em]" style={{ opacity: 0.5 }}>
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                className="w-full bg-transparent py-3 font-display text-lg outline-none"
                style={{
                  borderBottom: "1px solid rgba(245,243,239,0.15)",
                  transition: "border-color 200ms ease-out",
                }}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#F59E0B")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245,243,239,0.15)")}
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block font-display text-xs uppercase tracking-[0.25em]" style={{ opacity: 0.5 }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none bg-transparent py-3 font-display text-lg outline-none"
              style={{
                borderBottom: "1px solid rgba(245,243,239,0.15)",
                transition: "border-color 200ms ease-out",
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#F59E0B")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245,243,239,0.15)")}
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-10 font-display text-sm font-medium active:scale-[0.97]"
            style={{
              background: "#F59E0B",
              color: "#0D0D0F",
              transition: "transform 160ms ease-out, width 300ms ease-out",
              minWidth: sent ? "56px" : "180px",
              width: sent ? "56px" : "auto",
            }}
          >
            <span
              style={{
                clipPath: sent ? "inset(0 100% 0 0)" : "inset(0 0 0 0)",
                transition: "clip-path 250ms ease-out",
              }}
            >
              Send message
            </span>
            <span
              className="absolute inset-0 flex items-center justify-center"
              style={{
                clipPath: sent ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
                transition: "clip-path 300ms ease-out 100ms",
              }}
              aria-hidden
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full" style={{ background: "rgba(245,243,239,0.08)" }} />
        <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-sm" style={{ opacity: 0.55 }}>
            © 2026 Kelvin George Nderi · Nairobi
          </p>
          <div className="flex gap-6 font-display text-sm">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a key={l} href="#" style={{ opacity: 0.55, transition: "opacity 160ms ease-out" }} className="hover:opacity-100">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen" style={{ background: "#0D0D0F" }}>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
