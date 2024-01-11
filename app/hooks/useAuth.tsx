'use Client';

import { useState } from 'react';
import { useAppDipatch } from '../redux/hooks';
import { setLogin } from '../redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { TestingAPI } from '../globalStyle';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<string | null>(null);
  const dispatch = useAppDipatch();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setHasError(null);
    try {
      const res = await fetch(`https://${TestingAPI}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      // document.cookie = `myData=${stringifiedData}; expires=Thu, 25 Apr 2023 04:55:00 UTC; path=/login`;

      if (res.ok) {
        console.info('Login successful');
        // sessionStorage.setItem('login status', JSON.stringify(data));
        dispatch(setLogin(data));
        router.push('/admin');
      } else {
        setHasError(data.message);
        console.info('Sorry, invalid credentials');
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setHasError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, hasError };
};

export default useAuth;
