"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSearchInput = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const menu_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Menu/menu"));
exports.MenuSearchInput = React.forwardRef((props, ref) => (
// Update to use the styles object when core adds the class
React.createElement("div", Object.assign({}, props, { className: (0, react_styles_1.css)(`${menu_1.default.menuSearch}-input`, props.className), ref: ref }))));
exports.MenuSearchInput.displayName = 'MenuSearchInput';
//# sourceMappingURL=MenuSearchInput.js.map