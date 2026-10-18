'use client';

import React from 'react';
import { Phone, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import AppointmentForm from '@/components/AppointmentForm';

export default function AppointmentView() {
  const { language, t, clinicInfo } = useLanguage();

  return (
    <div className="section" style={{ paddingTop: '48px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow-badge">
            <Clock size={14} aria-hidden="true" />
            <span>{t.appointment.eyebrow}</span>
          </span>
          <h1 className="section-title">{t.appointment.title}</h1>
          <p className="section-subtitle">{t.appointment.subtitle}</p>
        </div>

        <div className="appointment-layout">
          {/* Left Column: Direct Phone Priority Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Primary Phone Priority Card */}
            <div className="call-priority-card">
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  width: 'fit-content',
                }}
              >
                {language === 'hi' ? 'त्वरित माध्यम' : 'Recommended / Fastest'}
              </span>

              <h2 style={{ fontSize: '1.45rem', marginTop: '4px' }}>
                {t.appointment.phoneSectionTitle}
              </h2>

              <p style={{ fontSize: '0.975rem', color: '#CBDDF0', lineHeight: 1.55 }}>
                {t.appointment.phoneSectionDesc}
              </p>

              <div className="phone-big">
                {clinicInfo.phoneDisplay}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                <a
                  href={clinicInfo.phoneTel}
                  className="btn btn-secondary btn-full btn-lg"
                  style={{ backgroundColor: '#FFFFFF', color: 'var(--color-primary-navy)', fontWeight: 700 }}
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>{t.appointment.callBtn}</span>
                </a>

                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-full"
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  <span>{t.appointment.whatsappBtn}</span>
                </a>
              </div>

              <p style={{ fontSize: '0.825rem', color: '#B5CCE5', marginTop: '8px' }}>
                {t.appointment.whatsappHint}
              </p>
            </div>

            {/* Timings Reminder Card */}
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-subtle-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={18} color="var(--color-primary-navy)" />
                <span>{language === 'hi' ? 'क्लीनिक समय संबंधी निर्देश' : 'Clinic Schedule Guidelines'}</span>
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
                {language === 'hi'
                  ? 'क्लीनिक का कोई साप्ताहिक अवकाश नहीं है। चूंकि डॉक्टरों का परामर्श समय भिन्न हो सकता है, इसलिए आने से पूर्व फोन अवश्य करें।'
                  : 'The clinic does not observe a weekly day off. Because consultation timings vary, please telephone before visiting to ensure the doctor is available.'}
              </p>
            </div>

            {/* Doctors on Duty */}
            <div
              style={{
                backgroundColor: 'var(--color-soft-blue-bg)',
                border: '1px solid #CBDDF0',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-primary-navy)' }}>
                {language === 'hi' ? 'परामर्शदाता चिकित्सक:' : 'Consulting Doctors:'}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.925rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={15} color="var(--color-primary-navy)" />
                  <strong>Dr. Bimlesh Babu</strong> — General Physician
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={15} color="var(--color-primary-navy)" />
                  <strong>Dr. Shivam</strong> — Proctologist
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Appointment Enquiry Form */}
          <div>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
