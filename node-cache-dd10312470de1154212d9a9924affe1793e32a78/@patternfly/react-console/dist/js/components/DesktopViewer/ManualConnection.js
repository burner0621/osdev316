"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualConnection = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const Detail = ({ title, value }) => (react_1.default.createElement(react_core_1.DescriptionListGroup, null,
    react_1.default.createElement(react_core_1.DescriptionListTerm, null, title),
    react_1.default.createElement(react_core_1.DescriptionListDescription, null, value)));
const ManualConnection = ({ spice = null, vnc = null, rdp = null, textManualConnection = 'Manual Connection', textNoProtocol = 'No connection available.', textConnectWith = 'Connect with any viewer application for following protocols', textAddress = 'Address', textSpiceAddress = 'SPICE Address', textVNCAddress = 'VNC Address', textSpicePort = 'SPICE Port', textVNCPort = 'VNC Port', textSpiceTlsPort = 'SPICE TLS Port', textVNCTlsPort = 'VNC TLS Port', textRDPPort = 'RDP Port', textRdpAddress = 'RDP Address' }) => {
    const msg = spice || vnc ? textConnectWith : textNoProtocol;
    const address = spice && vnc && spice.address === vnc.address && spice.address;
    const rdpAddress = rdp && rdp.address !== address ? rdp.address : null;
    return (react_1.default.createElement("div", { className: "pf-v5-c-console__manual-connection" },
        react_1.default.createElement(react_core_1.Title, { headingLevel: "h2", size: "3xl" }, textManualConnection),
        react_1.default.createElement("p", null, msg),
        react_1.default.createElement(react_core_1.DescriptionList, null,
            address && react_1.default.createElement(Detail, { title: textAddress, value: address }),
            !address && spice && react_1.default.createElement(Detail, { title: textSpiceAddress, value: spice.address }),
            rdpAddress && react_1.default.createElement(Detail, { title: textRdpAddress, value: rdpAddress }),
            spice && spice.port && react_1.default.createElement(Detail, { title: textSpicePort, value: spice.port }),
            spice && spice.tlsPort && react_1.default.createElement(Detail, { title: textSpiceTlsPort, value: spice.tlsPort }),
            !address && vnc && react_1.default.createElement(Detail, { title: textVNCAddress, value: vnc.address }),
            vnc && vnc.port && react_1.default.createElement(Detail, { title: textVNCPort, value: vnc.port }),
            vnc && vnc.tlsPort && react_1.default.createElement(Detail, { title: textVNCTlsPort, value: vnc.tlsPort }),
            rdp && rdp.port && react_1.default.createElement(Detail, { title: textRDPPort, value: rdp.port }))));
};
exports.ManualConnection = ManualConnection;
exports.ManualConnection.displayName = 'ManualConnection';
//# sourceMappingURL=ManualConnection.js.map