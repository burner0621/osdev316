import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block.mjs';
export const CodeBlockAction = (_a) => {
    var { children = null, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(`${styles.codeBlockActions}-item`, className) }, props), children));
};
CodeBlockAction.displayName = 'CodeBlockAction';
//# sourceMappingURL=CodeBlockAction.js.map