import '@scss/components/button.scss';
import '@scss/components/cookie-popup.scss';
import '@scss/components/collapse.scss';
import '@scss/utilities/flex.scss';
import '@scss/utilities/spacing.scss';
import '@scss/utilities/colors.scss';
import '@scss/typography.scss';
import './cookie-popup.scss';
import { createButton } from '../button/button';
import { createCheckboxWithLabel } from '../../forms/checkbox/checkbox';
import { createIcon } from '../../utils';

const consentOptions = ['Vajalikud küpsised', 'Analüütilised küpsised', 'Sihtturunduse küpsised'];

const createTitle = () => {
  const title = document.createElement('h4');
  title.className = 'v-cookie-popup__title';
  title.textContent = 'Meie veebileht kasutab küpsiseid';
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
  let expaned = false;

  const footer = document.createElement('div');
  const actions = document.createElement('div');
  actions.className = 'v-flex v-gap-5 v-flex-wrap';
  const collapseTrigger = createButton({
    label: 'Valin küpsised',
    variant: 'neutral',
    rightIcon: 'expand_more',
  });
  collapseTrigger.classList.add('v-mr-auto');
  collapseTrigger.onclick = () => {
    expaned = !expaned;
    if (expaned) {
      collapse.classList.add('v-collapse--expanded');
      collapse.hidden = false;
      collapseTrigger.classList.add('expanded');
    } else {
      collapse.classList.remove('v-collapse--expanded');
      setTimeout(() => {
        collapse.hidden = true;
      }, 300);
      collapseTrigger.classList.remove('expanded');
    }
  };
  actions.appendChild(collapseTrigger);
  const acceptOptions = document.createElement('div');
  acceptOptions.className = 'v-flex v-gap-5';
  acceptOptions.append(createButton({ label: 'Ei nõustu', variant: 'secondary' }));
  acceptOptions.append(createButton({ label: 'Nõustun' }));
  actions.appendChild(acceptOptions);
  footer.appendChild(actions);

  const collapse = createConsentOptionsCollapse();
  footer.appendChild(collapse);

  return footer;
};

const createConsentOptionsCollapse = () => {
  const collapse = document.createElement('div');
  collapse.className = 'v-collapse';
  const collapseContent = document.createElement('div');
  collapseContent.className = 'v-collapse__content v-flex v-flex-column v-gap-3';
  collapse.appendChild(collapseContent);
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'v-flex v-flex-column v-gap-4 v-pl-5 v-mt-3';
  for (const opt of consentOptions) {
    optionsContainer.appendChild(createConsentOptionCheckbox(opt));
  }
  collapseContent.appendChild(optionsContainer);
  const saveBtn = createButton({ label: 'Salvestan' });
  saveBtn.classList.add('v-ml-auto');
  collapseContent.appendChild(saveBtn);
  return collapse;
};

const createConsentOptionCheckbox = (label: string) => {
  const container = document.createElement('div');
  container.className = 'v-flex v-gap-2';
  container.appendChild(createCheckboxWithLabel({ label, size: 'sm' }));
  const infoIcon = createIcon({ name: 'info', outlined: true });
  infoIcon.classList.add('v-color-blue-600');
  container.appendChild(infoIcon);
  return container;
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
