import { createIcon } from '../createIcon';

export const HackerNewsIconConfig = {
  name: 'HackerNewsIcon',
  height: 512,
  width: 448,
  svgPath: 'M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z',
  yOffset: 0,
  xOffset: 0,
};

export const HackerNewsIcon = createIcon(HackerNewsIconConfig);

export default HackerNewsIcon;