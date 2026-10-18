'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ClinicLogo from '@/components/ClinicLogo';

export default function Navbar() {
  const { language, toggleLanguage, t, clinicInfo } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/services', label: t.nav.services },
    { href: '/appointment', label: t.nav.appointment },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header__inner">
          {/* Logo & Brand */}
          <Link href="/" className="clinic-logo-link" aria-label="Ujjwal Clinic Home">
            <ClinicLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Items */}
          <div className="header-actions">
            {/* Language Selector Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-toggle-btn"
              title={language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
              aria-label={`Current language: ${language === 'en' ? 'English' : 'Hindi'}. Click to switch to ${language === 'en' ? 'Hindi' : 'English'}`}
            >
              <Globe size={16} aria-hidden="true" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Desktop "Call Clinic" CTA */}
            <a
              href={clinicInfo.phoneTel}
              className="btn btn-primary btn-call-nav"
              title={`Call ${clinicInfo.phoneDisplay}`}
            >
              <Phone size={16} aria-hidden="true" />
              <span>{t.nav.callClinic}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div
            className="mobile-nav-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-header">
              <ClinicLogo size="sm" />
              <button
                type="button"
                className="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={t.nav.closeMenu}
              >
                <X size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-nav-footer">
              <a
                href={clinicInfo.phoneTel}
                className="btn btn-primary btn-full"
              >
                <Phone size={18} aria-hidden="true" />
                <span>{t.nav.callClinic}: {clinicInfo.phoneDisplay}</span>
              </a>

              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <span>WhatsApp (+91 78301 95336)</span>
              </a>

              <button
                type="button"
                onClick={toggleLanguage}
                className="lang-toggle-btn"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
