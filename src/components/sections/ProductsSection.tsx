"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const products = [
  {
    title: "Fluxo Start",
    desc: "Para clínicas que precisam de fundação digital.",
    features: ["Landing Page de Alta Conversão", "Otimização Google Meu Negócio", "Hospedagem Premium", "Suporte Base"],
    color: "from-gray-400 to-gray-600"
  },
  {
    title: "Fluxo Pro",
    desc: "Escala agressiva com tráfego e inteligência.",
    features: ["Tudo do plano Start", "Acesso VIP FlowOS (Em breve)", "SEO Avançado", "Automação de Leads (CRM)"],
    color: "from-fluxo-tech to-fluxo-deep",
    popular: true
  },
  {
    title: "Fluxo Elite",
    desc: "Domínio regional e múltiplos consultórios.",
    features: ["Tudo do plano Pro", "IA dedicada para agendamentos", "Consultoria de Crescimento", "Prioridade Máxima"],
    color: "from-amber-400 to-orange-600"
  }
];

export function ProductsSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-fluxo-deep tracking-tight mb-6"
          >
            Escolha seu nível de escala.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-3xl p-8 glass border ${product.popular ? 'border-fluxo-tech shadow-xl' : 'border-white/40'} overflow-hidden transition-all hover:-translate-y-2`}
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-gradient-to-r ${product.color} rounded-3xl`} />
              
              <div className="relative z-10">
                {product.popular && (
                  <div className="absolute -top-4 -right-4 bg-fluxo-tech text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mais Escolhido
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-fluxo-deep mb-2">{product.title}</h3>
                <p className="text-foreground/60 text-sm mb-8 h-10">{product.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="mt-0.5 rounded-full bg-green-100 p-1">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-semibold transition-all ${
                  product.popular 
                    ? 'bg-fluxo-deep text-white hover:bg-fluxo-tech shadow-lg' 
                    : 'glass text-fluxo-deep hover:bg-white/50 border-white/40'
                }`}>
                  Falar com Consultor
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
