import { createIcon } from '../createIcon';

export const PlusIconConfig = {
  name: 'PlusIcon',
  height: 512,
  width: 448,
  svgPath: 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
  yOffset: 0,
  xOffset: 0,
};

export const PlusIcon = createIcon(PlusIconConfig);

export default PlusIcon;