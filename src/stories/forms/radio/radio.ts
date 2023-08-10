import '@scss/forms/forms.scss';
import '@scss/typography.scss';
import './radio.stories.scss';

export interface RadioProps {
  items: { value: string; label?: string; disabled?: boolean }[];
}
export const createRadios = ({ items }: RadioProps) => {
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

export const createRadiosWithoutLabels = () => {
  return `
  <div class="container">
    <div class="card">
      <h2 id="card-1-title">Kaart 1</h2>
      <input type="radio" value="card-1" class="v-radio" name="card-radio" aria-labelledby="card-1-title"/>
    </div>
    <div class="card">
      <h2 id="card-2-title">Kaart 2</h2>
      <input type="radio" value="card-2" class="v-radio" name="card-radio" aria-labelledby="card-2-title"/>
    </div>
    <div class="card">
      <h2 id="card-3-title">Kaart 3</h2>
      <input type="radio" value="card-3" class="v-radio" name="card-radio" aria-labelledby="card-3-title"/>
    </div>
  </div>`;
};
