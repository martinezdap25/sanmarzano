import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Imágenes locales en /public/images/ — no se necesita configuración extra.
    // Para agregar dominios externos en el futuro, descomentá:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'tu-dominio.com' },
    // ],
  },
};

export default nextConfig;
