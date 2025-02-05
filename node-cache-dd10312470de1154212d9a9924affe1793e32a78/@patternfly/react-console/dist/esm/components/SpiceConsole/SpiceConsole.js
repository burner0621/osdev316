import React from 'react';
import { css } from '@patternfly/react-styles';
import { SpiceMainConn, sendCtrlAltDel } from '@spice-project/spice-html5';
import { constants } from '../common/constants';
import { SpiceActions } from './SpiceActions';
const { CONNECTED, CONNECTING, DISCONNECTED } = constants;
export const SpiceConsole = ({ children = null, host = '', port = '80', path = '', encrypt = false, password, className = '', onDisconnected, onInitFailed, textConnecting = 'Connecting', textDisconnected = 'Disconnected', textSendShortcut, textCtrlAltDel }) => {
    let spiceStaticComponent;
    const scRef = React.useRef();
    const [status, setStatus] = React.useState(CONNECTING);
    const disconnect = React.useCallback(() => {
        if (scRef.current) {
            scRef.current.stop();
            scRef.current = undefined;
        }
    }, [scRef]);
    const onSpiceError = React.useCallback((e) => {
        disconnect();
        setStatus(DISCONNECTED);
        onDisconnected(e);
    }, [disconnect, setStatus, onDisconnected]);
    React.useEffect(() => {
        try {
            const protocol = encrypt ? 'wss' : 'ws';
            const uri = `${protocol}://${host}:${port}/${path}`;
            scRef.current = new SpiceMainConn({
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
            sendCtrlAltDel();
        }
    };
    if (!spiceStaticComponent) {
        // create just once
        spiceStaticComponent = React.createElement("div", { id: "spice-screen" });
    }
    return (React.createElement("div", { className: css('spice-console', className) },
        children,
        React.createElement("div", null, status === CONNECTED && (React.createElement(SpiceActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel }))),
        React.createElement("div", null,
            (status === DISCONNECTED || status === CONNECTING) && (React.createElement("div", { className: 'spice-console-' + status }, status === DISCONNECTED ? textDisconnected : textConnecting)),
            status,
            spiceStaticComponent)));
};
SpiceConsole.displayName = 'SpiceConsole';
//# sourceMappingURL=SpiceConsole.js.map