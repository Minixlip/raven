'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ItemDisplay from '@/app/components/shop/ItemDisplay';

export default function ProductPage() {
  const { productName } = useParams(); // Get product name from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productName) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/shop/product', {
          method: 'POST', // Use POST request
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nameOfClothing: productName.replace(/-/g, ' '),
          }), // Convert slug back to name
        });

        if (!response.ok) throw new Error('Product not found');

        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productName]);

  if (loading) return <p>Loading...</p>;
  if (!product || product.length === 0) return <p>Product not found</p>;

  return (
    <div>
      <ItemDisplay clothing={product} />
    </div>
  );
}
