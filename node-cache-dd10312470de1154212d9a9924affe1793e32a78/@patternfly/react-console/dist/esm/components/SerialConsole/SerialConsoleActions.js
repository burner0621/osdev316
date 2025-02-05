import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Consoles/SerialConsole';
export const SerialConsoleActions = (_a) => {
    var { textDisconnect = 'Disconnect', textReset = 'Reset' } = _a, props = __rest(_a, ["textDisconnect", "textReset"]);
    return (React.createElement("div", { className: css(styles.consoleActionsSerial) },
        React.createElement(Button, { variant: "secondary", onClick: props.onDisconnect }, textDisconnect),
        React.createElement(Button, { variant: "secondary", onClick: props.onReset }, textReset)));
};
SerialConsoleActions.displayName = 'SerialConsoleActions';
//# sourceMappingURL=SerialConsoleActions.js.map