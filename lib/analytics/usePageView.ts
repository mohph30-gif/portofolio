import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './ga';

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path, document.title);
  }, [location]);
}
