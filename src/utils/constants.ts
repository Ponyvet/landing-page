import type { CompanyStatistic } from "../types/company";

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: "clipboard-check",
    title: "Consultas preventivas y planes sanitarios",
    description:
      "Calendarios de vacunación, desparasitación y chequeos generales para mantener al hato saludable todo el año.",
  },
  {
    icon: "briefcase-medical",
    title: "Emergencias y cirugías de campo",
    description:
      "Atención prioritaria dentro del horario extendido para partos complicados, lesiones y procedimientos menores sin trasladar al animal.",
  },
  {
    icon: "beaker",
    title: "Laboratorio y diagnóstico móvil",
    description:
      "Pruebas rápidas, análisis sanguíneo y evaluación nutricional con entrega de resultados en sitio.",
  },
  {
    icon: "paw-print",
    title: "Atención a mascotas rurales",
    description:
      "Vacunas, esterilización y control de enfermedades zoonóticas para perros y gatos que viven en el campo.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "“Desde que Ponyvet nos visita cada mes, bajamos los casos de mastitis y mejoramos la producción de leche sin salir del rancho.”",
    author: "María López",
    role: "Rancho El Encino, Valle Verde",
  },
  {
    quote:
      "“Ponyvet acude rápido en urgencias y mantiene a la cooperativa informada con reportes claros. Son parte de nuestro equipo.”",
    author: "Cooperativa San Miguel",
    role: "Productores de caprinos",
  },
  {
    quote:
      "“El laboratorio móvil de Ponyvet nos da resultados al momento. Así podemos tomar decisiones sin perder días de trabajo.”",
    author: "Pedro Hernández",
    role: "Comunidad La Esperanza",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "1",
    title: "Solicita una visita",
    description:
      "Agenda por WhatsApp o teléfono y cuéntanos qué animales requieren atención.",
  },
  {
    number: "2",
    title: "Llegamos preparados",
    description:
      "Un médico veterinario especializado se desplaza con el equipamiento necesario para resolver en el predio.",
  },
  {
    number: "3",
    title: "Seguimiento continuo",
    description:
      "Recibe recomendaciones y recordatorios digitales para mantener al día la salud de tu hato.",
  },
];

export interface Benefit {
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    title: "Equipo especializado rural",
    description:
      "Veterinarios con experiencia en producción bovina, caprina y equina, certificados en medicina preventiva.",
  },
  {
    title: "Transparencia y seguimiento",
    description:
      "Reportes digitales después de cada visita, historial compartido y recordatorios de vacunación sin costo extra.",
  },
  {
    title: "Planes flexibles",
    description:
      "Paquetes mensuales y atención por evento para adaptarnos a las necesidades de cada rancho o comunidad.",
  },
];

export const HERO_DEFAULT_DESCRIPTION: string[] = [
  "Consultas preventivas, seguimiento sanitario y atención a urgencias dentro de nuestro horario extendido. Nuestro equipo móvil llega directamente a tu rancho o comunidad con el equipamiento necesario.",
];

export const HERO_DEFAULT_HIGHLIGHTS: string[] = [
  "Respuesta garantizada en menos de 24 horas dentro del Valle Verde",
  "Clínica móvil equipada para ganado, equinos y mascotas rurales",
  "Atendemos de lunes a domingo de 8:00 a 19:00 hrs",
];

export const HERO_DEFAULT_STATS: CompanyStatistic[] = [
  { value: "+350", label: "visitas a campo cada año" },
  { value: "96%", label: "casos resueltos sin traslado" },
];

export const HERO_DEFAULT_SERVICE_HOURS_LABEL = "8:00 a 19:00 hrs, todos los días";

export const COVERAGE_DEFAULT_AREAS: string[] = [
  "Valle Verde",
  "San Miguel de la Sierra",
  "La Esperanza",
  "Rancho El Encino",
  "Puente de Piedra",
  "Santa Lucía",
];

export const COVERAGE_DEFAULT_RADIUS = "50 km alrededor del Valle Verde";
export const COVERAGE_DEFAULT_TRAVEL_POLICY = "Sin costo de desplazamiento hasta 30 km";

export const COVERAGE_DEFAULT_SERVICE_NOTES: string[] = [
  "Lunes a domingo: 8:00 - 19:00 hrs",
  "Visitas programadas y atención urgente dentro del horario",
  "Confirmación previa vía WhatsApp",
];

export const DEFAULT_BASE_LOCATION = "Valle Verde, Querétaro";

export const CTA_DEFAULT_SERVICE_WINDOW =
  "de lunes a domingo entre las 8:00 y las 19:00 hrs";

export const DEFAULT_PHONE_NUMBER = "+524461234567";
export const DEFAULT_PHONE_DISPLAY = "(446) 123 4567";
export const DEFAULT_WHATSAPP_LINK = "https://wa.me/524461234567";
export const DEFAULT_EMAIL = "contacto@ponyvet.mx";
