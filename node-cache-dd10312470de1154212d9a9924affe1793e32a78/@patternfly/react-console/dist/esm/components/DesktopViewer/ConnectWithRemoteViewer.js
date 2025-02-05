import React from 'react';
import { Button, ExpandableSection } from '@patternfly/react-core';
import { constants } from '../common/constants';
import { MoreInformationDefaultContent } from './MoreInformationDefaultContent';
import { MoreInformationDefaultRDPContent } from './MoreInformationDefaultRDPContent';
import { generateDescriptorFile, downloadFile } from './consoleDescriptorGenerator';
const { VNC_CONSOLE_TYPE, SPICE_CONSOLE_TYPE, RDP_CONSOLE_TYPE, DEFAULT_VV_FILENAME, DEFAULT_VV_MIMETYPE, DEFAULT_RDP_FILENAME, DEFAULT_RDP_MIMETYPE } = constants;
export const ConnectWithRemoteViewer = ({ onGenerate = generateDescriptorFile, onDownload = downloadFile, spice = null, vnc = null, rdp = null, textConnectWithRemoteViewer = 'Launch Remote Viewer', textConnectWithRDP = 'Launch Remote Desktop', textMoreInfo = 'Remote Viewer Details', textMoreInfoContent = '', textMoreRDPInfo = 'Remote Desktop Details', textMoreRDPInfoContent = '' }) => {
    const [isExpandedDefault, setIsExpandedDefault] = React.useState(false);
    const [isExpandedRDP, setIsExpandedRDP] = React.useState(false);
    const _console = spice || vnc; // strictly prefer spice over vnc
    const onClickVV = () => {
        const type = spice ? SPICE_CONSOLE_TYPE : VNC_CONSOLE_TYPE;
        if (_console) {
            const vv = onGenerate(_console, type);
            return onDownload(DEFAULT_VV_FILENAME, vv.content, vv.mimeType || DEFAULT_VV_MIMETYPE);
        }
    };
    const onClickRDP = () => {
        const rdpFile = onGenerate(rdp, RDP_CONSOLE_TYPE);
        return onDownload(DEFAULT_RDP_FILENAME, rdpFile.content, rdpFile.mimeType || DEFAULT_RDP_MIMETYPE);
    };
    // RDP button is rendered only if the protocol is available
    // If none of Spice or VNC is available, the .vv button is disabled (but rendered)
    return (React.createElement("div", { className: "pf-v5-c-console__remote-viewer" },
        React.createElement("div", { className: "pf-v5-c-console__remote-viewer-launch" },
            React.createElement(Button, { className: "pf-v5-c-console__remote-viewer-launch-vv", onClick: onClickVV, isDisabled: !_console }, textConnectWithRemoteViewer),
            !!rdp && (React.createElement(Button, { onClick: onClickRDP, className: "pf-v5-c-console__remote-viewer-launch-rdp" }, textConnectWithRDP))),
        !!_console && (React.createElement(ExpandableSection, { toggleText: textMoreInfo, isExpanded: isExpandedDefault, onToggle: (_event, isExpanded) => setIsExpandedDefault(isExpanded) },
            React.createElement(MoreInformationDefaultContent, { textMoreInfoContent: textMoreInfoContent }))),
        !!rdp && (React.createElement(ExpandableSection, { toggleText: textMoreRDPInfo, isExpanded: isExpandedRDP, onToggle: (_event, isExpanded) => setIsExpandedRDP(isExpanded) },
            React.createElement(MoreInformationDefaultRDPContent, { textMoreRDPInfoContent: textMoreRDPInfoContent })))));
};
ConnectWithRemoteViewer.displayName = 'ConnectWithRemoteViewer';
//# sourceMappingURL=ConnectWithRemoteViewer.js.map