export type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR['length'] extends END
  ? ACC | START | END
  : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;

export const createContentFill = () => {
  const content = document.createElement('div');
  content.style.height = '200px';
  content.style.border = '1px dashed lightgray';
  content.style.borderRadius = '4px';
  return content;
};
