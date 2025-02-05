"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.TabsComponent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const tabs_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Tabs/tabs"));
const button_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Button/button"));
const react_styles_1 = require("@patternfly/react-styles");
const angle_left_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-left-icon'));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const plus_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/plus-icon'));
const util_1 = require("../../helpers/util");
const TabContent_1 = require("./TabContent");
const TabsContext_1 = require("./TabsContext");
const OverflowTab_1 = require("./OverflowTab");
const Button_1 = require("../Button");
const helpers_1 = require("../../helpers");
const GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
var TabsComponent;
(function (TabsComponent) {
    TabsComponent["div"] = "div";
    TabsComponent["nav"] = "nav";
})(TabsComponent = exports.TabsComponent || (exports.TabsComponent = {}));
const variantStyle = {
    default: '',
    light300: tabs_1.default.modifiers.colorSchemeLight_300
};
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tabList = React.createRef();
        this.leftScrollButtonRef = React.createRef();
        this.direction = 'ltr';
        this.scrollTimeout = null;
        this.countOverflowingElements = (container) => {
            const elements = Array.from(container.children);
            return elements.filter((element) => !(0, util_1.isElementInView)(container, element, false)).length;
        };
        this.handleScrollButtons = () => {
            const { isOverflowHorizontal: isOverflowHorizontal } = this.props;
            // add debounce to the scroll event
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                const container = this.tabList.current;
                let disableBackScrollButton = true;
                let disableForwardScrollButton = true;
                let enableScrollButtons = false;
                let overflowingTabCount = 0;
                if (container && !this.props.isVertical && !isOverflowHorizontal) {
                    // get first element and check if it is in view
                    const overflowOnLeft = !(0, util_1.isElementInView)(container, container.firstChild, false);
                    // get last element and check if it is in view
                    const overflowOnRight = !(0, util_1.isElementInView)(container, container.lastChild, false);
                    enableScrollButtons = overflowOnLeft || overflowOnRight;
                    disableBackScrollButton = !overflowOnLeft;
                    disableForwardScrollButton = !overflowOnRight;
                }
                if (isOverflowHorizontal) {
                    overflowingTabCount = this.countOverflowingElements(container);
                }
                this.setState({
                    enableScrollButtons,
                    disableBackScrollButton,
                    disableForwardScrollButton,
                    overflowingTabCount
                });
            }, 100);
        };
        this.scrollBack = () => {
            // find first Element that is fully in view on the left, then scroll to the element before it
            if (this.tabList.current) {
                const container = this.tabList.current;
                const childrenArr = Array.from(container.children);
                let firstElementInView;
                let lastElementOutOfView;
                let i;
                for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if ((0, util_1.isElementInView)(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    if (this.direction === 'ltr') {
                        // LTR scrolls left to go back
                        container.scrollLeft -= lastElementOutOfView.scrollWidth;
                    }
                    else {
                        // RTL scrolls right to go back
                        container.scrollLeft += lastElementOutOfView.scrollWidth;
                    }
                }
            }
        };
        this.scrollForward = () => {
            // find last Element that is fully in view on the right, then scroll to the element after it
            if (this.tabList.current) {
                const container = this.tabList.current;
                const childrenArr = Array.from(container.children);
                let lastElementInView;
                let firstElementOutOfView;
                for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                    if ((0, util_1.isElementInView)(container, childrenArr[i], false)) {
                        lastElementInView = childrenArr[i];
                        firstElementOutOfView = childrenArr[i + 1];
                    }
                }
                if (firstElementOutOfView) {
                    if (this.direction === 'ltr') {
                        // LTR scrolls right to go forward
                        container.scrollLeft += firstElementOutOfView.scrollWidth;
                    }
                    else {
                        // RTL scrolls left to go forward
                        container.scrollLeft -= firstElementOutOfView.scrollWidth;
                    }
                }
            }
        };
        this.hideScrollButtons = () => {
            const { enableScrollButtons, renderScrollButtons, showScrollButtons } = this.state;
            if (!enableScrollButtons && !showScrollButtons && renderScrollButtons) {
                this.setState({ renderScrollButtons: false });
            }
        };
        this.state = {
            enableScrollButtons: false,
            showScrollButtons: false,
            renderScrollButtons: false,
            disableBackScrollButton: true,
            disableForwardScrollButton: true,
            shownKeys: this.props.defaultActiveKey !== undefined ? [this.props.defaultActiveKey] : [this.props.activeKey],
            uncontrolledActiveKey: this.props.defaultActiveKey,
            uncontrolledIsExpandedLocal: this.props.defaultIsExpanded,
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(Tabs.displayName),
            overflowingTabCount: 0
        };
        if (this.props.isVertical && this.props.expandable !== undefined) {
            if (!this.props.toggleAriaLabel && !this.props.toggleText) {
                // eslint-disable-next-line no-console
                console.error('Tabs:', 'toggleAriaLabel or the toggleText prop is required to make the toggle button accessible');
            }
        }
    }
    handleTabClick(event, eventKey, tabContentRef) {
        const { shownKeys } = this.state;
        const { onSelect, defaultActiveKey } = this.props;
        // if defaultActiveKey Tabs are uncontrolled, set new active key internally
        if (defaultActiveKey !== undefined) {
            this.setState({
                uncontrolledActiveKey: eventKey
            });
        }
        else {
            onSelect(event, eventKey);
        }
        // process any tab content sections outside of the component
        if (tabContentRef) {
            React.Children.toArray(this.props.children)
                .filter((child) => React.isValidElement(child))
                .filter(({ props }) => props.tabContentRef && props.tabContentRef.current)
                .forEach((child) => (child.props.tabContentRef.current.hidden = true));
            // most recently selected tabContent
            if (tabContentRef.current) {
                tabContentRef.current.hidden = false;
            }
        }
        if (this.props.mountOnEnter) {
            this.setState({
                shownKeys: shownKeys.concat(eventKey)
            });
        }
    }
    componentDidMount() {
        if (!this.props.isVertical) {
            if (helpers_1.canUseDOM) {
                window.addEventListener('resize', this.handleScrollButtons, false);
            }
            this.direction = (0, util_1.getLanguageDirection)(this.tabList.current);
            // call the handle resize function to check if scroll buttons should be shown
            this.handleScrollButtons();
        }
    }
    componentWillUnmount() {
        var _a;
        if (!this.props.isVertical) {
            if (helpers_1.canUseDOM) {
                window.removeEventListener('resize', this.handleScrollButtons, false);
            }
        }
        clearTimeout(this.scrollTimeout);
        (_a = this.leftScrollButtonRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('transitionend', this.hideScrollButtons);
    }
    componentDidUpdate(prevProps, prevState) {
        const { activeKey, mountOnEnter, isOverflowHorizontal, children } = this.props;
        const { shownKeys, overflowingTabCount, enableScrollButtons } = this.state;
        if (prevProps.activeKey !== activeKey && mountOnEnter && shownKeys.indexOf(activeKey) < 0) {
            this.setState({
                shownKeys: shownKeys.concat(activeKey)
            });
        }
        if (prevProps.children &&
            children &&
            React.Children.toArray(prevProps.children).length !== React.Children.toArray(children).length) {
            this.handleScrollButtons();
        }
        const currentOverflowingTabCount = this.countOverflowingElements(this.tabList.current);
        if (isOverflowHorizontal && currentOverflowingTabCount) {
            this.setState({ overflowingTabCount: currentOverflowingTabCount + overflowingTabCount });
        }
        if (!prevState.enableScrollButtons && enableScrollButtons) {
            this.setState({ renderScrollButtons: true });
            setTimeout(() => {
                var _a;
                (_a = this.leftScrollButtonRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('transitionend', this.hideScrollButtons);
                this.setState({ showScrollButtons: true });
            }, 100);
        }
        else if (prevState.enableScrollButtons && !enableScrollButtons) {
            this.setState({ showScrollButtons: false });
        }
        this.direction = (0, util_1.getLanguageDirection)(this.tabList.current);
    }
    render() {
        const _a = this.props, { className, children, activeKey, defaultActiveKey, id, isFilled, isSecondary, isVertical, isBox, hasNoBorderBottom, leftScrollAriaLabel, rightScrollAriaLabel, backScrollAriaLabel, forwardScrollAriaLabel, 'aria-label': ariaLabel, component, ouiaId, ouiaSafe, mountOnEnter, unmountOnExit, usePageInsets, inset, variant, expandable, isExpanded, defaultIsExpanded, toggleText, toggleAriaLabel, addButtonAriaLabel, onToggle, onClose, onAdd, isOverflowHorizontal: isOverflowHorizontal } = _a, props = tslib_1.__rest(_a, ["className", "children", "activeKey", "defaultActiveKey", "id", "isFilled", "isSecondary", "isVertical", "isBox", "hasNoBorderBottom", "leftScrollAriaLabel", "rightScrollAriaLabel", "backScrollAriaLabel", "forwardScrollAriaLabel", 'aria-label', "component", "ouiaId", "ouiaSafe", "mountOnEnter", "unmountOnExit", "usePageInsets", "inset", "variant", "expandable", "isExpanded", "defaultIsExpanded", "toggleText", "toggleAriaLabel", "addButtonAriaLabel", "onToggle", "onClose", "onAdd", "isOverflowHorizontal"]);
        const { showScrollButtons, renderScrollButtons, disableBackScrollButton, disableForwardScrollButton, shownKeys, uncontrolledActiveKey, uncontrolledIsExpandedLocal, overflowingTabCount } = this.state;
        const filteredChildren = React.Children.toArray(children)
            .filter((child) => React.isValidElement(child))
            .filter(({ props }) => !props.isHidden);
        const filteredChildrenWithoutOverflow = filteredChildren.slice(0, filteredChildren.length - overflowingTabCount);
        const filteredChildrenOverflowing = filteredChildren.slice(filteredChildren.length - overflowingTabCount);
        const overflowingTabProps = filteredChildrenOverflowing.map((child) => child.props);
        const uniqueId = id || (0, util_1.getUniqueId)();
        const Component = component === TabsComponent.nav ? 'nav' : 'div';
        const localActiveKey = defaultActiveKey !== undefined ? uncontrolledActiveKey : activeKey;
        const isExpandedLocal = defaultIsExpanded !== undefined ? uncontrolledIsExpandedLocal : isExpanded;
        /*  Uncontrolled expandable tabs */
        const toggleTabs = (event, newValue) => {
            if (isExpanded === undefined) {
                this.setState({ uncontrolledIsExpandedLocal: newValue });
            }
            else {
                onToggle(event, newValue);
            }
        };
        const hasOverflowTab = isOverflowHorizontal && overflowingTabCount > 0;
        const overflowObjectProps = typeof isOverflowHorizontal === 'object' ? Object.assign({}, isOverflowHorizontal) : {};
        return (React.createElement(TabsContext_1.TabsContextProvider, { value: {
                variant,
                mountOnEnter,
                unmountOnExit,
                localActiveKey,
                uniqueId,
                handleTabClick: (...args) => this.handleTabClick(...args),
                handleTabClose: onClose
            } },
            React.createElement(Component, Object.assign({ "aria-label": ariaLabel, className: (0, react_styles_1.css)(tabs_1.default.tabs, isFilled && tabs_1.default.modifiers.fill, isSecondary && tabs_1.default.modifiers.secondary, isVertical && tabs_1.default.modifiers.vertical, isVertical && expandable && (0, util_1.formatBreakpointMods)(expandable, tabs_1.default), isVertical && expandable && isExpandedLocal && tabs_1.default.modifiers.expanded, isBox && tabs_1.default.modifiers.box, showScrollButtons && tabs_1.default.modifiers.scrollable, usePageInsets && tabs_1.default.modifiers.pageInsets, hasNoBorderBottom && tabs_1.default.modifiers.noBorderBottom, (0, util_1.formatBreakpointMods)(inset, tabs_1.default), variantStyle[variant], hasOverflowTab && tabs_1.default.modifiers.overflow, className) }, (0, helpers_1.getOUIAProps)(Tabs.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), { id: id && id }, props),
                expandable && isVertical && (React.createElement(GenerateId_1.GenerateId, null, (randomId) => (React.createElement("div", { className: (0, react_styles_1.css)(tabs_1.default.tabsToggle) },
                    React.createElement("div", { className: (0, react_styles_1.css)(tabs_1.default.tabsToggleButton) },
                        React.createElement(Button_1.Button, { onClick: (event) => toggleTabs(event, !isExpandedLocal), variant: "plain", "aria-label": toggleAriaLabel, "aria-expanded": isExpandedLocal, id: `${randomId}-button`, "aria-labelledby": `${randomId}-text ${randomId}-button` },
                            React.createElement("span", { className: (0, react_styles_1.css)(tabs_1.default.tabsToggleIcon) },
                                React.createElement(angle_right_icon_1.default, { "arian-hidden": "true" })),
                            toggleText && (React.createElement("span", { className: (0, react_styles_1.css)(tabs_1.default.tabsToggleText), id: `${randomId}-text` }, toggleText)))))))),
                renderScrollButtons && (React.createElement("button", { type: "button", className: (0, react_styles_1.css)(tabs_1.default.tabsScrollButton, isSecondary && button_1.default.modifiers.secondary), "aria-label": backScrollAriaLabel || leftScrollAriaLabel, onClick: this.scrollBack, disabled: disableBackScrollButton, "aria-hidden": disableBackScrollButton, ref: this.leftScrollButtonRef },
                    React.createElement(angle_left_icon_1.default, null))),
                React.createElement("ul", { className: (0, react_styles_1.css)(tabs_1.default.tabsList), ref: this.tabList, onScroll: this.handleScrollButtons, role: "tablist" },
                    isOverflowHorizontal ? filteredChildrenWithoutOverflow : filteredChildren,
                    hasOverflowTab && React.createElement(OverflowTab_1.OverflowTab, Object.assign({ overflowingTabs: overflowingTabProps }, overflowObjectProps))),
                renderScrollButtons && (React.createElement("button", { type: "button", className: (0, react_styles_1.css)(tabs_1.default.tabsScrollButton, isSecondary && button_1.default.modifiers.secondary), "aria-label": forwardScrollAriaLabel || rightScrollAriaLabel, onClick: this.scrollForward, disabled: disableForwardScrollButton, "aria-hidden": disableForwardScrollButton },
                    React.createElement(angle_right_icon_1.default, null))),
                onAdd !== undefined && (React.createElement("span", { className: (0, react_styles_1.css)(tabs_1.default.tabsAdd) },
                    React.createElement(Button_1.Button, { variant: "plain", "aria-label": addButtonAriaLabel || 'Add tab', onClick: onAdd },
                        React.createElement(plus_icon_1.default, null))))),
            filteredChildren
                .filter((child) => child.props.children &&
                !(unmountOnExit && child.props.eventKey !== localActiveKey) &&
                !(mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1))
                .map((child) => (React.createElement(TabContent_1.TabContent, { key: child.props.eventKey, activeKey: localActiveKey, child: child, id: child.props.id || uniqueId, ouiaId: child.props.ouiaId })))));
    }
}
exports.Tabs = Tabs;
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
    activeKey: 0,
    onSelect: () => undefined,
    isFilled: false,
    isSecondary: false,
    isVertical: false,
    isBox: false,
    hasNoBorderBottom: false,
    leftScrollAriaLabel: 'Scroll left',
    backScrollAriaLabel: 'Scroll back',
    rightScrollAriaLabel: 'Scroll right',
    forwardScrollAriaLabel: 'Scroll forward',
    component: TabsComponent.div,
    mountOnEnter: false,
    unmountOnExit: false,
    ouiaSafe: true,
    variant: 'default',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (_event, _isExpanded) => undefined
};
//# sourceMappingURL=Tabs.js.map