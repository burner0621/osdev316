import React from 'react';
import { Dropdown as DropdownDeprecated, DropdownItem as DropdownItemDeprecated, DropdownToggle as DropdownToggleDeprecated } from '@patternfly/react-core/deprecated';
export const SpiceActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', onCtrlAltDel }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (React.createElement(DropdownDeprecated, { id: "console-send-shortcut", onSelect: () => {
            setIsOpen(!isOpen);
            onCtrlAltDel();
        }, isOpen: isOpen, toggle: React.createElement(DropdownToggleDeprecated, { onToggle: (_event, isDropdownOpen) => setIsOpen(isDropdownOpen) }, textSendShortcut), dropdownItems: [React.createElement(DropdownItemDeprecated, { key: "ctrl-alt-delete" }, textCtrlAltDel)] }));
};
SpiceActions.displayName = 'SpiceActions';
//# sourceMappingURL=SpiceActions.js.map