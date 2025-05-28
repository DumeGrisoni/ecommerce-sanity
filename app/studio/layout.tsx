export const metadata = {
  title: 'Backend Ecommerce Sanity',
  description: 'Administration de votre boutique en ligne',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
