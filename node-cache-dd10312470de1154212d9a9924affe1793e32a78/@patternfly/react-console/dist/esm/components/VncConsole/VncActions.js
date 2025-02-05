import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { Dropdown as DropdownDeprecated, DropdownItem as DropdownItemDeprecated, DropdownToggle as DropdownToggleDeprecated } from '@patternfly/react-core/deprecated';
import styles from '@patternfly/react-styles/css/components/Consoles/VncConsole';
export const VncActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', textDisconnect = 'Disconnect', onCtrlAltDel = undefined, onDisconnect, additionalButtons = [] }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toolbar = (React.createElement("div", { className: css(styles.consoleActionsVnc) },
        additionalButtons,
        React.createElement(DropdownDeprecated, { id: "pf-v5-c-console__send-shortcut", onSelect: () => setIsOpen(false), toggle: React.createElement(DropdownToggleDeprecated, { id: "pf-v5-c-console__actions-vnc-toggle-id", onToggle: () => setIsOpen(!isOpen) }, textSendShortcut), isOpen: isOpen, dropdownItems: [
                React.createElement(DropdownItemDeprecated, { onClick: onCtrlAltDel, key: "ctrl-alt-delete" }, textCtrlAltDel)
            ] }),
        React.createElement(Button, { variant: ButtonVariant.secondary, onClick: onDisconnect }, textDisconnect)));
    return toolbar;
};
VncActions.displayName = 'VncActions';
//# sourceMappingURL=VncActions.js.map