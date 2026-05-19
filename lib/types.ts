/**
 * Type definitions for all content on the site.
 * If you add a new field to any content type, add it here first
 * and TypeScript will tell you exactly which components to update.
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string; // omit if current
  isCurrent?: boolean;
  description: string;
  bullets?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  years: string;
  detail?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
}

export interface Service {
  id: string;
  serial: string; // "i", "ii", "iii"...
  title: string;
  italicTitle?: string; // shown in italic/gold beside title
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  year: string;
  title: string;
  client: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  url?: string;
  status: "live" | "development" | "coming-soon";
}

export interface Review {
  id: string;
  body: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  source: "linkedin" | "direct" | "colleague" | "other";
}

export interface SiteContent {
  hero: {
    eyebrow: string;
    headlineParts: HeadlinePart[]; // typed segments for italic/gold styling
    lead: string;
    location: string;
    availability: string;
    isAvailable: boolean;
    credentials: string[];
  };
  about: {
    eyebrow: string;
    titleParts: HeadlinePart[];
    intro: string;
    narrative: NarrativeBlock[];
    stats: Stat[];
    currentRoles: { role: string; org: string }[];
  };
  contact: {
    email: string;
    location: string;
    availability: string;
    responseTime: string;
    linkedIn: string;
  };
  social: {
    label: string;
    url: string;
  }[];
}

export type HeadlinePart =
  | { type: "text"; value: string }
  | { type: "ital"; value: string };

export type NarrativeBlock =
  | { type: "paragraph"; text: string }
  | { type: "pullquote"; text: string };

export interface Stat {
  number: string; // "10+"
  label: string;
}
