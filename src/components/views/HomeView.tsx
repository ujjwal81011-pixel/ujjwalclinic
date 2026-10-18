'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  CalendarCheck,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Activity,
  MessageSquare,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import HeroIllustration from '@/components/HeroIllustration';
import DoctorCard from '@/components/DoctorCard';

export default function HomeView() {
  const { language, t, clinicInfo } = useLanguage();

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow-badge">
                <ShieldCheck size={14} aria-hidden="true" />
                <span>{t.hero.eyebrow}</span>
              </span>

              <h1 className="hero-headline">{t.hero.headline}</h1>

              <p className="hero-description">{t.hero.subheadline}</p>

              <div className="hero-actions">
                <a
                  href={clinicInfo.phoneTel}
                  className="btn btn-primary btn-lg"
                  title={`Call ${clinicInfo.phoneDisplay}`}
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>{t.hero.ctaCall}</span>
                </a>

                <Link href="/doctors" className="btn btn-secondary btn-lg">
                  <span>{t.hero.ctaDoctors}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>

              <div className="hero-badges-row">
                <div className="hero-badge-pill">
                  <MapPin size={15} color="var(--color-primary-navy)" aria-hidden="true" />
                  <span>{t.hero.clinicLocationBadge}</span>
                </div>
                <div className="hero-badge-pill">
                  <Stethoscope size={15} color="var(--color-primary-navy)" aria-hidden="true" />
                  <span>{t.hero.doctorCountBadge}</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION STRIP */}
      <section className="quick-action-strip" aria-label="Patient Quick Actions">
        <div className="container">
          <div className="quick-action-grid">
            {/* Quick Action 1: Call Clinic */}
            <a
              href={clinicInfo.phoneTel}
              className="action-card"
              title={`Call ${clinicInfo.phoneDisplay}`}
            >
              <div className="action-card__icon" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="action-card__title">{t.quickActions.callTitle}</h3>
                <p className="action-card__desc">{t.quickActions.callDesc}</p>
              </div>
            </a>

            {/* Quick Action 2: WhatsApp Message */}
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
              title="Message on WhatsApp"
            >
              <div className="action-card__icon" aria-hidden="true">
                <MessageSquare size={20} color="#25D366" />
              </div>
              <div>
                <h3 className="action-card__title">{t.quickActions.whatsappTitle}</h3>
                <p className="action-card__desc">{t.quickActions.whatsappDesc}</p>
              </div>
            </a>

            {/* Quick Action 3: Doctors */}
            <Link href="/doctors" className="action-card">
              <div className="action-card__icon" aria-hidden="true">
                <Stethoscope size={20} />
              </div>
              <div>
                <h3 className="action-card__title">{t.quickActions.doctorsTitle}</h3>
                <p className="action-card__desc">{t.quickActions.doctorsDesc}</p>
              </div>
            </Link>

            {/* Quick Action 4: Directions */}
            <a
              href={clinicInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
              title="Open Google Maps"
            >
              <div className="action-card__icon" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="action-card__title">{t.quickActions.directionsTitle}</h3>
                <p className="action-card__desc">{t.quickActions.directionsDesc}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT & CLINIC OVERVIEW */}
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow-badge">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>{t.about.eyebrow}</span>
            </span>
            <h2 id="about-heading" className="section-title">
              {t.about.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary-text)', marginBottom: '20px' }}>
              {t.about.p1}
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-body-text)', marginBottom: '36px' }}>
              {t.about.p2}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '16px',
            }}
          >
            <div className="step-card">
              <div className="step-card__number" aria-hidden="true">1</div>
              <h3 className="step-card__title">{t.about.feature1Title}</h3>
              <p className="step-card__desc">{t.about.feature1Desc}</p>
            </div>

            <div className="step-card">
              <div className="step-card__number" aria-hidden="true">2</div>
              <h3 className="step-card__title">{t.about.feature2Title}</h3>
              <p className="step-card__desc">{t.about.feature2Desc}</p>
            </div>

            <div className="step-card">
              <div className="step-card__number" aria-hidden="true">3</div>
              <h3 className="step-card__title">{t.about.feature3Title}</h3>
              <p className="step-card__desc">{t.about.feature3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCTORS PREVIEW */}
      <section className="section section-bg-soft" aria-labelledby="doctors-preview-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-badge">
              <Stethoscope size={14} aria-hidden="true" />
              <span>{t.doctors.eyebrow}</span>
            </span>
            <h2 id="doctors-preview-heading" className="section-title">
              {t.doctors.title}
            </h2>
            <p className="section-subtitle">{t.doctors.subtitle}</p>
          </div>

          <div className="doctors-grid">
            <DoctorCard id="drBimlesh" />
            <DoctorCard id="drShivam" />
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '36px',
              padding: '16px',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-subtle-border)',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p style={{ fontSize: '0.925rem', color: 'var(--color-secondary-text)', margin: 0 }}>
              <Clock size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: '6px' }} />
              {t.doctors.consultationNotice}
            </p>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="section" aria-labelledby="services-preview-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-badge">
              <Activity size={14} aria-hidden="true" />
              <span>{t.services.eyebrow}</span>
            </span>
            <h2 id="services-preview-heading" className="section-title">
              {t.services.title}
            </h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>

          <div className="services-grid">
            {/* General Physician Box */}
            <div className="service-card">
              <div className="service-card__icon-header">
                <div className="service-card__icon-wrap">
                  <Stethoscope size={26} />
                </div>
                <div>
                  <span className="service-card__doctor-tag">{t.services.generalPhysician.doctor}</span>
                  <h3 className="service-card__title">{t.services.generalPhysician.title}</h3>
                </div>
              </div>
              <p className="service-card__summary">{t.services.generalPhysician.summary}</p>
              <ul className="service-card__points-list">
                {t.services.generalPhysician.points.map((pt, idx) => (
                  <li key={idx} className="service-card__point-item">
                    <CheckCircle2 size={16} className="service-card__point-bullet" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn btn-secondary">
                <span>{t.services.learnMore}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Proctology Box */}
            <div className="service-card">
              <div className="service-card__icon-header">
                <div className="service-card__icon-wrap">
                  <Activity size={26} />
                </div>
                <div>
                  <span className="service-card__doctor-tag">{t.services.proctology.doctor}</span>
                  <h3 className="service-card__title">{t.services.proctology.title}</h3>
                </div>
              </div>
              <p className="service-card__summary">{t.services.proctology.summary}</p>
              <ul className="service-card__points-list">
                {t.services.proctology.points.map((pt, idx) => (
                  <li key={idx} className="service-card__point-item">
                    <CheckCircle2 size={16} className="service-card__point-bullet" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn btn-secondary">
                <span>{t.services.learnMore}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW TO VISIT SECTION */}
      <section className="section section-bg-soft" aria-labelledby="how-to-visit-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-badge">
              <MapPin size={14} aria-hidden="true" />
              <span>{t.howToVisit.eyebrow}</span>
            </span>
            <h2 id="how-to-visit-heading" className="section-title">
              {t.howToVisit.title}
            </h2>
            <p className="section-subtitle">{t.howToVisit.subtitle}</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-card__number">1</div>
              <h3 className="step-card__title">{t.howToVisit.step1Title}</h3>
              <p className="step-card__desc">{t.howToVisit.step1Desc}</p>
            </div>

            <div className="step-card">
              <div className="step-card__number">2</div>
              <h3 className="step-card__title">{t.howToVisit.step2Title}</h3>
              <p className="step-card__desc">{t.howToVisit.step2Desc}</p>
            </div>

            <div className="step-card">
              <div className="step-card__number">3</div>
              <h3 className="step-card__title">{t.howToVisit.step3Title}</h3>
              <p className="step-card__desc">{t.howToVisit.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-badge">
              <HelpCircle size={14} aria-hidden="true" />
              <span>{t.faq.eyebrow}</span>
            </span>
            <h2 id="faq-heading" className="section-title">
              {t.faq.title}
            </h2>
          </div>

          <div className="faq-list">
            {t.faq.items.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">
                  <span style={{ color: 'var(--color-muted-blue)' }}>Q:</span>
                  <span>{item.q}</span>
                </h3>
                <p className="faq-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL REASSURING CTA BANNER */}
      <section className="section section-bg-deep" aria-label="Appointment Call to Action">
        <div className="container text-center" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '16px' }}>
            {language === 'hi'
              ? 'क्या आप चिकित्सा परामर्श हेतु संपर्क करना चाहते हैं?'
              : 'Need to Consult a Doctor in Barnahal?'}
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '32px', color: '#B5CCE5' }}>
            {language === 'hi'
              ? 'क्लीनिक आने से पहले डॉक्टर के समय और उपलब्धता की पुष्टि के लिए सीधे फोन करें।'
              : 'Call our clinic directly to confirm doctor availability and consultation timings.'}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <a
              href={clinicInfo.phoneTel}
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: '#FFFFFF', color: 'var(--color-primary-navy)' }}
            >
              <Phone size={18} aria-hidden="true" />
              <span>{clinicInfo.phoneDisplay}</span>
            </a>

            <Link href="/appointment" className="btn btn-outline-white btn-lg">
              <CalendarCheck size={18} aria-hidden="true" />
              <span>{t.nav.appointment}</span>
            </Link>

            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
