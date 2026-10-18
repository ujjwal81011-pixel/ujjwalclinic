'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Activity, Phone, MessageSquare, CheckCircle2, AlertCircle, CalendarCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesView() {
  const { language, t, clinicInfo } = useLanguage();

  return (
    <div className="section" style={{ paddingTop: '48px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow-badge">
            <Activity size={14} aria-hidden="true" />
            <span>{t.services.eyebrow}</span>
          </span>
          <h1 className="section-title">{t.services.title}</h1>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        {/* Services Detailed Cards */}
        <div className="services-grid">
          {/* Service 1: General Physician */}
          <div className="service-card">
            <div className="service-card__icon-header">
              <div className="service-card__icon-wrap">
                <Stethoscope size={28} />
              </div>
              <div>
                <span className="service-card__doctor-tag">{t.services.generalPhysician.doctor}</span>
                <h2 className="service-card__title" style={{ fontSize: '1.4rem' }}>
                  {t.services.generalPhysician.title}
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '1.025rem', color: 'var(--color-body-text)', marginBottom: '14px', lineHeight: 1.6 }}>
              {t.services.generalPhysician.description}
            </p>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--color-primary-navy)' }}>
              {language === 'hi' ? 'परामर्श में सम्मिलित क्षेत्र:' : 'Areas of Consultation Include:'}
            </h3>

            <ul className="service-card__points-list">
              {t.services.generalPhysician.points.map((pt, idx) => (
                <li key={idx} className="service-card__point-item">
                  <CheckCircle2 size={16} className="service-card__point-bullet" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-subtle-border)' }}>
              <a href={clinicInfo.phoneTel} className="btn btn-primary">
                <Phone size={16} aria-hidden="true" />
                <span>{t.nav.callClinic}</span>
              </a>
              <Link href="/appointment" className="btn btn-secondary">
                <CalendarCheck size={16} aria-hidden="true" />
                <span>{t.nav.appointment}</span>
              </Link>
            </div>
          </div>

          {/* Service 2: Proctology */}
          <div className="service-card">
            <div className="service-card__icon-header">
              <div className="service-card__icon-wrap">
                <Activity size={28} />
              </div>
              <div>
                <span className="service-card__doctor-tag">{t.services.proctology.doctor}</span>
                <h2 className="service-card__title" style={{ fontSize: '1.4rem' }}>
                  {t.services.proctology.title}
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '1.025rem', color: 'var(--color-body-text)', marginBottom: '14px', lineHeight: 1.6 }}>
              {t.services.proctology.description}
            </p>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--color-primary-navy)' }}>
              {language === 'hi' ? 'परामर्श में सम्मिलित क्षेत्र:' : 'Areas of Consultation Include:'}
            </h3>

            <ul className="service-card__points-list">
              {t.services.proctology.points.map((pt, idx) => (
                <li key={idx} className="service-card__point-item">
                  <CheckCircle2 size={16} className="service-card__point-bullet" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-subtle-border)' }}>
              <a href={clinicInfo.phoneTel} className="btn btn-primary">
                <Phone size={16} aria-hidden="true" />
                <span>{t.nav.callClinic}</span>
              </a>
              <Link href="/appointment" className="btn btn-secondary">
                <CalendarCheck size={16} aria-hidden="true" />
                <span>{t.nav.appointment}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Clinical Assessment Disclaimer */}
        <div className="service-disclaimer-box">
          <AlertCircle size={22} color="var(--color-primary-navy)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>
              {language === 'hi' ? 'महत्वपूर्ण परामर्श सूचना: ' : 'Clinical Note: '}
            </strong>
            <span>{t.services.disclaimer}</span>
          </div>
        </div>

        {/* Direct Service Inquiries Banner */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-subtle-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
              {language === 'hi'
                ? 'क्या आपकी कोई विशिष्ट स्वास्थ्य शंका है?'
                : 'Have questions regarding your specific symptoms?'}
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-secondary-text)', margin: 0 }}>
              {t.services.callQuestions}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href={clinicInfo.phoneTel} className="btn btn-primary">
              <Phone size={16} />
              <span>{clinicInfo.phoneDisplay}</span>
            </a>
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
