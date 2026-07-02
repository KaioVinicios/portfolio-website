/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Microsoft Clarity project ID. Unset = analytics disabled. */
  readonly VITE_CLARITY_ID?: string;
}
