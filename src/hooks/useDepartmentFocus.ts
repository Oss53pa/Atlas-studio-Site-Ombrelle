import { useCallback, useEffect, useRef, useState } from 'react';
import type { DepartmentKey } from '../config/site';

type Registrar = (key: DepartmentKey) => (el: HTMLElement | null) => void;

export type DepartmentFocus = {
  /** Département actuellement mis en avant, ou null. */
  active: DepartmentKey | null;
  /** Vrai sur les appareils sans survol (tactiles). */
  coarse: boolean;
  /** Met en avant un département (survol, focus clavier). */
  focus: (key: DepartmentKey) => void;
  /** Retire la mise en avant. */
  blur: () => void;
  /** Enregistre le bloc d'un département pour l'observation au défilement. */
  register: Registrar;
};

/**
 * Pilote la mise en avant d'un département.
 *
 * Au pointeur fin, c'est le survol (ou le focus clavier) qui décide. Sur un
 * écran tactile, où il n'y a pas de survol, le bloc s'anime dès qu'il occupe
 * l'essentiel de la fenêtre : le défilement remplace le geste.
 */
export function useDepartmentFocus(): DepartmentFocus {
  const [active, setActive] = useState<DepartmentKey | null>(null);
  const [coarse, setCoarse] = useState(false);
  const elements = useRef(new Map<DepartmentKey, HTMLElement>());

  const focus = useCallback((key: DepartmentKey) => setActive(key), []);
  const blur = useCallback(() => setActive(null), []);

  const register = useCallback<Registrar>(
    (key) => (el) => {
      if (el) elements.current.set(key, el);
      else elements.current.delete(key);
    },
    [],
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const query = window.matchMedia('(hover: none)');
    const sync = () => setCoarse(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!coarse || typeof IntersectionObserver === 'undefined') return;
    // Repart de zéro : la mise en avant laissée par un survol n'a plus de sens.
    setActive(null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = keyOf(elements.current, entry.target);
          if (!key) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) setActive(key);
          else setActive((current) => (current === key ? null : current));
        });
      },
      { threshold: [0.2, 0.55, 0.8], rootMargin: '-15% 0px -15% 0px' },
    );

    elements.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [coarse]);

  return { active, coarse, focus, blur, register };
}

function keyOf(
  elements: Map<DepartmentKey, HTMLElement>,
  target: Element,
): DepartmentKey | null {
  for (const [key, el] of elements) {
    if (el === target) return key;
  }
  return null;
}
