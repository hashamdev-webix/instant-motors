import { useEffect, useRef, useCallback } from 'react';

export const useInterval = (callback, delay, options = {}) => {
  const { immediate = false } = options;
  
  const callbackRef = useRef(callback);
  const intervalRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (delay !== null) {
      if (immediate) {
        callbackRef.current();
      }
      intervalRef.current = setInterval(() => {
        callbackRef.current();
      }, delay);
    }
  }, [delay, immediate]);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  return { set, clear };
};

export default useInterval;