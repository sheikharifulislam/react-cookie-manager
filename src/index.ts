import "./styles/tailwind.css";
export { default as CookieConsenter } from "./components/CookieConsenter";
export type { CookieConsenterProps } from "./types/types";
export {
  CookieManager,
  useCookieConsent,
} from "./context/CookieConsentContext";
export type { CookieManagerProps } from "./context/CookieConsentContext";
