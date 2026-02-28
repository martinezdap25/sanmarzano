'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';
import type { Product, Category } from '@/types/product';

const categoryGradients: Record<Category, string> = {
  pizzas: 'from-red-900 to-red-700',
  focaccias: 'from-amber-800 to-amber-600',
  calzones: 'from-stone-800 to-stone-600',
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const [imgError, setImgError] = useState(false);

  const cartItem = items.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-cream-dark flex flex-col">
      {/* Imagen */}
      <div className="relative w-full aspect-video bg-brand-cream-dark overflow-hidden shrink-0">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-linear-to-br ${categoryGradients[product.category]} flex items-end p-2`}
          >
            <span className="text-white/70 text-xs font-medium line-clamp-1">
              {product.name}
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div className="flex-1">
          <h3 className="font-semibold text-brand-dark text-sm leading-tight mb-0.5 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="font-bold text-brand-dark text-sm">
            {formatCurrency(product.price)}
          </span>

          {quantity === 0 ? (
            <button
              onClick={() => addItem(product)}
              className="bg-brand-green text-white text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-1 shrink-0"
            >
              <Plus className="w-3 h-3" strokeWidth={3} />
              Agregar
            </button>
          ) : (
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-7 h-7 rounded-lg bg-brand-cream-dark text-brand-dark flex items-center justify-center hover:bg-brand-red hover:text-white active:scale-95 transition-all duration-150"
                aria-label="Quitar uno"
              >
                <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
              <span className="w-6 text-center font-bold text-brand-dark text-sm">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-7 h-7 rounded-lg bg-brand-green text-white flex items-center justify-center hover:bg-opacity-90 active:scale-95 transition-all duration-150"
                aria-label="Agregar uno más"
              >
                <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
