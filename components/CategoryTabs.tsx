'use client';

import type { Category } from '@/types/product';

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'pizzas', label: 'Pizzas' },
  { value: 'focaccias', label: 'Focaccias' },
  { value: 'calzones', label: 'Calzones' },
];

interface CategoryTabsProps {
  value: Category;
  onChange: (category: Category) => void;
}

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      {CATEGORIES.map(({ value: cat, label }) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-150 flex-shrink-0 border-2 ${
            value === cat
              ? 'bg-brand-red text-white border-brand-red shadow-sm'
              : 'bg-white text-brand-dark border-brand-cream-dark hover:border-brand-red hover:text-brand-red'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
