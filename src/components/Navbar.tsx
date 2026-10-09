"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#solucoes" },
    { label: "FlowOS", href: "#flowos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/60 backdrop-blur-md border-b border-brand-blue/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logotipo Oficial */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Logo Fluxo Odonto"
            className="w-8 h-8 rounded-full object-cover border border-brand-blue/20 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-widest text-slate-100 font-display">
              FLUXO ODONTO
            </span>
            <span className="text-[7.5px] tracking-wider text-slate-500 font-bold uppercase">
              SISTEMA INTELIGENTE DE CRESCIMENTO
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold text-slate-400 hover:text-slate-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20da%20minha%20clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-slate-200 border border-brand-blue/30 rounded-full hover:bg-brand-blue hover:text-white transition-all flex items-center gap-1.5 bg-brand-deep/30 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Solicitar Diagnóstico
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-900/40 border border-brand-blue/5"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[56px] left-0 right-0 bottom-0 bg-slate-950/95 backdrop-blur-lg z-40 border-t border-brand-blue/10 flex flex-col p-6 gap-6">
            <nav className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-300 hover:text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20da%20minha%20clínica."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-xs font-bold text-center text-slate-200 border border-brand-blue/30 rounded-lg bg-brand-deep hover:bg-brand-blue flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
