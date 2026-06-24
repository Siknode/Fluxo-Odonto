"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column - Content */}
        <div className="flex flex-col gap-8 max-w-2xl relative z-10 pt-12 md:pt-0">
          
          {/* Logo Gigante em Destaque na Hero (Não sobrepõe texto) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 relative mix-blend-multiply dark:mix-blend-screen"
          >
            <Image 
              src="/logo.png" 
              alt="Fluxo Odonto Logo Oficial" 
              width={600} 
              height={180} 
              className="h-24 md:h-36 w-auto object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass w-fit border border-fluxo-tech/20"
          >
            <span className="w-2 h-2 rounded-full bg-fluxo-tech animate-pulse"></span>
            <span className="text-sm font-medium text-fluxo-deep">A Evolução da Gestão Odontológica</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-fluxo-deep leading-[1.1]"
          >
            Sua clínica está pronta para crescer com <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxo-tech to-fluxo-deep">Inteligência Artificial?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-xl"
          >
            Utilizamos tecnologia, SEO, automação e inteligência artificial para transformar clínicas odontológicas em operações digitais de alta performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-fluxo-tech hover:bg-fluxo-deep text-white px-8 py-4 text-base font-semibold transition-all shadow-[0_0_20px_rgba(25,118,210,0.3)] hover:shadow-[0_0_30px_rgba(16,61,117,0.5)] group">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full glass hover:bg-white/50 text-fluxo-deep px-8 py-4 text-base font-semibold transition-all group">
              <Play className="w-4 h-4 fill-fluxo-deep" />
              Conhecer o FlowOS
            </button>
          </motion.div>
        </div>

        {/* Right Column - 3D/Premium Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ perspective: 1000 }}
          className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center"
        >
          {/* Subtle Glow behind mockup */}
          <div className="absolute inset-0 bg-gradient-to-tr from-fluxo-tech/20 to-transparent rounded-full blur-[100px]" />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-lg rounded-2xl glass-dark overflow-hidden shadow-2xl border border-white/20 p-2"
          >
            {/* Fake Browser/OS header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <div className="mx-auto text-xs font-medium text-white/50 tracking-wider">FlowOS - Dashboard</div>
            </div>
            
            {/* Dashboard Content Mockup */}
            <div className="p-4 bg-[#0a1120] min-h-[300px] flex flex-col gap-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-white font-semibold">Visão Geral</h3>
                  <p className="text-white/50 text-xs">Acompanhamento em tempo real</p>
                </div>
                <div className="glass px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  IA Otimizando
                </div>
              </div>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-white/50 text-xs mb-1">Novos Pacientes</p>
                  <p className="text-white text-xl font-semibold">+42%</p>
                  <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-fluxo-tech h-full w-[75%] rounded-full" />
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-white/50 text-xs mb-1">Conversão SEO</p>
                  <p className="text-white text-xl font-semibold">18.5%</p>
                  <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full w-[60%] rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Pipeline Mockup */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex-1">
                <p className="text-white/50 text-xs mb-3">Pipeline Automático</p>
                <div className="space-y-2">
                  {[
                    { name: "Avaliação Agendada", val: "12", color: "bg-blue-400" },
                    { name: "Tratamento Aprovado", val: "8", color: "bg-green-400" },
                    { name: "Retorno Preventivo", val: "24", color: "bg-purple-400" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <div className="flex-1 bg-white/5 h-6 rounded flex items-center px-2">
                        <span className="text-[10px] text-white/70">{item.name}</span>
                      </div>
                      <span className="text-xs text-white font-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
