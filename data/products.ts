import type { Product } from '@/types/product';

// Imágenes: agregar archivos JPG en /public/images/ con el nombre del id del producto.
// Ejemplo: /public/images/pizza-margherita.jpg
// Si no existe la imagen, se muestra un placeholder de color automáticamente.

export const products: Product[] = [
  // ── PIZZAS ────────────────────────────────────────────────────────────────
  // Estilo napolitano · masa de fermentación lenta y cornicione artesanal
  {
    id: 'pizza-margherita',
    name: 'Margherita',
    description: 'Salsa de tomate, mozzarella fresca y albahaca. La clásica italiana, simple y auténtica.',
    price: 8500,
    image: 'https://res.cloudinary.com/dsugc0qfa/image/upload/v1772316643/ChatGPT_Image_28_feb_2026_07_09_35_p.m._zrgcl7.png',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-prosciutto',
    name: 'Prosciutto',
    description: 'Salsa de tomate, mozzarella y jamón cocido. Suave, equilibrada y tradicional.',
    price: 10500,
    image: 'https://res.cloudinary.com/dsugc0qfa/image/upload/v1772316642/ChatGPT_Image_28_feb_2026_07_07_33_p.m._af3m7s.png',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-diavola',
    name: 'Diavola',
    description: 'Salsa de tomate, mozzarella y salame picante. Intensa, levemente picante y bien italiana.',
    price: 9500,
    image: 'https://res.cloudinary.com/dsugc0qfa/image/upload/v1772316643/ChatGPT_Image_28_feb_2026_07_03_31_p.m._lij4ir.png',
    category: 'pizzas',
    featured: true,
  },
  {
    id: 'pizza-quattro-formaggi',
    name: 'Quattro Formaggi',
    description: 'Mix de cuatro quesos seleccionados. Cremosa, potente y sin salsa de tomate.',
    price: 11000,
    image: '/images/pizza-quattro-formaggi.jpg',
    category: 'pizzas',
    featured: false,
  },
  {
    id: 'pizza-bianca-pesto',
    name: 'Bianca al Pesto',
    description: 'Base blanca sin salsa de tomate, mozzarella y pesto de albahaca. Aromática y diferente.',
    price: 10000,
    image: '/images/pizza-bianca-pesto.jpg',
    category: 'pizzas',
    featured: false,
  },

  // ── FOCACCIAS ─────────────────────────────────────────────────────────────
  {
    id: 'focaccia-classica',
    name: 'Focaccia Classica',
    description: 'Aceite de oliva, romero y sal marina. La tradicional italiana, simple y aromática.',
    price: 6500,
    image: '/images/focaccia-classica.jpg',
    category: 'focaccias',
    featured: false,
  },
  {
    id: 'focaccia-italiana',
    name: 'Focaccia Italiana',
    description: 'Mozzarella, tomate fresco y orégano. Suave, fresca y bien mediterránea.',
    price: 8500,
    image: '/images/focaccia-italiana.jpg',
    category: 'focaccias',
    featured: true,
  },
  {
    id: 'focaccia-caprese',
    name: 'Focaccia Caprese',
    description: 'Mozzarella, tomate fresco y albahaca. Inspirada en la clásica ensalada italiana.',
    price: 9000,
    image: '/images/focaccia-caprese.jpg',
    category: 'focaccias',
    featured: false,
  },
  {
    id: 'focaccia-prosciutto',
    name: 'Focaccia Prosciutto',
    description: 'Mozzarella y jamón cocido. Simple, equilibrada y rendidora.',
    price: 8500,
    image: '/images/focaccia-prosciutto.jpg',
    category: 'focaccias',
    featured: false,
  },

  // ── CALZONES ──────────────────────────────────────────────────────────────
  {
    id: 'calzone-margherita',
    name: 'Calzone Margherita',
    description: 'Mozzarella, salsa de tomate y albahaca. La versión clásica inspirada en la pizza tradicional.',
    price: 10000,
    image: '/images/calzone-margherita.jpg',
    category: 'calzones',
    featured: true,
  },
  {
    id: 'calzone-prosciutto',
    name: 'Calzone Prosciutto',
    description: 'Mozzarella y jamón cocido. Suave, rendidor y súper vendible.',
    price: 10500,
    image: '/images/calzone-prosciutto.jpg',
    category: 'calzones',
    featured: false,
  },
  {
    id: 'calzone-san-marzano',
    name: 'Calzone San Marzano',
    description: 'Mozzarella, jamón, salame y morrones asados. El especial de la casa, más completo e intenso.',
    price: 11000,
    image: '/images/calzone-san-marzano.jpg',
    category: 'calzones',
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
