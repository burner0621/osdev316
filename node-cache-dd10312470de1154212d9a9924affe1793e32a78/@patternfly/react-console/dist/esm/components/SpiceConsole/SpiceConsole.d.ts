import React from 'react';
export interface SpiceConsoleProps extends React.HTMLProps<HTMLDivElement> {
    /** Children nodes */
    children?: React.ReactNode;
    /** FQDN or IP to connect to */
    host?: string;
    /** TCP Port */
    port?: string;
    /** host:port/path */
    path?: string;
    /** Enable use of TLS encryption on the SPICE server */
    encrypt?: boolean;
    /** token */
    password?: string;
    /** Additional classes added to the component */
    className?: string;
    /** Callback. Spice server disconnected. */
    onDisconnected?: (e: any) => void;
    /** Initialization of Spice failed */
    onInitFailed?: (e: any) => void;
    textConnecting?: string;
    textDisconnected?: string;
    textSendShortcut?: string;
    textCtrlAltDel?: string;
}
export declare const SpiceConsole: React.FunctionComponent<SpiceConsoleProps>;
//# sourceMappingURL=SpiceConsole.d.ts.map