import { createIcon } from '../createIcon';

export const ArchiveIconConfig = {
  name: 'ArchiveIcon',
  height: 512,
  width: 512,
  svgPath: 'M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z',
  yOffset: 0,
  xOffset: 0,
};

export const ArchiveIcon = createIcon(ArchiveIconConfig);

export default ArchiveIcon;