import type { Metadata } from 'next';
import { Oswald, Roboto, Anta } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  description: 'Achieving PEAK results',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel="icon" href="assets/img/logo2.png" sizes="100x100" />
      </head>
      <html lang="en" className="bg-gray-200">
        <body
          className={`${oswald.variable} ${roboto.variable} ${anta.variable} w-full max-w-[1920px] mx-auto bg-white`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
