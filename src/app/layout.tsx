import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto_Mono = Roboto_Mono({
  weight: ['100', '400', '600'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "Jay's Portfolio",
  description: 'Frontend focused fullstack engineer!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_Mono.className}>{children}</body>
    </html>
  );
}
