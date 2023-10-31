export interface RangeProps {
  min?: number;
  max?: number;
  disabled?: boolean;
}
export const createRangeSlider = ({ disabled, min = 0, max = 100 }: RangeProps) => {
  const rangeSlider = document.createElement('input');
  rangeSlider.type = 'range';
  rangeSlider.className = 'v-range';
  rangeSlider.disabled = !!disabled;
  rangeSlider.min = `${min}`;
  rangeSlider.max = `${max}`;
  rangeSlider.value = rangeSlider.min;

  rangeSlider.addEventListener('input', (event: Event) => {
    const slider = event.target as HTMLInputElement;
    const value = Number(slider.value);
    const min = Number(slider.min);
    const max = Number(slider.max || 100);
    const range = max - min;
    const completed = range - (max - value);
    const progress = (completed / range) * 100;

    slider.style.setProperty('--v-range-progress', `${progress}%`);
  });

  rangeSlider.setAttribute('aria-label', 'liugurväli näide');

  return rangeSlider;
};
