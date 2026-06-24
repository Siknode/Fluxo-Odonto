"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a1120]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo container na Navbar (tamanho normal para não quebrar o layout) */}
          <div className="relative mix-blend-multiply dark:mix-blend-screen flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Fluxo Odonto" 
              width={160} 
              height={50} 
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              priority
            />
          </div>
        </Link>
        
        <div className={`hidden md:flex items-center gap-8 ${isScrolled ? "text-white" : "text-foreground"}`}>
          <Link href="#inicio" className="text-sm opacity-80 hover:opacity-100 transition-opacity font-medium">Início</Link>
          <Link href="#solucoes" className="text-sm opacity-80 hover:opacity-100 transition-opacity font-medium">Soluções</Link>
          <Link href="#flowos" className="text-sm opacity-80 hover:opacity-100 transition-opacity font-medium">FlowOS</Link>
          <Link href="#contato" className="text-sm opacity-80 hover:opacity-100 transition-opacity font-medium">Contato</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#diagnostico"
            className="hidden md:flex items-center justify-center rounded-full bg-fluxo-tech hover:bg-fluxo-deep text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-[0_0_20px_rgba(25,118,210,0.3)] hover:shadow-[0_0_25px_rgba(16,61,117,0.5)]"
          >
            Solicitar Diagnóstico
          </Link>
          
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-foreground block rounded-full"></span>
            <span className="w-6 h-0.5 bg-foreground block rounded-full"></span>
            <span className="w-4 h-0.5 bg-foreground block rounded-full"></span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
