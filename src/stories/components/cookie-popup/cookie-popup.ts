import '@scss/components/button.scss';
import '@scss/components/cookie-popup.scss';
import '@scss/typography.scss';
import { createButton } from '../button/button';

const createTitle = () => {
  const title = document.createElement('h4');
  title.className = 'v-cookie-popup__title';
  title.textContent = 'Eesti.ee kasutab oma veebilehtedel küpsised';
  return title;
};

const createPopupBody = () => {
  const body = document.createElement('div');
  body.className = 'v-cookie-popup__body';
  body.innerHTML =
    'Meie veebisait kasutab küpsiseid. Valides "Nõustun", annate nõusoleku kõikide küpsiste kasutamiseks. <a class="v-link-sm">Lugege rohkem meie küpsiste kasutamise põhimõtetest</a>.';
  return body;
};

const createPopupFooter = () => {
  const footer = document.createElement('div');
  footer.className = 'v-cookie-popup__footer';
  footer.append(createButton({ label: 'Ei nõustu', variant: 'secondary' }));
  footer.append(createButton({ label: 'Nõustun' }));
  return footer;
};

const createPopupBase = () => {
  const overlay = document.createElement('div');
  overlay.className = 'v-cookie-popup';
  return overlay;
};

export const createCookiePopup = () => {
  const popup = createPopupBase();
  popup.appendChild(createTitle());
  popup.appendChild(createPopupBody());
  popup.appendChild(createPopupFooter());
  return popup;
};
