"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectWithRemoteViewer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const constants_1 = require("../common/constants");
const MoreInformationDefaultContent_1 = require("./MoreInformationDefaultContent");
const MoreInformationDefaultRDPContent_1 = require("./MoreInformationDefaultRDPContent");
const consoleDescriptorGenerator_1 = require("./consoleDescriptorGenerator");
const { VNC_CONSOLE_TYPE, SPICE_CONSOLE_TYPE, RDP_CONSOLE_TYPE, DEFAULT_VV_FILENAME, DEFAULT_VV_MIMETYPE, DEFAULT_RDP_FILENAME, DEFAULT_RDP_MIMETYPE } = constants_1.constants;
const ConnectWithRemoteViewer = ({ onGenerate = consoleDescriptorGenerator_1.generateDescriptorFile, onDownload = consoleDescriptorGenerator_1.downloadFile, spice = null, vnc = null, rdp = null, textConnectWithRemoteViewer = 'Launch Remote Viewer', textConnectWithRDP = 'Launch Remote Desktop', textMoreInfo = 'Remote Viewer Details', textMoreInfoContent = '', textMoreRDPInfo = 'Remote Desktop Details', textMoreRDPInfoContent = '' }) => {
    const [isExpandedDefault, setIsExpandedDefault] = react_1.default.useState(false);
    const [isExpandedRDP, setIsExpandedRDP] = react_1.default.useState(false);
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
    return (react_1.default.createElement("div", { className: "pf-v5-c-console__remote-viewer" },
        react_1.default.createElement("div", { className: "pf-v5-c-console__remote-viewer-launch" },
            react_1.default.createElement(react_core_1.Button, { className: "pf-v5-c-console__remote-viewer-launch-vv", onClick: onClickVV, isDisabled: !_console }, textConnectWithRemoteViewer),
            !!rdp && (react_1.default.createElement(react_core_1.Button, { onClick: onClickRDP, className: "pf-v5-c-console__remote-viewer-launch-rdp" }, textConnectWithRDP))),
        !!_console && (react_1.default.createElement(react_core_1.ExpandableSection, { toggleText: textMoreInfo, isExpanded: isExpandedDefault, onToggle: (_event, isExpanded) => setIsExpandedDefault(isExpanded) },
            react_1.default.createElement(MoreInformationDefaultContent_1.MoreInformationDefaultContent, { textMoreInfoContent: textMoreInfoContent }))),
        !!rdp && (react_1.default.createElement(react_core_1.ExpandableSection, { toggleText: textMoreRDPInfo, isExpanded: isExpandedRDP, onToggle: (_event, isExpanded) => setIsExpandedRDP(isExpanded) },
            react_1.default.createElement(MoreInformationDefaultRDPContent_1.MoreInformationDefaultRDPContent, { textMoreRDPInfoContent: textMoreRDPInfoContent })))));
};
exports.ConnectWithRemoteViewer = ConnectWithRemoteViewer;
exports.ConnectWithRemoteViewer.displayName = 'ConnectWithRemoteViewer';
//# sourceMappingURL=ConnectWithRemoteViewer.js.map