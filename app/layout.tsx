import type { Metadata } from 'next';
import { Oswald, Roboto, Anta } from 'next/font/google';
import './globals.css';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const anta = Anta({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anta',
});

export const metadata: Metadata = {
  title: 'PEAK FITNESS',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body
        className={`${oswald.variable} ${roboto.variable} ${anta.variable} w-full max-w-[1920px] mx-auto bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
