/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    __PLAUSIBLE_DOMAIN__?: string;
  }
}

export {};
