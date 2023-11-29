import clsx from 'clsx';
import './spacing.stories.scss';

export interface SpacingProps {
  type: 'margin' | 'padding';
  area: 'top' | 'left' | 'right' | 'bottom' | 'x' | 'y' | 'all';
  spacing: number;
}

export const createSpacingTemplate = ({ type, area, spacing }: SpacingProps) => {
  const getTypePrefix = () => {
    if (type === 'margin') {
      return 'm';
    } else {
      return 'p';
    }
  };

  const getAreaPrefix = () => {
    if (area === 'all') {
      return '';
    }
    switch (area) {
      case 'top':
        return 't';
      case 'bottom':
        return 'b';
      case 'left':
        return 'l';
      case 'right':
        return 'r';
      default:
        return area;
    }
  };

  const className = `v-${getTypePrefix()}${getAreaPrefix()}-${spacing}`;

  return `
  <div class="spacing-container">
    <div class="spacing-block ${className}">
      <div class="spacing-child">
      </div>
    </div>
  </div>
  <div class="spacing-context-container">
    <p>Class: <b>${className}</b></p>
    <div><div class="context-color c"></div> - content</div>
    <div><div class="context-color m"></div> - margin</div>
    <div><div class="context-color p"></div> - padding</div>
  </div>
  `;
};

export interface GridSpacingProps {
  type: 'gap' | 'row-gap' | 'column-gap';
  gap: number;
}

export const createGridSpacingTemplate = ({ type, gap }: GridSpacingProps) => {
  const className = `v-${type}-${gap}`;
  const template = `
  <div class="${clsx('grid-container', className)}">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>Class: <b>${className}</b></p>
  `;
  return template;
};
