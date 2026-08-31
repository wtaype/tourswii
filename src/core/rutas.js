// src/core/rutas.js
// 🗺️ Enrutador Central de Kevin Tours Evolution

export const RUTAS = {
  inicio: '/',
  inicioEn: '/en',
  cliente: '/cliente',
  personal: '/personal'
};

export const NAV_LINKS = [
  { id: 'inicio', key: 'nav_inicio', href: '#inicio', icon: 'fa-house' },
  { id: 'tours', key: 'nav_tours', href: '#tours', icon: 'fa-person-skiing' },
  { id: 'galeria', key: 'nav_galeria', href: '#galeria', icon: 'fa-images' },
  { id: 'ubicacion', key: 'nav_ubicacion', href: '#ubicacion', icon: 'fa-location-dot' },
  { id: 'confianza', key: 'nav_confianza', href: '#confianza', icon: 'fa-shield-halved' },
  { id: 'faq', key: 'nav_faq', href: '#faq', icon: 'fa-circle-question' }
];
