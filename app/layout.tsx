import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto-',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raven',
  description: 'Raven',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <div className="sticky top-0 w-full z-50">
          <Navbar />
        </div>
        <div className="min-h-[100vh]">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
