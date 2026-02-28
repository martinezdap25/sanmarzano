'use client';

import { Pizza, Wheat, UtensilsCrossed, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';
import type { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center gap-3 py-3.5 border-b border-brand-cream-dark last:border-0">
      {/* Indicador de categoría */}
      <div className="w-10 h-10 rounded-xl bg-brand-cream-dark flex-shrink-0 flex items-center justify-center text-brand-red">
        {product.category === 'pizzas'
          ? <Pizza className="w-5 h-5" />
          : product.category === 'focaccias'
            ? <Wheat className="w-5 h-5" />
            : <UtensilsCrossed className="w-5 h-5" />}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-brand-dark text-sm truncate">
          {product.name}
        </p>
        <p className="text-xs text-gray-500">{formatCurrency(product.price)} c/u</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="w-7 h-7 rounded-lg bg-brand-cream-dark text-brand-dark flex items-center justify-center hover:bg-brand-red hover:text-white active:scale-95 transition-all duration-150"
          aria-label="Quitar uno"
        >
          <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
        <span className="w-5 text-center font-bold text-brand-dark text-sm">
          {quantity}
        </span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="w-7 h-7 rounded-lg bg-brand-green text-white flex items-center justify-center hover:bg-opacity-90 active:scale-95 transition-all duration-150"
          aria-label="Agregar uno"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Subtotal + quitar */}
      <div className="text-right flex-shrink-0 min-w-[4.5rem]">
        <p className="font-bold text-brand-dark text-sm">
          {formatCurrency(product.price * quantity)}
        </p>
        <button
          onClick={() => removeItem(product.id)}
          className="text-[11px] text-gray-400 hover:text-brand-red transition-colors duration-150"
        >
          Quitar
        </button>
      </div>
    </div>
  );
}
