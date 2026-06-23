import { useState, useEffect, useCallback } from 'react';
import { useAuth as useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { 
    user, 
    isAuthenticated, 
    loading, 
    login: contextLogin, 
    logout: contextLogout,
    register: contextRegister 
  } = useAuthContext();

  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const login = useCallback(async (email, password) => {
    setAuthLoading(true);
    setAuthError(null);
    try {
      const result = await contextLogin(email, password);
      if (result.success) {
        return { success: true };
      } else {
        setAuthError(result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      setAuthError(error.message);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  }, [contextLogin]);

  const register = useCallback(async (userData) => {
    setAuthLoading(true);
    setAuthError(null);
    try {
      const result = await contextRegister(userData);
      if (result.success) {
        return { success: true };
      } else {
        setAuthError(result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      setAuthError(error.message);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  }, [contextRegister]);

  const logout = useCallback(async () => {
    setAuthLoading(true);
    try {
      await contextLogout();
      return { success: true };
    } catch (error) {
      setAuthError(error.message);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  }, [contextLogout]);

  return {
    user,
    isAuthenticated,
    loading: loading || authLoading,
    error: authError,
    login,
    register,
    logout,
  };
};

export default useAuth;