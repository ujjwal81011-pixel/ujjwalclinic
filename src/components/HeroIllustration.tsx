'use client';

import React from 'react';
import { Shield, Heart, Activity, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroIllustration() {
  const { language } = useLanguage();

  return (
    <div className="hero-visual-card" aria-hidden="true">
      {/* Central Ambient Vector Emblem */}
      <div className="medical-graphic-container">
        <div className="medical-graphic-ambient-circle" />

        <svg
          width="130"
          height="130"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="medical-graphic-center-cross"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="20" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
              <stop stopColor="#12345A" />
              <stop offset="1" stopColor="#0B1F3A" />
            </linearGradient>
            <linearGradient id="innerShieldGrad" x1="30" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6C91B8" stopOpacity="0.3" />
              <stop offset="1" stopColor="#12345A" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Outer Protective Shield Emblem */}
          <path
            d="M60 12L24 28V62C24 84.5 39.5 102.5 60 108C80.5 102.5 96 84.5 96 62V28L60 12Z"
            fill="url(#shieldGrad)"
          />
          <path
            d="M60 18L29 32V62C29 81.5 42.5 97.5 60 102.5C77.5 97.5 91 81.5 91 62V32L60 18Z"
            stroke="#6C91B8"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="url(#innerShieldGrad)"
          />

          {/* Symmetrical Medical Cross with Soft Highlights */}
          <rect x="52" y="38" width="16" height="44" rx="4" fill="#FFFFFF" />
          <rect x="38" y="52" width="44" height="16" rx="4" fill="#FFFFFF" />

          {/* Compassionate Core Center Point */}
          <circle cx="60" cy="60" r="4.5" fill="#12345A" />
          <circle cx="60" cy="60" r="2" fill="#6C91B8" />
        </svg>
      </div>

      {/* Floating Clinical Metric Pills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F3F7FC', borderRadius: '10px', border: '1px solid #E1E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={18} color="#12345A" />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#12345A' }}>
              {language === 'hi' ? 'जनरल फिजिशियन परामर्श' : 'General Physician Care'}
            </span>
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6C91B8' }}>Dr. Bimlesh Babu</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F3F7FC', borderRadius: '10px', border: '1px solid #E1E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={18} color="#12345A" />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#12345A' }}>
              {language === 'hi' ? 'प्रोक्टोलॉजी परामर्श' : 'Proctology Consultations'}
            </span>
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6C91B8' }}>Dr. Shivam</span>
        </div>
      </div>

      {/* Bottom Clinic Info Strip */}
      <div className="hero-card-info-strip">
        <div className="hero-card-stat">
          <span className="hero-card-stat-label">
            {language === 'hi' ? 'साप्ताहिक अवकाश' : 'Weekly Off'}
          </span>
          <span className="hero-card-stat-value">
            {language === 'hi' ? 'कोई अवकाश नहीं (कॉल करें)' : 'No Weekly Off (Call)'}
          </span>
        </div>
        <div className="hero-card-stat">
          <span className="hero-card-stat-label">
            {language === 'hi' ? 'स्थान' : 'Location'}
          </span>
          <span className="hero-card-stat-value">
            Barnahal, Mainpuri
          </span>
        </div>
      </div>
    </div>
  );
}
