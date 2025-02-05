"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoreInformationInstallVariant = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const MoreInformationInstallVariant = ({ os = '', content = null, children = null }) => (react_1.default.createElement(react_core_1.DescriptionListGroup, null,
    react_1.default.createElement(react_core_1.DescriptionListTerm, null, os),
    react_1.default.createElement(react_core_1.DescriptionListDescription, null, content || children)));
exports.MoreInformationInstallVariant = MoreInformationInstallVariant;
exports.MoreInformationInstallVariant.displayName = 'MoreInformationInstallVariant';
//# sourceMappingURL=MoreInformationInstallVariant.js.map