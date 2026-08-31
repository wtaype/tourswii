// src/feature/personal/data/caja.data.js
// 💰 Datos operativos de caja del día

export const CAJA_HOY = {
  fecha: '30 de Agosto, 2026',
  ingresosTotalesPen: 3450,
  ingresosTotalesUsd: 920,
  pasajerosAtendidos: 42,
  salidasDespachadas: 6,
  metodosPago: [
    { metodo: 'Efectivo en Base', montoPen: 1850, icono: 'fa-money-bill-wave', color: 'var(--wa-green)' },
    { metodo: 'Yape / Plin', montoPen: 1100, icono: 'fa-mobile-screen', color: '#7000ff' },
    { metodo: 'Tarjeta / POS Izipay', montoPen: 500, icono: 'fa-credit-card', color: 'var(--glow-cyan)' }
  ]
};
