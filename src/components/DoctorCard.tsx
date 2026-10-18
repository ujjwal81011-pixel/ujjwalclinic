'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Stethoscope, Activity, CalendarCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DoctorCardProps {
  id: 'drBimlesh' | 'drShivam';
  showDetailsLink?: boolean;
}

export default function DoctorCard({ id, showDetailsLink = true }: DoctorCardProps) {
  const { t, clinicInfo } = useLanguage();

  const doctorData = id === 'drBimlesh' ? t.doctors.drBimlesh : t.doctors.drShivam;
  const initials = id === 'drBimlesh' ? 'BB' : 'SH';
  const IconComponent = id === 'drBimlesh' ? Stethoscope : Activity;

  return (
    <article className="doctor-card" aria-labelledby={`doctor-heading-${id}`}>
      <div className="doctor-card__header">
        {/* Distinctive Initials & Medical Emblem (No Stock Faces) */}
        <div className="doctor-card__avatar" aria-hidden="true">
          <span>{initials}</span>
        </div>
        
        <div className="doctor-card__title-area">
          <h3 id={`doctor-heading-${id}`} className="doctor-card__name">
            {doctorData.name}
          </h3>
          <span className="doctor-card__specialty">
            <IconComponent size={16} aria-hidden="true" />
            <span>{doctorData.specialty}</span>
          </span>
          <span className="doctor-card__badge">{doctorData.badge}</span>
        </div>
      </div>

      <p className="doctor-card__body">
        {doctorData.description}
      </p>

      <div className="doctor-card__scope-box">
        <strong>{doctorData.specialty}: </strong>
        <span>{doctorData.scope}</span>
      </div>

      <div className="doctor-card__actions">
        <a
          href={clinicInfo.phoneTel}
          className="btn btn-primary"
          style={{ flexGrow: 1 }}
        >
          <Phone size={16} aria-hidden="true" />
          <span>{t.doctors.ctaAppointment}</span>
        </a>

        {showDetailsLink ? (
          <Link
            href="/doctors"
            className="btn btn-secondary"
          >
            <span>{t.doctors.viewAllBtn}</span>
          </Link>
        ) : (
          <Link
            href="/appointment"
            className="btn btn-secondary"
          >
            <CalendarCheck size={16} aria-hidden="true" />
            <span>{t.nav.appointment}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
