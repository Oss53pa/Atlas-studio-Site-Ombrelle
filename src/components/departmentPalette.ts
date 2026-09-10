import type { CSSProperties } from 'react';
import type { DepartmentKey } from '../config/site';

/**
 * Palettes des blocs de département.
 *
 * Au repos les deux blocs sont identiques — deux cadres sur le fond sable.
 * Mis en avant, chacun prend ses couleurs : volt pour l'édition, indigo pour
 * le conseil. Les valeurs sont appliquées en style inline parce qu'elles
 * changent au survol et qu'elles sont animées par une transition.
 */
export type DepartmentPalette = {
  bg: string;
  fg: string;
  /** Texte secondaire : chapeau, détails de liste. */
  muted: string;
  border: string;
  /** Filets de séparation à l'intérieur du bloc. */
  rule: string;
  arrow: string;
  lift: string;
  /** Couleur du raccourci correspondant dans le hero. */
  link: string;
};

const IDLE: DepartmentPalette = {
  bg: 'transparent',
  fg: '#16171A',
  muted: '#6B6C6F',
  border: '#E8E3D9',
  rule: '#E8E3D9',
  arrow: 'translateX(0)',
  lift: 'translateY(0)',
  link: '#16171A',
};

const ACTIVE: Record<DepartmentKey, DepartmentPalette> = {
  saas: {
    bg: '#CBE45F',
    fg: '#14150F',
    muted: '#414727',
    border: '#CBE45F',
    rule: 'rgba(20,21,15,.22)',
    arrow: 'translateX(8px)',
    lift: 'translateY(-4px)',
    link: '#5A6B12',
  },
  consulting: {
    bg: '#1C2058',
    fg: '#F0E7D8',
    muted: '#BFB6A6',
    border: '#1C2058',
    rule: 'rgba(240,231,216,.26)',
    arrow: 'translateX(8px)',
    lift: 'translateY(-4px)',
    link: '#1C2058',
  },
};

export function paletteFor(key: DepartmentKey, active: boolean): DepartmentPalette {
  return active ? ACTIVE[key] : IDLE;
}

/** Style du bloc lui-même, dérivé de la palette. */
export function cardStyle(palette: DepartmentPalette): CSSProperties {
  return {
    background: palette.bg,
    color: palette.fg,
    borderColor: palette.border,
    transform: palette.lift,
  };
}
