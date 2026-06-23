import { useState, useEffect, useCallback } from 'react';

export const useApi = (apiFunction, options = {}) => {
  const {
    immediate = true,
    onSuccess = null,
    onError = null,
    onFinally = null,
    initialData = null,
  } = options;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    setStatus('loading');

    try {
      const result = await apiFunction(...args);
      setData(result);
      setStatus('success');
      if (onSuccess) onSuccess(result);
      return result;
    } catch (err) {
      setError(err);
      setStatus('error');
      if (onError) onError(err);
      throw err;
    } finally {
      setLoading(false);
      if (onFinally) onFinally();
    }
  }, [apiFunction, onSuccess, onError, onFinally]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  const reset = useCallback(() => {
    setData(initialData);
    setError(null);
    setStatus('idle');
    setLoading(false);
  }, [initialData]);

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return {
    data,
    loading,
    error,
    status,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    execute,
    reset,
  };
};

export default useApi;