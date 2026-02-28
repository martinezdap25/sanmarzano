'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants';

export function Header() {
  const { itemCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-brand-cream border-b border-brand-cream-dark shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Teléfono */}
        <a
          href={PHONE_TEL}
          className="flex items-center gap-1.5 text-brand-dark hover:text-brand-red transition-colors duration-150 text-sm font-medium"
          aria-label="Llamar al local"
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
        </a>

        {/* Logo */}
        <Link href="/" className="text-center select-none">
          <div className="font-serif text-xl font-bold text-brand-dark leading-tight tracking-wide">
            SAN MARZANO
          </div>
          <div className="text-[9px] tracking-[0.25em] text-brand-red uppercase font-semibold">
            Pizzería Italiana
          </div>
        </Link>

        {/* Carrito */}
        <button
          onClick={openCart}
          className="relative p-2 text-brand-dark hover:text-brand-red transition-colors duration-150"
          aria-label={`Abrir carrito (${itemCount} productos)`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.997-7.13A60.114 60.114 0 006.952 5.273M7.5 14.25L5.106 5.272M7.5 14.25l-2.54 2.54m0 0a3 3 0 104.243 4.243m-4.243-4.243L5.25 19.5"
            />
          </svg>

          {itemCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-0.5">
              {itemCount > 9 ? '9+' : itemCount}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}
