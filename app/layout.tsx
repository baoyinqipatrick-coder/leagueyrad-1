import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LEAGUEYRAD | Digital Pack Experience',
  description: 'Free digital pack opening simulator for One Piece and NBA inspired collectible cards.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
