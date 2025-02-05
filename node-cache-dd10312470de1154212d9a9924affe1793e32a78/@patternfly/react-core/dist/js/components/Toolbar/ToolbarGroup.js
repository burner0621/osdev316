"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarGroup = exports.ToolbarGroupVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const toolbar_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Toolbar/toolbar"));
const react_styles_1 = require("@patternfly/react-styles");
const util_1 = require("../../helpers/util");
const PageContext_1 = require("../Page/PageContext");
var ToolbarGroupVariant;
(function (ToolbarGroupVariant) {
    ToolbarGroupVariant["filter-group"] = "filter-group";
    ToolbarGroupVariant["icon-button-group"] = "icon-button-group";
    ToolbarGroupVariant["button-group"] = "button-group";
})(ToolbarGroupVariant = exports.ToolbarGroupVariant || (exports.ToolbarGroupVariant = {}));
class ToolbarGroupWithRef extends React.Component {
    render() {
        const _a = this.props, { visibility, align, alignItems, alignSelf, spacer, spaceItems, className, variant, children, isOverflowContainer, innerRef } = _a, props = tslib_1.__rest(_a, ["visibility", "align", "alignItems", "alignSelf", "spacer", "spaceItems", "className", "variant", "children", "isOverflowContainer", "innerRef"]);
        return (React.createElement(PageContext_1.PageContext.Consumer, null, ({ width, getBreakpoint }) => (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(toolbar_1.default.toolbarGroup, variant && toolbar_1.default.modifiers[(0, util_1.toCamel)(variant)], (0, util_1.formatBreakpointMods)(visibility, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(align, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(spacer, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(spaceItems, toolbar_1.default, '', getBreakpoint(width)), alignItems === 'start' && toolbar_1.default.modifiers.alignItemsStart, alignItems === 'center' && toolbar_1.default.modifiers.alignItemsCenter, alignItems === 'baseline' && toolbar_1.default.modifiers.alignItemsBaseline, alignSelf === 'start' && toolbar_1.default.modifiers.alignSelfStart, alignSelf === 'center' && toolbar_1.default.modifiers.alignSelfCenter, alignSelf === 'baseline' && toolbar_1.default.modifiers.alignSelfBaseline, isOverflowContainer && toolbar_1.default.modifiers.overflowContainer, className) }, props, { ref: innerRef }), children))));
    }
}
exports.ToolbarGroup = React.forwardRef((props, ref) => (React.createElement(ToolbarGroupWithRef, Object.assign({}, props, { innerRef: ref }))));
//# sourceMappingURL=ToolbarGroup.js.map