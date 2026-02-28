import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { CartDrawer } from '@/components/CartDrawer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'San Marzano – Pizzería Italiana',
  description:
    'Sabor italiano en Santiago del Estero. Pizzas napolitanas artesanales para retirar en el local o recibir en casa.',
  openGraph: {
    title: 'San Marzano – Pizzería Italiana',
    description:
      'Sabor italiano en Santiago del Estero. Pizzas napolitanas artesanales para retirar en el local o recibir en casa.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <Providers>
          {children}
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
