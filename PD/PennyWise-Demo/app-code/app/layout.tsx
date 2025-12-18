import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PennyWise Pro - Smart Finance Tracking',
  description: 'Track your expenses, set goals, and get AI-powered insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="lg:pl-64 pt-16 lg:pt-0 pb-20 lg:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
