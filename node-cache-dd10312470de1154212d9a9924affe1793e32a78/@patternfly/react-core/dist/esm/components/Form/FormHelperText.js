import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Form/form.mjs';
export const FormHelperText = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(styles.formHelperText, className) }, props), children));
};
FormHelperText.displayName = 'FormHelperText';
//# sourceMappingURL=FormHelperText.js.map