'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'; // Assuming you're using context for authentication

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    emailAddress: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  const router = useRouter();
  const { user } = useAuthContext(); // Get the user from AuthContext

  // Redirect if the user is already logged in
  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to home if the user is logged in
    }
  }, [user, router]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    try {
      if (
        formData.firstName.length === 0 ||
        formData.surName.length === 0 ||
        formData.emailAddress.length === 0 ||
        formData.password.length === 0
      ) {
        throw new Error('Please fill out your details');
      }

      if (!checkbox) {
        throw new Error('Please agree to Terms & Conditions');
      }

      const res = await fetch('http://localhost:4000/api/users/Register', {
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

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));

      console.log('User registered:', data);
      router.push('/'); // Redirect to home after successful registration
    } catch (err: any) {
      setError(err.message);
      alert(err.message);
    }
  };

  // Conditionally render the Register page only if the user is not logged in
  if (user) return null;

  return (
    <div className="bg-black min-h-screen flex flex-col-reverse md:flex-row">
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/316902/pexels-photo-316902.jpeg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex-1 flex flex-col border-l border-neutral-500 bg-black">
        <div className="p-4">
          <div className="flex flex-col justify-center items-center font-bold text-4xl">
            <span>Raven</span>
            <span className="text-xl text-neutral-500">Registration</span>
          </div>
          <div className="flex-1 mt-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-semibold">First Name</span>
              <div className="flex-1 flex gap-4 items-center">
                <input
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="bg-transparent border rounded-lg p-2 w-[350px]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-semibold">Surname</span>
              <div className="flex-1 flex gap-4 items-center">
                <input
                  name="surName"
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="bg-transparent border rounded-lg p-2 w-[350px]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-semibold">Email</span>
              <div className="flex-1 flex gap-4 items-center">
                <input
                  name="emailAddress"
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="bg-transparent border rounded-lg p-2 w-[350px]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-semibold">Password</span>
              <div className="flex-1 flex gap-4 items-center">
                <input
                  name="password"
                  onChange={(e) => handleChange(e)}
                  type="password"
                  className="bg-transparent border rounded-lg p-2 w-[350px]"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="mt-6 bg-white text-black p-4 border border-black rounded-xl w-[300px] font-semibold text-lg"
              onClick={(e) => handleSubmit(e)}
            >
              Register
            </button>
          </div>
          <div className="mt-10">
            <input
              type="checkbox"
              className="my-4"
              required
              onChange={() => setCheckbox((prev) => !prev)}
            />
            <p className="line">
              <span className="font-bold">Terms & Conditions</span> <br /> By
              creating an account, you agree to the following:
              <br /> 1.{' '}
              <span className="font-bold">Account Responsibility –</span> You
              are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
              <br />
              <span className="font-bold">2. Accurate Information –</span> You
              agree to provide accurate and up-to-date information. Misleading
              details may result in account suspension.
              <br /> <span className="font-bold">
                3. Privacy & Security –
              </span>{' '}
              Your personal data will be handled according to our [Privacy
              Policy]. We do not share your information without consent.
              <br />
              <span className="font-bold">4. Prohibited Activities – </span>
              Fraudulent transactions, abuse of promotions, or unauthorized
              access to our platform will lead to account termination.
              <br /> <span className="font-bold">5. Changes to Terms –</span> We
              may update these terms at any time. Continued use of your account
              implies acceptance of the latest version.
              <br /> For full details, please review our [Terms & Conditions]
              and [Privacy Policy].
              <br />{' '}
              <span className="font-extrabold">
                By signing up, you confirm that you have read and agree to these
                terms.
              </span>
            </p>
          </div>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
    </div>
  );
}
