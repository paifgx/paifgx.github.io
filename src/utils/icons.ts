// Centralized icon mapping to avoid duplication across components
// Follows DRY principle by providing a single source of truth for icon imports

import {
  BanknotesIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  LockOpenIcon,
  ClockIcon,
  KeyIcon,
  ClipboardDocumentCheckIcon,
  CheckBadgeIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  ShieldExclamationIcon,
  CommandLineIcon,
  CpuChipIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  CloudIcon,
  EyeIcon,
  DevicePhoneMobileIcon,
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/vue/24/outline";

export const iconMap = {
  // Home page icons
  BanknotesIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  LockOpenIcon,
  ClockIcon,
  KeyIcon,
  ClipboardDocumentCheckIcon,
  CheckBadgeIcon,

  // Service page icons
  SquaresPlusIcon,
  UserGroupIcon,
  ShieldExclamationIcon,

  // About page icons
  CommandLineIcon,
  CpuChipIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  CloudIcon,
  EyeIcon,
  DevicePhoneMobileIcon,

  // Header icons
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} as const;

export type IconName = keyof typeof iconMap;
