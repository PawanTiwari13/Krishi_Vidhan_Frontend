import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krishi Vidhan | Digital Agricultural Marketplace',
  description:
    'Connecting Farmers, Verified Input Sellers, and Agricultural Markets with Transparent Pricing and Secure Settlements.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

