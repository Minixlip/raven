'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

export default function Profile() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user === null) {
      if (storedUser) {
        // If user is not in context but stored in localStorage, set the context
        setIsLoading(false);
      } else {
        router.push('/login');
      }
    } else {
      setIsLoading(false);
    }
  }, [user, storedUser, router]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {user?.firstName || storedUser?.firstName}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
