"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoreInformationDefaultContent = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const MoreInformationInstallVariant_1 = require("./MoreInformationInstallVariant");
const react_core_1 = require("@patternfly/react-core");
const MoreInformationDefaultContent = ({ textMoreInfoContent = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("p", null,
        "Clicking \"Launch Remote Viewer\" will download a .vv file and launch ",
        react_1.default.createElement("i", null, "Remote Viewer")),
    react_1.default.createElement("p", null,
        react_1.default.createElement("i", null, "Remote Viewer"),
        " is available for most operating systems. To install it, search for it in GNOME Software or run the following:"))) }) => (react_1.default.createElement(react_1.default.Fragment, null,
    textMoreInfoContent,
    react_1.default.createElement(react_core_1.DescriptionList, { isHorizontal: true },
        react_1.default.createElement(MoreInformationInstallVariant_1.MoreInformationInstallVariant, { os: "RHEL, CentOS", content: "sudo yum install virt-viewer" }),
        react_1.default.createElement(MoreInformationInstallVariant_1.MoreInformationInstallVariant, { os: "Fedora", content: "sudo dnf install virt-viewer" }),
        react_1.default.createElement(MoreInformationInstallVariant_1.MoreInformationInstallVariant, { os: "SLE, openSUSE", content: "sudo zypper install virt-viewer" }),
        react_1.default.createElement(MoreInformationInstallVariant_1.MoreInformationInstallVariant, { os: "Ubuntu, Debian", content: "sudo apt-get install virt-viewer" }),
        react_1.default.createElement(MoreInformationInstallVariant_1.MoreInformationInstallVariant, { os: "Windows" },
            react_1.default.createElement("div", null,
                "Download the MSI from",
                ' ',
                react_1.default.createElement("a", { href: "https://virt-manager.org/download/", target: "_blank", rel: "noopener noreferrer" }, "virt-manager.org"))))));
exports.MoreInformationDefaultContent = MoreInformationDefaultContent;
exports.MoreInformationDefaultContent.displayName = 'MoreInformationDefaultContent';
//# sourceMappingURL=MoreInformationDefaultContent.js.map