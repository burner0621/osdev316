import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Divider/divider.mjs';
import { formatBreakpointMods } from '../../helpers/util';
export var DividerVariant;
(function (DividerVariant) {
    DividerVariant["hr"] = "hr";
    DividerVariant["li"] = "li";
    DividerVariant["div"] = "div";
})(DividerVariant || (DividerVariant = {}));
export const Divider = (_a) => {
    var { className, component = DividerVariant.hr, inset, orientation } = _a, props = __rest(_a, ["className", "component", "inset", "orientation"]);
    const Component = component;
    return (React.createElement(Component, Object.assign({ className: css(styles.divider, formatBreakpointMods(inset, styles), formatBreakpointMods(orientation, styles), className) }, (component !== 'hr' && { role: 'separator' }), props)));
};
Divider.displayName = 'Divider';
//# sourceMappingURL=Divider.js.map