import type { SvelteComponentTyped } from 'svelte';

export type SOfflineProps = {
  pingUrl?: string;
};

export interface SOfflineEvents {
  detectedCondition: { isOnline: boolean };
}

export const SOffline: SvelteComponentTyped<SOfflineProps, SOfflineEvents>;
