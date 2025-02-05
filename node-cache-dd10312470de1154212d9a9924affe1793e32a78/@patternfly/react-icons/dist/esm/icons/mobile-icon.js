import { createIcon } from '../createIcon';

export const MobileIconConfig = {
  name: 'MobileIcon',
  height: 512,
  width: 320,
  svgPath: 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z',
  yOffset: 0,
  xOffset: 0,
};

export const MobileIcon = createIcon(MobileIconConfig);

export default MobileIcon;