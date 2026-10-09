"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create particles based on screen size
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
    const nodes: Node[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = Math.random() * 1.5 + 1;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial gradient background for depth
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, "#060b1e");
      bgGrad.addColorStop(1, "#040814");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Draw background glow blobs (ambience)
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      
      // Blob 1: Deep Blue (brand-deep)
      ctx.beginPath();
      const bGrad1 = ctx.createRadialGradient(width * 0.25, height * 0.3, 0, width * 0.25, height * 0.3, 400);
      bGrad1.addColorStop(0, "rgba(16, 61, 117, 0.15)");
      bGrad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bGrad1;
      ctx.arc(width * 0.25, height * 0.3, 400, 0, Math.PI * 2);
      ctx.fill();

      // Blob 2: Brand Blue (brand-blue)
      ctx.beginPath();
      const bGrad2 = ctx.createRadialGradient(width * 0.75, height * 0.6, 0, width * 0.75, height * 0.6, 500);
      bGrad2.addColorStop(0, "rgba(25, 118, 210, 0.12)");
      bGrad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bGrad2;
      ctx.arc(width * 0.75, height * 0.6, 500, 0, Math.PI * 2);
      ctx.fill();

      // Blob 3: Accent Red (brand-red / granada) - very subtle
      ctx.beginPath();
      const bGrad3 = ctx.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.4, 300);
      bGrad3.addColorStop(0, "rgba(139, 21, 56, 0.08)");
      bGrad3.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bGrad3;
      ctx.arc(width * 0.5, height * 0.4, 300, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Draw nodes and connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(height, node.y));
        }

        // Mouse interaction (gravity effect)
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= dx * force * 0.03; // pull/push gently
          node.y -= dy * force * 0.03;
          node.radius = node.baseRadius + force * 1.5;
        } else {
          node.radius = node.baseRadius;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const targetNode = nodes[j];
          const tdx = targetNode.x - node.x;
          const tdy = targetNode.y - node.y;
          const tdist = Math.sqrt(tdx * tdx + tdy * tdy);

          if (tdist < 140) {
            const alpha = (1 - tdist / 140) * 0.15;
            
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            
            // Make line color depend on position (gradient effect)
            ctx.strokeStyle = `rgba(25, 118, 210, ${alpha})`;
            
            // Occasionally draw red-accented connections to match brand-red
            if ((i + j) % 19 === 0) {
              ctx.strokeStyle = `rgba(139, 21, 56, ${alpha * 1.5})`;
            }

            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw lines to mouse
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.25;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(25, 118, 210, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        
        if (i % 12 === 0) {
          ctx.fillStyle = `rgba(139, 21, 56, ${node.alpha * 1.2})`; // brand-red
        } else {
          ctx.fillStyle = `rgba(25, 118, 210, ${node.alpha})`; // brand-blue
        }
        ctx.fill();

        // Node aura (glow) for larger nodes
        if (node.radius > 2) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(25, 118, 210, ${node.alpha * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 block pointer-events-none" />;
}
