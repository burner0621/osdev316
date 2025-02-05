import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, Spinner, EmptyStateHeader, EmptyStateFooter } from '@patternfly/react-core';
import { initLogging } from '@novnc/novnc/core/util/logging';
/** Has bad types. https://github.com/larryprice/novnc-core/issues/5 */
import RFB from '@novnc/novnc/core/rfb';
import { VncActions } from './VncActions';
import { constants } from '../common/constants';
import styles from '@patternfly/react-styles/css/components/Consoles/VncConsole';
import '@patternfly/react-styles/css/components/Consoles/VncConsole.css';
const { CONNECTED, CONNECTING, DISCONNECTED } = constants;
export const VncConsole = ({ children, host, port = '80', path = '', encrypt = false, resizeSession = true, clipViewport = false, dragViewport = false, scaleViewport = false, viewOnly = false, shared = false, credentials, repeaterID = '', vncLogging = 'warn', consoleContainerId, additionalButtons = [], 
// eslint-disable-next-line @typescript-eslint/no-empty-function
onDisconnected = () => { }, onInitFailed, onSecurityFailure, textConnect = 'Connect', textConnecting = 'Connecting', textDisconnected = 'Click Connect to open the VNC console.', textDisconnect = 'Disconnect', textSendShortcut, textCtrlAltDel }) => {
    const rfb = React.useRef();
    const novncElem = React.useRef(null);
    const [status, setStatus] = React.useState(CONNECTING);
    const onConnected = () => {
        setStatus(CONNECTED);
    };
    const _onDisconnected = React.useCallback((e) => {
        setStatus(DISCONNECTED);
        onDisconnected(e);
    }, [onDisconnected]);
    const _onSecurityFailure = React.useCallback((e) => {
        setStatus(DISCONNECTED);
        onSecurityFailure(e);
    }, [onSecurityFailure]);
    const onCtrlAltDel = () => {
        var _a;
        if (rfb.current) {
            (_a = rfb === null || rfb === void 0 ? void 0 : rfb.current) === null || _a === void 0 ? void 0 : _a.sendCtrlAltDel();
        }
    };
    const addEventListeners = React.useCallback(() => {
        var _a, _b, _c;
        if (rfb.current) {
            (_a = rfb.current) === null || _a === void 0 ? void 0 : _a.addEventListener('connect', onConnected);
            (_b = rfb.current) === null || _b === void 0 ? void 0 : _b.addEventListener('disconnect', _onDisconnected);
            (_c = rfb.current) === null || _c === void 0 ? void 0 : _c.addEventListener('securityfailure', _onSecurityFailure);
        }
    }, [rfb, _onDisconnected, _onSecurityFailure]);
    const removeEventListeners = React.useCallback(() => {
        if (rfb.current) {
            rfb.current.removeEventListener('connect', onConnected);
            rfb.current.removeEventListener('disconnect', _onDisconnected);
            rfb.current.removeEventListener('securityfailure', _onSecurityFailure);
        }
    }, [rfb, _onDisconnected, _onSecurityFailure]);
    const connect = React.useCallback(() => {
        const protocol = encrypt ? 'wss' : 'ws';
        const url = `${protocol}://${host}:${port}/${path}`;
        const options = {
            repeaterID,
            shared,
            credentials
        };
        rfb.current = new RFB(novncElem.current, url, options);
        addEventListeners();
        rfb.current.viewOnly = viewOnly;
        rfb.current.clipViewport = clipViewport;
        rfb.current.dragViewport = dragViewport;
        rfb.current.scaleViewport = scaleViewport;
        rfb.current.resizeSession = resizeSession;
    }, [
        addEventListeners,
        host,
        path,
        port,
        resizeSession,
        clipViewport,
        dragViewport,
        scaleViewport,
        viewOnly,
        encrypt,
        rfb,
        repeaterID,
        shared,
        credentials
    ]);
    React.useEffect(() => {
        initLogging(vncLogging);
        try {
            connect();
        }
        catch (e) {
            onInitFailed && onInitFailed(e);
            rfb.current = undefined;
        }
        return () => {
            disconnect();
            removeEventListeners();
            rfb.current = undefined;
        };
    }, [connect, onInitFailed, removeEventListeners, vncLogging]);
    const disconnect = () => {
        if (!rfb.current) {
            return;
        }
        rfb.current.disconnect();
    };
    let rightContent;
    let emptyState;
    switch (status) {
        case CONNECTED:
            rightContent = (React.createElement(VncActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel, textDisconnect: textDisconnect, onDisconnect: disconnect, additionalButtons: additionalButtons }));
            break;
        case DISCONNECTED:
            emptyState = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateBody, null, textDisconnected),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(Button, { variant: "primary", onClick: connect }, textConnect))));
            break;
        case CONNECTING:
        default:
            emptyState = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateHeader, { icon: React.createElement(EmptyStateIcon, { icon: Spinner }) }),
                React.createElement(EmptyStateBody, null, textConnecting)));
    }
    return (React.createElement(React.Fragment, null,
        rightContent,
        React.createElement("div", { className: css(styles.consoleVnc) },
            children,
            React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    emptyState,
                    React.createElement("div", { id: consoleContainerId, ref: novncElem }))))));
};
VncConsole.displayName = 'VncConsole';
//# sourceMappingURL=VncConsole.js.map