'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Phone, Clock, CalendarCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import DoctorCard from '@/components/DoctorCard';

export default function DoctorsView() {
  const { language, t, clinicInfo } = useLanguage();

  return (
    <div className="section" style={{ paddingTop: '48px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow-badge">
            <Stethoscope size={14} aria-hidden="true" />
            <span>{t.doctors.eyebrow}</span>
          </span>
          <h1 className="section-title">{t.doctors.title}</h1>
          <p className="section-subtitle">
            {language === 'hi'
              ? 'बरनाहल एवं मैनपुरी के मरीजों के लिए उपलब्ध परामर्शदाता चिकित्सक।'
              : 'Consulting medical doctors providing clinical care in Teacher\'s Colony, Barnahal.'}
          </p>
        </div>

        {/* Timings Reminder Box */}
        <div
          style={{
            backgroundColor: 'var(--color-soft-blue-bg)',
            border: '1px solid #CBDDF0',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={20} color="var(--color-primary-navy)" />
            <span style={{ fontSize: '0.95rem', color: 'var(--color-body-text)', fontWeight: 500 }}>
              {t.doctors.consultationNotice}
            </span>
          </div>
          <a href={clinicInfo.phoneTel} className="btn btn-primary" style={{ padding: '8px 16px' }}>
            <Phone size={15} />
            <span>{t.nav.callNow}</span>
          </a>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          <DoctorCard id="drBimlesh" showDetailsLink={false} />
          <DoctorCard id="drShivam" showDetailsLink={false} />
        </div>

        {/* Clinical Transparency Notice */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-subtle-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <ShieldCheck size={24} color="var(--color-primary-navy)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
                {language === 'hi' ? 'चिकित्सीय परामर्श दिशानिर्देश' : 'Consultation Guidance & Transparency'}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
                {language === 'hi'
                  ? 'उज्ज्वल क्लीनिक में परामर्श प्रत्यक्ष रूप से मरीज की स्वास्थ्य स्थिति के आधार पर दिया जाता है। डॉक्टर का समय सुनिश्चित करने और किसी भी असुविधा से बचने के लिए मरीज आने से पूर्व फोन पर संपर्क करें।'
                  : 'At Ujjwal Clinic, consultations are conducted in person to ensure accurate diagnosis and appropriate medical advice. Please contact the clinic in advance to verify the consulting schedule of your preferred doctor.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
