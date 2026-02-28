'use client';

import Link from 'next/link';
import { Phone, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants';

export function Header() {
  const { itemCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-brand-cream border-b border-brand-cream-dark shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 grid grid-cols-3 items-center">

        {/* Teléfono */}
        <a
          href={PHONE_TEL}
          className="flex items-center gap-1.5 p-2 -ml-2 rounded-xl text-brand-dark hover:text-brand-red transition-colors duration-150 text-sm font-medium"
          aria-label="Llamar al local"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
        </a>

        {/* Logo — siempre centrado */}
        <Link href="/" className="text-center select-none justify-self-center">
          <div className="font-serif text-xl font-bold text-brand-dark leading-tight tracking-wide whitespace-nowrap">
            SAN MARZANO
          </div>
          <div className="text-[9px] tracking-[0.25em] text-brand-red uppercase font-semibold">
            Pizzería Italiana
          </div>
        </Link>

        {/* Carrito */}
        <div className="flex justify-end">
          <button
            onClick={openCart}
            className="relative p-2 -mr-2 rounded-xl text-brand-dark hover:text-brand-red transition-colors duration-150"
            aria-label={`Abrir carrito (${itemCount} productos)`}
          >
            <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />

            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[10px] font-bold rounded-full min-w-4.5 h-4.5 flex items-center justify-center px-0.5">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
