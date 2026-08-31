// src/app.js
// 🏜️ Única Fuente de Verdad Comercial y Operativa de Kevin Tours Evolution
import wii from './wii.js';

export const ruc = '10724968614';
export const razonSocial = 'SALAZAR FLORES KEVIN FABRIZZIO';
export const nombreComercial = 'SAND BOARD EVOLUTION / KEVIN TOURS';
export const slogan = 'Escuela Oficial de SandSki & Sandboard Pro Huacachina';
export const certificacion = 'Escuela Oficial MTC N° 11000';

// Canales Oficiales de Contacto
export const telefono = '+51 985 496 463';
export const telefonoLimpio = '51985496463';
export const whatsappUrl = `https://wa.me/${telefonoLimpio}`;
export const instagram = 'https://instagram.com/sandboard.evolution';
export const tiktok = 'https://tiktok.com/@sandboardevolution';

// Base Física & Punto de Encuentro
export const base = {
  nombre: 'Hospedaje Hawka',
  referencia: 'Recepción Hospedaje Hawka',
  direccion: 'Av. Ángela Perotti S/n, Laguna de Huacachina, Ica 11000, Perú',
  mapsUrl: 'https://maps.app.goo.gl/mrCqrpsKLKYeLV9ZA',
  coordenadas: {
    lat: -14.0874593,
    lng: -75.7633215
  }
};

// Horarios y Monedas
export const horario = 'Lunes a Domingo: 8:00 AM – 7:00 PM';
export const monedas = ['PEN', 'USD'];

export default {
  ...wii,
  ruc,
  razonSocial,
  nombreComercial,
  slogan,
  certificacion,
  telefono,
  telefonoLimpio,
  whatsappUrl,
  instagram,
  tiktok,
  base,
  horario,
  monedas
};
