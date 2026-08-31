// src/feature/inicio/inicio.js
// 🏖️ Controlador de Interactividad de la Portada

export function initInicio() {
  if (typeof window === 'undefined') return;

  // Animaciones y eventos reactivos del Hero
  const mockup = document.querySelector('.hero_card_mockup');
  if (mockup) {
    mockup.addEventListener('mouseenter', () => {
      mockup.style.transform = 'translateY(-6px) scale(1.01)';
    });
    mockup.addEventListener('mouseleave', () => {
      mockup.style.transform = 'translateY(0) scale(1)';
    });
  }
}
