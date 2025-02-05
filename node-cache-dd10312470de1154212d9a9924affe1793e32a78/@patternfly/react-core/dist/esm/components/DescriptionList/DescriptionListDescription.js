import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list.mjs';
import { css } from '@patternfly/react-styles';
export const DescriptionListDescription = (_a) => {
    var { children = null, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("dd", Object.assign({ className: css(styles.descriptionListDescription, className) }, props),
        React.createElement("div", { className: css(styles.descriptionListText) }, children)));
};
DescriptionListDescription.displayName = 'DescriptionListDescription';
//# sourceMappingURL=DescriptionListDescription.js.map