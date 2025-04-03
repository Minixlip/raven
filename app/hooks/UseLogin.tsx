'use client';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  // Accept user data instead of making a new request
  const login = (userData) => {
    setError(null);
    setIsLoading(true);

    try {
      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(userData));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: userData });

      setIsLoading(false);
    } catch (err) {
      setError('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
