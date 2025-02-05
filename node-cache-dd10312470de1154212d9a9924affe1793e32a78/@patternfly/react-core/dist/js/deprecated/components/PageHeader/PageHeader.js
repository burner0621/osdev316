"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-console */
const React = tslib_1.__importStar(require("react"));
const page_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Page/page"));
const react_styles_1 = require("@patternfly/react-styles");
const bars_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/bars-icon'));
const Button_1 = require("../../../components/Button");
const PageContext_1 = require("../../../components/Page/PageContext");
const PageHeader = (_a) => {
    var { className = '', logo = null, logoProps = null, logoComponent, headerTools = null, topNav = null, isNavOpen = true, role = undefined, showNavToggle = false, navToggleId = 'nav-toggle', onNavToggle = (_event) => undefined, 'aria-label': ariaLabel = 'Global navigation', 'aria-controls': ariaControls = null } = _a, props = tslib_1.__rest(_a, ["className", "logo", "logoProps", "logoComponent", "headerTools", "topNav", "isNavOpen", "role", "showNavToggle", "navToggleId", "onNavToggle", 'aria-label', 'aria-controls']);
    let LogoComponent = logoComponent;
    if (!logoComponent) {
        if ((logoProps === null || logoProps === void 0 ? void 0 : logoProps.href) !== undefined) {
            LogoComponent = 'a';
        }
        else {
            LogoComponent = 'span';
        }
    }
    return (React.createElement(PageContext_1.PageContextConsumer, null, ({ isManagedSidebar, onSidebarToggle: managedOnSidebarToggle, isSidebarOpen: managedIsSidebarOpen }) => {
        const navToggle = isManagedSidebar ? managedOnSidebarToggle : onNavToggle;
        const navOpen = isManagedSidebar ? managedIsSidebarOpen : isNavOpen;
        return (React.createElement("header", Object.assign({ role: role, className: (0, react_styles_1.css)(page_1.default.pageHeader, className) }, props),
            (showNavToggle || logo) && (React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageHeaderBrand) },
                showNavToggle && (React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageHeaderBrandToggle) },
                    React.createElement(Button_1.Button, { id: navToggleId, onClick: navToggle, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": navOpen ? 'true' : 'false', variant: Button_1.ButtonVariant.plain },
                        React.createElement(bars_icon_1.default, null)))),
                logo && (React.createElement(LogoComponent, Object.assign({ className: (0, react_styles_1.css)(page_1.default.pageHeaderBrandLink) }, logoProps), logo)))),
            topNav && React.createElement("div", { className: (0, react_styles_1.css)(page_1.default.pageHeaderNav) }, topNav),
            headerTools));
    }));
};
exports.PageHeader = PageHeader;
exports.PageHeader.displayName = 'PageHeader';
//# sourceMappingURL=PageHeader.js.map