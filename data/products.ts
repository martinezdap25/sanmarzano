import type { Product } from '@/types/product';

// Imágenes: agregar archivos JPG en /public/images/ con el nombre del id del producto.
// Ejemplo: /public/images/pizza-muzzarella.jpg
// Si no existe la imagen, se muestra un placeholder de color automáticamente.

export const products: Product[] = [
  // ── PIZZAS ────────────────────────────────────────────────────────────────
  {
    id: 'pizza-muzzarella',
    name: 'Pizza Muzzarella',
    description: 'Salsa de tomate, muzzarella y albahaca fresca',
    price: 8500,
    image: '/images/pizza-muzzarella.jpg',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-napolitana',
    name: 'Napolitana',
    description: 'Salsa de tomate, muzzarella, tomates frescos y orégano',
    price: 9000,
    image: '/images/pizza-napolitana.jpg',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni',
    description: 'Salsa de tomate, muzzarella y rodajas de pepperoni',
    price: 9500,
    image: '/images/pizza-pepperoni.jpg',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-diavola',
    name: 'Pizza Diavola',
    description: 'Salsa de tomate, muzzarella y salame picante',
    price: 9500,
    image: '/images/pizza-diavola.jpg',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-quattro-formaggi',
    name: 'Quattro Formaggi',
    description: 'Muzzarella, parmesano, gorgonzola y provolone',
    price: 11000,
    image: '/images/pizza-quattro-formaggi.jpg',
    category: 'pizzas',
    featured: false,
  },
  {
    id: 'pizza-prosciutto',
    name: 'Pizza Prosciutto',
    description: 'Salsa de tomate, muzzarella y jamón crudo',
    price: 10500,
    image: '/images/pizza-prosciutto.jpg',
    category: 'pizzas',
    featured: false,
  },
  {
    id: 'pizza-fugazzeta',
    name: 'Fugazzeta',
    description: 'Cebolla caramelizada, muzzarella y orégano',
    price: 9000,
    image: '/images/pizza-fugazzeta.jpg',
    category: 'pizzas',
    featured: false,
  },
  {
    id: 'pizza-rucula',
    name: 'Pizza Rúcula',
    description: 'Salsa de tomate, muzzarella, rúcula fresca y parmesano',
    price: 10500,
    image: '/images/pizza-rucula.jpg',
    category: 'pizzas',
    featured: false,
  },

  // ── FOCACCIAS ─────────────────────────────────────────────────────────────
  {
    id: 'focaccia-clasica',
    name: 'Focaccia Clásica',
    description: 'Aceite de oliva extra virgen, romero y sal gruesa',
    price: 6500,
    image: '/images/focaccia-clasica.jpg',
    category: 'focaccias',
    featured: false,
  },
  {
    id: 'focaccia-italiana',
    name: 'Focaccia Italiana',
    description: 'Tomates cherry, aceitunas negras y albahaca fresca',
    price: 8500,
    image: '/images/focaccia-italiana.jpg',
    category: 'focaccias',
    featured: true,
  },
  {
    id: 'focaccia-caprese',
    name: 'Focaccia Caprese',
    description: 'Tomates frescos, muzzarella fresca y albahaca',
    price: 9000,
    image: '/images/focaccia-caprese.jpg',
    category: 'focaccias',
    featured: false,
  },
  {
    id: 'focaccia-jamon',
    name: 'Focaccia Jamón',
    description: 'Jamón cocido, queso cremoso y tomate',
    price: 8500,
    image: '/images/focaccia-jamon.jpg',
    category: 'focaccias',
    featured: false,
  },

  // ── CALZONES ──────────────────────────────────────────────────────────────
  {
    id: 'calzone-clasico',
    name: 'Calzone Clásico',
    description: 'Relleno generoso de muzzarella y jamón cocido',
    price: 10000,
    image: '/images/calzone-clasico.jpg',
    category: 'calzones',
    featured: true,
  },
  {
    id: 'calzone-funghi',
    name: 'Calzone Funghi',
    description: 'Champiñones salteados, muzzarella y albahaca',
    price: 10500,
    image: '/images/calzone-funghi.jpg',
    category: 'calzones',
    featured: false,
  },
  {
    id: 'calzone-especial',
    name: 'Calzone Especial',
    description: 'Muzzarella, jamón, pimiento rojo y aceitunas',
    price: 11000,
    image: '/images/calzone-especial.jpg',
    category: 'calzones',
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
