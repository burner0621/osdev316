"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.PageLayouts = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const page_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Page/page"));
const react_styles_1 = require("@patternfly/react-styles");
const global_breakpoint_xl_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/global_breakpoint_xl'));
const util_1 = require("../../helpers/util");
const Drawer_1 = require("../Drawer");
const PageGroup_1 = require("./PageGroup");
const resizeObserver_1 = require("../../helpers/resizeObserver");
const util_2 = require("../../helpers/util");
const PageContext_1 = require("./PageContext");
var PageLayouts;
(function (PageLayouts) {
    PageLayouts["vertical"] = "vertical";
    PageLayouts["horizontal"] = "horizontal";
})(PageLayouts = exports.PageLayouts || (exports.PageLayouts = {}));
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.pageRef = React.createRef();
        this.observer = () => { };
        this.getWindowWidth = () => {
            if (util_1.canUseDOM) {
                return this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth;
            }
            else {
                return 1200;
            }
        };
        this.isMobile = () => 
        // eslint-disable-next-line radix
        this.getWindowWidth() < Number.parseInt(global_breakpoint_xl_1.default.value, 10);
        this.resize = (_event) => {
            var _a;
            const { onPageResize } = this.props;
            const mobileView = this.isMobile();
            if (onPageResize) {
                onPageResize(_event, { mobileView, windowSize: this.getWindowWidth() });
            }
            if (mobileView !== this.state.mobileView) {
                this.setState({ mobileView });
            }
            if ((_a = this.pageRef) === null || _a === void 0 ? void 0 : _a.current) {
                const currentWidth = this.pageRef.current.clientWidth;
                const currentHeight = this.pageRef.current.clientHeight;
                if (this.state.width !== currentWidth) {
                    this.setState({ width: currentWidth });
                }
                if (this.state.height !== currentHeight) {
                    this.setState({ height: currentHeight });
                }
            }
        };
        this.handleResize = (0, util_1.debounce)(this.resize, 250);
        this.handleMainClick = () => {
            if (this.isMobile() && this.state.mobileIsSidebarOpen && this.mainRef.current) {
                this.setState({ mobileIsSidebarOpen: false });
            }
        };
        this.onSidebarToggleMobile = () => {
            this.setState((prevState) => ({
                mobileIsSidebarOpen: !prevState.mobileIsSidebarOpen
            }));
        };
        this.onSidebarToggleDesktop = () => {
            this.setState((prevState) => ({
                desktopIsSidebarOpen: !prevState.desktopIsSidebarOpen
            }));
        };
        const { isManagedSidebar, defaultManagedSidebarIsOpen } = props;
        const managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
        this.state = {
            desktopIsSidebarOpen: managedSidebarOpen,
            mobileIsSidebarOpen: false,
            mobileView: false,
            width: null,
            height: null
        };
    }
    componentDidMount() {
        const { isManagedSidebar, onPageResize } = this.props;
        if (isManagedSidebar || onPageResize) {
            this.observer = (0, resizeObserver_1.getResizeObserver)(this.pageRef.current, this.handleResize);
            const currentRef = this.mainRef.current;
            if (currentRef) {
                currentRef.addEventListener('mousedown', this.handleMainClick);
                currentRef.addEventListener('touchstart', this.handleMainClick);
            }
            // Initial check if should be shown
            this.resize();
        }
    }
    componentWillUnmount() {
        const { isManagedSidebar, onPageResize } = this.props;
        if (isManagedSidebar || onPageResize) {
            this.observer();
            const currentRef = this.mainRef.current;
            if (currentRef) {
                currentRef.removeEventListener('mousedown', this.handleMainClick);
                currentRef.removeEventListener('touchstart', this.handleMainClick);
            }
        }
    }
    render() {
        const _a = this.props, { breadcrumb, isBreadcrumbWidthLimited, className, children, header, sidebar, notificationDrawer, isNotificationDrawerExpanded, onNotificationDrawerExpand, isTertiaryNavWidthLimited, skipToContent, role, mainContainerId, isManagedSidebar, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        defaultManagedSidebarIsOpen, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onPageResize, getBreakpoint, getVerticalBreakpoint, mainAriaLabel, mainTabIndex, mainComponent, tertiaryNav, isTertiaryNavGrouped, isBreadcrumbGrouped, additionalGroupedContent, groupProps, breadcrumbProps } = _a, rest = tslib_1.__rest(_a, ["breadcrumb", "isBreadcrumbWidthLimited", "className", "children", "header", "sidebar", "notificationDrawer", "isNotificationDrawerExpanded", "onNotificationDrawerExpand", "isTertiaryNavWidthLimited", "skipToContent", "role", "mainContainerId", "isManagedSidebar", "defaultManagedSidebarIsOpen", "onPageResize", "getBreakpoint", "getVerticalBreakpoint", "mainAriaLabel", "mainTabIndex", "mainComponent", "tertiaryNav", "isTertiaryNavGrouped", "isBreadcrumbGrouped", "additionalGroupedContent", "groupProps", "breadcrumbProps"]);
        const { mobileView, mobileIsSidebarOpen, desktopIsSidebarOpen, width, height } = this.state;
        const context = {
            isManagedSidebar,
            onSidebarToggle: mobileView ? this.onSidebarToggleMobile : this.onSidebarToggleDesktop,
            isSidebarOpen: mobileView ? mobileIsSidebarOpen : desktopIsSidebarOpen,
            width,
            height,
            getBreakpoint,
            getVerticalBreakpoint
        };
        let nav = null;
        if (tertiaryNav && isTertiaryNavWidthLimited) {
            nav = (React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageMainNav, page_1.default.modifiers.limitWidth) },
                React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageMainBody) }, tertiaryNav)));
        }
        else if (tertiaryNav) {
            nav = React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageMainNav) }, tertiaryNav);
        }
        const crumb = breadcrumb ? (React.createElement("section", { className: (0, react_styles_1.css)(page_1.default.pageMainBreadcrumb, isBreadcrumbWidthLimited && page_1.default.modifiers.limitWidth, (0, util_2.formatBreakpointMods)(breadcrumbProps === null || breadcrumbProps === void 0 ? void 0 : breadcrumbProps.stickyOnBreakpoint, page_1.default, 'sticky-', getVerticalBreakpoint(height), true)) }, isBreadcrumbWidthLimited ? React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageMainBody) }, breadcrumb) : breadcrumb)) : null;
        const isGrouped = isTertiaryNavGrouped || isBreadcrumbGrouped || additionalGroupedContent;
        const group = isGrouped ? (React.createElement(PageGroup_1.PageGroup, Object.assign({}, groupProps),
            isTertiaryNavGrouped && nav,
            isBreadcrumbGrouped && crumb,
            additionalGroupedContent)) : null;
        const Component = mainComponent;
        const main = (React.createElement(Component, { ref: this.mainRef, role: role, id: mainContainerId, className: (0, react_styles_1.css)(page_1.default.pageMain), tabIndex: mainTabIndex, "aria-label": mainAriaLabel },
            group,
            !isTertiaryNavGrouped && nav,
            !isBreadcrumbGrouped && crumb,
            children));
        const panelContent = React.createElement(Drawer_1.DrawerPanelContent, null, notificationDrawer);
        return (React.createElement(PageContext_1.PageContextProvider, { value: context },
            React.createElement("div", Object.assign({ ref: this.pageRef }, rest, { className: (0, react_styles_1.css)(page_1.default.page, width !== null && height !== null && 'pf-m-resize-observer', width !== null && `pf-m-breakpoint-${getBreakpoint(width)}`, height !== null && `pf-m-height-breakpoint-${getVerticalBreakpoint(height)}`, className) }),
                skipToContent,
                header,
                sidebar,
                notificationDrawer && (React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageDrawer) },
                    React.createElement(Drawer_1.Drawer, { isExpanded: isNotificationDrawerExpanded, onExpand: (event) => onNotificationDrawerExpand(event) },
                        React.createElement(Drawer_1.DrawerContent, { panelContent: panelContent },
                            React.createElement(Drawer_1.DrawerContentBody, null, main))))),
                !notificationDrawer && main)));
    }
}
exports.Page = Page;
Page.displayName = 'Page';
Page.defaultProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null,
    mainComponent: 'main',
    getBreakpoint: util_2.getBreakpoint,
    getVerticalBreakpoint: util_2.getVerticalBreakpoint
};
//# sourceMappingURL=Page.js.map