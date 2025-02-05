import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover.mjs';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
export const PopoverCloseButton = (_a) => {
    var { onClose = () => undefined } = _a, props = __rest(_a, ["onClose"]);
    return (React.createElement("div", { className: css(styles.popoverClose) },
        React.createElement(Button, Object.assign({ onClick: onClose, variant: "plain", "aria-label": true }, props, { style: { pointerEvents: 'auto' } }),
            React.createElement(TimesIcon, null))));
};
PopoverCloseButton.displayName = 'PopoverCloseButton';
//# sourceMappingURL=PopoverCloseButton.js.map