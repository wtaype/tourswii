// src/feature/inicio/lib/cotizador.lib.js
// 🧮 Lógica pura del cotizador de precios

import { DISCIPLINAS } from '../data/disciplinas.data.js';

export function calcularCotizacion({ disciplinaId = 'sandski_pro', pax = 2, moneda = 'PEN', cupónValido = false }) {
  const item = DISCIPLINAS.find(d => d.id === disciplinaId) || DISCIPLINAS[0];
  const precioUnitario = moneda === 'USD' ? item.precio_usd : item.precio_pen;
  const subtotal = precioUnitario * pax;
  const descuento = cupónValido ? Math.round(subtotal * 0.15) : 0;
  const total = subtotal - descuento;

  return {
    disciplina: item,
    precioUnitario,
    subtotal,
    descuento,
    total,
    simbolo: moneda === 'USD' ? '$' : 'S/'
  };
}
