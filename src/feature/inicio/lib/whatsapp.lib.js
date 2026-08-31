// src/feature/inicio/lib/whatsapp.lib.js
// 📱 Generador dinámico de mensajes y enlaces para WhatsApp

import { NEGOCIO } from '../../../core/config/constantes.js';

export function generarEnlaceWhatsApp({ disciplinaNombre = 'SandSki Profesional', pax = 2, fecha = '', turno = '16:00 (Sunset)', total = 'S/ 170' }) {
  const msg = `Hola Kevin Tours! 👋 Deseo reservar:
🎿 *Tour:* ${disciplinaNombre}
👥 *Pasajeros:* ${pax}
📅 *Fecha:* ${fecha || 'Hoy'}
⏰ *Turno:* ${turno}
💰 *Total estimado:* ${total}
🏨 *Punto de encuentro:* ${NEGOCIO.ubicacion.referencia}
¿Tienen disponibilidad?`;

  return `https://wa.me/${NEGOCIO.telefonoLimpio}?text=${encodeURIComponent(msg)}`;
}
