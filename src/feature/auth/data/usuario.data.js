// src/feature/auth/data/usuario.data.js
// 👤 Modelo Oficial Único del Cliente VIP (Carlos Mendoza)

export const USUARIO_VIP = {
  id: 'usr_carlos_01',
  nombre: 'Carlos Mendoza',
  email: 'carlos.mendoza@gmail.com',
  telefono: '+51 987 654 321',
  pais: 'Perú',
  tipo: 'Esquiador VIP',
  tallaBota: '42',
  disciplinaFavorita: 'SandSki Pro con Bastones',
  cupon: 'KEVIN-PRO15',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
  historialTours: [
    { fecha: '14 Feb 2026', disciplina: 'SandSki Profesional', pax: 2, totalPen: 144.50, estado: 'Completado' },
    { fecha: '28 Ene 2026', disciplina: 'Sandboard Pro con Botas', pax: 4, totalPen: 255.00, estado: 'Completado' }
  ]
};

export default USUARIO_VIP;
