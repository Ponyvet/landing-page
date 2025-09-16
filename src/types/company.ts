export interface ServiceHours {
  days?: string | null;
  opening?: string | null;
  closing?: string | null;
  notes?: string[] | null;
}

export interface CoverageInfo {
  radius?: string | null;
  areas?: string[] | null;
  travelPolicy?: string | null;
}

export interface BaseLocation {
  community?: string | null;
  state?: string | null;
  country?: string | null;
}

export interface ContactPhone {
  international?: string | null;
  display?: string | null;
  hours?: string | null;
}

export interface ContactWhatsapp {
  link?: string | null;
  hours?: string | null;
  notes?: string | null;
}

export interface ContactInfo {
  phone?: ContactPhone | null;
  whatsapp?: ContactWhatsapp | null;
  email?: string | null;
  baseLocation?: string | null;
}

export interface CompanyStatistic {
  value: string;
  label: string;
}
