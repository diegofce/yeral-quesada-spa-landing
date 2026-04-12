'use client';

import { useEffect } from 'react';

/**
 * Activa animaciones reveal en elementos .reveal
 * al entrar en el viewport. No renderiza nada visible.
 */
export default function ScrollRevealProvider() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
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

    document.querySelectorAll('.reveal').forEach((elemento) => {
      observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
