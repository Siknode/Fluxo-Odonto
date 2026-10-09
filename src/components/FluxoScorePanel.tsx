"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  Phone,
  BarChart3,
  MapPin,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  HelpCircle
} from "lucide-react";

interface Metric {
  id: string;
  name: string;
  value: number;
  weight: number;
  icon: React.ReactNode;
  desc: string;
}

export default function FluxoScorePanel() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: "seo",
      name: "SEO Local & Orgânico",
      value: 35,
      weight: 0.2,
      icon: <Search className="w-4.5 h-4.5" />,
      desc: "Presença orgânica no topo da página de pesquisa do Google na região."
    },
    {
      id: "ads",
      name: "Google Ads (Tráfego)",
      value: 40,
      weight: 0.25,
      icon: <Zap className="w-4.5 h-4.5" />,
      desc: "Campanhas ativas direcionadas a termos de alto ticket (implante, estética)."
    },
    {
      id: "speed",
      name: "Velocidade & Conversão do Site",
      value: 50,
      weight: 0.15,
      icon: <Zap className="w-4.5 h-4.5 text-amber-400" />,
      desc: "Tempo de carregamento e facilidade para iniciar contato via WhatsApp."
    },
    {
      id: "gmn",
      name: "Google Meu Negócio (GMN)",
      value: 30,
      weight: 0.2,
      icon: <MapPin className="w-4.5 h-4.5" />,
      desc: "Posicionamento no Google Maps, fotos da clínica e avaliações de pacientes."
    },
    {
      id: "whatsapp",
      name: "Conversão no WhatsApp (Atendimento)",
      value: 45,
      weight: 0.2,
      icon: <Phone className="w-4.5 h-4.5" />,
      desc: "Tempo de resposta, qualificação do lead e follow-up ativo (Secretária vs IA)."
    }
  ]);

  const overallScore = Math.round(
    metrics.reduce((acc, curr) => acc + curr.value * curr.weight, 0)
  );

  const handleSliderChange = (id: string, val: number) => {
    setMetrics((prev) =>
      prev.map((m) => (m.id === id ? { ...m, value: val } : m))
    );
  };

  // Determine feedback based on score
  const getFeedback = (score: number) => {
    if (score < 45) {
      return {
        label: "Risco Crítico",
        color: "text-brand-red border-brand-red/30 bg-brand-red/5",
        barColor: "bg-brand-red",
        glowColor: "shadow-brand-red/20",
        desc: "Sua clínica está invisível no ambiente digital. Você depende 100% de indicações locais e convênios pouco lucrativos. Mais de 60% dos pacientes qualificados na sua região estão agendando com concorrentes agora mesmo.",
        icon: <AlertTriangle className="w-5 h-5 text-brand-red animate-pulse" />
      };
    } else if (score < 75) {
      return {
        label: "Desempenho Moderado",
        color: "text-amber-500 border-amber-500/30 bg-amber-500/5",
        barColor: "bg-amber-500",
        glowColor: "shadow-amber-500/20",
        desc: "Sua clínica gera alguma atenção digital, mas está perdendo muitos pacientes por 'vazamentos' no funil. Sites lentos ou demora no atendimento de secretárias desperdiçam de 30% a 50% das verbas investidas.",
        icon: <HelpCircle className="w-5 h-5 text-amber-500" />
      };
    } else {
      return {
        label: "Escala Avançada",
        color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
        barColor: "bg-emerald-400",
        glowColor: "shadow-emerald-400/20",
        desc: "Parabéns! Estrutura digital robusta. O próximo nível envolve a automação ultra-rápida do atendimento e campanhas preventivas automatizadas com inteligência artificial para maximizar o ticket de retorno e fidelidade.",
        icon: <CheckCircle className="w-5 h-5 text-emerald-400" />
      };
    }
  };

  const feedback = getFeedback(overallScore);

  return (
    <div className="w-full glass-panel border border-brand-blue/10 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 relative overflow-hidden backdrop-blur-2xl">
      {/* Dynamic glow overlay */}
      <div className={`absolute top-0 right-0 w-64 h-64 glow-spot ${overallScore < 45 ? "glow-red" : overallScore < 75 ? "glow-deep" : "glow-blue"} -translate-y-1/2 translate-x-1/3 opacity-20`} />

      {/* Sliders Input Column */}
      <div className="flex-1 flex flex-col gap-5.5 z-10">
        <div>
          <h3 className="text-xl font-bold font-display text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-brand-blue" />
            Simulador de Auditoria Digital
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Mova os controles deslizantes para simular o nível atual de maturidade da sua clínica em cada canal.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {metrics.map((m) => (
            <div key={m.id} className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-950/40 border border-brand-blue/5 hover:border-brand-blue/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded bg-brand-deep/20 text-brand-blue border border-brand-blue/10">
                    {m.icon}
                  </span>
                  <span className="text-xs font-semibold text-slate-300">{m.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-200">{m.value}%</span>
              </div>
              
              <input
                type="range"
                min="0"
                max="100"
                value={m.value}
                aria-label={m.name}
                onChange={(e) => handleSliderChange(m.id, parseInt(e.target.value, 10))}
                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              
              <p className="text-[10px] text-slate-500 leading-normal mt-0.5">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Result Display Column */}
      <div className="w-full lg:w-80 flex flex-col items-center justify-between p-6 rounded-2xl bg-slate-950/60 border border-brand-blue/10 relative overflow-hidden z-10">
        <div className="text-center">
          <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">Diagnóstico Geral</span>
          <h4 className="text-lg font-bold font-display text-slate-200 mt-1">Fluxo Score™</h4>
        </div>

        {/* Score Ring Dial */}
        <div className="relative flex items-center justify-center my-6">
          <svg className="w-40 h-40 transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="80"
              cy="80"
              r="68"
              className="stroke-slate-900"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Active ring */}
            <motion.circle
              cx="80"
              cy="80"
              r="68"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              className={`stroke-current ${overallScore < 45 ? "text-brand-red" : overallScore < 75 ? "text-amber-500" : "text-brand-blue"}`}
              initial={{ strokeDasharray: "427, 427", strokeDashoffset: 427 }}
              animate={{ strokeDashoffset: 427 - (427 * overallScore) / 100 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            />
          </svg>
          
          {/* Inner Number */}
          <div className="absolute flex flex-col items-center">
            <span className="text-4xl font-extrabold font-mono text-slate-100 tracking-tight">
              {overallScore}
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Pontos</span>
          </div>
        </div>

        {/* Score Category Badge */}
        <div className={`w-full border rounded-lg px-3 py-2 flex items-center gap-2 mb-4 font-semibold text-xs leading-normal ${feedback.color}`}>
          {feedback.icon}
          <div>
            <div className="text-[9px] uppercase tracking-wider text-slate-400">Classificação</div>
            <div>{feedback.label}</div>
          </div>
        </div>

        {/* Feedback text paragraph */}
        <p className="text-[11px] text-slate-400 text-center leading-relaxed mb-4">
          {feedback.desc}
        </p>

        {/* CTA to get professional audit */}
        <a
          href="https://wa.me/5521966052646?text=Olá!%20Simulei%20o%20Fluxo%20Score%20da%20minha%20clínica%20e%20gostaria%20de%20receber%20um%20diagnóstico%20gratuito%20completo."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-lg bg-brand-deep border border-brand-blue/30 text-xs font-semibold text-center text-slate-200 hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Solicitar Diagnóstico Físico
        </a>
      </div>
    </div>
  );
}
