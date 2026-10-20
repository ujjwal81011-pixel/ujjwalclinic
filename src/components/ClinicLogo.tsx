import React from 'react';

interface ClinicLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light';
  className?: string;
}

export function ClinicIcon({
  size = 40,
  className = '',
  idPrefix = 'uc',
}: {
  size?: number;
  className?: string;
  idPrefix?: string;
}) {
  const p = idPrefix;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Rich Midnight Oxford Navy Gradient for Outer Escutcheon */}
        <linearGradient id={`${p}-navy-grad`} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#102C54" />
          <stop offset="55%" stopColor="#0A1D37" />
          <stop offset="100%" stopColor="#05101E" />
        </linearGradient>

        {/* Inner Sapphire Shield Gradient */}
        <linearGradient id={`${p}-inner-grad`} x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#153B6C" />
          <stop offset="100%" stopColor="#0B1F3B" />
        </linearGradient>

        {/* Burnished Champagne Gold Gradient */}
        <linearGradient id={`${p}-gold-grad`} x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5E4BE" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#E5C77A" />
          <stop offset="100%" stopColor="#9C7728" />
        </linearGradient>

        {/* Highlight Gold for Hairlines */}
        <linearGradient id={`${p}-gold-light`} x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="100%" stopColor="#C49B38" />
        </linearGradient>

        {/* Surgical Cross Facets: Platinum Light & Soft Shadow */}
        <linearGradient id={`${p}-cross-light`} x1="18" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF4FA" />
        </linearGradient>
        <linearGradient id={`${p}-cross-shade`} x1="18" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4E4F4" />
          <stop offset="100%" stopColor="#B3CFE8" />
        </linearGradient>

        {/* Drop Shadow for the Emblem */}
        <filter id={`${p}-shadow`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#040D1A" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 1. Outer Classic Escutcheon (Shield of Health & Trust) */}
      <path
        d="M 8 7 C 13 8.2 19 6.2 24 4.5 C 29 6.2 35 8.2 40 7 C 42 7.6 43 9.2 43 12 C 43 25.8 35.5 36.8 24 44 C 12.5 36.8 5 25.8 5 12 C 5 9.2 6 7.6 8 7 Z"
        fill={`url(#${p}-navy-grad)`}
        filter={`url(#${p}-shadow)`}
      />

      {/* 2. Outer Shield Polished Gold Border (Double-filigree Rim) */}
      <path
        d="M 8 7 C 13 8.2 19 6.2 24 4.5 C 29 6.2 35 8.2 40 7 C 42 7.6 43 9.2 43 12 C 43 25.8 35.5 36.8 24 44 C 12.5 36.8 5 25.8 5 12 C 5 9.2 6 7.6 8 7 Z"
        stroke={`url(#${p}-gold-grad)`}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* 3. Inner Protective Shield Contour with Gold Hairline */}
      <path
        d="M 10 9.6 C 14.2 10.6 19.2 9 24 7.6 C 28.8 9 33.8 10.6 38 9.6 C 39.5 10.1 40.2 11.4 40.2 13.5 C 40.2 24.8 33.8 34.6 24 41 C 14.2 34.6 7.8 24.8 7.8 13.5 C 7.8 11.4 8.5 10.1 10 9.6 Z"
        fill={`url(#${p}-inner-grad)`}
        stroke={`url(#${p}-gold-light)`}
        strokeWidth="0.65"
        strokeOpacity="0.55"
      />

      {/* 4. Apex Radiant Star of "Ujjwal" (Bright & Radiant Healing Light) */}
      <path
        d="M 24 7.5 L 25.2 11 L 28.5 12 L 25.2 13 L 24 16.5 L 22.8 13 L 19.5 12 L 22.8 11 Z"
        fill={`url(#${p}-gold-grad)`}
      />
      <circle cx="24" cy="12" r="1.1" fill="#FFFFFF" />

      {/* 5. Classical Serif "U" Emblem (Lapidary Serifs embracing the cross) */}
      <path
        d="M 13 18.5 H 17.5 M 15.25 18.5 V 27 C 15.25 32.5 18.8 36 24 36 C 29.2 36 32.75 32.5 32.75 27 V 18.5 M 30.5 18.5 H 35"
        stroke={`url(#${p}-gold-grad)`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 6. Faceted 3D Classic Geneva Medical Cross (In Center of Shield) */}
      <path
        d="M 22 19 H 26 V 23.5 H 30.5 V 27.5 H 26 V 32 H 22 V 27.5 H 17.5 V 23.5 H 22 V 19 Z"
        fill={`url(#${p}-cross-light)`}
      />
      {/* 3D Chiseled Diagonal Facets */}
      <path
        d="M 24 21.5 V 25.5 H 28.5 L 26 27.5 H 24 V 30 M 24 25.5 L 19.5 25.5 L 22 23.5 H 24 Z"
        fill={`url(#${p}-cross-shade)`}
        fillOpacity="0.85"
      />
      {/* Central Healing Node */}
      <circle cx="24" cy="25.5" r="1.6" fill={`url(#${p}-gold-grad)`} />
      <circle cx="24" cy="25.5" r="0.75" fill="#FFFFFF" />

      {/* 7. Classical Laurel Branches of Health & Honor at Base */}
      <path
        d="M 13.5 33.5 C 15 36.5 18.5 39 21.5 40"
        stroke={`url(#${p}-gold-grad)`}
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      <circle cx="14.2" cy="34" r="0.9" fill={`url(#${p}-gold-grad)`} />
      <circle cx="17.2" cy="36.8" r="0.9" fill={`url(#${p}-gold-grad)`} />
      <circle cx="20.8" cy="39.2" r="0.9" fill={`url(#${p}-gold-grad)`} />

      <path
        d="M 34.5 33.5 C 33 36.5 29.5 39 26.5 40"
        stroke={`url(#${p}-gold-grad)`}
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      <circle cx="33.8" cy="34" r="0.9" fill={`url(#${p}-gold-grad)`} />
      <circle cx="30.8" cy="36.8" r="0.9" fill={`url(#${p}-gold-grad)`} />
      <circle cx="27.2" cy="39.2" r="0.9" fill={`url(#${p}-gold-grad)`} />
    </svg>
  );
}

export default function ClinicLogo({
  size = 'md',
  variant = 'full',
  theme = 'dark',
  className = '',
}: ClinicLogoProps) {
  const iconPixelSizes = {
    sm: 34,
    md: 42,
    lg: 52,
  };

  const idPrefix = `uc-${size}-${theme}`;

  return (
    <div className={`clinic-logo clinic-logo--${size} clinic-logo--${theme} ${className}`}>
      <div className="clinic-logo__icon-wrap">
        <ClinicIcon size={iconPixelSizes[size]} idPrefix={idPrefix} />
      </div>
      {variant === 'full' && (
        <div className="clinic-logo__text">
          <div className="clinic-logo__title">
            <span className="clinic-logo__name-primary">UJJWAL</span>
            <span className="clinic-logo__name-secondary">CLINIC</span>
          </div>
          <div className="clinic-logo__sub">
            <span className="clinic-logo__sub-loc">BARNAHAL</span>
            <span className="clinic-logo__sub-pip" aria-hidden="true">✦</span>
            <span className="clinic-logo__sub-dist">MAINPURI</span>
          </div>
        </div>
      )}
    </div>
  );
}
