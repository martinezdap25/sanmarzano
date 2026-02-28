import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1C0808] via-[#2A0A0B] to-brand-dark" />

      {/* Círculos decorativos */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-red opacity-10 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-red opacity-5 rounded-full" />

      {/* Línea decorativa top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-brand-red to-transparent opacity-40" />

      <div className="relative max-w-4xl mx-auto px-4 py-14 sm:py-20 text-center">

        {/* Etiqueta superior */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-10 bg-brand-red opacity-50" />
          <span className="text-brand-red text-xs tracking-[0.3em] uppercase font-semibold">
            Pizzería Napolitana · Santiago del Estero
          </span>
          <div className="h-px w-10 bg-brand-red opacity-50" />
        </div>

        {/* Títulos */}
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-1">
          Pizzas más
        </h1>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-brand-red leading-tight italic mb-5">
          Pedidas
        </h2>

        {/* Separador */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-8 bg-white opacity-20" />
          <div className="w-1 h-1 bg-brand-red rounded-full" />
          <div className="h-px w-8 bg-white opacity-20" />
        </div>

        {/* Subtítulo */}
        <p className="text-white/60 text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto mb-8 leading-relaxed">
          Sabor italiano en Santiago del Estero. Armá tu pedido y retirá en el local o recibilo en casa.
        </p>

        {/* CTA */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-7 py-3.5 rounded-full hover:bg-opacity-90 active:scale-95 transition-all duration-150 text-sm tracking-wide"
        >
          Ver Menú Completo
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
