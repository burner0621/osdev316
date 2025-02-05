import { __rest } from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar.mjs';
import { css } from '@patternfly/react-styles';
import { ToolbarContext, ToolbarContentContext } from './ToolbarUtils';
import { Button } from '../Button';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_lg';
import { formatBreakpointMods, toCamel, canUseDOM } from '../../helpers/util';
import { PageContext } from '../Page/PageContext';
import { ToolbarExpandableContent } from './ToolbarExpandableContent';
class ToolbarToggleGroup extends React.Component {
    constructor() {
        super(...arguments);
        this.toggleRef = React.createRef();
        this.expandableContentRef = React.createRef();
        this.isContentPopup = () => {
            const viewportSize = canUseDOM ? window.innerWidth : 1200;
            const lgBreakpointValue = parseInt(globalBreakpointLg.value);
            return viewportSize < lgBreakpointValue;
        };
    }
    render() {
        const _a = this.props, { toggleIcon, variant, visibility, breakpoint, alignment, spacer, spaceItems, className, children, isExpanded, onToggle, chipContainerRef, clearAllFilters, showClearFiltersButton, clearFiltersButtonText } = _a, props = __rest(_a, ["toggleIcon", "variant", "visibility", "breakpoint", "alignment", "spacer", "spaceItems", "className", "children", "isExpanded", "onToggle", "chipContainerRef", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText"]);
        if (!breakpoint && !toggleIcon) {
            // eslint-disable-next-line no-console
            console.error('ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon.');
        }
        return (React.createElement(PageContext.Consumer, null, ({ width, getBreakpoint }) => (React.createElement(ToolbarContext.Consumer, null, ({ toggleIsExpanded: managedOnToggle }) => {
            const _onToggle = onToggle !== undefined ? onToggle : managedOnToggle;
            return (React.createElement(ToolbarContentContext.Consumer, null, ({ expandableContentRef, expandableContentId, chipContainerRef: managedChipContainerRef, isExpanded: managedIsExpanded, clearAllFilters: clearAllFiltersContext, clearFiltersButtonText: clearFiltersButtonContext, showClearFiltersButton: showClearFiltersButtonContext }) => {
                const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
                const _chipContainerRef = chipContainerRef !== undefined ? chipContainerRef : managedChipContainerRef;
                const breakpointMod = {};
                breakpointMod[breakpoint] = 'show';
                const expandableContent = (React.createElement(ToolbarExpandableContent, { id: expandableContentId, expandableContentRef: this.expandableContentRef, isExpanded: _isExpanded, clearAllFilters: clearAllFilters || clearAllFiltersContext, showClearFiltersButton: showClearFiltersButton || showClearFiltersButtonContext, clearFiltersButtonText: clearFiltersButtonText || clearFiltersButtonContext, chipContainerRef: _chipContainerRef }, children));
                const toggleButton = (React.createElement("div", { className: css(styles.toolbarToggle) },
                    React.createElement(Button, Object.assign({ variant: "plain", onClick: _onToggle, "aria-label": "Show Filters" }, (_isExpanded && { 'aria-expanded': true }), { "aria-haspopup": _isExpanded && this.isContentPopup(), "aria-controls": _isExpanded ? expandableContentId : undefined, ref: this.toggleRef }), toggleIcon)));
                return (React.createElement("div", Object.assign({ className: css(styles.toolbarGroup, styles.modifiers.toggleGroup, variant &&
                        styles.modifiers[toCamel(variant)], formatBreakpointMods(breakpointMod, styles, '', getBreakpoint(width)), formatBreakpointMods(visibility, styles, '', getBreakpoint(width)), formatBreakpointMods(alignment, styles, '', getBreakpoint(width)), formatBreakpointMods(spacer, styles, '', getBreakpoint(width)), formatBreakpointMods(spaceItems, styles, '', getBreakpoint(width)), className) }, props),
                    toggleButton,
                    _isExpanded && ReactDOM.createPortal(expandableContent, expandableContentRef.current),
                    !_isExpanded && children));
            }));
        }))));
    }
}
ToolbarToggleGroup.displayName = 'ToolbarToggleGroup';
export { ToolbarToggleGroup };
//# sourceMappingURL=ToolbarToggleGroup.js.map