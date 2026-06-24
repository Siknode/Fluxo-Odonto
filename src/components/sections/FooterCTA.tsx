"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FooterCTA() {
  const whatsappLink = "https://wa.me/5521966052646?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20para%20minha%20cl%C3%ADnica.";

  return (
    <section id="contato" className="relative z-10 pt-32">
      {/* Dark CTA Container */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="relative rounded-[2rem] bg-[#020813] overflow-hidden border border-white/10 shadow-2xl">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-fluxo-tech/20 blur-[120px] rounded-full"
            />
            <motion.div 
              animate={{ 
                x: [0, -40, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-fluxo-deep/30 blur-[100px] rounded-full"
            />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight max-w-3xl mb-8"
            >
              Descubra o verdadeiro potencial digital da sua clínica.
            </motion.h2>
            
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-3 rounded-full bg-white text-fluxo-deep px-10 py-5 text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-black/5 flex flex-col items-center justify-center text-center">
        <Image 
          src="/logo.png" 
          alt="Fluxo Odonto" 
          width={150} 
          height={50} 
          className="h-10 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all mb-6"
        />
        <div className="flex gap-6 mb-8">
          <a href="#" className="text-sm font-medium text-foreground/50 hover:text-fluxo-deep transition-colors">Instagram</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/50 hover:text-fluxo-deep transition-colors">WhatsApp</a>
          <a href="#" className="text-sm font-medium text-foreground/50 hover:text-fluxo-deep transition-colors">SIKNODE</a>
        </div>
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} Fluxo Odonto by SIKNODE. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}
