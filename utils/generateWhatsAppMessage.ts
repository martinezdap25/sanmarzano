import type { CartItem, DeliveryMode } from '@/types/cart';
import { formatCurrency } from './formatCurrency';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function generateWhatsAppUrl(
  items: CartItem[],
  deliveryMode: DeliveryMode,
  notes: string,
  total: number,
): string {
  let message = 'Hola! Quiero hacer el siguiente pedido:\n\n';

  items.forEach(({ product, quantity }) => {
    message += `${quantity}x ${product.name} — ${formatCurrency(quantity * product.price)}\n`;
  });

  message += `\nTotal: ${formatCurrency(total)}`;
  message += `\nModalidad: ${deliveryMode === 'delivery' ? 'Envío a domicilio' : 'Retiro en local'}`;

  if (notes.trim()) {
    message += `\nNotas: ${notes.trim()}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
