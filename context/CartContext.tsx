'use client';

import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import type { CartItem, DeliveryMode } from '@/types/cart';
import type { Product } from '@/types/product';

// ── State ──────────────────────────────────────────────────────────────────

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  deliveryMode: DeliveryMode;
  notes: string;
  address: string;
}

// ── Actions ────────────────────────────────────────────────────────────────

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'SET_DELIVERY_MODE'; payload: DeliveryMode }
  | { type: 'SET_NOTES'; payload: string }
  | { type: 'SET_ADDRESS'; payload: string };

// ── Reducer ────────────────────────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product: action.payload, quantity: 1 }],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload,
        ),
      };

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.product.id !== action.payload.id,
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'SET_DELIVERY_MODE':
      return { ...state, deliveryMode: action.payload };

    case 'SET_NOTES':
      return { ...state, notes: action.payload };

    case 'SET_ADDRESS':
      return { ...state, address: action.payload };

    default:
      return state;
  }
}

// ── Context ────────────────────────────────────────────────────────────────

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  deliveryMode: DeliveryMode;
  notes: string;
  address: string;
  total: number;
  itemCount: number;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setDeliveryMode: (mode: DeliveryMode) => void;
  setNotes: (notes: string) => void;
  setAddress: (address: string) => void;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  deliveryMode: 'pickup',
  notes: '',
  address: '',
};

export const CartContext = createContext<CartContextValue | null>(null);

// ── Provider ───────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback(
    (product: Product) => dispatch({ type: 'ADD_ITEM', payload: product }),
    [],
  );

  const removeItem = useCallback(
    (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    [],
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
    [],
  );

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);

  const setDeliveryMode = useCallback(
    (mode: DeliveryMode) =>
      dispatch({ type: 'SET_DELIVERY_MODE', payload: mode }),
    [],
  );

  const setNotes = useCallback(
    (notes: string) => dispatch({ type: 'SET_NOTES', payload: notes }),
    [],
  );

  const setAddress = useCallback(
    (address: string) => dispatch({ type: 'SET_ADDRESS', payload: address }),
    [],
  );

  const total = useMemo(
    () =>
      state.items.reduce(
        (acc, { product, quantity }) => acc + product.price * quantity,
        0,
      ),
    [state.items],
  );

  const itemCount = useMemo(
    () => state.items.reduce((acc, { quantity }) => acc + quantity, 0),
    [state.items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      ...state,
      total,
      itemCount,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      setDeliveryMode,
      setNotes,
      setAddress,
    }),
    [
      state,
      total,
      itemCount,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      setDeliveryMode,
      setNotes,
      setAddress,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
