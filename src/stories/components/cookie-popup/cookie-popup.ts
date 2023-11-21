import './cookie-popup.scss';
import { createButton } from '../button/button';
import { createCheckboxWithLabel } from '../../forms/checkbox/checkbox';
import { createTooltip } from '../../utils';

const consentOptions = ['Vajalikud küpsised', 'Analüütilised küpsised', 'Sihtturunduse küpsised'];

const titleId = 'cookie-popu-title';

const createTitle = () => {
  const title = document.createElement('h4');
  title.id = titleId;
  title.className = 'v-cookie-popup__title';
  title.textContent = 'Meie veebileht kasutab küpsiseid';
  return title;
};

const createPopupBody = () => {
  const body = document.createElement('div');
  body.className = 'v-cookie-popup__body';
  body.innerHTML =
    'Meie veebisait kasutab küpsiseid. Valides "Nõustun", annate nõusoleku kõikide küpsiste kasutamiseks. <a class="v-link-sm" href="#">Lugege rohkem meie küpsiste kasutamise põhimõtetest</a>.';
  return body;
};

const createPopupFooter = () => {
  let expaned = false;

  const footer = document.createElement('div');
  const actions = document.createElement('div');
  actions.className = 'v-flex v-gap-5 v-flex-wrap v-flex-row-reverse v-justify-content-end';
  const collapseTrigger = createButton({
    label: 'Valin küpsised',
    variant: 'neutral',
    rightIcon: 'expand_more',
  });
  collapseTrigger.classList.add('v-mr-auto');
  collapseTrigger.setAttribute('aria-expaned', expaned.toString());
  collapseTrigger.onclick = () => {
    expaned = !expaned;
    if (expaned) {
      collapse.style.display = 'flex';
      collapseTrigger.classList.add('expanded');
    } else {
      collapse.style.display = 'none';
      collapseTrigger.classList.remove('expanded');
    }
    collapseTrigger.setAttribute('aria-expaned', expaned.toString());
  };
  const acceptOptions = document.createElement('div');
  acceptOptions.className = 'v-flex v-gap-5';
  acceptOptions.append(createButton({ label: 'Ei nõustu', variant: 'secondary' }));
  acceptOptions.append(createButton({ label: 'Nõustun' }));
  actions.appendChild(acceptOptions);
  actions.appendChild(collapseTrigger);
  footer.appendChild(actions);

  const collapse = createConsentOptionsCollapse();
  collapse.style.display = 'none';
  footer.appendChild(collapse);

  return footer;
};

const createConsentOptionsCollapse = () => {
  const collapseContent = document.createElement('div');
  collapseContent.className = 'v-flex v-flex-column v-gap-5';
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'v-flex v-flex-column v-pl-5 v-gap-4 v-mt-4';
  for (const opt of consentOptions) {
    optionsContainer.appendChild(createConsentOptionCheckbox(opt));
  }
  collapseContent.appendChild(optionsContainer);
  const saveBtn = createButton({ label: 'Salvestan' });
  saveBtn.classList.add('v-mr-auto');
  collapseContent.appendChild(saveBtn);
  return collapseContent;
};

const createConsentOptionCheckbox = (label: string) => {
  const defaultOption = label === 'Vajalikud küpsised';
  const container = document.createElement('div');
  container.className = 'v-flex v-gap-3 v-align-items-center';
  container.appendChild(
    createCheckboxWithLabel({ label, size: 'sm', checked: defaultOption, disabled: defaultOption }),
  );
  const infoIcon = createButton({
    label: 'info',
    iconOnly: true,
    outlinedIcon: true,
    variant: 'neutral',
    size: 'sm',
  });
  container.appendChild(infoIcon);
  const tooltip = createTooltip({
    triggerElement: infoIcon,
    placement: 'right',
    text: 'Selgitus küpsiste kohta',
  });
  container.appendChild(tooltip);
  return container;
};

const createPopupBase = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'v-cookie-popup';
  wrapper.role = 'region';
  wrapper.setAttribute('aria-labelledy', titleId);
  return wrapper;
};

export const createCookiePopup = () => {
  const popup = createPopupBase();
  popup.appendChild(createTitle());
  popup.appendChild(createPopupBody());
  popup.appendChild(createPopupFooter());
  return popup;
};
