import React from 'react';
import { css } from '@patternfly/react-styles';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';
import { constants } from '../common/constants';
import styles from '@patternfly/react-styles/css/components/Consoles/AccessConsoles';
import '@patternfly/react-styles/css/components/Consoles/AccessConsoles.css';
const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants;
const getChildTypeName = (child) => child && child.props && child.props.type ? child.props.type : (child && child.type && child.type.displayName) || null;
const isChildOfType = (child, type) => {
    if (child && child.props && child.props.type) {
        return child.props.type === type;
    }
    else if (child && child.type) {
        return child.type.displayName === type;
    }
    return false;
};
export const AccessConsoles = ({ children, textSelectConsoleType = 'Select console type', textSerialConsole = 'Serial console', textVncConsole = 'VNC console', textDesktopViewerConsole = 'Desktop viewer', preselectedType = null }) => {
    const typeMap = {
        [SERIAL_CONSOLE_TYPE]: textSerialConsole,
        [VNC_CONSOLE_TYPE]: textVncConsole,
        [DESKTOP_VIEWER_CONSOLE_TYPE]: textDesktopViewerConsole
    };
    const [type, setType] = React.useState(preselectedType !== NONE_TYPE
        ? { value: preselectedType, toString: () => typeMap[preselectedType] }
        : null);
    const [isOpen, setIsOpen] = React.useState(false);
    const getConsoleForType = (type) => React.Children.map(children, (child) => {
        if (getChildTypeName(child) === type.value) {
            return React.createElement(React.Fragment, { key: getChildTypeName(child) }, child);
        }
        else {
            return null;
        }
    });
    const onToggle = (_event, isOpen) => {
        setIsOpen(isOpen);
    };
    const selectOptions = [];
    React.Children.toArray(children).forEach((child) => {
        if (isChildOfType(child, VNC_CONSOLE_TYPE)) {
            selectOptions.push(React.createElement(SelectOption, { key: VNC_CONSOLE_TYPE, id: VNC_CONSOLE_TYPE, value: { value: VNC_CONSOLE_TYPE, toString: () => textVncConsole } }));
        }
        else if (isChildOfType(child, SERIAL_CONSOLE_TYPE)) {
            selectOptions.push(React.createElement(SelectOption, { key: SERIAL_CONSOLE_TYPE, id: SERIAL_CONSOLE_TYPE, value: { value: SERIAL_CONSOLE_TYPE, toString: () => textSerialConsole } }));
        }
        else if (isChildOfType(child, DESKTOP_VIEWER_CONSOLE_TYPE)) {
            selectOptions.push(React.createElement(SelectOption, { key: DESKTOP_VIEWER_CONSOLE_TYPE, id: DESKTOP_VIEWER_CONSOLE_TYPE, value: { value: DESKTOP_VIEWER_CONSOLE_TYPE, toString: () => textDesktopViewerConsole } }));
        }
        else {
            const typeText = getChildTypeName(child);
            selectOptions.push(React.createElement(SelectOption, { key: typeText, id: typeText, value: { value: typeText, toString: () => typeText } }));
        }
    });
    return (React.createElement("div", { className: css(styles.console) },
        React.Children.toArray(children).length > 1 && (React.createElement("div", { className: css(styles.consoleActions) },
            React.createElement(Select, { "aria-label": textSelectConsoleType, placeholderText: textSelectConsoleType, toggleId: "pf-v5-c-console__type-selector", variant: SelectVariant.single, onSelect: (_, selection, __) => {
                    setType(selection);
                    setIsOpen(false);
                }, selections: type, isOpen: isOpen, onToggle: onToggle }, selectOptions))),
        type && getConsoleForType(type)));
};
AccessConsoles.displayName = 'AccessConsoles';
//# sourceMappingURL=AccessConsoles.js.map