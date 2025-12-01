'use client';

export type IconName =
  | 'pokeball'
  | 'pokedex'
  | 'battle'
  | 'laurel'
  | 'column'
  | 'flame'
  | 'compass'
  | 'download'
  | 'dna'
  | 'medusa';

type IconProps = {
  name: IconName;
};

export function Icon({ name }: IconProps) {
  const common = {
    stroke: '#f8e6a0',
    strokeWidth: 2.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'pokeball':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="22" fill="#1a2a4a" stroke="#d4af37" strokeWidth="3" />
          <path d="M10 32h12m20 0h12" {...common} />
          <circle cx="32" cy="32" r="8" fill="#0f1632" stroke="#f3d777" strokeWidth="3" />
          <circle cx="32" cy="32" r="3" fill="#f3d777" />
        </svg>
      );
    case 'pokedex':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <rect x="16" y="12" width="28" height="40" rx="4" fill="#1a2f60" stroke="#d4af37" strokeWidth="3" />
          <path d="M20 18h20M20 26h20M20 34h14M20 42h12" {...common} />
          <circle cx="40" cy="42" r="4" fill="#6b4c9a" stroke="#f3d777" strokeWidth="2.5" />
        </svg>
      );
    case 'battle':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <path d="M18 18l12 12-12 12" {...common} />
          <path d="M34 18l12 12-12 12" {...common} />
          <circle cx="32" cy="32" r="26" stroke="#d4af37" strokeWidth="2.4" opacity="0.35" />
        </svg>
      );
    case 'laurel':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <path d="M20 42c-4-4-6-10-6-16 6 0 12 2 16 6m14 10c4-4 6-10 6-16-6 0-12 2-16 6" {...common} />
          <path d="M28 32c0 6 2 12 4 16 2-4 4-10 4-16" {...common} />
        </svg>
      );
    case 'column':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <rect x="22" y="20" width="20" height="24" rx="2" fill="#16244b" stroke="#d4af37" strokeWidth="3" />
          <rect x="18" y="14" width="28" height="8" rx="2" fill="#233362" stroke="#f3d777" strokeWidth="2.5" />
          <rect x="18" y="44" width="28" height="6" rx="2" fill="#233362" stroke="#f3d777" strokeWidth="2.5" />
          <path d="M24 22v18m6-18v18m6-18v18" {...common} />
        </svg>
      );
    case 'flame':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 14c6 8 2 12 8 18 4 4 4 16-8 18-12-2-12-14-8-18 6-6 2-10 8-18z"
            fill="#d85c29"
            stroke="#f6d26a"
            strokeWidth="2.8"
          />
          <path
            d="M28 36c2-3 1-5 4-8 3 3 2 5 4 8 1 3-1 8-4 9-4-1-5-6-4-9z"
            fill="#f3d777"
            opacity="0.9"
          />
        </svg>
      );
    case 'compass':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="22" fill="#152344" stroke="#d4af37" strokeWidth="3" />
          <path d="M32 18l6 10-6 18-6-18z" fill="#6b4c9a" stroke="#f6d26a" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="4" fill="#f6d26a" />
        </svg>
      );
    case 'dna':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <path d="M22 16c10 6 10 18 0 24" {...common} />
          <path d="M42 16c-10 6-10 18 0 24" {...common} />
          <path d="M24 22h8m-6 8h10m-12 8h12" {...common} />
        </svg>
      );
    case 'medusa':
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="30" r="12" fill="#1a2a4a" stroke="#d4af37" strokeWidth="3" />
          <path d="M22 24c-2-4-6-4-8-2 3 1 4 5 3 7-2 3 0 7 4 6" {...common} />
          <path d="M42 24c2-4 6-4 8-2-3 1-4 5-3 7 2 3 0 7-4 6" {...common} />
          <path d="M26 30c1 2 0 4-1 6m13-6c-1 2 0 4 1 6" {...common} />
          <path d="M28 26h2m4 0h2" {...common} />
          <path d="M26 36c2 2 10 2 12 0" {...common} />
        </svg>
      );
    case 'download':
    default:
      return (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <path d="M32 14v22m0 0l-8-8m8 8 8-8" {...common} />
          <rect x="14" y="38" width="36" height="10" rx="2" fill="#1a2f60" stroke="#d4af37" strokeWidth="3" />
        </svg>
      );
  }
}
