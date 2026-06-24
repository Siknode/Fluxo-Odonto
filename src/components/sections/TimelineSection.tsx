"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico",
    description: "Mapeamento completo da maturidade digital e oportunidades perdidas na sua região.",
  },
  {
    title: "Planejamento",
    description: "Estratégia sob medida baseada em dados e faturamento alvo.",
  },
  {
    title: "Implementação",
    description: "Criação de infraestrutura premium: Site de alta conversão e SEO otimizado.",
  },
  {
    title: "Automação",
    description: "Configuração do FlowOS e CRM inteligente para não perder nenhum lead.",
  },
  {
    title: "Crescimento",
    description: "Escala previsível com inteligência artificial e acompanhamento real.",
  }
];

export function TimelineSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-transparent to-fluxo-light/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-fluxo-deep tracking-tight mb-6"
          >
            Como funciona o <span className="text-fluxo-tech">Método Fluxo Odonto</span>.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fluxo-tech/10 via-fluxo-tech to-fluxo-tech/10 md:-translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[8px] md:left-1/2 w-4 h-4 rounded-full bg-fluxo-tech md:-translate-x-1/2 shadow-[0_0_15px_rgba(25,118,210,0.5)] border-4 border-background" />

                  {/* Content Container */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:items-start md:text-left'}`}>
                    <div className="glass p-8 rounded-2xl w-full border border-white/40 hover:border-fluxo-tech/30 transition-colors group">
                      <h3 className="text-xl md:text-2xl font-bold text-fluxo-deep mb-3 group-hover:text-fluxo-tech transition-colors">
                        <span className="text-fluxo-tech/50 mr-2 text-sm">{`0${index + 1}`}</span>
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
