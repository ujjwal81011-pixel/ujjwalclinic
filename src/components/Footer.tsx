'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, MessageSquare, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ClinicLogo from '@/components/ClinicLogo';

export default function Footer() {
  const { t, clinicInfo } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/', label: t.nav.home },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/services', label: t.nav.services },
    { href: '/appointment', label: t.nav.appointment },
    { href: '/contact', label: t.nav.contact },
    { href: '/privacy', label: t.footer.privacyPolicy },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Introduction */}
          <div className="footer-col">
            <Link href="/" aria-label="Ujjwal Clinic Home">
              <ClinicLogo size="md" theme="light" />
            </Link>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>
            <div style={{ marginTop: '16px' }}>
              <span className="eyebrow-badge eyebrow-badge--light">
                <ShieldCheck size={14} aria-hidden="true" />
                <span>Verified Local Medical Care</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Verified Contact & Timings */}
          <div className="footer-col">
            <h4>{t.footer.contactInfo}</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} aria-hidden="true" />
              <span>{clinicInfo.address}</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} aria-hidden="true" />
              <a href={clinicInfo.phoneTel} className="footer-link" style={{ fontWeight: 600 }}>
                {clinicInfo.phoneDisplay}
              </a>
            </div>

            <div className="footer-contact-item">
              <MessageSquare size={18} aria-hidden="true" />
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>WhatsApp Message</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="footer-contact-item" style={{ marginTop: '12px' }}>
              <Clock size={18} aria-hidden="true" />
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>{t.footer.timingsTitle}</strong>
                <span>{t.footer.timingsText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {clinicInfo.name}. {t.footer.copyright}
          </p>
          <p style={{ maxWidth: '600px', textAlign: 'right' }}>
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
