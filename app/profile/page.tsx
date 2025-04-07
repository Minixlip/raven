'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

export default function Profile() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const router = useRouter();

  const [storedUser, setStoredUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Parse localStorage only once on first render
  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    setStoredUser(userFromStorage);
  }, []);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromStorage) {
      setStoredUser(userFromStorage);
      setIsLoading(false); // Only done when we know if there's a user
    } else if (!user) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  // ✅ Fetch orders only once after loading
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
    <div className=" flex flex-col min-h-screen gap-8">
      <div className="flex justify-between font-bold  p-4 bg-black border-b border-neutral-500">
        <h2 className="text-6xl select-none">
          Welcome, {user?.firstName || storedUser?.firstName}
        </h2>
        <button
          onClick={logout}
          className="border border-neutral-500 p-4 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="">
        <span className="text-6xl select-none font-bold">Orders</span>
      </div>
      <div className="p-4">
        {error && <p className="text-red-500">{error}</p>}
        {orders ? (
          <div className="space-y-4">
            {orders.products?.map((product, index) => (
              <div
                key={index}
                className="border p-4 rounded"
              >
                <p>
                  <strong>Name:</strong> {product.nameOfClothing}
                </p>
                <p>
                  <strong>Type:</strong> {product.TypeOfClothing}
                </p>
                <p>
                  <strong>Price:</strong> £{product.price}
                </p>
                <img
                  src={product.img1}
                  alt={product.nameOfClothing}
                  className="w-32 h-32 object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading orders...</p>
        )}
      </div>
    </div>
  );
}
