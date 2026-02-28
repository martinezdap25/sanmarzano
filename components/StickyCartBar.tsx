'use client';

import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';

export function StickyCartBar() {
  const { itemCount, total, openCart } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-2 pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto">
        <div className="bg-brand-dark rounded-2xl px-4 py-3 flex items-center justify-between shadow-2xl shadow-black/30">
          {/* Info */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-red text-white rounded-xl px-2.5 py-1 text-xs font-bold min-w-[28px] text-center">
              {itemCount}
            </div>
            <div>
              <p className="text-white/50 text-[10px] leading-none mb-0.5 uppercase tracking-wide">
                Tu pedido
              </p>
              <p className="text-white font-bold text-sm leading-none">
                {formatCurrency(total)}
              </p>
            </div>
          </div>

          {/* Botón */}
          <button
            onClick={openCart}
            className="bg-brand-red text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-opacity-90 active:scale-95 transition-all duration-150"
          >
            Hacer Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
