import { createIcon } from '../createIcon';

export const SquareIconConfig = {
  name: 'SquareIcon',
  height: 512,
  width: 448,
  svgPath: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z',
  yOffset: 0,
  xOffset: 0,
};

export const SquareIcon = createIcon(SquareIconConfig);

export default SquareIcon;