import type { ServiceHours } from "../types/company";

type Nullable<T> = T | null | undefined;

export const formatServiceHours = (
  hours: Nullable<ServiceHours>,
): string | null => {
  if (!hours) return null;
  const { days, opening, closing } = hours;

  if (days && opening && closing) {
    return `${opening} a ${closing} hrs, ${days.toLowerCase()}`;
  }

  if (opening && closing) {
    return `${opening} a ${closing} hrs`;
  }

  return days ?? null;
};

export const formatServiceWindow = (
  hours: Nullable<ServiceHours>,
): string | null => {
  if (!hours) return null;
  const { days, opening, closing } = hours;

  if (days && opening && closing) {
    return `de ${days.toLowerCase()} entre las ${opening} y las ${closing} hrs`;
  }

  if (opening && closing) {
    return `entre las ${opening} y las ${closing} hrs`;
  }

  return days ? `de ${days.toLowerCase()}` : null;
};

export const formatHourRange = (
  value: Nullable<string>,
): string | null => {
  if (!value) return null;
  const trimmed = value.trim();

  if (trimmed.includes("-")) {
    const [start, end] = trimmed
      .split("-")
      .map((segment) => segment.trim());
    if (start && end) {
      return `${start} a ${end} hrs`;
    }
  }

  return trimmed;
};
