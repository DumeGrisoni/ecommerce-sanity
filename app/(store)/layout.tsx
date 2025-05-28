import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { frFR } from '@clerk/localizations';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ecommerce Sanity',
  description: 'Site de vente en ligne avec Sanity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic localization={frFR}>
      <html lang="fr">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <main>
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
