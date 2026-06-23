import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url, options = {}) => {
  const {
    method = 'GET',
    headers = {},
    body = null,
    immediate = true,
    onSuccess = null,
    onError = null,
  } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (customUrl = url, customOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const fetchOptions = {
        method: customOptions.method || method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...customOptions.headers,
        },
        body: customOptions.body || body,
      };

      if (fetchOptions.body && fetchOptions.method !== 'GET') {
        fetchOptions.body = JSON.stringify(fetchOptions.body);
      }

      const response = await fetch(customUrl || url, fetchOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      if (onSuccess) onSuccess(result);
      return result;
    } catch (err) {
      setError(err.message);
      if (onError) onError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url, method, headers, body, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  const refetch = useCallback((customOptions = {}) => {
    return fetchData(url, customOptions);
  }, [fetchData, url]);

  return {
    data,
    loading,
    error,
    fetchData,
    refetch,
  };
};

export default useFetch;