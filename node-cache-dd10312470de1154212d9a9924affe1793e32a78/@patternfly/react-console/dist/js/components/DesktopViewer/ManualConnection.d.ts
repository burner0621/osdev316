import React from 'react';
import { ConsoleDetailPropType } from './ConsoleDetailPropType';
export interface DetailProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
    value: string | number;
}
export interface ManualConnectionProps extends React.HTMLProps<HTMLDivElement> {
    spice?: ConsoleDetailPropType;
    vnc?: ConsoleDetailPropType;
    rdp?: ConsoleDetailPropType;
    textManualConnection: string;
    textNoProtocol: string;
    textConnectWith: string;
    textAddress: string;
    textSpiceAddress: string;
    textVNCAddress: string;
    textSpicePort: string;
    textVNCPort: string;
    textSpiceTlsPort: string;
    textVNCTlsPort: string;
    textRDPPort: string;
    textRdpAddress: string;
}
export declare const ManualConnection: React.FunctionComponent<ManualConnectionProps>;
//# sourceMappingURL=ManualConnection.d.ts.map