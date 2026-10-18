'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyView() {
  const { language, t, clinicInfo } = useLanguage();

  return (
    <div className="section" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <div className="container-narrow">
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            color: 'var(--color-secondary-text)',
            marginBottom: '24px',
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} />
          <span>{language === 'hi' ? 'मुख्य पृष्ठ पर वापस जाएँ' : 'Back to Home'}</span>
        </Link>

        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow-badge">
            <ShieldCheck size={14} aria-hidden="true" />
            <span>{language === 'hi' ? 'डेटा सुरक्षा' : 'Data Transparency'}</span>
          </span>
          <h1 style={{ marginBottom: '12px', fontSize: '2.1rem' }}>{t.privacy.title}</h1>
          <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.925rem' }}>
            {language === 'hi' ? 'अंतिम अद्यतन: ' : 'Last Updated: '} {t.privacy.lastUpdated}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {t.privacy.content.map((sec, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-subtle-border)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <h2 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{sec.heading}</h2>
              <p style={{ color: 'var(--color-body-text)', lineHeight: 1.65 }}>{sec.text}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '36px',
            padding: '20px',
            backgroundColor: 'var(--color-soft-blue-bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #CBDDF0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <strong>{clinicInfo.name}</strong>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-text)', margin: 0 }}>
              {clinicInfo.address}
            </p>
          </div>
          <a href={clinicInfo.phoneTel} className="btn btn-primary">
            <Phone size={16} />
            <span>{clinicInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
