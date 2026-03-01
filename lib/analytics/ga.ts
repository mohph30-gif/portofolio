import { GA_MEASUREMENT_ID } from '../../content/site';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type GaEventName =
  | 'click_whatsapp'
  | 'click_email'
  | 'click_contact_button'
  | 'download_cv'
  | 'form_start'
  | 'form_submit'
  | 'project_view'
  | 'scroll_depth';

export type GaEventParams = Record<string, string | number | boolean | undefined>;

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function trackEvent(name: GaEventName, params: GaEventParams = {}) {
  if (!hasGtag()) {
    return;
  }

  window.gtag?.('event', name, params);
}

export function trackPageView(path: string, title?: string) {
  if (!hasGtag()) {
    return;
  }

  window.gtag?.('event', 'page_view', {
    page_title: title ?? document.title,
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    send_to: GA_MEASUREMENT_ID,
  });
}
