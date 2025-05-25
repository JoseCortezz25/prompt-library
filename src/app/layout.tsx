import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/molecules/footer';
import { Navbar } from '@/components/molecules/navbar';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Prompt Library',
  description: 'A library of prompts for AI agents'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-zinc-50 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
