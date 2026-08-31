// src/core/seo.js
// 🔍 Central SEO & Schema.org JSON-LD Generator para Google Search & Maps

import { NEGOCIO } from './config/constantes.js';

export const SEO = {
  '/': {
    title: 'Kevin Tours | SandSki & Sandboard Pro Huacachina Evolution 2026',
    description: 'Única Escuela Oficial de SandSki Alpino con Bastones, Sandboard Pro con Botas, Snowboard en Dunas y Bodyboard en Huacachina, Ica. Base en Hospedaje Hawka.',
    keywords: 'sandski huacachina, sandboard huacachina, kevin tours, clases sandboard pro, esquí en arena ica, hospedaje hawka tours',
    canonical: `${NEGOCIO.dominio}/`,
    image: `${NEGOCIO.dominio}/tours/sandski_laguna.png`
  },
  '/en': {
    title: 'Kevin Tours | SandSki & Pro Sandboard Huacachina Evolution 2026',
    description: 'Official Alpine SandSki & Pro Sandboard with fitted snow boots in the Huacachina Desert Oasis, Ica Peru. Base at Hospedaje Hawka.',
    keywords: 'sand skiing huacachina, pro sandboarding peru, kevin tours huacachina, dune buggy sunset ica',
    canonical: `${NEGOCIO.dominio}/en`,
    image: `${NEGOCIO.dominio}/tours/sandski_laguna.png`
  },
  '/cliente': {
    title: 'Portal Cliente VIP | Kevin Tours Evolution',
    description: 'Acceso a tu cuenta VIP, selección de tallas de botas de nieve y cupones de descuento exclusivos para SandSki y Sandboard.',
    canonical: `${NEGOCIO.dominio}/cliente`,
    image: `${NEGOCIO.dominio}/tours/sandboard_pro.png`
  },
  '/personal': {
    title: 'Panel Staff & Despacho Base Hawka | Kevin Tours',
    description: 'Gestión operativa interna de recepción, control de caja, asignación de botas y despacho de tubulares.',
    canonical: `${NEGOCIO.dominio}/personal`,
    image: `${NEGOCIO.dominio}/tours/hawka_fachada.png`
  }
};

export const getMeta = (path = '/') => SEO[path] || SEO['/'];

/**
 * Genera el Schema.org JSON-LD para Google (TouristAttraction y LocalBusiness)
 */
export const getJsonLd = (path = '/') => {
  const meta = getMeta(path);
  return {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "SportsActivityLocation", "LocalBusiness"],
    "name": NEGOCIO.nombre,
    "alternateName": NEGOCIO.nombreComercial,
    "description": meta.description,
    "url": meta.canonical,
    "image": meta.image,
    "telephone": NEGOCIO.telefono,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": NEGOCIO.ubicacion.direccion,
      "addressLocality": "Huacachina",
      "addressRegion": "Ica",
      "postalCode": "11000",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-14.088365",
      "longitude": "-75.765691"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "19:00"
    }
  };
};
