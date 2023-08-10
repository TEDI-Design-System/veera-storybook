import '@scss/forms/forms.scss';

export interface RadioProps {
  items: { value: string; label?: string; disabled?: boolean }[];
}
export const createRadio = ({ items }: RadioProps) => {
  return `<div style="display: flex; flex-direction: column; gap: 8px;">${items
    .map(
      (item) =>
        `<div class="v-radio">
        <input type="radio" name="v-radio-demo" ${item.disabled ? 'disabled' : ''} id="${
          item.value
        }"/>
        ${item.label && `<label for="${item.value}">${item.label}</label>`}
      </div>`,
    )
    .join('')}</div>`;
};
