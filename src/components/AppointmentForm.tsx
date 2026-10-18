'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AppointmentFormData, FormErrors } from '@/types';

export default function AppointmentForm() {
  const { t, clinicInfo } = useLanguage();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    doctor: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedWhatsappUrl, setPreparedWhatsappUrl] = useState<string | null>(null);

  // Validate Indian Phone Number: 10 digits starting with 6, 7, 8, or 9
  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
    const indianMobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    return indianMobileRegex.test(cleanPhone);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    // 1. Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.appointment.validation.nameRequired;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t.appointment.validation.nameRequired;
    }

    // 2. Validate Phone Number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = t.appointment.validation.phoneRequired;
    } else if (!validatePhone(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = t.appointment.validation.phoneInvalid;
    }

    // 3. Validate Doctor Selection
    if (!formData.doctor) {
      newErrors.doctor = t.appointment.validation.doctorRequired;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process valid submission without fake storage
    setIsSubmitting(true);

    // Format a respectful, structured WhatsApp prefill message for the clinic
    const prefilledText = 
      `*New Appointment Enquiry — Ujjwal Clinic*\n\n` +
      `• *Patient Name:* ${formData.fullName.trim()}\n` +
      `• *Phone Number:* ${formData.phoneNumber.trim()}\n` +
      `• *Preferred Doctor/Consultation:* ${formData.doctor}\n` +
      (formData.preferredDate ? `• *Preferred Date:* ${formData.preferredDate}\n` : '') +
      (formData.preferredTime ? `• *Preferred Time:* ${formData.preferredTime}\n` : '') +
      (formData.message.trim() ? `• *Note:* ${formData.message.trim()}\n` : '') +
      `\n_Please confirm doctor availability and consultation timing. Thank you._`;

    const encodedMessage = encodeURIComponent(prefilledText);
    const whatsappUrl = `https://wa.me/917830195336?text=${encodedMessage}`;

    // Short processing delay for tactile button feedback & duplicate prevention
    setTimeout(() => {
      setPreparedWhatsappUrl(whatsappUrl);
      setIsSubmitting(false);

      // Open WhatsApp directly in new window
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback handled by prepared button in UI
      }
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      doctor: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
    setErrors({});
    setPreparedWhatsappUrl(null);
  };

  return (
    <div className="form-card" id="appointment-form-section">
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '6px' }}>{t.appointment.formCardTitle}</h3>
        <p className="text-muted" style={{ fontSize: '0.925rem' }}>
          {t.appointment.formNotice}
        </p>
      </div>

      <div className="form-notice-box">
        <strong>{t.appointment.privacyDisclaimer}</strong>
      </div>

      {preparedWhatsappUrl ? (
        <div className="form-success-card" role="alert">
          <CheckCircle2 size={48} color="#1B5E20" aria-hidden="true" />
          <h4 className="form-success-card__title">{t.appointment.successTitle}</h4>
          <p className="form-success-card__desc">{t.appointment.successDesc}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '340px', marginTop: '10px' }}>
            <a
              href={preparedWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-full"
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>{t.appointment.sendWhatsappNow}</span>
            </a>

            <a
              href={clinicInfo.phoneTel}
              className="btn btn-primary btn-full"
            >
              <Phone size={18} aria-hidden="true" />
              <span>{t.appointment.callBtn}</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary btn-full"
              style={{ marginTop: '4px' }}
            >
              <RefreshCw size={16} aria-hidden="true" />
              <span>{t.appointment.resetForm}</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="Appointment Request Form">
          {/* Patient Full Name */}
          <div className="form-group">
            <label htmlFor="patient-fullName" className="form-label">
              {t.appointment.fields.fullName} <span style={{ color: 'var(--color-error-text)' }}>*</span>
            </label>
            <input
              type="text"
              id="patient-fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder={t.appointment.fields.fullNamePlaceholder}
              className={`form-input ${errors.fullName ? 'is-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'error-fullName' : undefined}
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <p id="error-fullName" className="form-error-msg" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="patient-phoneNumber" className="form-label">
              {t.appointment.fields.phone} <span style={{ color: 'var(--color-error-text)' }}>*</span>
            </label>
            <input
              type="tel"
              id="patient-phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder={t.appointment.fields.phonePlaceholder}
              className={`form-input ${errors.phoneNumber ? 'is-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.phoneNumber ? 'true' : 'false'}
              aria-describedby={errors.phoneNumber ? 'error-phoneNumber' : undefined}
              disabled={isSubmitting}
            />
            {errors.phoneNumber && (
              <p id="error-phoneNumber" className="form-error-msg" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{errors.phoneNumber}</span>
              </p>
            )}
          </div>

          {/* Preferred Doctor Selection */}
          <div className="form-group">
            <label htmlFor="patient-doctor" className="form-label">
              {t.appointment.fields.doctor} <span style={{ color: 'var(--color-error-text)' }}>*</span>
            </label>
            <select
              id="patient-doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
              className={`form-select ${errors.doctor ? 'is-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.doctor ? 'true' : 'false'}
              aria-describedby={errors.doctor ? 'error-doctor' : undefined}
              disabled={isSubmitting}
            >
              <option value="">{t.appointment.fields.doctorPlaceholder}</option>
              {t.appointment.fields.doctorOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.doctor && (
              <p id="error-doctor" className="form-error-msg" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{errors.doctor}</span>
              </p>
            )}
          </div>

          {/* Preferred Date & Time Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label htmlFor="patient-date" className="form-label">
                {t.appointment.fields.preferredDate}
              </label>
              <input
                type="date"
                id="patient-date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="patient-time" className="form-label">
                {t.appointment.fields.preferredTime}
              </label>
              <select
                id="patient-time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="form-select"
                disabled={isSubmitting}
              >
                <option value="">-- Optional --</option>
                {t.appointment.fields.timeOptions.map((tOpt) => (
                  <option key={tOpt.value} value={tOpt.value}>
                    {tOpt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Optional Note */}
          <div className="form-group">
            <label htmlFor="patient-message" className="form-label">
              {t.appointment.fields.message}
            </label>
            <textarea
              id="patient-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t.appointment.fields.messagePlaceholder}
              className="form-textarea"
              disabled={isSubmitting}
            />
          </div>

          {/* Form Action Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-whatsapp btn-full btn-lg"
              aria-busy={isSubmitting}
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>{isSubmitting ? t.appointment.submittingBtn : t.appointment.submitBtn}</span>
            </button>

            <a
              href={clinicInfo.phoneTel}
              className="btn btn-secondary btn-full"
            >
              <Phone size={16} aria-hidden="true" />
              <span>{t.appointment.submitCallBtn}: {clinicInfo.phoneDisplay}</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
