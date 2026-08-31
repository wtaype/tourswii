// src/feature/inicio/data/disciplinas.data.js
// 🎿 Las 4 Disciplinas Oficiales y Exclusivas de Kevin Tours

export const DISCIPLINAS = [
  {
    id: 'sandski_pro',
    nombre_es: 'SandSki Profesional',
    nombre_en: 'Professional SandSki',
    desc_es: 'Esquía sobre las dunas gigantes con esquís alpinos reales, bastones y botas rígidas con instructor especializado.',
    desc_en: 'Ski giant sand dunes with real alpine skis, poles and fitted snow boots with a certified instructor.',
    precio_pen: 85,
    precio_usd: 23,
    imagen: '/tours/sandski_laguna.png',
    badge: 'EXCLUSIVO',
    color_borde: 'var(--neon-yellow)',
    beneficios_es: ['Par de esquís alpinos + bastones', 'Botas de nieve a tu medida exacta', 'Transporte tubular 4x4', 'Guía instructor en cada bajada'],
    beneficios_en: ['Pair of alpine skis + poles', 'Fitted snow boots in your size', '4x4 dune buggy ride', 'Instructor guide on each slope']
  },
  {
    id: 'sandboard_pro',
    nombre_es: 'Sandboard Pro con Botas',
    nombre_en: 'Pro Sandboard with Boots',
    desc_es: 'Aprende la técnica para deslizarte de pie en tablas de arena equipadas con fijaciones profesionales de carraca.',
    desc_en: 'Learn to carve sand dunes standing up on pro sandboards equipped with snowboard ratchet bindings.',
    precio_pen: 75,
    precio_usd: 20,
    imagen: '/tours/sandboard_pro.png',
    badge: 'TOP #1',
    color_borde: 'var(--fire-orange)',
    beneficios_es: ['Tabla con fijaciones ergonómicas', 'Botas de snowboard térmicas', 'Cera de alta velocidad', 'Clases para principiantes'],
    beneficios_en: ['Board with ergonomic bindings', 'Thermal snowboard boots', 'High-speed speed wax', 'Beginner guided lessons']
  },
  {
    id: 'snowboard_pro',
    nombre_es: 'Snowboard Pro en Dunas',
    nombre_en: 'Dunes Pro Snowboard',
    desc_es: 'Tablas de snowboard adaptadas para descensos rápidos en arena suelta con cera de alta velocidad.',
    desc_en: 'High-end mountain snowboards adapted for fast descents on loose desert sand with high-speed wax.',
    precio_pen: 80,
    precio_usd: 22,
    imagen: '/tours/sandboard3.webp',
    badge: 'ALTA MONTAÑA',
    color_borde: 'var(--glow-cyan)',
    beneficios_es: ['Tabla de snowboard de alta gama', 'Cera especial para dunas empinadas', 'Botas de snowboard rígidas', 'Parada para atardecer'],
    beneficios_en: ['High-end snowboard deck', 'Special sand wax for steep dunes', 'Rigid snowboard boots', 'Sunset viewing stop']
  },
  {
    id: 'bodyboard_arena',
    nombre_es: 'Bodyboard en Arena',
    nombre_en: 'Sand Bodyboard',
    desc_es: 'Deslízate acostado sobre tablas suaves de bodyboard enceradas. Ideal para principiantes, niños y pura diversión.',
    desc_en: 'Slide lying down on smooth waxed bodyboards. Ideal for beginners, children, and pure thrill.',
    precio_pen: 45,
    precio_usd: 12,
    imagen: '/tours/sandboard1.webp',
    badge: 'FAMILIAR',
    color_borde: 'var(--wa-green)',
    beneficios_es: ['Tabla de bodyboard + cera', 'Transporte en tubular 4x4', 'Seguridad total para niños', 'Fotos en las dunas'],
    beneficios_en: ['Bodyboard + speed wax', '4x4 dune buggy ride', '100% safe for kids & families', 'Sunset photo stops']
  }
];
