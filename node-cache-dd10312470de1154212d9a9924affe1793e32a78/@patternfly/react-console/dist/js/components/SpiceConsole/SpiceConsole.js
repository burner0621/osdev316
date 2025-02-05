"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceConsole = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const spice_html5_1 = require("@spice-project/spice-html5");
const constants_1 = require("../common/constants");
const SpiceActions_1 = require("./SpiceActions");
const { CONNECTED, CONNECTING, DISCONNECTED } = constants_1.constants;
const SpiceConsole = ({ children = null, host = '', port = '80', path = '', encrypt = false, password, className = '', onDisconnected, onInitFailed, textConnecting = 'Connecting', textDisconnected = 'Disconnected', textSendShortcut, textCtrlAltDel }) => {
    let spiceStaticComponent;
    const scRef = react_1.default.useRef();
    const [status, setStatus] = react_1.default.useState(CONNECTING);
    const disconnect = react_1.default.useCallback(() => {
        if (scRef.current) {
            scRef.current.stop();
            scRef.current = undefined;
        }
    }, [scRef]);
    const onSpiceError = react_1.default.useCallback((e) => {
        disconnect();
        setStatus(DISCONNECTED);
        onDisconnected(e);
    }, [disconnect, setStatus, onDisconnected]);
    react_1.default.useEffect(() => {
        try {
            const protocol = encrypt ? 'wss' : 'ws';
            const uri = `${protocol}://${host}:${port}/${path}`;
            scRef.current = new spice_html5_1.SpiceMainConn({
                uri,
                /* eslint-disable camelcase */
                screen_id: 'spice-screen',
                password,
                onerror: onSpiceError,
                onsuccess: setStatus(CONNECTED)
            });
        }
        catch (e) {
            onInitFailed && onInitFailed(e);
            disconnect();
        }
        return () => disconnect();
    }, [disconnect, encrypt, host, onInitFailed, onSpiceError, password, path, port]);
    const onCtrlAltDel = () => {
        if (scRef.current) {
            (0, spice_html5_1.sendCtrlAltDel)();
        }
    };
    if (!spiceStaticComponent) {
        // create just once
        spiceStaticComponent = react_1.default.createElement("div", { id: "spice-screen" });
    }
    return (react_1.default.createElement("div", { className: (0, react_styles_1.css)('spice-console', className) },
        children,
        react_1.default.createElement("div", null, status === CONNECTED && (react_1.default.createElement(SpiceActions_1.SpiceActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel }))),
        react_1.default.createElement("div", null,
            (status === DISCONNECTED || status === CONNECTING) && (react_1.default.createElement("div", { className: 'spice-console-' + status }, status === DISCONNECTED ? textDisconnected : textConnecting)),
            status,
            spiceStaticComponent)));
};
exports.SpiceConsole = SpiceConsole;
exports.SpiceConsole.displayName = 'SpiceConsole';
//# sourceMappingURL=SpiceConsole.js.map