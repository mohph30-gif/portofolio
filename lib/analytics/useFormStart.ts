import { useRef } from 'react';
import { trackEvent } from './ga';

type UseFormStartArgs = {
  formId: string;
  pageType: string;
  ctaLocation: string;
};

export function useFormStart({ formId, pageType, ctaLocation }: UseFormStartArgs) {
  const hasStartedRef = useRef(false);

  return function handleFormStart() {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    trackEvent('form_start', {
      form_id: formId,
      page_type: pageType,
      cta_location: ctaLocation,
      page_path: window.location.pathname,
    });
  };
}
