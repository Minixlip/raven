'use client';

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/UseLogin';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Login() {
  const { login } = useLogin();
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
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
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <motion.input
        type="email"
        name="emailAddress"
        placeholder="Email"
        onChange={(e) => handleChange(e)}
        required
        className="bg-transparent placeholder:text-neutral-500 p-2 border-b border-neutral-500 text-2xl"
        onFocus={() => setFocusedInput('emailAddress')}
        onBlur={() => setFocusedInput(null)}
        animate={{
          backgroundColor:
            focusedInput === 'emailAddress' ? '#737373' : 'transparent',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <motion.input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => handleChange(e)}
        required
        className="bg-transparent placeholder:text-neutral-500 p-2 border-b border-neutral-500 text-2xl"
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput(null)}
        animate={{
          backgroundColor:
            focusedInput === 'password' ? '#737373' : 'transparent',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <button
        onClick={(e) => handleSubmit(e)}
        className="text-2xl font-semibold"
      >
        Login
      </button>
      <div className="pt-4">
        <Link
          href={'/register'}
          className="text-xl font-semibold flex gap-2 "
        >
          Don't have an account?
          <br />
          <span className="text-neutral-500">Register here</span>
        </Link>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
