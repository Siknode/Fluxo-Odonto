"use client";

import { motion } from "framer-motion";
import { MousePointerClick, MapPin, Smartphone, Clock } from "lucide-react";

const problems = [
  {
    icon: MousePointerClick,
    title: "Site que não gera contatos",
    description: "Milhares de acessos, mas nenhum paciente novo. Seu site atual é apenas um panfleto digital.",
  },
  {
    icon: MapPin,
    title: "Google Business mal otimizado",
    description: "Sua clínica não aparece quando os pacientes da sua região procuram por tratamentos urgentes.",
  },
  {
    icon: Smartphone,
    title: "Instagram sem estratégia",
    description: "Postagens bonitas que geram curtidas de outros dentistas, mas não trazem pacientes particulares.",
  },
  {
    icon: Clock,
    title: "Processos manuais",
    description: "Sua equipe perde horas confirmando consultas e respondendo mensagens básicas que deveriam ser automatizadas.",
  }
];

export function ProblemSection() {
  return (
    <section id="solucoes" className="relative py-32 z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-fluxo-deep tracking-tight mb-6"
          >
            Por que tantas clínicas deixam pacientes na mesa?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            A odontologia evoluiu, mas o marketing da maioria das clínicas continua preso no passado.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/40 hover:border-fluxo-tech/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(25,118,210,0.12)] group"
            >
              <div className="w-12 h-12 rounded-full bg-fluxo-tech/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-fluxo-tech" />
              </div>
              <h3 className="text-xl font-semibold text-fluxo-deep mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
