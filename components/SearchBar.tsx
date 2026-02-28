'use client';

import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar en el menú..."
        className="w-full bg-white border border-brand-cream-dark rounded-2xl pl-10 pr-10 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-green transition-colors duration-150"
        aria-label="Buscar en el menú"
      />

      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-dark transition-colors duration-150"
          aria-label="Limpiar búsqueda"
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
