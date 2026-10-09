"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingDown,
  MapPin,
  Smartphone,
  Cpu,
  Brain,
  Check,
  MessageSquare
} from "lucide-react";

import NeuralBackground from "@/components/NeuralBackground";
import FlowOSMockup from "@/components/FlowOSMockup";
import FluxoScorePanel from "@/components/FluxoScorePanel";
import MethodTimeline from "@/components/MethodTimeline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Painel de Planos Interativo com Efeito de Glow que acompanha o Mouse
interface PlanCardProps {
  title: string;
  price: string;
  badge?: string;
  desc: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

function PlanCard({ title, price, badge, desc, features, ctaText, popular }: PlanCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl border p-6 flex flex-col gap-6 transition-all duration-300 backdrop-blur-md overflow-hidden group ${
        popular
          ? "bg-slate-950/70 border-brand-blue/30 shadow-lg shadow-brand-blue/5 md:-translate-y-4"
          : "bg-slate-950/40 border-slate-900 hover:border-slate-800"
      }`}
    >
      {/* Glow Follower Effect */}
      {isHovered && (
        <div
          className="absolute -inset-px pointer-events-none rounded-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(25, 118, 210, 0.15), transparent 80%)`
          }}
        />
      )}

      {/* Decorative Border highlight */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          padding: "1px",
          background: popular
            ? "linear-gradient(to bottom, #1976D2, #8B1538)"
            : "linear-gradient(to bottom, rgba(25, 118, 210, 0.3), transparent)"
        }}
      >
        <div className="w-full h-full bg-slate-950 rounded-2xl" />
      </div>

      <div className="flex justify-between items-start">
        <div>
          {badge && (
            <span className="text-[9px] font-bold tracking-widest text-brand-red uppercase px-2 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/20 mb-2 inline-block">
              {badge}
            </span>
          )}
          <h4 className="text-lg font-bold font-display text-slate-100">{title}</h4>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-500 block">Investimento</span>
          <span className="text-xl font-extrabold font-mono text-slate-100">{price}</span>
        </div>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed font-light">{desc}</p>
      
      <hr className="border-slate-900" />

      <ul className="flex flex-col gap-2.5 text-xs text-slate-300 flex-1">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20plano%20${encodeURIComponent(
          title
        )}%20do%20Fluxo%20Odonto.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-2.5 rounded-lg text-xs font-bold text-center transition-all ${
          popular
            ? "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-md shadow-brand-blue/10"
            : "bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:bg-slate-800"
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <NeuralBackground />

      {/* Floating Ambient Glows */}
      <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] glow-spot glow-deep" />
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] glow-spot glow-blue" />
      <div className="absolute top-[60%] left-[5%] w-[350px] h-[350px] glow-spot glow-red" />

      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* HERO SECTION */}
        <section id="inicio" className="min-h-screen flex items-center pt-24 pb-12 px-4 relative">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-6 flex flex-col gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1.5 self-start px-3 py-1 bg-brand-deep/20 border border-brand-blue/10 rounded-full text-[10px] text-brand-blue font-semibold uppercase tracking-wider"
              >
                <Brain className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                Growth Tech para Odontologia
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-extrabold font-display leading-[1.1] text-slate-100 tracking-tight"
              >
                Sua clínica está pronta para crescer com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-400 to-brand-red">
                  Inteligência Artificial?
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-slate-400 leading-relaxed font-light max-w-lg"
              >
                Utilizamos tecnologia proprietária, SEO de precisão, tráfego pago focado em alta rentabilidade e agentes virtuais de IA para transformar clínicas odontológicas em operações digitais de alto desempenho.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-2"
              >
                <a
                  href="https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20receber%20um%20diagnóstico%20digital%20gratuito%20da%20minha%20clínica%20odontológica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-blue/90 text-xs font-bold text-center text-white transition-all shadow-md shadow-brand-blue/10 flex items-center justify-center gap-2 group"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#flowos"
                  className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  Conhecer o FlowOS
                </a>
              </motion.div>

              {/* Minimalist social proof metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-900 mt-4 max-w-md"
              >
                <div>
                  <div className="text-xl font-bold font-mono text-slate-100">30 dias</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold mt-0.5">Estabilização</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-slate-100">+40%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold mt-0.5">Pacientes Particulares</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-slate-100">24/7</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold mt-0.5">Atendimento por IA</div>
                </div>
              </motion.div>
            </div>

            {/* Right Interactive Mockup Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 lg:col-span-6 w-full"
            >
              <FlowOSMockup />
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: DORES (PAIN POINTS) */}
        <section id="solucoes" className="py-20 px-4 border-t border-slate-950/20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase">A Realidade do Mercado</span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100 tracking-tight">
                Por que tantas clínicas deixam pacientes na mesa?
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">
                A excelência clínica não garante agenda cheia. A falta de infraestrutura tecnológica gera gargalos invisíveis que desperdiçam faturamento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <TrendingDown className="w-6 h-6 text-brand-red" />,
                  title: "Site que não gera contatos",
                  desc: "Páginas institucionais genéricas e lentas que dispersam o paciente particular antes do clique no WhatsApp.",
                  label: "Incompatibilidade"
                },
                {
                  icon: <MapPin className="w-6 h-6 text-brand-blue" />,
                  title: "GMN Invisível ou Desatualizado",
                  desc: "A clínica não aparece no Google Maps exatamente no momento em que o paciente busca por uma emergência.",
                  label: "Google Maps"
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-amber-500" />,
                  title: "Instagram Sem estratégia B2C",
                  desc: "Posts técnicos ou estéticos que apenas atraem curtidas de outros dentistas e não atraem novos agendamentos.",
                  label: "Posicionamento"
                },
                {
                  icon: <Cpu className="w-6 h-6 text-emerald-400" />,
                  title: "Processos e Triagens Manuais",
                  desc: "Demora nas respostas no WhatsApp que faz o lead esfriar e agendar em outro consultório que respondeu mais rápido.",
                  label: "Atendimento"
                }
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-900 flex flex-col gap-4 relative overflow-hidden group"
                >
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 self-start">
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{card.label}</span>
                    <h3 className="text-sm font-bold text-slate-200">{card.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: METODO TIMELINE */}
        <section className="py-20 px-4 bg-slate-950/20 border-y border-slate-900/30 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">Metodologia</span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100 tracking-tight">
                Como funciona o Método Fluxo
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">
                Uma transição estruturada para transformar a presença digital da sua clínica de ponta a ponta.
              </p>
            </div>

            <MethodTimeline />
          </div>
        </section>

        {/* SECTION 4: FLOWOS SHOWCASE */}
        <section id="flowos" className="py-20 px-4 relative overflow-hidden">
          <div className="absolute right-0 top-1/4 w-[400px] h-[400px] glow-spot glow-blue opacity-10" />

          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 text-left relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">Plataforma Proprietária</span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100 tracking-tight leading-[1.15]">
                Apresentamos o FlowOS
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                Esqueça planilhas desorganizadas ou CRM genéricos que não compreendem a dinâmica de uma clínica. O <strong className="font-semibold text-slate-200">FlowOS</strong> é nossa infraestrutura de crescimento focada na jornada do paciente. 
              </p>

              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Do primeiro clique no anúncio até a reativação de um paciente antigo (recall), cada etapa é monitorada, registrada e impulsionada por inteligência automatizada.
              </p>

              {/* Grid of highlights */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { title: "CRM Odontológico", desc: "Pipeline moldado para tratamentos" },
                  { title: "Monitoramento de SEO", desc: "Posição local no Google Maps" },
                  { title: "Integração com WhatsApp", desc: "Respostas por Agentes de IA" },
                  { title: "Dashboard Dinâmico", desc: "Métricas de ROI em tempo real" }
                ].map((item) => (
                  <div key={item.title} className="p-3 rounded-xl bg-slate-950/40 border border-slate-900 flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-slate-200">{item.title}</span>
                    <span className="text-[10px] text-slate-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Platform Mockup View (Visual Showcase) */}
            <div className="col-span-1 lg:col-span-7 relative z-10">
              <div className="glass-panel p-2 rounded-xl border border-brand-blue/10 bg-slate-950/50 shadow-2xl relative group">
                <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-tr from-brand-blue/20 to-brand-red/20 opacity-30 blur-lg pointer-events-none group-hover:opacity-40 transition-opacity" />
                <img
                  src="/dashboard.png"
                  alt="FlowOS Interface Oficial"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRICING PRODUCTS */}
        <section className="py-20 px-4 bg-slate-950/20 border-y border-slate-900/30 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase">Nossos Planos</span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100 tracking-tight">
                Soluções desenhadas para a sua escala
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">
                Do básico local ao ecossistema automatizado por inteligência artificial. Escolha o motor de tração da sua clínica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
              <PlanCard
                title="Fluxo Start"
                price="Consultar"
                badge="Presença Local"
                desc="Ideal para clínicas que desejam estruturar a base e começar a aparecer organicamente para pacientes de alto ticket na sua região."
                features={[
                  "Otimização do Google Meu Negócio",
                  "Site de Conversão Ultra-Rápido (Mobile)",
                  "Configuração Básica de Palavras-Chave SEO",
                  "Auditoria de Posicionamento Mensal",
                  "Suporte Comercial por E-mail"
                ]}
                ctaText="Começar Agora"
              />

              <PlanCard
                title="Fluxo Pro"
                price="Mais Vendido"
                badge="Tração & Performance"
                popular={true}
                desc="O motor de aceleração. Conectamos sua clínica a quem busca tratamentos de alta rentabilidade através de tráfego pago avançado."
                features={[
                  "Tudo do Plano Start",
                  "Gestão Completa de Tráfego Pago (Google Ads)",
                  "Otimização Contínua de Campanhas",
                  "Site Premium de Alta Conversão Multi-páginas",
                  "Pipeline e Integração FlowOS CRM",
                  "Relatório de ROI de Especialidades",
                  "Suporte Dedicado via WhatsApp comercial"
                ]}
                ctaText="Implementar Performance"
              />

              <PlanCard
                title="Fluxo Elite"
                price="Exclusivo"
                badge="Tecnologia & IA"
                desc="Para grandes clínicas que buscam automação completa de atendimento 24/7 e processos inteligentes para não perder nenhum lead."
                features={[
                  "Tudo do Plano Pro",
                  "Ativação de Agentes de IA (n8n/WhatsApp)",
                  "Triagem Automática e Qualificação por IA",
                  "Fluxo de Recall (Reativação de Contatos)",
                  "Site de Altíssima Velocidade Premium Personalizado",
                  "Treinamento de Secretária para Uso do Funil",
                  "Apoio Direto no Planejamento Estratégico",
                  "Suporte Prioritário VIP"
                ]}
                ctaText="Agendar Demonstração IA"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: FLUXO SCORE™ */}
        <section id="score" className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">Diagnóstico Interativo</span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100 tracking-tight">
                Calcule a saúde digital da sua clínica
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">
                Uma presença frágil nos canais digitais é o maior ralo de faturamento. Descubra onde sua clínica está perdendo pacientes.
              </p>
            </div>

            <FluxoScorePanel />
          </div>
        </section>

        {/* SECTION 7: CTA FINAL */}
        <section id="contato" className="py-24 px-4 relative overflow-hidden bg-slate-950 border-t border-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/10 via-transparent to-brand-red/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-spot glow-blue opacity-10 blur-[180px]" />

          <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col gap-8 items-center">
            <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
              Diagnóstico Gratuito
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-100 tracking-tight leading-tight max-w-xl">
              Descubra o verdadeiro potencial digital da sua clínica.
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-light max-w-lg leading-relaxed">
              Agende uma reunião de diagnóstico de 15 minutos. Analisaremos sua região, seus concorrentes locais e apresentaremos um plano prático para implementar o Fluxo Odonto na sua estrutura.
            </p>

            <a
              href="https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20agendar%20o%20meu%20diagnóstico%20digital%20gratuito%20do%20meu%20consultório."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-xs font-bold text-center text-white transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 group mt-2"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* WhatsApp Flutuante Discreto */}
        <a
          href="https://wa.me/5521966052646?text=Olá!%20Estou%20visitando%20o%20site%20do%20Fluxo%20Odonto%20e%20gostaria%20de%20tirar%20uma%20dúvida."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-slate-950/85 backdrop-blur border border-brand-blue/20 hover:border-brand-blue/50 text-brand-blue hover:text-white transition-all shadow-xl flex items-center justify-center group"
          aria-label="Fale conosco no WhatsApp"
        >
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse" />
          <MessageSquare className="w-5.5 h-5.5" />
        </a>
      </main>

      <Footer />
    </>
  );
}
