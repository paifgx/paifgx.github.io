// Common interfaces used across the application
// Follows DRY principle by consolidating shared data structures

export interface BaseItem {
  title: string;
  description: string;
  icon: string;
}

export interface PainPoint extends BaseItem {
  // PainPoint currently has no additional fields beyond BaseItem
  // This interface exists for semantic clarity and future extensibility
}

export interface Benefit extends BaseItem {
  hint?: string; // Optional hint field specific to benefits
}

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
}
