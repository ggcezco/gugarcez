// Minimal WhatsApp CTA handling
// Replace waNumber with your WhatsApp in international format, e.g. 55XXXXXXXXXXX
const waNumber = '5599999999999';

function buildWaUrl(message) {
  const base = `https://wa.me/${waNumber}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

function attachWhatsAppHandlers() {
  document.querySelectorAll('.js-wa-cta').forEach((el) => {
    el.addEventListener('click', (e) => {
      const msg = el.getAttribute('data-wa-message') || 'Olá! Quero reservar na Pousada Mão de Deus.';
      const url = buildWaUrl(msg);
      el.setAttribute('href', url);
    });
  });
}

function setCurrentYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  attachWhatsAppHandlers();
  setCurrentYear();
});
