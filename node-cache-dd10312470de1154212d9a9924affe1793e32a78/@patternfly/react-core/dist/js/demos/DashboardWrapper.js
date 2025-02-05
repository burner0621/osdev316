"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardWrapper = exports.DashboardBreadcrumb = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../components");
const DashboardHeader_1 = require("./DashboardHeader");
exports.DashboardBreadcrumb = (react_1.default.createElement(components_1.Breadcrumb, null,
    react_1.default.createElement(components_1.BreadcrumbItem, null, "Section home"),
    react_1.default.createElement(components_1.BreadcrumbItem, { to: "#" }, "Section title"),
    react_1.default.createElement(components_1.BreadcrumbItem, { to: "#" }, "Section title"),
    react_1.default.createElement(components_1.BreadcrumbItem, { to: "#", isActive: true }, "Section landing")));
const PageTemplateTitle = (react_1.default.createElement(components_1.PageSection, { variant: "light" },
    react_1.default.createElement(components_1.TextContent, null,
        react_1.default.createElement(components_1.Text, { component: "h1" }, "Main title"),
        react_1.default.createElement(components_1.Text, { component: "p" }, "This is a full page demo."))));
const DashboardWrapper = (_a) => {
    var { children, mainContainerId, breadcrumb, header, sidebar, sidebarNavOpen, onPageResize, hasDefaultBreadcrumb, notificationDrawer, isNotificationDrawerExpanded, hasPageTemplateTitle } = _a, pageProps = tslib_1.__rest(_a, ["children", "mainContainerId", "breadcrumb", "header", "sidebar", "sidebarNavOpen", "onPageResize", "hasDefaultBreadcrumb", "notificationDrawer", "isNotificationDrawerExpanded", "hasPageTemplateTitle"]);
    const [activeItem, setActiveItem] = (0, react_1.useState)(1);
    const onNavSelect = (_event, result) => {
        setActiveItem(result.itemId);
    };
    let renderedBreadcrumb;
    if (!hasDefaultBreadcrumb) {
        renderedBreadcrumb = breadcrumb !== null && breadcrumb !== void 0 ? breadcrumb : exports.DashboardBreadcrumb;
    }
    const PageNav = (react_1.default.createElement(components_1.Nav, { onSelect: onNavSelect, "aria-label": "Nav" },
        react_1.default.createElement(components_1.NavList, null,
            react_1.default.createElement(components_1.NavItem, { itemId: 0, isActive: activeItem === 0, to: "#system-panel" }, "System panel"),
            react_1.default.createElement(components_1.NavItem, { itemId: 1, isActive: activeItem === 1, to: "#policy" }, "Policy"),
            react_1.default.createElement(components_1.NavItem, { itemId: 2, isActive: activeItem === 2, to: "#auth" }, "Authentication"),
            react_1.default.createElement(components_1.NavItem, { itemId: 3, isActive: activeItem === 3, to: "#network" }, "Network services"),
            react_1.default.createElement(components_1.NavItem, { itemId: 4, isActive: activeItem === 4, to: "#server" }, "Server"))));
    const _sidebar = (react_1.default.createElement(components_1.PageSidebar, { isSidebarOpen: sidebarNavOpen || false },
        react_1.default.createElement(components_1.PageSidebarBody, null, PageNav)));
    const PageSkipToContent = (react_1.default.createElement(components_1.SkipToContent, { href: `#${mainContainerId !== null && mainContainerId !== void 0 ? mainContainerId : 'main-content-page-layout-default-nav'}` }, "Skip to content"));
    return (react_1.default.createElement(components_1.Page, Object.assign({ header: header !== null && header !== void 0 ? header : react_1.default.createElement(DashboardHeader_1.DashboardHeader, null), sidebar: sidebar !== null && sidebar !== void 0 ? sidebar : _sidebar, isManagedSidebar: true, skipToContent: PageSkipToContent, breadcrumb: renderedBreadcrumb, mainContainerId: mainContainerId !== null && mainContainerId !== void 0 ? mainContainerId : 'main-content-page-layout-default-nav', notificationDrawer: notificationDrawer, isNotificationDrawerExpanded: isNotificationDrawerExpanded }, (typeof onPageResize === 'function' && {
        onPageResize: (event, resizeObject) => onPageResize(event, resizeObject)
    }), pageProps),
        hasPageTemplateTitle && PageTemplateTitle,
        children));
};
exports.DashboardWrapper = DashboardWrapper;
exports.DashboardWrapper.displayName = 'DashboardWrapper';
//# sourceMappingURL=DashboardWrapper.js.map