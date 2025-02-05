import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { ManualConnection } from './ManualConnection';
import { ConnectWithRemoteViewer } from './ConnectWithRemoteViewer';
import styles from '@patternfly/react-styles/css/components/Consoles/DesktopViewer';
import '@patternfly/react-styles/css/components/Consoles/DesktopViewer.css';
export const DesktopViewer = (_a) => {
    var { children = null, spice = null, vnc = null, rdp = null } = _a, props = __rest(_a, ["children", "spice", "vnc", "rdp"]);
    return (React.createElement("div", { className: css(styles.consoleDesktopViewer) },
        React.createElement(ConnectWithRemoteViewer, { spice: spice, vnc: vnc, rdp: rdp, onGenerate: props.onGenerate, onDownload: props.onDownload, textConnectWithRemoteViewer: props.textConnectWithRemoteViewer, textConnectWithRDP: props.textConnectWithRDP, textMoreInfo: props.textMoreInfo, textMoreRDPInfo: props.textMoreRDPInfo, textMoreInfoContent: props.textMoreInfoContent, textMoreRDPInfoContent: props.textMoreRDPInfoContent }, children),
        React.createElement(ManualConnection, { spice: spice, vnc: vnc, rdp: rdp, textManualConnection: props.textManualConnection, textNoProtocol: props.textNoProtocol, textConnectWith: props.textConnectWith, textAddress: props.textAddress, textSpiceAddress: props.textSpiceAddress, textVNCAddress: props.textVNCAddress, textSpicePort: props.textSpicePort, textVNCPort: props.textVNCPort, textSpiceTlsPort: props.textSpiceTlsPort, textVNCTlsPort: props.textVNCTlsPort, textRDPPort: props.textRDPPort, textRdpAddress: props.textRdpAddress })));
};
DesktopViewer.displayName = 'DesktopViewer';
//# sourceMappingURL=DesktopViewer.js.map