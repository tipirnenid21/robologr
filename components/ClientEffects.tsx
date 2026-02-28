"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // --- Custom cursor ---
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      (cursor as HTMLElement).style.left = mx + "px";
      (cursor as HTMLElement).style.top = my + "px";
    };

    document.addEventListener("mousemove", onMove);

    let rafId = 0;
    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      (ring as HTMLElement).style.left = rx + "px";
      (ring as HTMLElement).style.top = ry + "px";
      rafId = requestAnimationFrame(animRing);
    };
    animRing();

    // Hover ring expand
    const hoverTargets = Array.from(
      document.querySelectorAll("a, button, .module-card, .step")
    );

    const onEnter = () => {
      (ring as HTMLElement).style.width = "56px";
      (ring as HTMLElement).style.height = "56px";
      (ring as HTMLElement).style.borderColor = "rgba(0,212,255,0.7)";
    };
    const onLeave = () => {
      (ring as HTMLElement).style.width = "36px";
      (ring as HTMLElement).style.height = "36px";
      (ring as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
    };

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Scroll reveal
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((r) => observer.observe(r));

    // Stagger module cards
    const moduleCards = Array.from(document.querySelectorAll(".module-card"));
    moduleCards.forEach((card, i) => {
      const c = card as HTMLElement;
      c.style.opacity = "0";
      c.style.transform = "translateY(24px)";
      c.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${
        i * 0.08
      }s, background 0.3s`;

      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              c.style.opacity = "1";
              c.style.transform = "none";
            }
          });
        },
        { threshold: 0.1 }
      );
      cardObserver.observe(c);
    });

    // Typing effect
    const codeLines = Array.from(document.querySelectorAll(".code-cmd")) as HTMLElement[];
    let lineI = 0;

    const typeLine = (el: HTMLElement) => {
      const text = el.textContent ?? "";
      el.textContent = "";
      el.style.opacity = "1";
      let i = 0;
      const t = window.setInterval(() => {
        el.textContent += text[i] ?? "";
        i++;
        if (i >= text.length) {
          window.clearInterval(t);
          lineI++;
          if (lineI < codeLines.length) setTimeout(() => typeLine(codeLines[lineI]!), 300);
        }
      }, 28);
    };

    const codeBlock = document.querySelector(".code-block");
    const codeObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && lineI === 0) {
          codeLines.forEach((l) => (l.style.opacity = "0"));
          setTimeout(() => typeLine(codeLines[0]!), 400);
          codeObs.disconnect();
        }
      });
    });

    if (codeBlock) codeObs.observe(codeBlock);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
      codeObs.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}