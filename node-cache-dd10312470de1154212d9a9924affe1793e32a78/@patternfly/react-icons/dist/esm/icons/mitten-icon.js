import { createIcon } from '../createIcon';

export const MittenIconConfig = {
  name: 'MittenIcon',
  height: 512,
  width: 448,
  svgPath: 'M368 416H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm57-209.1c-27.2-22.6-67.5-19-90.1 8.2l-20.9 25-29.6-128.4c-18-77.5-95.4-125.9-172.8-108C34.2 21.6-14.2 98.9 3.7 176.4L51.6 384h309l72.5-87c22.7-27.2 19-67.5-8.1-90.1z',
  yOffset: 0,
  xOffset: 0,
};

export const MittenIcon = createIcon(MittenIconConfig);

export default MittenIcon;