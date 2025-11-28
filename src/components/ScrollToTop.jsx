import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Força o scroll para o topo em todos os contêineres possíveis.
 */
export function forceScrollToTop() {
  const selectors = [
    "html",
    "body",
    "#root",
    ".app-layout",
    "main"
  ];

  const els = selectors
    .map((s) => document.querySelector(s))
    .filter(Boolean);

  const extra = Array.from(document.querySelectorAll("*")).filter((el) => {
    const style = getComputedStyle(el);
    const overflowY = style.overflowY;
    return el.scrollHeight > el.clientHeight && (overflowY === "auto" || overflowY === "scroll");
  });

  const targets = Array.from(new Set([...els, ...extra]));

  let attempts = 0;

  function step() {
    attempts++;

    targets.forEach((el) => {
      try {
        if (typeof el.scrollTo === "function") el.scrollTo(0, 0);
        else el.scrollTop = 0;
      } catch {}
    });

    const allZero = targets.every((el) => {
      return el.scrollTop === 0;
    });

    if (!allZero && attempts < 20) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    forceScrollToTop();
    const t = setTimeout(() => forceScrollToTop(), 80);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
