export type Category = 'pizzas' | 'focaccias' | 'calzones';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  featured: boolean;
}
