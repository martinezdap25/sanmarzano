import { Pizza } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
  columns?: 1 | 2;
  emptyMessage?: string;
}

export function ProductList({
  products,
  columns = 2,
  emptyMessage = 'No se encontraron productos',
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Pizza className="w-10 h-10 mb-3 text-brand-dark opacity-20" strokeWidth={1} />
        <p className="text-gray-400 font-medium text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div
      className={
        columns === 1
          ? 'flex flex-col gap-4'
          : 'grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
