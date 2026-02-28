import { formatCurrency } from '@/utils/formatCurrency';
import type { CartItem } from '@/types/cart';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="space-y-1.5">
      {items.map(({ product, quantity }) => (
        <div key={product.id} className="flex justify-between text-sm">
          <span className="text-gray-600 truncate mr-2">
            {quantity}x {product.name}
          </span>
          <span className="font-medium text-brand-dark flex-shrink-0">
            {formatCurrency(product.price * quantity)}
          </span>
        </div>
      ))}
      <div className="flex justify-between font-bold text-brand-dark pt-2 border-t border-brand-cream-dark">
        <span>Total</span>
        <span className="text-lg">{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
