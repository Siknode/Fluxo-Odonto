"use client";

import { Sparkles, MessageSquare, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-brand-blue/10 py-10 md:py-16 relative overflow-hidden">
      {/* Decorative ambient glows in footer */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 glow-spot glow-deep opacity-10" />
      <div className="absolute top-0 right-1/4 w-60 h-60 glow-spot glow-red opacity-5" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-2 self-start">
              <img
                src="/logo.png"
                alt="Logo Fluxo Odonto"
                className="w-7 h-7 rounded-full object-cover border border-brand-blue/20"
              />
              <span className="text-sm font-extrabold tracking-widest text-slate-100 font-display">
                FLUXO ODONTO
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              O Fluxo Odonto não é uma agência de marketing tradicional. Somos uma empresa de tecnologia especializada em impulsionar o faturamento de clínicas através de tráfego, automação avançada e Inteligência Artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Navegação</h5>
            <ul className="flex flex-col gap-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-slate-100 transition-colors">Início</a></li>
              <li><a href="#solucoes" className="hover:text-slate-100 transition-colors">Soluções</a></li>
              <li><a href="#flowos" className="hover:text-slate-100 transition-colors">FlowOS</a></li>
              <li><a href="#score" className="hover:text-slate-100 transition-colors">Fluxo Score™</a></li>
            </ul>
          </div>

          {/* Contact and Socials */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Contato & Suporte</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a href="mailto:contato@fluxoodonto.com.br" className="hover:text-slate-100 transition-colors">
                  contato@fluxoodonto.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-blue" />
                <a
                  href="https://wa.me/5521966052646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100 transition-colors"
                >
                  +55 (21) 96605-2646
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-brand-blue" />
                <a
                  href="https://instagram.com/fluxo.odonto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100 transition-colors"
                >
                  @fluxo.odonto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright area */}
        <div className="border-t border-brand-blue/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Fluxo Odonto. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
