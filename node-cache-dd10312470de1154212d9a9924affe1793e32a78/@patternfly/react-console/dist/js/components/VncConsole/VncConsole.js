"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VncConsole = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const react_core_1 = require("@patternfly/react-core");
const logging_1 = require("@novnc/novnc/core/util/logging");
/** Has bad types. https://github.com/larryprice/novnc-core/issues/5 */
const rfb_1 = tslib_1.__importDefault(require("@novnc/novnc/core/rfb"));
const VncActions_1 = require("./VncActions");
const constants_1 = require("../common/constants");
const VncConsole_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Consoles/VncConsole"));
require("@patternfly/react-styles/css/components/Consoles/VncConsole.css");
const { CONNECTED, CONNECTING, DISCONNECTED } = constants_1.constants;
const VncConsole = ({ children, host, port = '80', path = '', encrypt = false, resizeSession = true, clipViewport = false, dragViewport = false, scaleViewport = false, viewOnly = false, shared = false, credentials, repeaterID = '', vncLogging = 'warn', consoleContainerId, additionalButtons = [], 
// eslint-disable-next-line @typescript-eslint/no-empty-function
onDisconnected = () => { }, onInitFailed, onSecurityFailure, textConnect = 'Connect', textConnecting = 'Connecting', textDisconnected = 'Click Connect to open the VNC console.', textDisconnect = 'Disconnect', textSendShortcut, textCtrlAltDel }) => {
    const rfb = react_1.default.useRef();
    const novncElem = react_1.default.useRef(null);
    const [status, setStatus] = react_1.default.useState(CONNECTING);
    const onConnected = () => {
        setStatus(CONNECTED);
    };
    const _onDisconnected = react_1.default.useCallback((e) => {
        setStatus(DISCONNECTED);
        onDisconnected(e);
    }, [onDisconnected]);
    const _onSecurityFailure = react_1.default.useCallback((e) => {
        setStatus(DISCONNECTED);
        onSecurityFailure(e);
    }, [onSecurityFailure]);
    const onCtrlAltDel = () => {
        var _a;
        if (rfb.current) {
            (_a = rfb === null || rfb === void 0 ? void 0 : rfb.current) === null || _a === void 0 ? void 0 : _a.sendCtrlAltDel();
        }
    };
    const addEventListeners = react_1.default.useCallback(() => {
        var _a, _b, _c;
        if (rfb.current) {
            (_a = rfb.current) === null || _a === void 0 ? void 0 : _a.addEventListener('connect', onConnected);
            (_b = rfb.current) === null || _b === void 0 ? void 0 : _b.addEventListener('disconnect', _onDisconnected);
            (_c = rfb.current) === null || _c === void 0 ? void 0 : _c.addEventListener('securityfailure', _onSecurityFailure);
        }
    }, [rfb, _onDisconnected, _onSecurityFailure]);
    const removeEventListeners = react_1.default.useCallback(() => {
        if (rfb.current) {
            rfb.current.removeEventListener('connect', onConnected);
            rfb.current.removeEventListener('disconnect', _onDisconnected);
            rfb.current.removeEventListener('securityfailure', _onSecurityFailure);
        }
    }, [rfb, _onDisconnected, _onSecurityFailure]);
    const connect = react_1.default.useCallback(() => {
        const protocol = encrypt ? 'wss' : 'ws';
        const url = `${protocol}://${host}:${port}/${path}`;
        const options = {
            repeaterID,
            shared,
            credentials
        };
        rfb.current = new rfb_1.default(novncElem.current, url, options);
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
    react_1.default.useEffect(() => {
        (0, logging_1.initLogging)(vncLogging);
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
            rightContent = (react_1.default.createElement(VncActions_1.VncActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel, textDisconnect: textDisconnect, onDisconnect: disconnect, additionalButtons: additionalButtons }));
            break;
        case DISCONNECTED:
            emptyState = (react_1.default.createElement(react_core_1.EmptyState, null,
                react_1.default.createElement(react_core_1.EmptyStateBody, null, textDisconnected),
                react_1.default.createElement(react_core_1.EmptyStateFooter, null,
                    react_1.default.createElement(react_core_1.Button, { variant: "primary", onClick: connect }, textConnect))));
            break;
        case CONNECTING:
        default:
            emptyState = (react_1.default.createElement(react_core_1.EmptyState, null,
                react_1.default.createElement(react_core_1.EmptyStateHeader, { icon: react_1.default.createElement(react_core_1.EmptyStateIcon, { icon: react_core_1.Spinner }) }),
                react_1.default.createElement(react_core_1.EmptyStateBody, null, textConnecting)));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        rightContent,
        react_1.default.createElement("div", { className: (0, react_styles_1.css)(VncConsole_1.default.consoleVnc) },
            children,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    emptyState,
                    react_1.default.createElement("div", { id: consoleContainerId, ref: novncElem }))))));
};
exports.VncConsole = VncConsole;
exports.VncConsole.displayName = 'VncConsole';
//# sourceMappingURL=VncConsole.js.map