import '@scss/forms/forms.scss';

export interface SwitchProps {
  disabled?: boolean;
}
export const createSwitch = ({ disabled }: SwitchProps) => {
  return `<input type="checkbox" ${disabled ? 'disabled' : ''} class="v-switch"/>`;
};
