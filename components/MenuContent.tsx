'use client';

import { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { CategoryTabs } from './CategoryTabs';
import { ProductList } from './ProductList';
import type { Product, Category } from '@/types/product';

const CATEGORY_LABELS: Record<Category, string> = {
  pizzas: 'Pizzas',
  focaccias: 'Focaccias',
  calzones: 'Calzones',
};

interface MenuContentProps {
  products: Product[];
}

export function MenuContent({ products }: MenuContentProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('pizzas');

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          p.category === category &&
          p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [products, search, category],
  );

  const emptyMessage =
    search.trim()
      ? `No se encontraron ${CATEGORY_LABELS[category].toLowerCase()} para "${search}"`
      : `No hay ${CATEGORY_LABELS[category].toLowerCase()} disponibles`;

  return (
    <div className="space-y-4">
      <SearchBar value={search} onChange={setSearch} />
      <CategoryTabs value={category} onChange={setCategory} />

      {/* Título de categoría */}
      <div className="flex items-center gap-3 py-1">
        <div className="h-px flex-1 bg-brand-cream-dark" />
        <h2 className="font-serif text-xl font-bold text-brand-red">
          {CATEGORY_LABELS[category]}
        </h2>
        <div className="h-px flex-1 bg-brand-cream-dark" />
      </div>

      <ProductList products={filtered} columns={1} emptyMessage={emptyMessage} />
    </div>
  );
}
