import { SvelteComponentTyped } from 'svelte';
export default class SOffline extends SvelteComponentTyped<
  SOfflineProps,
  SOfflineEvents,
  SOfflineSlots
> {}
declare const propDef: {
  props?: {
    pingUrl?: string;
    isOnline?: boolean;
  };
  events?: {
    detectedCondition: CustomEvent<any>;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots?: {
    online: {};
    offline: {};
  };
};
export type SOfflineProps = typeof propDef.props;
export type SOfflineEvents = typeof propDef.events;
export type SOfflineSlots = typeof propDef.slots;
export {};
