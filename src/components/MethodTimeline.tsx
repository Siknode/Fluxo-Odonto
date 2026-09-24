"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Map,
  Code2,
  Cpu,
  TrendingUp,
  ChevronDown
} from "lucide-react";

interface Step {
  num: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
}

export default function MethodTimeline() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Diagnóstico Digital",
      subtitle: "Auditoria de Posicionamento Local",
      icon: <FileSearch className="w-6 h-6" />,
      desc: "Análise aprofundada da sua presença atual. Mapeamos os concorrentes na sua região, descobrimos o volume de buscas pelos procedimentos mais lucrativos (implantes, alinhadores, estética) e diagnosticamos os gargalos de conversão do seu canal atual.",
      color: "border-brand-blue/30 text-brand-blue bg-slate-900/40"
    },
    {
      num: "02",
      title: "Planejamento Estratégico",
      subtitle: "Arquitetura do Funil de Alta Renda",
      icon: <Map className="w-6 h-6" />,
      desc: "Desenhamos as rotas de atração de pacientes de alto ticket. Definimos o orçamento de tráfego regional no Google Ads, estruturamos os gatilhos mentais ideais para atrair o público particular e desenhamos a integração dos canais de captação.",
      color: "border-brand-blue/30 text-brand-blue bg-slate-900/40"
    },
    {
      num: "03",
      title: "Implementação & Tráfego",
      subtitle: "Lançamento da Máquina de Captura",
      icon: <Code2 className="w-6 h-6 text-amber-400" />,
      desc: "Desenvolvemos o seu Site de Alta Conversão com carregamento instantâneo. Otimizamos seu perfil no Google Maps (GMN) para dominar a busca orgânica local e ativamos as campanhas de tráfego pago focadas em conversão imediata.",
      color: "border-amber-500/30 text-amber-500 bg-slate-900/40"
    },
    {
      num: "04",
      title: "Automação e Agentes de IA",
      subtitle: "Eficiência de Resposta em Segundos",
      icon: <Cpu className="w-6 h-6 text-brand-red" />,
      desc: "Integramos o FlowOS com agentes inteligentes baseados em IA. Os agentes realizam a triagem do paciente, respondem dúvidas comuns sobre tratamentos, qualificam o interesse e iniciam o agendamento no WhatsApp 24 horas por dia, sem sobrecarregar sua secretária.",
      color: "border-brand-red/30 text-brand-red bg-slate-900/40"
    },
    {
      num: "05",
      title: "Crescimento Previsível",
      subtitle: "Escala e Agenda Estável",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      desc: "Acompanhamento diário das métricas de custo por lead e taxa de agendamento. O fluxo de pacientes particulares estabiliza, gerando previsibilidade financeira. Sua clínica passa a crescer de forma controlada e você foca apenas no atendimento.",
      color: "border-emerald-500/30 text-emerald-400 bg-slate-900/40"
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Central Connector Line */}
      <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-brand-blue via-brand-red to-emerald-500 transform md:-translate-x-1/2 -z-10 opacity-30" />

      <div className="flex flex-col gap-12 md:gap-20">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.num}
              className={`flex flex-col md:flex-row relative items-start md:items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-brand-blue/30 bg-bg-dark flex items-center justify-center transform -translate-x-1/2 z-15 shadow-lg shadow-brand-blue/10">
                <span className={`w-3.5 h-3.5 rounded-full ${index === 3 ? "bg-brand-red" : index === 4 ? "bg-emerald-500" : "bg-brand-blue"} animate-pulse`} />
              </div>

              {/* Spacing for layout alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Timeline Info Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-brand-blue/5 shadow-xl transition-all duration-300 relative">
                  {/* Decorative Stage Number in background */}
                  <div className="absolute right-6 top-4 text-5xl font-black font-mono text-slate-800/10 pointer-events-none">
                    {step.num}
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-2.5 rounded-lg border ${step.color}`}>
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest text-slate-500 font-bold uppercase">
                        {step.subtitle}
                      </span>
                      <h4 className="text-base md:text-lg font-bold font-display text-slate-100">
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
