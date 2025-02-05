"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeViewList = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Divider_1 = require("../Divider");
const tree_view_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/TreeView/tree-view"));
const TreeViewList = (_a) => {
    var { isNested = false, toolbar, children } = _a, props = tslib_1.__rest(_a, ["isNested", "toolbar", "children"]);
    return (React.createElement(React.Fragment, null,
        toolbar && (React.createElement(React.Fragment, null,
            toolbar,
            React.createElement(Divider_1.Divider, null))),
        React.createElement("ul", Object.assign({ className: (0, react_styles_1.css)(`${tree_view_1.default.treeView}__list`), role: isNested ? 'group' : 'tree' }, props), children)));
};
exports.TreeViewList = TreeViewList;
exports.TreeViewList.displayName = 'TreeViewList';
//# sourceMappingURL=TreeViewList.js.map