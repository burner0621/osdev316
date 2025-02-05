"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopViewer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const ManualConnection_1 = require("./ManualConnection");
const ConnectWithRemoteViewer_1 = require("./ConnectWithRemoteViewer");
const DesktopViewer_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Consoles/DesktopViewer"));
require("@patternfly/react-styles/css/components/Consoles/DesktopViewer.css");
const DesktopViewer = (_a) => {
    var { children = null, spice = null, vnc = null, rdp = null } = _a, props = tslib_1.__rest(_a, ["children", "spice", "vnc", "rdp"]);
    return (react_1.default.createElement("div", { className: (0, react_styles_1.css)(DesktopViewer_1.default.consoleDesktopViewer) },
        react_1.default.createElement(ConnectWithRemoteViewer_1.ConnectWithRemoteViewer, { spice: spice, vnc: vnc, rdp: rdp, onGenerate: props.onGenerate, onDownload: props.onDownload, textConnectWithRemoteViewer: props.textConnectWithRemoteViewer, textConnectWithRDP: props.textConnectWithRDP, textMoreInfo: props.textMoreInfo, textMoreRDPInfo: props.textMoreRDPInfo, textMoreInfoContent: props.textMoreInfoContent, textMoreRDPInfoContent: props.textMoreRDPInfoContent }, children),
        react_1.default.createElement(ManualConnection_1.ManualConnection, { spice: spice, vnc: vnc, rdp: rdp, textManualConnection: props.textManualConnection, textNoProtocol: props.textNoProtocol, textConnectWith: props.textConnectWith, textAddress: props.textAddress, textSpiceAddress: props.textSpiceAddress, textVNCAddress: props.textVNCAddress, textSpicePort: props.textSpicePort, textVNCPort: props.textVNCPort, textSpiceTlsPort: props.textSpiceTlsPort, textVNCTlsPort: props.textVNCTlsPort, textRDPPort: props.textRDPPort, textRdpAddress: props.textRdpAddress })));
};
exports.DesktopViewer = DesktopViewer;
exports.DesktopViewer.displayName = 'DesktopViewer';
//# sourceMappingURL=DesktopViewer.js.map