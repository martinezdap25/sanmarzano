import type { Product } from './product';

export type DeliveryMode = 'pickup' | 'delivery';

export interface CartItem {
  product: Product;
  quantity: number;
}
