import { createIcon } from '../createIcon';

export const OutlinedCalendarIconConfig = {
  name: 'OutlinedCalendarIcon',
  height: 512,
  width: 448,
  svgPath: 'M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z',
  yOffset: 0,
  xOffset: 0,
};

export const OutlinedCalendarIcon = createIcon(OutlinedCalendarIconConfig);

export default OutlinedCalendarIcon;