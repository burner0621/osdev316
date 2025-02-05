import { __rest } from "tslib";
import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Nav, NavItem, NavList, Page, PageSection, PageSidebar, PageSidebarBody, SkipToContent, Text, TextContent } from '@patternfly/react-core';
import { DashboardHeader } from './DashboardHeader';
export const DashboardBreadcrumb = (React.createElement(Breadcrumb, null,
    React.createElement(BreadcrumbItem, null, "Section home"),
    React.createElement(BreadcrumbItem, { to: "#" }, "Section title"),
    React.createElement(BreadcrumbItem, { to: "#" }, "Section title"),
    React.createElement(BreadcrumbItem, { to: "#", isActive: true }, "Section landing")));
const PageTemplateTitle = (React.createElement(PageSection, { variant: "light" },
    React.createElement(TextContent, null,
        React.createElement(Text, { component: "h1" }, "Main title"),
        React.createElement(Text, { component: "p" }, "This is a full page demo."))));
export const DashboardWrapper = (_a) => {
    var { children, mainContainerId, breadcrumb, header, sidebar, sidebarNavOpen, onPageResize, hasDefaultBreadcrumb, notificationDrawer, isNotificationDrawerExpanded, hasPageTemplateTitle } = _a, pageProps = __rest(_a, ["children", "mainContainerId", "breadcrumb", "header", "sidebar", "sidebarNavOpen", "onPageResize", "hasDefaultBreadcrumb", "notificationDrawer", "isNotificationDrawerExpanded", "hasPageTemplateTitle"]);
    const [activeItem, setActiveItem] = useState(1);
    const onNavSelect = (_event, result) => {
        setActiveItem(result.itemId);
    };
    let renderedBreadcrumb;
    if (!hasDefaultBreadcrumb) {
        renderedBreadcrumb = breadcrumb !== null && breadcrumb !== void 0 ? breadcrumb : DashboardBreadcrumb;
    }
    const PageNav = (React.createElement(Nav, { onSelect: onNavSelect, "aria-label": "Nav" },
        React.createElement(NavList, null,
            React.createElement(NavItem, { itemId: 0, isActive: activeItem === 0, to: "#system-panel" }, "System panel"),
            React.createElement(NavItem, { itemId: 1, isActive: activeItem === 1, to: "#policy" }, "Policy"),
            React.createElement(NavItem, { itemId: 2, isActive: activeItem === 2, to: "#auth" }, "Authentication"),
            React.createElement(NavItem, { itemId: 3, isActive: activeItem === 3, to: "#network" }, "Network services"),
            React.createElement(NavItem, { itemId: 4, isActive: activeItem === 4, to: "#server" }, "Server"))));
    const _sidebar = (React.createElement(PageSidebar, { isSidebarOpen: sidebarNavOpen || false },
        React.createElement(PageSidebarBody, null, PageNav)));
    const PageSkipToContent = (React.createElement(SkipToContent, { href: `#${mainContainerId !== null && mainContainerId !== void 0 ? mainContainerId : 'main-content-page-layout-default-nav'}` }, "Skip to content"));
    return (React.createElement(Page, Object.assign({ header: header !== null && header !== void 0 ? header : React.createElement(DashboardHeader, null), sidebar: sidebar !== null && sidebar !== void 0 ? sidebar : _sidebar, isManagedSidebar: true, skipToContent: PageSkipToContent, breadcrumb: renderedBreadcrumb, mainContainerId: mainContainerId !== null && mainContainerId !== void 0 ? mainContainerId : 'main-content-page-layout-default-nav', notificationDrawer: notificationDrawer, isNotificationDrawerExpanded: isNotificationDrawerExpanded }, (typeof onPageResize === 'function' && {
        onPageResize: (event, resizeObject) => onPageResize(event, resizeObject)
    }), pageProps),
        hasPageTemplateTitle && PageTemplateTitle,
        children));
};
DashboardWrapper.displayName = 'DashboardWrapper';
//# sourceMappingURL=DashboardWrapper.js.map