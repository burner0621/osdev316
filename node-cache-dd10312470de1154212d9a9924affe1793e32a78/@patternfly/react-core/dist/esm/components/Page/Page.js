import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page.mjs';
import { css } from '@patternfly/react-styles';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import { debounce, canUseDOM } from '../../helpers/util';
import { Drawer, DrawerContent, DrawerContentBody, DrawerPanelContent } from '../Drawer';
import { PageGroup } from './PageGroup';
import { getResizeObserver } from '../../helpers/resizeObserver';
import { formatBreakpointMods, getBreakpoint, getVerticalBreakpoint } from '../../helpers/util';
import { PageContextProvider } from './PageContext';
export var PageLayouts;
(function (PageLayouts) {
    PageLayouts["vertical"] = "vertical";
    PageLayouts["horizontal"] = "horizontal";
})(PageLayouts || (PageLayouts = {}));
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.pageRef = React.createRef();
        this.observer = () => { };
        this.getWindowWidth = () => {
            if (canUseDOM) {
                return this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth;
            }
            else {
                return 1200;
            }
        };
        this.isMobile = () => 
        // eslint-disable-next-line radix
        this.getWindowWidth() < Number.parseInt(globalBreakpointXl.value, 10);
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
        this.handleResize = debounce(this.resize, 250);
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
            this.observer = getResizeObserver(this.pageRef.current, this.handleResize);
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
        onPageResize, getBreakpoint, getVerticalBreakpoint, mainAriaLabel, mainTabIndex, mainComponent, tertiaryNav, isTertiaryNavGrouped, isBreadcrumbGrouped, additionalGroupedContent, groupProps, breadcrumbProps } = _a, rest = __rest(_a, ["breadcrumb", "isBreadcrumbWidthLimited", "className", "children", "header", "sidebar", "notificationDrawer", "isNotificationDrawerExpanded", "onNotificationDrawerExpand", "isTertiaryNavWidthLimited", "skipToContent", "role", "mainContainerId", "isManagedSidebar", "defaultManagedSidebarIsOpen", "onPageResize", "getBreakpoint", "getVerticalBreakpoint", "mainAriaLabel", "mainTabIndex", "mainComponent", "tertiaryNav", "isTertiaryNavGrouped", "isBreadcrumbGrouped", "additionalGroupedContent", "groupProps", "breadcrumbProps"]);
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
            nav = (React.createElement("div", { className: css(styles.pageMainNav, styles.modifiers.limitWidth) },
                React.createElement("div", { className: css(styles.pageMainBody) }, tertiaryNav)));
        }
        else if (tertiaryNav) {
            nav = React.createElement("div", { className: css(styles.pageMainNav) }, tertiaryNav);
        }
        const crumb = breadcrumb ? (React.createElement("section", { className: css(styles.pageMainBreadcrumb, isBreadcrumbWidthLimited && styles.modifiers.limitWidth, formatBreakpointMods(breadcrumbProps === null || breadcrumbProps === void 0 ? void 0 : breadcrumbProps.stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true)) }, isBreadcrumbWidthLimited ? React.createElement("div", { className: css(styles.pageMainBody) }, breadcrumb) : breadcrumb)) : null;
        const isGrouped = isTertiaryNavGrouped || isBreadcrumbGrouped || additionalGroupedContent;
        const group = isGrouped ? (React.createElement(PageGroup, Object.assign({}, groupProps),
            isTertiaryNavGrouped && nav,
            isBreadcrumbGrouped && crumb,
            additionalGroupedContent)) : null;
        const Component = mainComponent;
        const main = (React.createElement(Component, { ref: this.mainRef, role: role, id: mainContainerId, className: css(styles.pageMain), tabIndex: mainTabIndex, "aria-label": mainAriaLabel },
            group,
            !isTertiaryNavGrouped && nav,
            !isBreadcrumbGrouped && crumb,
            children));
        const panelContent = React.createElement(DrawerPanelContent, null, notificationDrawer);
        return (React.createElement(PageContextProvider, { value: context },
            React.createElement("div", Object.assign({ ref: this.pageRef }, rest, { className: css(styles.page, width !== null && height !== null && 'pf-m-resize-observer', width !== null && `pf-m-breakpoint-${getBreakpoint(width)}`, height !== null && `pf-m-height-breakpoint-${getVerticalBreakpoint(height)}`, className) }),
                skipToContent,
                header,
                sidebar,
                notificationDrawer && (React.createElement("div", { className: css(styles.pageDrawer) },
                    React.createElement(Drawer, { isExpanded: isNotificationDrawerExpanded, onExpand: (event) => onNotificationDrawerExpand(event) },
                        React.createElement(DrawerContent, { panelContent: panelContent },
                            React.createElement(DrawerContentBody, null, main))))),
                !notificationDrawer && main)));
    }
}
Page.displayName = 'Page';
Page.defaultProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null,
    mainComponent: 'main',
    getBreakpoint,
    getVerticalBreakpoint
};
export { Page };
//# sourceMappingURL=Page.js.map