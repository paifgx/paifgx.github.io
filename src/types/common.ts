// Common interfaces used across the application
// Follows DRY principle by consolidating shared data structures

export interface BaseItem {
  title: string;
  description: string;
  icon: string;
}

export interface PainPoint extends BaseItem {
  // Shared interface for pain points across different pages
}

export interface Benefit extends BaseItem {
  hint?: string; // Optional hint field specific to benefits
}

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
}
