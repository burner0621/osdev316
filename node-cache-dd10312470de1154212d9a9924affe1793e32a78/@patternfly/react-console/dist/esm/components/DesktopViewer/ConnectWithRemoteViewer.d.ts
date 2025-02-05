import React from 'react';
import { onGenerateFunctionType, onDownloadFunctionType } from './consoleDescriptorGenerator';
import { ConsoleDetailPropType } from './ConsoleDetailPropType';
export interface ConnectWithRemoteViewerProps extends React.HTMLProps<HTMLDivElement> {
    /** Custom content of more-info section  */
    children?: React.ReactNode;
    /** Connection details for Spice */
    spice?: ConsoleDetailPropType;
    /** Connection details for VNC */
    vnc?: ConsoleDetailPropType;
    /** Connection details for RDP */
    rdp?: ConsoleDetailPropType;
    /** Callback function. Generate content of .vv file.
     * Parameters: ({ _console, type }) => ({
     *     content,  // required string value
     *     mimeType, // optional, default application/x-virt-viewer
     *     fileName  // optional, default: console.vv
     *   })
     */
    onGenerate?: onGenerateFunctionType;
    /** Callback function. Perform file download.
     * Default implementation is usually good enough, but i.e. in case of environment with tight
     * content security policy set, this might be required.
     *
     * Examples for alternative file-download implementations:
     *   - use of iframe
     *   - use of http-server
     *
     * Parameters: (fileName, content, mimeType) => {}
     */
    onDownload?: onDownloadFunctionType;
    textConnectWithRemoteViewer?: string;
    textMoreInfo?: string;
    textMoreInfoContent?: string | React.ReactNode;
    textConnectWithRDP?: string;
    textMoreRDPInfo?: string;
    textMoreRDPInfoContent?: string | React.ReactNode;
}
export declare const ConnectWithRemoteViewer: React.FunctionComponent<ConnectWithRemoteViewerProps>;
//# sourceMappingURL=ConnectWithRemoteViewer.d.ts.map