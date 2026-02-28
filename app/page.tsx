import Link from 'next/link';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductList } from '@/components/ProductList';
import { StickyCartBar } from '@/components/StickyCartBar';
import { featuredProducts } from '@/data/products';

export default function HomePage() {
  return (
    <main className="min-h-screen pb-28">
      <Header />
      <Hero />

      {/* Sección: Pizzas más pedidas */}
      <section className="max-w-4xl mx-auto px-4 py-8">

        {/* Encabezado de sección */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-brand-cream-dark" />
          <div className="text-center px-2">
            <p className="text-brand-red text-xs tracking-widest uppercase font-semibold mb-0.5">
              Nuestras favoritas
            </p>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              Pizzas más Pedidas
            </h2>
          </div>
          <div className="h-px flex-1 bg-brand-cream-dark" />
        </div>

        <ProductList products={featuredProducts} columns={2} />

        {/* CTA: ver menú completo */}
        <div className="mt-8 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-8 py-3.5 rounded-full hover:bg-opacity-90 active:scale-95 transition-all duration-150 text-sm tracking-wide"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Ver Menú Completo
          </Link>
        </div>
      </section>

      <StickyCartBar />
    </main>
  );
}
