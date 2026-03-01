import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './ga';

export function useScrollDepth(pageType: string) {
  const location = useLocation();

  useEffect(() => {
    const fired = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight <= 0 ? 100 : Math.min(100, Math.round((scrollTop / docHeight) * 100));

      thresholds.forEach((threshold) => {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackEvent('scroll_depth', {
            page_type: pageType,
            page_path: location.pathname,
            scroll_percent: threshold,
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.pathname, pageType]);
}
