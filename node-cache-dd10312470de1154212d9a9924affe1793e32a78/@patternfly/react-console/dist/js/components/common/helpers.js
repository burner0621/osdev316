"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.child = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const child = (children, index) => {
    const childrenArray = react_1.default.Children.toArray(children);
    return (childrenArray && childrenArray.length > index && childrenArray[index]) || null;
};
exports.child = child;
//# sourceMappingURL=helpers.js.map