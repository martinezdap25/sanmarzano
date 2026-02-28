'use client';

import { ShoppingCart, Store, Bike, X, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { CartItem } from './CartItem';
import { OrderSummary } from './OrderSummary';
import { generateWhatsAppUrl } from '@/utils/generateWhatsAppMessage';
import { STORE_ADDRESS, STORE_HOURS, STORE_MAPS_URL } from '@/lib/constants';

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    total,
    itemCount,
    deliveryMode,
    notes,
    address,
    setDeliveryMode,
    setNotes,
    setAddress,
    clearCart,
  } = useCart();

  const needsAddress = deliveryMode === 'delivery' && !address.trim();

  const handleWhatsApp = () => {
    if (items.length === 0 || needsAddress) return;
    const url = generateWhatsAppUrl(items, deliveryMode, notes, total, address);
    window.open(url, '_blank', 'noopener,noreferrer');
    closeCart();
    setTimeout(clearCart, 350);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-brand-cream rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out flex flex-col max-h-[90dvh] max-w-lg mx-auto ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
      >
        {/* Handle de arrastre */}
        <div className="flex justify-center pt-3 pb-2 shrink-0">
          <div className="w-10 h-1 bg-brand-cream-dark rounded-full" />
        </div>

        {/* Encabezado */}
        <div className="flex items-center justify-between px-5 pb-3 border-b border-brand-cream-dark shrink-0">
          <div>
            <h2 className="font-serif font-bold text-brand-dark text-lg leading-tight">
              Tu Pedido
            </h2>
            {itemCount > 0 && (
              <p className="text-xs text-gray-500 mt-0.5">
                {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-gray-400 hover:text-brand-red transition-colors duration-150"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={closeCart}
              className="p-1.5 rounded-xl bg-brand-cream-dark text-brand-dark hover:bg-brand-red hover:text-white transition-all duration-150"
              aria-label="Cerrar carrito"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Lista de items */}
        <div className="flex-1 overflow-y-auto px-5 py-1">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="w-12 h-12 mb-4 text-brand-dark opacity-20" strokeWidth={1} />
              <p className="font-semibold text-brand-dark text-sm mb-1">
                Tu carrito está vacío
              </p>
              <p className="text-xs text-gray-500">
                Agregá productos desde el menú
              </p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 pt-4 pb-6 border-t border-brand-cream-dark shrink-0 space-y-4">

            {/* Resumen */}
            <OrderSummary items={items} total={total} />

            {/* Modalidad de entrega */}
            <div>
              <label className="text-xs font-semibold text-brand-dark uppercase tracking-wide mb-2 block">
                Modalidad de entrega
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDeliveryMode('pickup')}
                  className={`py-2.5 rounded-xl text-xs font-semibold border-2 transition-all duration-150 flex items-center justify-center gap-1.5 ${
                    deliveryMode === 'pickup'
                      ? 'border-brand-green bg-brand-green text-white'
                      : 'border-brand-cream-dark bg-white text-brand-dark hover:border-brand-green'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" /> Retiro en local
                </button>
                <button
                  onClick={() => setDeliveryMode('delivery')}
                  className={`py-2.5 rounded-xl text-xs font-semibold border-2 transition-all duration-150 flex items-center justify-center gap-1.5 ${
                    deliveryMode === 'delivery'
                      ? 'border-brand-green bg-brand-green text-white'
                      : 'border-brand-cream-dark bg-white text-brand-dark hover:border-brand-green'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" /> Envío a domicilio
                </button>
              </div>
            </div>

            {/* Info condicional según modalidad */}
            {deliveryMode === 'pickup' ? (
              <a
                href={STORE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-brand-green/10 border border-brand-green/20 rounded-xl px-3.5 py-3 group"
              >
                <MapPin className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-brand-dark leading-snug">
                    {STORE_ADDRESS}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {STORE_HOURS}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-brand-green/50 group-hover:text-brand-green shrink-0 mt-0.5 transition-colors duration-150" />
              </a>
            ) : (
              <div>
                <label
                  htmlFor="cart-address"
                  className="text-xs font-semibold text-brand-dark uppercase tracking-wide mb-2 flex items-center gap-1"
                >
                  Tu dirección de entrega
                  <span className="text-brand-red">*</span>
                </label>
                <input
                  id="cart-address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle, número, piso/depto..."
                  className={`w-full bg-white border rounded-xl px-3 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none transition-colors duration-150 ${
                    !address.trim()
                      ? 'border-brand-red/40 focus:border-brand-red'
                      : 'border-brand-cream-dark focus:border-brand-green'
                  }`}
                />
                {needsAddress && (
                  <p className="text-xs text-brand-red/70 mt-1.5 ml-1">
                    Ingresá tu dirección para continuar
                  </p>
                )}
              </div>
            )}

            {/* Notas */}
            <div>
              <label
                htmlFor="cart-notes"
                className="text-xs font-semibold text-brand-dark uppercase tracking-wide mb-2 block"
              >
                Notas <span className="font-normal text-gray-400">(opcional)</span>
              </label>
              <textarea
                id="cart-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: portón verde, sin timbre, entre Mitre y Belgrano..."
                className="w-full bg-white border border-brand-cream-dark rounded-xl px-3 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 resize-none focus:outline-none focus:border-brand-green transition-colors duration-150"
                rows={2}
              />
            </div>

            {/* Botón WhatsApp */}
            <button
              onClick={handleWhatsApp}
              disabled={needsAddress}
              className={`w-full font-bold py-4 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-150 text-sm ${
                needsAddress
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#25D366] text-white hover:bg-[#1DA851] active:scale-[0.98] shadow-lg shadow-green-900/20'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enviar pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
