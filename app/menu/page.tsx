import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { MenuContent } from '@/components/MenuContent';
import { StickyCartBar } from '@/components/StickyCartBar';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Menú | San Marzano – Pizzería Italiana',
  description:
    'Conocé nuestro menú completo: pizzas artesanales, focaccias y calzones. Armá tu pedido y envialo por WhatsApp.',
};

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-28">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Título de página */}
        <div className="mb-5">
          <h1 className="font-serif text-3xl font-bold text-brand-dark mb-1">
            Nuestro Menú
          </h1>
          <p className="text-sm text-gray-500">
            Todo hecho con ingredientes frescos y masa artesanal
          </p>
        </div>

        <MenuContent products={products} />
      </div>

      <StickyCartBar />
    </main>
  );
}
