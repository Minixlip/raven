// app/shop/layout.tsx

import CategoryNavbar from '../components/shop/CategoryNavbar';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CategoryNavbar />
      {children}
    </div>
  );
}
