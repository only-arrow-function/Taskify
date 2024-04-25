import { useEffect, RefObject } from 'react';

export const usePreserveScroll = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const storedScrollPosition = localStorage.getItem('scrollPosition') || '0';

    if (ref.current) {
      ref.current.scrollTop = parseInt(storedScrollPosition, 10);
    }

    const handleScroll = () => {
      if (ref.current) {
        sessionStorage.setItem('scrollPosition', ref.current.scrollTop.toString());
      }
    };

    ref.current?.addEventListener('scroll', handleScroll);

    return () => {
      ref.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
