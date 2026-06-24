"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FlowOsSection() {
  return (
    <section id="flowos" className="relative py-32 overflow-hidden bg-fluxo-deep text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-fluxo-tech/20 blur-[120px] rounded-[100%]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fluxo-tech text-white border border-fluxo-tech/40 mb-8 shadow-[0_0_20px_rgba(25,118,210,0.6)]"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-bold tracking-wide uppercase">Projeto em Desenvolvimento</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8"
        >
          Prepare-se para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxo-tech to-white">FlowOS</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-20"
        >
          Estamos construindo muito mais que um site. O FlowOS será um ecossistema completo para gestão de captação e CRM otimizado por inteligência artificial.
        </motion.p>

        {/* Premium UI Mockup Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-xl md:rounded-[2rem] border border-white/20 bg-[#0a1120] shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center group"
        >
          {/* Subtle moving glow inside the mockup frame */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-fluxo-tech/10 to-transparent pointer-events-none" />
          
          <div className="absolute inset-0 flex flex-col p-4 md:p-8 pointer-events-none opacity-40 blur-sm mix-blend-screen transition-all duration-700 group-hover:blur-md">
            {/* Header Mock */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <div className="flex gap-4">
                <div className="h-4 w-24 bg-white/10 rounded" />
                <div className="h-4 w-16 bg-white/10 rounded" />
                <div className="h-4 w-20 bg-white/10 rounded" />
              </div>
              <div className="h-8 w-8 bg-white/10 rounded-full" />
            </div>

            {/* Dashboard Body Mock */}
            <div className="flex gap-6 h-full">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 w-48 border-r border-white/10 pr-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-8 rounded w-full ${i === 1 ? 'bg-fluxo-tech/30' : 'bg-white/5'}`} />
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex-1 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center p-4">
                      <div className="w-10 h-10 rounded-full bg-fluxo-tech/20 mr-4" />
                      <div>
                        <div className="h-3 w-16 bg-white/20 rounded mb-2" />
                        <div className="h-6 w-24 bg-white/40 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex-1 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 relative">
                     {/* Graphic lines mock */}
                     <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
                     <div className="absolute top-0 left-0 h-full w-[1px] bg-white/10" />
                     <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C50,80 150,150 200,50 C250,-50 300,100 400,20" stroke="rgba(25, 118, 210, 0.5)" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" />
                     </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-[#0a1120]/80 to-transparent opacity-90" />
          
          {/* Central Curiosity Text */}
          <div className="relative z-10 flex flex-col items-center gap-4 bg-black/60 backdrop-blur-md px-10 py-8 rounded-2xl border border-fluxo-tech/30 shadow-[0_0_30px_rgba(25,118,210,0.15)] text-center">
            <h3 className="text-2xl font-bold text-white mb-1">Acesso Antecipado</h3>
            <p className="text-white/70 text-sm max-w-[280px]">Estamos lapidando o futuro. Clínicas parceiras terão acesso VIP garantido no dia do lançamento oficial.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
