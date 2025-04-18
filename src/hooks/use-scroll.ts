
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useScroll = () => {
  const location = useLocation();
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { scrollToTop };
};
