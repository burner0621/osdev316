"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarToggleGroup = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const toolbar_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Toolbar/toolbar"));
const react_styles_1 = require("@patternfly/react-styles");
const ToolbarUtils_1 = require("./ToolbarUtils");
const Button_1 = require("../Button");
const global_breakpoint_lg_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_lg'));
const util_1 = require("../../helpers/util");
const PageContext_1 = require("../Page/PageContext");
const ToolbarExpandableContent_1 = require("./ToolbarExpandableContent");
class ToolbarToggleGroup extends React.Component {
    constructor() {
        super(...arguments);
        this.toggleRef = React.createRef();
        this.expandableContentRef = React.createRef();
        this.isContentPopup = () => {
            const viewportSize = util_1.canUseDOM ? window.innerWidth : 1200;
            const lgBreakpointValue = parseInt(global_breakpoint_lg_1.default.value);
            return viewportSize < lgBreakpointValue;
        };
    }
    render() {
        const _a = this.props, { toggleIcon, variant, visibility, breakpoint, alignment, spacer, spaceItems, className, children, isExpanded, onToggle, chipContainerRef, clearAllFilters, showClearFiltersButton, clearFiltersButtonText } = _a, props = tslib_1.__rest(_a, ["toggleIcon", "variant", "visibility", "breakpoint", "alignment", "spacer", "spaceItems", "className", "children", "isExpanded", "onToggle", "chipContainerRef", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText"]);
        if (!breakpoint && !toggleIcon) {
            // eslint-disable-next-line no-console
            console.error('ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon.');
        }
        return (React.createElement(PageContext_1.PageContext.Consumer, null, ({ width, getBreakpoint }) => (React.createElement(ToolbarUtils_1.ToolbarContext.Consumer, null, ({ toggleIsExpanded: managedOnToggle }) => {
            const _onToggle = onToggle !== undefined ? onToggle : managedOnToggle;
            return (React.createElement(ToolbarUtils_1.ToolbarContentContext.Consumer, null, ({ expandableContentRef, expandableContentId, chipContainerRef: managedChipContainerRef, isExpanded: managedIsExpanded, clearAllFilters: clearAllFiltersContext, clearFiltersButtonText: clearFiltersButtonContext, showClearFiltersButton: showClearFiltersButtonContext }) => {
                const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
                const _chipContainerRef = chipContainerRef !== undefined ? chipContainerRef : managedChipContainerRef;
                const breakpointMod = {};
                breakpointMod[breakpoint] = 'show';
                const expandableContent = (React.createElement(ToolbarExpandableContent_1.ToolbarExpandableContent, { id: expandableContentId, expandableContentRef: this.expandableContentRef, isExpanded: _isExpanded, clearAllFilters: clearAllFilters || clearAllFiltersContext, showClearFiltersButton: showClearFiltersButton || showClearFiltersButtonContext, clearFiltersButtonText: clearFiltersButtonText || clearFiltersButtonContext, chipContainerRef: _chipContainerRef }, children));
                const toggleButton = (React.createElement("div", { className: (0, react_styles_1.css)(toolbar_1.default.toolbarToggle) },
                    React.createElement(Button_1.Button, Object.assign({ variant: "plain", onClick: _onToggle, "aria-label": "Show Filters" }, (_isExpanded && { 'aria-expanded': true }), { "aria-haspopup": _isExpanded && this.isContentPopup(), "aria-controls": _isExpanded ? expandableContentId : undefined, ref: this.toggleRef }), toggleIcon)));
                return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(toolbar_1.default.toolbarGroup, toolbar_1.default.modifiers.toggleGroup, variant &&
                        toolbar_1.default.modifiers[(0, util_1.toCamel)(variant)], (0, util_1.formatBreakpointMods)(breakpointMod, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(visibility, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(alignment, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(spacer, toolbar_1.default, '', getBreakpoint(width)), (0, util_1.formatBreakpointMods)(spaceItems, toolbar_1.default, '', getBreakpoint(width)), className) }, props),
                    toggleButton,
                    _isExpanded && ReactDOM.createPortal(expandableContent, expandableContentRef.current),
                    !_isExpanded && children));
            }));
        }))));
    }
}
exports.ToolbarToggleGroup = ToolbarToggleGroup;
ToolbarToggleGroup.displayName = 'ToolbarToggleGroup';
//# sourceMappingURL=ToolbarToggleGroup.js.map