// src/feature/hola/hola.js
// Controlador de pestañas e interactividad para la página de pruebas Hola

export function initHola() {
  if (typeof document === 'undefined') return;

  const tabs = document.querySelectorAll('.hola-tab-btn');
  const panels = document.querySelectorAll('.hola-tab-panel');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      tabs.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}
