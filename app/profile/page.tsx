'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import Image from 'next/image';

export default function Profile() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const router = useRouter();

  const [storedUser, setStoredUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    setStoredUser(userFromStorage);
  }, []);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromStorage) {
      setStoredUser(userFromStorage);
      setIsLoading(false);
    } else if (!user) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = user?.token || storedUser?.token;
        const email = user?.emailAddress || storedUser?.emailAddress;

        const response = await fetch(
          'http://localhost:4000/api/payment/order',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ emailAddress: email }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        setOrders(data.orders);
      } catch (err) {
        setError(err.message);
      }
    };

    if (!isLoading && (user || storedUser)) {
      fetchOrders();
    }
  }, [isLoading]); // 🔁 Only depends on isLoading

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className=" flex flex-col min-h-screen ">
      <div className="flex flex-col md:flex-row gap-4 justify-between font-bold  p-4 bg-black border-b border-neutral-500">
        <h2 className="text-6xl select-none">
          Welcome, {user?.firstName || storedUser?.firstName}
        </h2>
        <button
          onClick={logout}
          className="border border-neutral-500 p-4 rounded-lg w-fit"
        >
          Logout
        </button>
      </div>

      <div className="">
        <span className="text-6xl select-none font-bold">Orders</span>
      </div>
      <div className="flex flex-col pt-4">
        {error && <p className="text-red-500">{error}</p>}
        {orders ? (
          <div className="flex flex-col gap-4 flex-1">
            {orders.products?.map((product, index) => (
              <div
                key={index}
                className=" md:flex-1"
              >
                <div className="border flex flex-col sm:flex-row justify-between w-fit md:w-full">
                  <div className="flex flex-col gap-2 m-2 ml-4">
                    <p className="">
                      <strong>Name:</strong> {product.nameOfClothing}
                    </p>
                    <p className="">
                      <strong>Type:</strong> {product.TypeOfClothing}
                    </p>
                    <p className="">
                      <strong>Price:</strong> £{product.price}
                    </p>
                  </div>
                  {product.img1 && (
                    <Image
                      src={product.img1}
                      alt={product.nameOfClothing}
                      width={300}
                      height={300}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
