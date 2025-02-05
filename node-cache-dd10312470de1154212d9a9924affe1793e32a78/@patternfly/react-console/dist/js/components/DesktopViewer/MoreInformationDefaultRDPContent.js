"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoreInformationDefaultRDPContent = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const MoreInformationDefaultRDPContent = ({ textMoreRDPInfoContent = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("p", null,
        "Clicking \"Launch Remote Desktop\" will download an .rdp file and launch ",
        react_1.default.createElement("i", null, "Remote Desktop Viewer"),
        "."),
    react_1.default.createElement("p", null, "Since the RDP is native Windows protocol, the best experience is achieved when used on Windows-based desktop."),
    react_1.default.createElement("p", null,
        "For other operating systems, the ",
        react_1.default.createElement("i", null, "Remote Viewer"),
        " is recommended. If RDP needs to be accessed anyway, the",
        ' ',
        react_1.default.createElement("a", { href: "https://www.remmina.org/wp/" }, "Remmina"),
        " client is available."))) }) => react_1.default.createElement(react_1.default.Fragment, null, textMoreRDPInfoContent);
exports.MoreInformationDefaultRDPContent = MoreInformationDefaultRDPContent;
exports.MoreInformationDefaultRDPContent.displayName = 'MoreInformationDefaultRDPContent';
//# sourceMappingURL=MoreInformationDefaultRDPContent.js.map