'use client';

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/UseLogin';

export default function Login() {
  const { login } = useLogin();
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  // Redirect if the user is already logged in
  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to home if the user is logged in
    }
  }, [user, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log('Form submitted once', formData);

    try {
      const res = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      // Call login function but DON'T make another API request inside it
      login(data);

      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  // Conditionally render the Register page only if the user is not logged in
  if (user) return null;

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        name="emailAddress"
        placeholder="Email"
        onChange={(e) => handleChange(e)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => handleChange(e)}
        required
      />
      <button onClick={(e) => handleSubmit(e)}>Login</button>
      <span>{formData.emailAddress}</span>
      <span>{formData.password}</span>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
