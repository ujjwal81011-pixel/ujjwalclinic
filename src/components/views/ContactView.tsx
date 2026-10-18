'use client';

import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactView() {
  const { language, t, clinicInfo } = useLanguage();

  return (
    <div className="section" style={{ paddingTop: '48px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow-badge">
            <MapPin size={14} aria-hidden="true" />
            <span>{t.contact.eyebrow}</span>
          </span>
          <h1 className="section-title">{t.contact.title}</h1>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* 1. Address Card */}
          <div className="contact-card">
            <div className="contact-card__icon-header">
              <MapPin size={24} color="var(--color-primary-navy)" />
              <h2 className="contact-card__title">{t.contact.addressCardTitle}</h2>
            </div>
            <p className="contact-card__content" style={{ fontWeight: 600 }}>
              {t.contact.addressText}
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-text)', lineHeight: 1.5 }}>
              {language === 'hi'
                ? 'टीचर्स कॉलोनी, बरनाहल, जिला मैनपुरी, उत्तर प्रदेश में स्थित। बरनाहल चौराहा एवं मुख्य सड़क से सुगम पहुँच।'
                : 'Conveniently situated in Teacher\'s Colony, Barnahal, District Mainpuri. Accessible from surrounding rural and town areas.'}
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-subtle-border)' }}>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
              >
                <Navigation size={16} aria-hidden="true" />
                <span>{t.contact.openMapsBtn}</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* 2. Telephone Contact Card */}
          <div className="contact-card">
            <div className="contact-card__icon-header">
              <Phone size={24} color="var(--color-primary-navy)" />
              <h2 className="contact-card__title">{t.contact.phoneCardTitle}</h2>
            </div>
            <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-navy)', letterSpacing: '0.02em' }}>
              {clinicInfo.phoneDisplay}
            </p>
            <p className="contact-card__content" style={{ fontSize: '0.925rem' }}>
              {t.contact.phoneDesc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-subtle-border)' }}>
              <a
                href={clinicInfo.phoneTel}
                className="btn btn-primary btn-full"
              >
                <Phone size={16} aria-hidden="true" />
                <span>{t.nav.callClinic}</span>
              </a>

              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>WhatsApp (+91 78301 95336)</span>
              </a>
            </div>
          </div>

          {/* 3. Consultation Timings (Strictly Verified, No Invented Hours) */}
          <div className="contact-card">
            <div className="contact-card__icon-header">
              <Clock size={24} color="var(--color-primary-navy)" />
              <h2 className="contact-card__title">{t.contact.timingsCardTitle}</h2>
            </div>
            <div
              style={{
                backgroundColor: 'var(--color-soft-blue-bg)',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #CBDDF0',
              }}
            >
              <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '4px' }}>
                {language === 'hi' ? 'साप्ताहिक अवकाश: कोई अवकाश नहीं' : 'Weekly Off: Open All 7 Days'}
              </strong>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-secondary-text)' }}>
                {language === 'hi'
                  ? 'दैनिक डॉक्टर परामर्श समय की पुष्टि हेतु कॉल करें।'
                  : 'Please call to confirm current daily doctor consultation hours.'}
              </span>
            </div>
            <p className="contact-card__content" style={{ fontSize: '0.925rem' }}>
              {t.contact.timingsNotice}
            </p>
          </div>

          {/* 4. Google Maps Directions Card */}
          <div className="contact-card">
            <div className="contact-card__icon-header">
              <Navigation size={24} color="var(--color-primary-navy)" />
              <h2 className="contact-card__title">{t.contact.mapsCardTitle}</h2>
            </div>
            <p className="contact-card__content" style={{ fontSize: '0.925rem' }}>
              {t.contact.mapsDesc}
            </p>
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: '#F7FAFC',
                borderRadius: '8px',
                border: '1px solid #E1E8F0',
                fontSize: '0.85rem',
                color: 'var(--color-secondary-text)',
              }}
            >
              <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: '6px', color: 'var(--color-primary-navy)' }} />
              {t.contact.mapsNotice}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-subtle-border)' }}>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-full"
              >
                <span>{t.contact.openMapsBtn}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
