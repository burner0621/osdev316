import React from 'react';
import { DescriptionList, DescriptionListGroup, DescriptionListTerm, DescriptionListDescription, Title } from '@patternfly/react-core';
const Detail = ({ title, value }) => (React.createElement(DescriptionListGroup, null,
    React.createElement(DescriptionListTerm, null, title),
    React.createElement(DescriptionListDescription, null, value)));
export const ManualConnection = ({ spice = null, vnc = null, rdp = null, textManualConnection = 'Manual Connection', textNoProtocol = 'No connection available.', textConnectWith = 'Connect with any viewer application for following protocols', textAddress = 'Address', textSpiceAddress = 'SPICE Address', textVNCAddress = 'VNC Address', textSpicePort = 'SPICE Port', textVNCPort = 'VNC Port', textSpiceTlsPort = 'SPICE TLS Port', textVNCTlsPort = 'VNC TLS Port', textRDPPort = 'RDP Port', textRdpAddress = 'RDP Address' }) => {
    const msg = spice || vnc ? textConnectWith : textNoProtocol;
    const address = spice && vnc && spice.address === vnc.address && spice.address;
    const rdpAddress = rdp && rdp.address !== address ? rdp.address : null;
    return (React.createElement("div", { className: "pf-v5-c-console__manual-connection" },
        React.createElement(Title, { headingLevel: "h2", size: "3xl" }, textManualConnection),
        React.createElement("p", null, msg),
        React.createElement(DescriptionList, null,
            address && React.createElement(Detail, { title: textAddress, value: address }),
            !address && spice && React.createElement(Detail, { title: textSpiceAddress, value: spice.address }),
            rdpAddress && React.createElement(Detail, { title: textRdpAddress, value: rdpAddress }),
            spice && spice.port && React.createElement(Detail, { title: textSpicePort, value: spice.port }),
            spice && spice.tlsPort && React.createElement(Detail, { title: textSpiceTlsPort, value: spice.tlsPort }),
            !address && vnc && React.createElement(Detail, { title: textVNCAddress, value: vnc.address }),
            vnc && vnc.port && React.createElement(Detail, { title: textVNCPort, value: vnc.port }),
            vnc && vnc.tlsPort && React.createElement(Detail, { title: textVNCTlsPort, value: vnc.tlsPort }),
            rdp && rdp.port && React.createElement(Detail, { title: textRDPPort, value: rdp.port }))));
};
ManualConnection.displayName = 'ManualConnection';
//# sourceMappingURL=ManualConnection.js.map