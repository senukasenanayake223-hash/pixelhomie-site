// Small interactions for Pixelhomie.
const menuButton = document.querySelector('#menu-btn');
const navigation = document.querySelector('#nav');
menuButton.addEventListener('click', () => navigation.classList.toggle('open'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navigation.classList.remove('open')));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });
