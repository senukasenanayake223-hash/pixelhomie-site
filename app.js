// Change this to your own WhatsApp number: country code + number, without + or spaces.
const pixelhomieWhatsApp = '94770000000';
document.querySelector('#project-form').addEventListener('submit', event => {
  event.preventDefault();
  const field = id => document.querySelector(`#${id}`).value.trim();
  const message = `Hi Pixelhomie! I want to start a website project.\n\nNAME: ${field('name')}\nWHATSAPP: ${field('phone')}\nBUSINESS: ${field('business')}\nSERVICE: ${field('service')}\n\nPROJECT DETAILS:\n${field('details')}${field('link') ? `\n\nINSTAGRAM / WEBSITE:\n${field('link')}` : ''}\n\nPlease send me the next steps and a quote.`;
  window.open(`https://wa.me/${pixelhomieWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
});
