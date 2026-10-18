export type Language = 'en' | 'hi';

export interface Doctor {
  id: string;
  name: string;
  specialtyKey: 'generalPhysician' | 'proctologist';
  initials: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  doctor?: string;
  preferredDate?: string;
}
