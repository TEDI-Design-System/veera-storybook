import '@scss/components/button.scss';
import '@scss/components/alert.scss';
import '@scss/typography.scss';
import clsx from 'clsx';
import { createCloseButton } from '../button/button';
import { createIcon } from '../../utils';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertStoryProps {
  variant: AlertVariant;
  hasIcon?: boolean;
  closable?: boolean;
  headerless?: boolean;
}

const createTitle = () => {
  const title = document.createElement('h5');
  title.className = 'v-alert__title';
  title.textContent = 'Teade';
  return title;
};

const createAlertIcon = (variant: AlertVariant) => {
  const iconName: Record<AlertVariant, string> = {
    info: 'info',
    success: 'check_circle_outline',
    warning: 'warning_amber',
    error: 'error_outline',
  };
  return createIcon({ name: iconName[variant], outlined: true });
};

const createAlertHeader = (variant: AlertVariant, hasIcon?: boolean) => {
  const header = document.createElement('div');
  if (hasIcon) {
    header.appendChild(createAlertIcon(variant));
  }
  header.className = 'v-alert__header';
  header.appendChild(createTitle());
  return header;
};

const createAlertBody = () => {
  const body = document.createElement('div');
  body.className = 'v-alert__body';
  body.innerHTML =
    'Suunatud e-postile test@testmeil.com. Soovi korral saab suunamist muuta lehel “<a class="v-link-sm" href="#">Minu andmed</a>”.';
  return body;
};

export const createAlert = ({
  variant = 'info',
  hasIcon,
  closable,
  headerless,
}: AlertStoryProps) => {
  const alert = document.createElement('div');
  alert.className = clsx('v-alert', `v-alert--${variant}`);
  if (closable) {
    alert.appendChild(createCloseButton('Sulge teade'));
  }
  if (!headerless) {
    alert.appendChild(createAlertHeader(variant, hasIcon));
  }
  alert.appendChild(createAlertBody());

  return alert;
};
