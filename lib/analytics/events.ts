import { trackEvent } from './ga';

type BaseArgs = {
  cta_location: string;
  cta_label: string;
  page_type: string;
  page_path: string;
  method?: string;
  link_url?: string;
  section_id?: string;
};

export function trackWhatsappClick(args: BaseArgs) {
  trackEvent('click_whatsapp', {
    ...args,
    method: args.method ?? 'whatsapp',
  });
}

export function trackEmailClick(args: BaseArgs) {
  trackEvent('click_email', {
    ...args,
    method: args.method ?? 'email',
  });
}

export function trackContactButtonClick(args: BaseArgs) {
  trackEvent('click_contact_button', {
    ...args,
    method: args.method ?? 'internal_contact',
  });
}

export function trackCvDownload(args: BaseArgs) {
  trackEvent('download_cv', args);
}
