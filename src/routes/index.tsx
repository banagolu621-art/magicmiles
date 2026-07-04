import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ShoppingCart,
  Boxes,
  Sheet as SheetIcon,
  BookOpen,
  Brain,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  X,
  ZoomIn,
  Sparkles,
  Zap,
  Database,
  Network,
} from "lucide-react";

import heroImg from "@/assets/hero-ai-restaurant.jpg";
import workflowImg from "@/assets/n8n-workflow.jpg";
import { Navbar } from "@/components/Navbar";
import { BackgroundFx } from "@/components/BackgroundFx";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

const CHAT_URL =
  "https://developer25.app.n8n.cloud/webhook/420ac5fd-e683-4ad0-b76c-516bea1666eb/chat";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQBhzrsXZs-9E7KZOPop-yfD5ZDtEKQoqdR-uKkOnOoe_SkD9dNDwTKRj-dRCGNW5lqPDjhyLNhGri-/pubhtml";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magic Miles AI — Intelligent Restaurant Assistant" },
      {
        name: "description",
        content:
          "An AI-powered restaurant assistant built with n8n, GPT-5, Google Sheets and Pinecone RAG. Takes orders, manages inventory and answers customer FAQs in real time.",
      },
      { property: "og:title", content: "Magic Miles AI — Intelligent Restaurant Assistant" },
      {
        property: "og:description",
        content:
          "AI restaurant assistant that automates orders, inventory and customer support using n8n, OpenAI GPT-5 and Pinecone RAG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="top" className="relative min-h-screen dark">
      <BackgroundFx />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Workflow />
        <Features />
        <Stack />
        <Architecture />
        <Stats />
        <Demo />
        <Inventory />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Live AI Agent · Powered by n8n + GPT-5
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">Magic Miles AI</span>
              <br />
              <span className="text-foreground/90">Restaurant Assistant</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              An intelligent restaurant assistant powered by AI that takes customer
              orders, answers FAQs, manages inventory automatically and provides
              real‑time restaurant support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                Try Live Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
              >
                View Inventory
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>Real‑time responses</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span>Zero manual entry</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span>Pinecone RAG</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl glass-strong shadow-card">
              <img
                src={heroImg}
                alt="AI assistant powering a modern restaurant with automated orders and inventory"
                width={1536}
                height={1024}
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const customers = [
    "View menu",
    "Place orders",
    "Ask FAQs",
    "Read restaurant policies",
    "Check availability",
    "Receive instant AI responses",
  ];
  const owners = [
    "Automatic order recording",
    "Live inventory management",
    "AI‑powered customer support",
    "Zero manual data entry",
    "Intelligent FAQ retrieval using RAG",
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Overview"
            title="How Magic Miles AI Works"
            description="An AI‑powered restaurant assistant that automates customer interactions and back‑of‑house management, end to end."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3">
                <IconWrap>
                  <Bot className="h-5 w-5" />
                </IconWrap>
                <h3 className="text-xl font-semibold">For Customers</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {customers.map((c) => (
                  <BulletItem key={c}>{c}</BulletItem>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3">
                <IconWrap>
                  <Boxes className="h-5 w-5" />
                </IconWrap>
                <h3 className="text-xl font-semibold">For Restaurant Owners</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {owners.map((c) => (
                  <BulletItem key={c}>{c}</BulletItem>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORKFLOW ---------------- */
function Workflow() {
  const [open, setOpen] = useState(false);
  const badges = [
    "Chat Trigger",
    "GPT-5",
    "AI Agent",
    "Google Sheets",
    "Inventory",
    "Order Management",
    "Pinecone RAG",
    "OpenAI",
  ];

  return (
    <section id="workflow" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Automation"
            title="n8n Automation Workflow"
            description="The full end‑to‑end orchestration wiring the chat trigger to GPT‑5, Google Sheets and Pinecone."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            {/* Laptop mockup */}
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-8 rounded-[3rem] bg-primary/15 blur-3xl" />
              <div className="relative rounded-2xl glass-strong p-3 shadow-card">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                  aria-label="Enlarge workflow image"
                >
                  <img
                    src={workflowImg}
                    alt="n8n automation workflow"
                    width={1600}
                    height={960}
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-lg glass-strong px-3 py-1.5 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5" /> Click to enlarge
                  </span>
                </button>
              </div>
              {/* laptop base */}
              <div className="mx-auto h-3 w-[92%] rounded-b-2xl bg-gradient-to-b from-white/10 to-transparent" />
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl glass-strong"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={workflowImg} alt="n8n automation workflow enlarged" className="h-auto w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    {
      icon: Bot,
      title: "AI Restaurant Chatbot",
      desc: "Instantly answers customer questions and understands natural language.",
    },
    {
      icon: ShoppingCart,
      title: "Smart Ordering",
      desc: "Automatically captures customer name, item, quantity and price.",
    },
    {
      icon: Boxes,
      title: "Inventory Automation",
      desc: "Updates inventory automatically after every successful order.",
    },
    {
      icon: SheetIcon,
      title: "Google Sheets Integration",
      desc: "Stores orders and inventory inside Google Sheets without manual work.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      desc: "Uses Pinecone RAG to answer restaurant FAQs and policies accurately.",
    },
    {
      icon: Brain,
      title: "Memory",
      desc: "Maintains conversation context for natural interactions.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Features"
            title="Built for real restaurants"
            description="Every capability you need to automate customer chat and back‑of‑house operations."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <GlassCard className="group h-full p-7 transition-all hover:-translate-y-1 hover:border-primary/30">
                <IconWrap>
                  <it.icon className="h-5 w-5" />
                </IconWrap>
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STACK ---------------- */
function Stack() {
  const tech = [
    { name: "n8n", tag: "Workflow" },
    { name: "OpenAI GPT-5", tag: "LLM" },
    { name: "Google Sheets API", tag: "Data" },
    { name: "Pinecone", tag: "Vector DB" },
    { name: "Lovable", tag: "Frontend" },
    { name: "JavaScript", tag: "Language" },
    { name: "REST APIs", tag: "Integration" },
    { name: "AI Agents", tag: "Orchestration" },
  ];
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Powered by best‑in‑class tools"
            description="A composable stack purpose‑built for AI automation."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {tech.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t.tag}
                </div>
                <div className="mt-2 font-display text-lg font-semibold">{t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ARCHITECTURE ---------------- */
function Architecture() {
  const flow = [
    "Customer",
    "Lovable Website",
    "n8n Chat Trigger",
    "GPT-5 AI Agent",
    "Decision Engine",
    "Google Sheets",
    "Inventory Update",
    "Order Sheet",
    "Pinecone RAG",
    "Customer Response",
  ];
  return (
    <section id="architecture" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Architecture"
            title="Data flow at a glance"
            description="From the customer's first message to the final AI response, every step is automated."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto pb-4">
            <div className="mx-auto flex min-w-max items-center gap-3">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="relative rounded-xl glass-strong px-4 py-3 text-sm font-medium">
                    {step}
                  </div>
                  {i < flow.length - 1 && (
                    <div className="relative h-[2px] w-10 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="absolute inset-y-0 left-0 h-full w-6 rounded-full bg-primary animate-flow-dot"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const cards = [
    { label: "AI Model", value: "GPT-5", icon: Sparkles },
    { label: "Workflow Engine", value: "n8n", icon: Network },
    { label: "Knowledge Base", value: "Pinecone", icon: Brain },
    { label: "Database", value: "Google Sheets", icon: Database },
    { label: "Automation", value: <><Counter to={100} suffix="%" /></>, icon: Zap },
    { label: "Response Time", value: "Real‑Time", icon: Bot },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Statistics"
            title="Project at a glance"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <GlassCard className="flex items-center gap-4 p-6">
                <IconWrap>
                  <c.icon className="h-5 w-5" />
                </IconWrap>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-gradient">
                    {c.value}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEMO ---------------- */
function Demo() {
  return (
    <section id="demo" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center shadow-card md:p-16">
            <div className="absolute -inset-24 bg-gradient-to-br from-primary/25 via-transparent to-emerald-deep/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Live
              </div>
              <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                Try the AI Restaurant Assistant
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Experience the AI‑powered ordering system in real time.
              </p>
              <a
                href={CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Launch AI Assistant
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- INVENTORY ---------------- */
function Inventory() {
  return (
    <section id="inventory" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Live Data"
            title="Live Inventory"
            description="Browse the current menu and inventory — updated automatically by the AI agent."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl glass-strong">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="text-sm text-muted-foreground">Google Sheets · Live view</div>
              <a
                href={SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-glow"
              >
                Open Live Inventory <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <iframe
              src={SHEET_URL + "?widget=true&amp;headers=false"}
              title="Magic Miles Live Inventory"
              className="h-[520px] w-full bg-white"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "How do I place an order?",
      a: "Open the live demo, tell the assistant what you'd like — item name and quantity. It captures your name and item details, then confirms your order.",
    },
    {
      q: "How is inventory updated?",
      a: "After every successful order the AI Agent calls the Update Inventory tool which decrements the item's quantity in Google Sheets automatically.",
    },
    {
      q: "How are FAQs answered?",
      a: "Restaurant policies and FAQs are stored in a Pinecone vector database. The agent retrieves the most relevant context via RAG and answers accurately.",
    },
    {
      q: "Does the chatbot remember previous messages?",
      a: "Yes — the agent uses a buffered memory window so it can maintain context across turns of the conversation.",
    },
    {
      q: "Is Google Sheets updated automatically?",
      a: "Absolutely. Orders are appended and inventory is updated with zero manual data entry.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
          />
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl glass">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{it.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="grid gap-8 rounded-3xl glass-strong p-10 md:grid-cols-2 md:items-center md:p-14">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary">
                Get in touch
              </div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Magic Miles AI</h2>
              <p className="mt-2 text-sm text-muted-foreground">AI Automation Project</p>
              <a
                href="mailto:your@email.com"
                className="mt-6 inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" /> your@email.com
              </a>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition-all hover:border-primary/40"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition-all hover:border-primary/40"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const tools = ["n8n", "OpenAI", "Pinecone", "Google Sheets", "Lovable"];
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Magic Miles AI. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>Made with</span>
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full glass px-2.5 py-1 text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ---------------- UI PRIMITIVES ---------------- */
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl glass shadow-card ${className}`}>{children}</div>
  );
}

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
      {children}
    </span>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-foreground/85">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      {children}
    </li>
  );
}
