"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerScrollContainer = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const table_scrollable_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table-scrollable"));
const InnerScrollContainer = (_a) => {
    var { children, className } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(className, table_scrollable_1.default.scrollInnerWrapper) }, props), children));
};
exports.InnerScrollContainer = InnerScrollContainer;
exports.InnerScrollContainer.displayName = 'InnerScrollContainer';
//# sourceMappingURL=InnerScrollContainer.js.map