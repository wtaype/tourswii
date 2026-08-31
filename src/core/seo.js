// src/core/seo.js
// 🔍 Generador Puro de Metadatos SEO y Schema.org JSON-LD (Consume app.js y wii.js)
import app from '../app.js';

export function getMeta(ruta = '/') {
  const isEn = ruta.startsWith('/en');
  return {
    title: isEn
      ? `${app.app} | SandSki & Sandboard Pro Huacachina`
      : `${app.app} | Escuela Oficial de SandSki y Sandboard en Huacachina`,
    description: isEn
      ? `Official operator of SandSkiing, Pro Sandboarding and Snowboard in Huacachina. Base at ${app.base.referencia}.`
      : `Operador Oficial de SandSki Alpino, Sandboard Pro con Botas y Snowboard en Huacachina. Base física en ${app.base.referencia}.`,
    canonical: `${app.linkweb}${ruta}`,
    image: `${app.linkweb}/tours/sandski_laguna.png`,
    siteName: app.app,
    telefono: app.telefono
  };
}

export function getJsonLd(ruta = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'SportsActivityLocation', 'LocalBusiness'],
    name: app.nombreComercial,
    description: app.slogan,
    url: `${app.linkweb}${ruta}`,
    telephone: app.telefono,
    image: `${app.linkweb}/tours/sandski_laguna.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: app.base.direccion,
      addressLocality: 'Huacachina, Ica',
      addressRegion: 'Ica',
      postalCode: '11000',
      addressCountry: 'PE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: app.base.coordenadas.lat,
      longitude: app.base.coordenadas.lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '19:00'
    }
  };
}
