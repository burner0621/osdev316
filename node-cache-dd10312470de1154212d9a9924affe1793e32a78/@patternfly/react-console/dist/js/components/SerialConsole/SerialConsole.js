"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialConsole = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const react_core_1 = require("@patternfly/react-core");
const XTerm_1 = require("./XTerm");
const SerialConsoleActions_1 = require("./SerialConsoleActions");
const constants_1 = require("../common/constants");
const SerialConsole_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Consoles/SerialConsole"));
require("@patternfly/react-styles/css/components/Consoles/xterm.css");
require("@patternfly/react-styles/css/components/Consoles/SerialConsole.css");
const { CONNECTED, DISCONNECTED, LOADING } = constants_1.constants;
const SerialConsoleBase = ({ onConnect, onDisconnect, 
// eslint-disable-next-line @typescript-eslint/no-empty-function
onTitleChanged = () => { }, onData, cols, rows, fontFamily, fontSize, status = 'loading', textConnect = 'Connect', textDisconnect, textReset, textDisconnected = 'Click Connect to open serial console.', textLoading = 'Loading ...', innerRef }) => {
    react_1.default.useEffect(() => {
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
            terminal = (react_1.default.createElement(XTerm_1.XTerm, { innerRef: innerRef, cols: cols, rows: rows, fontFamily: fontFamily, fontSize: fontSize, onTitleChanged: onTitleChanged, onData: onData }));
            break;
        case DISCONNECTED:
            terminal = (react_1.default.createElement(react_core_1.EmptyState, null,
                react_1.default.createElement(react_core_1.EmptyStateBody, null, textDisconnected),
                react_1.default.createElement(react_core_1.EmptyStateFooter, null,
                    react_1.default.createElement(react_core_1.Button, { onClick: onConnectClick }, textConnect))));
            break;
        case LOADING:
        default:
            terminal = (react_1.default.createElement(react_core_1.EmptyState, null,
                react_1.default.createElement(react_core_1.EmptyStateHeader, { icon: react_1.default.createElement(react_core_1.EmptyStateIcon, { icon: react_core_1.Spinner }) }),
                react_1.default.createElement(react_core_1.EmptyStateBody, null, textLoading)));
            break;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        status !== DISCONNECTED && (react_1.default.createElement(SerialConsoleActions_1.SerialConsoleActions, { onDisconnect: onDisconnectClick, onReset: onResetClick, textDisconnect: textDisconnect, textReset: textReset })),
        react_1.default.createElement("div", { className: (0, react_styles_1.css)(SerialConsole_1.default.consoleSerial) }, terminal)));
};
SerialConsoleBase.displayName = 'SerialConsoleBase';
exports.SerialConsole = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(SerialConsoleBase, Object.assign({ innerRef: ref }, props))));
exports.SerialConsole.displayName = 'SerialConsole';
//# sourceMappingURL=SerialConsole.js.map