import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list.mjs';
export const DataListControl = (_a) => {
    var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(styles.dataListItemControl, className) }, props), children));
};
DataListControl.displayName = 'DataListControl';
//# sourceMappingURL=DataListControl.js.map