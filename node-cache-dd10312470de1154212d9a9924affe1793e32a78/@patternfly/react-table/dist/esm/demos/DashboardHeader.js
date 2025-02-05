import React, { useState } from 'react';
import { Avatar, Brand, Button, ButtonVariant, Divider, Dropdown, DropdownGroup, DropdownItem, DropdownList, Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, MenuToggle, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, PageToggleButton } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-table/src/demos/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-table/src/demos/assets/pf-logo.svg';
export const DashboardHeader = ({ notificationBadge }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);
    const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = useState(false);
    const kebabDropdownItems = (React.createElement(React.Fragment, null,
        React.createElement(DropdownItem, null,
            React.createElement(CogIcon, null),
            " Settings"),
        React.createElement(DropdownItem, null,
            React.createElement(HelpIcon, null),
            " Help")));
    const userDropdownItems = (React.createElement(React.Fragment, null,
        React.createElement(DropdownItem, { key: "group 2 profile" }, "My profile"),
        React.createElement(DropdownItem, { key: "group 2 user" }, "User management"),
        React.createElement(DropdownItem, { key: "group 2 logout" }, "Logout")));
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
    return (React.createElement(Masthead, null,
        React.createElement(MastheadToggle, null,
            React.createElement(PageToggleButton, { variant: "plain", "aria-label": "Global navigation" },
                React.createElement(BarsIcon, null))),
        React.createElement(MastheadMain, null,
            React.createElement(MastheadBrand, null,
                React.createElement(Brand, { src: pfLogo, alt: "PatternFly", heights: { default: '36px' } }))),
        React.createElement(MastheadContent, null,
            React.createElement(Toolbar, { id: "toolbar", isFullHeight: true, isStatic: true },
                React.createElement(ToolbarContent, null,
                    React.createElement(ToolbarGroup, { variant: "icon-button-group", align: { default: 'alignRight' }, spacer: { default: 'spacerNone', md: 'spacerMd' } }, notificationBadge !== null && notificationBadge !== void 0 ? notificationBadge : (React.createElement(ToolbarItem, null,
                        React.createElement(Button, { "aria-label": "Notifications", variant: ButtonVariant.plain, icon: React.createElement(BellIcon, null), onClick: () => { } }))),
                        React.createElement(ToolbarGroup, { variant: "icon-button-group", visibility: { default: 'hidden', lg: 'visible' } },
                            React.createElement(ToolbarItem, null,
                                React.createElement(Button, { "aria-label": "Settings", variant: ButtonVariant.plain, icon: React.createElement(CogIcon, null) })),
                            React.createElement(ToolbarItem, null,
                                React.createElement(Button, { "aria-label": "Help", variant: ButtonVariant.plain, icon: React.createElement(QuestionCircleIcon, null) }))),
                        React.createElement(ToolbarItem, { visibility: { default: 'hidden', md: 'visible', lg: 'hidden' } },
                            React.createElement(Dropdown, { isOpen: isKebabDropdownOpen, onSelect: onKebabDropdownSelect, onOpenChange: setIsKebabDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, isExpanded: isKebabDropdownOpen, onClick: onKebabDropdownToggle, variant: "plain", "aria-label": "Settings and help" },
                                    React.createElement(EllipsisVIcon, { "aria-hidden": "true" }))) },
                                React.createElement(DropdownList, null, kebabDropdownItems))),
                        React.createElement(ToolbarItem, { visibility: { md: 'hidden' } },
                            React.createElement(Dropdown, { isOpen: isFullKebabDropdownOpen, onSelect: onFullKebabSelect, onOpenChange: setIsFullKebabDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, isExpanded: isFullKebabDropdownOpen, onClick: onFullKebabToggle, variant: "plain", "aria-label": "Toolbar menu" },
                                    React.createElement(EllipsisVIcon, { "aria-hidden": "true" }))) },
                                React.createElement(DropdownGroup, { key: "group 2", "aria-label": "User actions" },
                                    React.createElement(DropdownList, null, userDropdownItems)),
                                React.createElement(Divider, null),
                                React.createElement(DropdownList, null, kebabDropdownItems)))),
                    React.createElement(ToolbarItem, { visibility: { default: 'hidden', md: 'visible' } },
                        React.createElement(Dropdown, { isOpen: isDropdownOpen, onSelect: onDropdownSelect, onOpenChange: setIsDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, isExpanded: isDropdownOpen, onClick: onDropdownToggle, icon: React.createElement(Avatar, { src: imgAvatar, alt: "" }), isFullHeight: true }, "Ned Username")) },
                            React.createElement(DropdownList, null, userDropdownItems))))))));
};
DashboardHeader.displayName = 'DashboardHeader';
//# sourceMappingURL=DashboardHeader.js.map