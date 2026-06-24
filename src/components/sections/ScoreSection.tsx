"use client";

import { motion } from "framer-motion";

export function ScoreSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-fluxo-deep tracking-tight mb-6"
          >
            Conheça o Fluxo Score™
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Nosso algoritmo proprietário analisa a maturidade digital da sua clínica e revela as áreas exatas onde você está perdendo pacientes.
          </motion.p>
        </div>

        {/* Futuristic Dashboard Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(16,61,117,0.08)] relative overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#103D75 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            {/* Overall Score */}
            <div className="flex flex-col items-center justify-center relative w-48 h-48">
              {/* Animated SVG Circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="96" cy="96" r="80" className="stroke-black/5" strokeWidth="12" fill="none" />
                <motion.circle 
                  cx="96" cy="96" r="80" 
                  className="stroke-fluxo-tech" 
                  strokeWidth="12" 
                  fill="none" 
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0, 500" }}
                  whileInView={{ strokeDasharray: "320, 500" }} // Approx 65% of 502 circumference
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </svg>
              <div className="text-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="text-5xl font-extrabold text-fluxo-deep"
                >
                  64
                </motion.span>
                <span className="text-xl text-foreground/50">/100</span>
                <p className="text-xs font-bold text-fluxo-tech tracking-widest uppercase mt-1">Maturidade</p>
              </div>
            </div>

            {/* Sub Metrics */}
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              {[
                { label: "Otimização SEO", val: "45%", color: "bg-red-400" },
                { label: "Google Business", val: "68%", color: "bg-yellow-400" },
                { label: "Site / UX", val: "52%", color: "bg-orange-400" },
                { label: "Presença Social", val: "88%", color: "bg-green-400" }
              ].map((metric, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-foreground/80">{metric.label}</span>
                    <span className="text-fluxo-deep">{metric.val}</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${metric.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.val }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
