// src/app.js
// 🏜️ Única Fuente de Verdad Comercial y Operativa de Kevin Tours Evolution
import wii from './wii.js';

export const ruc = '10724968614';
export const razonSocial = 'SALAZAR FLORES KEVIN FABRIZZIO';
export const nombreComercial = 'SAND BOARD EVOLUTION / KEVIN TOURS';
export const slogan = 'Escuela Oficial de SandSki & Sandboard Pro Huacachina';
export const sloganEn = 'Official SandSki & Pro Sandboard School Huacachina';
export const certificacion = 'Escuela Oficial MTC N° 11000';
export const certificacionEn = 'Official School MTC N° 11000';

// Canales Oficiales de Contacto
export const telefono = '+51 985 496 463';
export const telefonoLimpio = '51985496463';
export const whatsappUrl = `https://wa.me/${telefonoLimpio}`;
export const instagram = 'https://instagram.com/sandboard.evolution';
export const tiktok = 'https://tiktok.com/@sandboardevolution';

// Base Física & Punto de Encuentro Oficial
export const base = {
  nombre: 'Hospedaje Hawka',
  referencia: 'Recepción Hospedaje Hawka',
  referenciaEn: 'Hospedaje Hawka Reception',
  direccion: 'Av. Ángela Perotti S/n, Laguna de Huacachina, Ica 11000, Perú',
  mapsUrl: 'https://maps.app.goo.gl/mrCqrpsKLKYeLV9ZA',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.287232230198!2d-75.7655102!3d-14.0874593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3047a0705a7%3A0x6b24508497fa9fb!2sHospedaje%20Hawka!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe',
  coordenadas: {
    lat: -14.0874593,
    lng: -75.7633215
  }
};

// Horarios y Monedas
export const horario = 'Lunes a Domingo: 8:00 AM – 7:00 PM';
export const horarioEn = 'Monday to Sunday: 8:00 AM – 7:00 PM';
export const monedas = ['PEN', 'USD'];

export default {
  ...wii,
  ruc,
  razonSocial,
  nombreComercial,
  slogan,
  sloganEn,
  certificacion,
  certificacionEn,
  telefono,
  telefonoLimpio,
  whatsappUrl,
  instagram,
  tiktok,
  base,
  horario,
  horarioEn,
  monedas
};
