'use client';

import { useEffect } from 'react';

/**
 * Activa animaciones reveal en elementos .reveal
 * al entrar en el viewport. No renderiza nada visible.
 */
export default function ScrollRevealProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const elementos = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((elemento) => {
        elemento.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elementos.forEach((elemento) => {
      observer.observe(elemento);
    });

    // Fallback defensivo para evitar secciones en blanco si el observer falla.
    const timeoutFallback = window.setTimeout(() => {
      elementos.forEach((elemento) => {
        elemento.classList.add('visible');
      });
    }, 1500);

    return () => {
      window.clearTimeout(timeoutFallback);
      observer.disconnect();
    };
  }, []);

  return null;
}
