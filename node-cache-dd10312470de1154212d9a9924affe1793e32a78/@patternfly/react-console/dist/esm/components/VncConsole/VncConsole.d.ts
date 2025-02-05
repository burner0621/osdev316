import React from 'react';
import '@patternfly/react-styles/css/components/Consoles/VncConsole.css';
export interface VncConsoleProps extends React.HTMLProps<HTMLDivElement> {
    /** Children nodes */
    children?: React.ReactNode;
    /** FQDN or IP to connect to */
    host: string;
    /** TCP Port */
    port?: string;
    /** host:port/path */
    path?: string;
    encrypt?: boolean;
    /** Is a boolean indicating if a request to resize the remote session should be sent whenever the container changes dimensions */
    resizeSession?: boolean;
    /** Is a boolean indicating if the remote session should be clipped to its container */
    clipViewport?: boolean;
    /** Is a boolean indicating if mouse events should control the relative position of a clipped remote session.*/
    dragViewport?: boolean;
    /** Is a boolean indicating if the remote session should be scaled locally so it fits its container */
    scaleViewport?: boolean;
    /** Is a boolean indicating if any events (e.g. key presses or mouse movement) should be prevented from being sent to the server */
    viewOnly?: boolean;
    /** Is a boolean indicating if the remote server should be shared or if any other connected clients should be disconnected */
    shared?: boolean;
    /** An Object specifying the credentials to provide to the server when authenticating
     * { username: '' password: '' target: ''}
     */
    credentials?: object;
    /** A DOMString specifying the ID to provide to any VNC repeater encountered */
    repeaterID?: string;
    /** log-level for noVNC */
    vncLogging?: 'error' | 'warn' | 'none' | 'debug' | 'info';
    consoleContainerId?: string;
    additionalButtons?: React.ReactNode[];
    /** Callback. VNC server disconnected. */
    onDisconnected?: (e: any) => void;
    /** Initialization of RFB failed */
    onInitFailed?: (e: any) => void;
    /** Handshake failed */
    onSecurityFailure?: (e: any) => void;
    textConnect?: string;
    textConnecting?: string | React.ReactNode;
    textDisconnected?: string;
    /** Text content rendered inside the Disconnect button */
    textDisconnect?: string;
    /** Text content rendered inside the button Send shortcut dropdown toggle */
    textSendShortcut?: string;
    /** Text content rendered inside the Ctrl-Alt-Delete dropdown entry */
    textCtrlAltDel?: string;
}
export declare const VncConsole: React.FunctionComponent<VncConsoleProps>;
//# sourceMappingURL=VncConsole.d.ts.map