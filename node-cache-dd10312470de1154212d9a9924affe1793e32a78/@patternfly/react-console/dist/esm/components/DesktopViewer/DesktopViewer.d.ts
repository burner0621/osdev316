import React from 'react';
import { ConnectWithRemoteViewerProps } from './ConnectWithRemoteViewer';
import { ConsoleDetailPropType } from './ConsoleDetailPropType';
import '@patternfly/react-styles/css/components/Consoles/DesktopViewer.css';
export interface DesktopViewerProps extends ConnectWithRemoteViewerProps {
    /** Custom content of more-info section  */
    children?: React.ReactNode;
    /** Connection details for Spice */
    spice?: ConsoleDetailPropType;
    /** Connection details for VNC */
    vnc?: ConsoleDetailPropType;
    /** Connection details for RDP */
    rdp?: ConsoleDetailPropType;
    textManualConnection?: string;
    textNoProtocol?: string;
    textConnectWith?: string;
    textAddress?: string;
    textSpiceAddress?: string;
    textVNCAddress?: string;
    textSpicePort?: string;
    textVNCPort?: string;
    textSpiceTlsPort?: string;
    textVNCTlsPort?: string;
    textRDPPort?: string;
    textRdpAddress?: string;
    textConnectWithRemoteViewer?: string;
    textConnectWithRDP?: string;
    /** Text that appears in the toggle */
    textMoreInfo?: string;
    /** The information content appearing above the description list for guidelines to install virt-viewer */
    textMoreInfoContent?: string | React.ReactNode;
    /** Text that appears in the toggle */
    textMoreRDPInfo?: string;
    /** The information content appearing above the description list for guidelines to install virt-viewer */
    textMoreRDPInfoContent?: string | React.ReactNode;
}
export declare const DesktopViewer: React.FunctionComponent<DesktopViewerProps>;
//# sourceMappingURL=DesktopViewer.d.ts.map