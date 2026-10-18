import React from 'react';

interface ClinicLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light';
  className?: string;
}

export function ClinicIcon({ size = 38, className = '' }: { size?: number; className?: string }) {
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
        <linearGradient id="ujjwalGradPrimary" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#12345A" />
          <stop offset="1" stopColor="#0B1F3A" />
        </linearGradient>
        <linearGradient id="ujjwalGradAccent" x1="16" y1="12" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C91B8" />
          <stop offset="1" stopColor="#3F6B96" />
        </linearGradient>
      </defs>
      
      {/* Outer rounded emblem base */}
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#ujjwalGradPrimary)" />
      
      {/* Subtle inner protective contour */}
      <rect x="4" y="4" width="40" height="40" rx="11" stroke="#E1E8F0" strokeOpacity="0.15" strokeWidth="1" />
      
      {/* Stylized 'U' contour in muted blue accent */}
      <path
        d="M13 14V26C13 32.0751 17.9249 37 24 37C30.0751 37 35 32.0751 35 26V14"
        stroke="url(#ujjwalGradAccent)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      
      {/* Central Medical Cross with subtle soft rounded caps */}
      <path
        d="M24 16V28"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 22H30"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Radiant wellness spark at top right */}
      <circle cx="35" cy="13" r="2.5" fill="#6C91B8" />
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
    sm: 32,
    md: 40,
    lg: 48,
  };

  const textClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const isLight = theme === 'light';

  return (
    <div className={`clinic-logo clinic-logo--${size} ${className}`}>
      <ClinicIcon size={iconPixelSizes[size]} />
      {variant === 'full' && (
        <div className="clinic-logo__text">
          <span className={`clinic-logo__name ${textClasses[size]} ${isLight ? 'text-white' : 'text-primary'}`}>
            Ujjwal Clinic
          </span>
          <span className={`clinic-logo__sub ${isLight ? 'text-blue-light' : 'text-secondary'}`}>
            BARNAHAL • MAINPURI
          </span>
        </div>
      )}
    </div>
  );
}
