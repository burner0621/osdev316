import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, Spinner, EmptyStateHeader, EmptyStateFooter } from '@patternfly/react-core';
import { XTerm } from './XTerm';
import { SerialConsoleActions } from './SerialConsoleActions';
import { constants } from '../common/constants';
import styles from '@patternfly/react-styles/css/components/Consoles/SerialConsole';
import '@patternfly/react-styles/css/components/Consoles/xterm.css';
import '@patternfly/react-styles/css/components/Consoles/SerialConsole.css';
const { CONNECTED, DISCONNECTED, LOADING } = constants;
const SerialConsoleBase = ({ onConnect, onDisconnect, 
// eslint-disable-next-line @typescript-eslint/no-empty-function
onTitleChanged = () => { }, onData, cols, rows, fontFamily, fontSize, status = 'loading', textConnect = 'Connect', textDisconnect, textReset, textDisconnected = 'Click Connect to open serial console.', textLoading = 'Loading ...', innerRef }) => {
    React.useEffect(() => {
        onConnect();
        return () => {
            onDisconnect();
        };
    }, [onConnect, onDisconnect]);
    const onConnectClick = () => {
        onConnect();
        focusTerminal();
    };
    const onDisconnectClick = () => {
        onDisconnect();
        focusTerminal();
    };
    const onResetClick = () => {
        onDisconnect();
        onConnect();
        focusTerminal();
    };
    const focusTerminal = () => {
        innerRef && innerRef.current && innerRef.current.focusTerminal();
    };
    let terminal;
    switch (status) {
        case CONNECTED:
            terminal = (React.createElement(XTerm, { innerRef: innerRef, cols: cols, rows: rows, fontFamily: fontFamily, fontSize: fontSize, onTitleChanged: onTitleChanged, onData: onData }));
            break;
        case DISCONNECTED:
            terminal = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateBody, null, textDisconnected),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(Button, { onClick: onConnectClick }, textConnect))));
            break;
        case LOADING:
        default:
            terminal = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateHeader, { icon: React.createElement(EmptyStateIcon, { icon: Spinner }) }),
                React.createElement(EmptyStateBody, null, textLoading)));
            break;
    }
    return (React.createElement(React.Fragment, null,
        status !== DISCONNECTED && (React.createElement(SerialConsoleActions, { onDisconnect: onDisconnectClick, onReset: onResetClick, textDisconnect: textDisconnect, textReset: textReset })),
        React.createElement("div", { className: css(styles.consoleSerial) }, terminal)));
};
SerialConsoleBase.displayName = 'SerialConsoleBase';
export const SerialConsole = React.forwardRef((props, ref) => (React.createElement(SerialConsoleBase, Object.assign({ innerRef: ref }, props))));
SerialConsole.displayName = 'SerialConsole';
//# sourceMappingURL=SerialConsole.js.map