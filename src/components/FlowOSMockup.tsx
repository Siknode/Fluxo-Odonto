"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Calendar,
  Users,
  TrendingUp,
  Brain,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin
} from "lucide-react";

export default function FlowOSMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const springConfig = { damping: 30, stiffness: 200, mass: 1.2 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative mouse coordinates from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[16/10.5] max-w-4xl mx-auto rounded-xl cursor-pointer select-none perspective-[1200px]"
    >
      {/* Outer ambient glow that tracks tilt */}
      <motion.div
        className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-brand-deep/30 via-brand-blue/10 to-brand-red/20 opacity-40 blur-2xl -z-10"
        style={{ x: translateX, y: translateY, z: -40 }}
      />

      {/* Main Glass Panel Card */}
      <motion.div
        className="w-full h-full glass-panel border border-brand-blue/10 rounded-xl overflow-hidden shadow-2xl flex flex-col backdrop-blur-2xl transition-all duration-300"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Mockup OS Header */}
        <div className="h-11 border-b border-brand-blue/10 bg-slate-950/60 px-4 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-4 font-mono tracking-wider font-semibold text-[10px] text-slate-500">FlowOS v1.4</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-deep/20 border border-brand-blue/10 rounded-full text-[10px] text-brand-blue font-semibold">
            <Brain className="w-3 h-3 text-brand-blue animate-pulse" />
            AGENTE DE CAPTURA ATIVO
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] text-slate-500 font-mono">LIVE SYNC</span>
          </div>
        </div>

        {/* Dashboard Workspace */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden bg-slate-950/20">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-brand-blue/5 bg-slate-950/40 p-3 flex flex-col gap-1.5">
            <div className="px-2 py-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">Workspace</div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-xs font-medium text-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              Painel de Crescimento
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-slate-400 hover:bg-slate-900/40 hover:text-slate-200">
              <Calendar className="w-3.5 h-3.5" />
              Agendas Unificadas
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-slate-400 hover:bg-slate-900/40 hover:text-slate-200">
              <Brain className="w-3.5 h-3.5" />
              Central de Agentes IA
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-slate-400 hover:bg-slate-900/40 hover:text-slate-200">
              <Users className="w-3.5 h-3.5" />
              Base de Pacientes
            </div>

            <div className="mt-auto p-2 rounded-md bg-brand-red/5 border border-brand-red/20 flex flex-col gap-1">
              <div className="text-[9px] font-semibold text-brand-red uppercase tracking-wider">Aviso IA</div>
              <div className="text-[10px] text-slate-400 leading-tight">
                3 leads aguardando resposta de confirmação de implante.
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="col-span-9 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Top Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-brand-blue/5 bg-slate-900/30 flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Faturamento Particular</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-slate-200">R$ 84.200</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +34.2%
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: "74%" }} />
                </div>
              </div>

              <div className="p-3 rounded-lg border border-brand-blue/5 bg-slate-900/30 flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Pacientes Reativados</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-slate-200">142</span>
                  <span className="text-[10px] text-brand-blue font-semibold flex items-center gap-0.5">
                    <Brain className="w-2.5 h-2.5" /> IA Ativa
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-brand-red rounded-full animate-pulse" style={{ width: "90%" }} />
                </div>
              </div>

              <div className="p-3 rounded-lg border border-brand-blue/5 bg-slate-900/30 flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Ocupação da Agenda</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-slate-200">92.4%</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Saudável
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92.4%" }} />
                </div>
              </div>
            </div>

            {/* CRM Pipeline Showcase */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pipeline de Leads (Fluxo CRM)</span>
              
              <div className="flex-1 grid grid-cols-3 gap-3">
                {/* Column 1: Capturados */}
                <div className="rounded-lg bg-slate-950/40 border border-brand-blue/5 p-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-brand-blue/5 pb-1">
                    <span className="text-[10px] font-semibold text-slate-400">Capturados</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-slate-900 text-slate-400 rounded-full font-mono">3</span>
                  </div>
                  
                  <div className="p-2 rounded border border-brand-blue/5 bg-slate-900/40 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Dr. Roberto S.</span>
                      <span className="text-[8px] px-1 bg-emerald-500/20 text-emerald-400 rounded font-semibold flex items-center gap-0.5">
                        <MapPin className="w-2 h-2" /> Google
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-500">Procedimento: Implantes</span>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mt-1">
                      <span>R$ 6.500</span>
                      <span className="text-slate-600 flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" /> 5m atrás</span>
                    </div>
                  </div>

                  <div className="p-2 rounded border border-brand-blue/5 bg-slate-900/40 flex flex-col gap-1 opacity-70">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Mariana Lopes</span>
                      <span className="text-[8px] px-1 bg-brand-blue/20 text-brand-blue rounded font-semibold">SEO</span>
                    </div>
                    <span className="text-[9px] text-slate-500">Procedimento: Alinhadores</span>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mt-1">
                      <span>R$ 12.000</span>
                      <span className="text-slate-600">30m atrás</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Triagem IA */}
                <div className="rounded-lg bg-slate-950/40 border border-brand-blue/5 p-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-brand-blue/5 pb-1">
                    <span className="text-[10px] font-semibold text-slate-400">Triagem IA</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded-full font-mono">2</span>
                  </div>

                  <div className="p-2 rounded border border-brand-blue/20 bg-brand-blue/5 flex flex-col gap-1.5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-blue/5 rounded-full blur-md" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Carlos Eduardo</span>
                      <span className="text-[8px] px-1.5 py-0.5 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded font-semibold uppercase animate-pulse flex items-center gap-0.5">
                        <Brain className="w-2.5 h-2.5" /> Triagem
                      </span>
                    </div>
                    <p className="text-[9.5px] text-brand-blue bg-brand-blue/10 p-1.5 rounded leading-normal border border-brand-blue/10 font-mono">
                      &quot;Sim, tenho interesse em fazer a avaliação nesta sexta...&quot;
                    </p>
                    <div className="flex justify-between items-center text-[9px] text-slate-400">
                      <span>Orçamento: R$ 8.500</span>
                      <span className="text-brand-blue font-semibold">Agente respondendo...</span>
                    </div>
                  </div>

                  <div className="p-2 rounded border border-brand-blue/5 bg-slate-900/40 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Fernanda M.</span>
                      <span className="text-[8px] px-1 bg-emerald-500/20 text-emerald-400 rounded font-semibold">Qualificado</span>
                    </div>
                    <span className="text-[9px] text-slate-500">Procedimento: Facetas</span>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mt-1">
                      <span>R$ 18.000</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                        <ShieldCheck className="w-2.5 h-2.5" /> Agendar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Agendados */}
                <div className="rounded-lg bg-slate-950/40 border border-brand-blue/5 p-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-brand-blue/5 pb-1">
                    <span className="text-[10px] font-semibold text-slate-400">Agendados</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-slate-900 text-slate-400 rounded-full font-mono">5</span>
                  </div>

                  <div className="p-2 rounded border border-emerald-500/20 bg-emerald-500/5 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Ana Beatriz</span>
                      <span className="text-[8px] px-1 bg-emerald-500/20 text-emerald-400 rounded font-semibold">Confirmado</span>
                    </div>
                    <span className="text-[9px] text-slate-500">Procedimento: Alinhadores</span>
                    <div className="flex justify-between items-center text-[9px] text-slate-300 mt-1 font-semibold">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-slate-500" /> 24/06 - 14h00</span>
                      <span className="text-emerald-400">Confirmado</span>
                    </div>
                  </div>

                  <div className="p-2 rounded border border-brand-blue/5 bg-slate-900/40 flex flex-col gap-1 opacity-80">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Julia Costa</span>
                      <span className="text-[8px] px-1 bg-emerald-500/20 text-emerald-400 rounded font-semibold">Confirmado</span>
                    </div>
                    <span className="text-[9px] text-slate-500">Procedimento: Implantes</span>
                    <div className="flex justify-between items-center text-[9px] text-slate-300 mt-1 font-semibold">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-slate-500" /> 25/06 - 09h30</span>
                      <span className="text-emerald-400">Confirmado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Active Agents Footer inside Dashboard */}
            <div className="pt-2 border-t border-brand-blue/5 flex items-center justify-between text-[10px] text-slate-500">
              <div className="flex items-center gap-4">
                <span className="font-semibold uppercase text-slate-400 tracking-wider">Módulos IA Ativos:</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" /> Agendamento</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" /> Recall (Reativação)</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" /> Triagem Crítica</span>
              </div>
              <div className="font-mono text-[9px] text-brand-blue">AGENTS STATUS: 10/10 OPERACIONAL</div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Visual indicator in mockup corners to add depth */}
      {hovered && (
        <div className="absolute top-4 right-4 text-xs font-mono text-slate-400/30 flex items-center gap-1 transition-all duration-300">
          <span>TILT INTERATIVO</span>
          <ChevronRight className="w-3 h-3 animate-bounce" />
        </div>
      )}
    </div>
  );
}
