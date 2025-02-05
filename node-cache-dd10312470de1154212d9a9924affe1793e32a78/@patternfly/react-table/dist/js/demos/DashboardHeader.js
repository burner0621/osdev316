"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardHeader = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_core_1 = require("@patternfly/react-core");
const bars_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/bars-icon'));
const cog_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/cog-icon'));
const help_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/help-icon'));
const question_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/question-circle-icon'));
const bell_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/bell-icon'));
const ellipsis_v_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/ellipsis-v-icon'));
const avatarImg_svg_1 = tslib_1.__importDefault(require("@patternfly/react-table/src/demos/assets/avatarImg.svg"));
const pf_logo_svg_1 = tslib_1.__importDefault(require("@patternfly/react-table/src/demos/assets/pf-logo.svg"));
const DashboardHeader = ({ notificationBadge }) => {
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [isKebabDropdownOpen, setIsKebabDropdownOpen] = (0, react_1.useState)(false);
    const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = (0, react_1.useState)(false);
    const kebabDropdownItems = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_core_1.DropdownItem, null,
            react_1.default.createElement(cog_icon_1.default, null),
            " Settings"),
        react_1.default.createElement(react_core_1.DropdownItem, null,
            react_1.default.createElement(help_icon_1.default, null),
            " Help")));
    const userDropdownItems = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_core_1.DropdownItem, { key: "group 2 profile" }, "My profile"),
        react_1.default.createElement(react_core_1.DropdownItem, { key: "group 2 user" }, "User management"),
        react_1.default.createElement(react_core_1.DropdownItem, { key: "group 2 logout" }, "Logout")));
    const onDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const onDropdownSelect = () => {
        setIsDropdownOpen(false);
    };
    const onKebabDropdownToggle = () => {
        setIsKebabDropdownOpen(!isKebabDropdownOpen);
    };
    const onKebabDropdownSelect = () => {
        setIsKebabDropdownOpen(false);
    };
    const onFullKebabToggle = () => {
        setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
    };
    const onFullKebabSelect = () => {
        setIsFullKebabDropdownOpen(false);
    };
    return (react_1.default.createElement(react_core_1.Masthead, null,
        react_1.default.createElement(react_core_1.MastheadToggle, null,
            react_1.default.createElement(react_core_1.PageToggleButton, { variant: "plain", "aria-label": "Global navigation" },
                react_1.default.createElement(bars_icon_1.default, null))),
        react_1.default.createElement(react_core_1.MastheadMain, null,
            react_1.default.createElement(react_core_1.MastheadBrand, null,
                react_1.default.createElement(react_core_1.Brand, { src: pf_logo_svg_1.default, alt: "PatternFly", heights: { default: '36px' } }))),
        react_1.default.createElement(react_core_1.MastheadContent, null,
            react_1.default.createElement(react_core_1.Toolbar, { id: "toolbar", isFullHeight: true, isStatic: true },
                react_1.default.createElement(react_core_1.ToolbarContent, null,
                    react_1.default.createElement(react_core_1.ToolbarGroup, { variant: "icon-button-group", align: { default: 'alignRight' }, spacer: { default: 'spacerNone', md: 'spacerMd' } }, notificationBadge !== null && notificationBadge !== void 0 ? notificationBadge : (react_1.default.createElement(react_core_1.ToolbarItem, null,
                        react_1.default.createElement(react_core_1.Button, { "aria-label": "Notifications", variant: react_core_1.ButtonVariant.plain, icon: react_1.default.createElement(bell_icon_1.default, null), onClick: () => { } }))),
                        react_1.default.createElement(react_core_1.ToolbarGroup, { variant: "icon-button-group", visibility: { default: 'hidden', lg: 'visible' } },
                            react_1.default.createElement(react_core_1.ToolbarItem, null,
                                react_1.default.createElement(react_core_1.Button, { "aria-label": "Settings", variant: react_core_1.ButtonVariant.plain, icon: react_1.default.createElement(cog_icon_1.default, null) })),
                            react_1.default.createElement(react_core_1.ToolbarItem, null,
                                react_1.default.createElement(react_core_1.Button, { "aria-label": "Help", variant: react_core_1.ButtonVariant.plain, icon: react_1.default.createElement(question_circle_icon_1.default, null) }))),
                        react_1.default.createElement(react_core_1.ToolbarItem, { visibility: { default: 'hidden', md: 'visible', lg: 'hidden' } },
                            react_1.default.createElement(react_core_1.Dropdown, { isOpen: isKebabDropdownOpen, onSelect: onKebabDropdownSelect, onOpenChange: setIsKebabDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, { ref: toggleRef, isExpanded: isKebabDropdownOpen, onClick: onKebabDropdownToggle, variant: "plain", "aria-label": "Settings and help" },
                                    react_1.default.createElement(ellipsis_v_icon_1.default, { "aria-hidden": "true" }))) },
                                react_1.default.createElement(react_core_1.DropdownList, null, kebabDropdownItems))),
                        react_1.default.createElement(react_core_1.ToolbarItem, { visibility: { md: 'hidden' } },
                            react_1.default.createElement(react_core_1.Dropdown, { isOpen: isFullKebabDropdownOpen, onSelect: onFullKebabSelect, onOpenChange: setIsFullKebabDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, { ref: toggleRef, isExpanded: isFullKebabDropdownOpen, onClick: onFullKebabToggle, variant: "plain", "aria-label": "Toolbar menu" },
                                    react_1.default.createElement(ellipsis_v_icon_1.default, { "aria-hidden": "true" }))) },
                                react_1.default.createElement(react_core_1.DropdownGroup, { key: "group 2", "aria-label": "User actions" },
                                    react_1.default.createElement(react_core_1.DropdownList, null, userDropdownItems)),
                                react_1.default.createElement(react_core_1.Divider, null),
                                react_1.default.createElement(react_core_1.DropdownList, null, kebabDropdownItems)))),
                    react_1.default.createElement(react_core_1.ToolbarItem, { visibility: { default: 'hidden', md: 'visible' } },
                        react_1.default.createElement(react_core_1.Dropdown, { isOpen: isDropdownOpen, onSelect: onDropdownSelect, onOpenChange: setIsDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, { ref: toggleRef, isExpanded: isDropdownOpen, onClick: onDropdownToggle, icon: react_1.default.createElement(react_core_1.Avatar, { src: avatarImg_svg_1.default, alt: "" }), isFullHeight: true }, "Ned Username")) },
                            react_1.default.createElement(react_core_1.DropdownList, null, userDropdownItems))))))));
};
exports.DashboardHeader = DashboardHeader;
exports.DashboardHeader.displayName = 'DashboardHeader';
//# sourceMappingURL=DashboardHeader.js.map