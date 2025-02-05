"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessConsoles = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const deprecated_1 = require("@patternfly/react-core/deprecated");
const constants_1 = require("../common/constants");
const AccessConsoles_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Consoles/AccessConsoles"));
require("@patternfly/react-styles/css/components/Consoles/AccessConsoles.css");
const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants_1.constants;
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
const AccessConsoles = ({ children, textSelectConsoleType = 'Select console type', textSerialConsole = 'Serial console', textVncConsole = 'VNC console', textDesktopViewerConsole = 'Desktop viewer', preselectedType = null }) => {
    const typeMap = {
        [SERIAL_CONSOLE_TYPE]: textSerialConsole,
        [VNC_CONSOLE_TYPE]: textVncConsole,
        [DESKTOP_VIEWER_CONSOLE_TYPE]: textDesktopViewerConsole
    };
    const [type, setType] = react_1.default.useState(preselectedType !== NONE_TYPE
        ? { value: preselectedType, toString: () => typeMap[preselectedType] }
        : null);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const getConsoleForType = (type) => react_1.default.Children.map(children, (child) => {
        if (getChildTypeName(child) === type.value) {
            return react_1.default.createElement(react_1.default.Fragment, { key: getChildTypeName(child) }, child);
        }
        else {
            return null;
        }
    });
    const onToggle = (_event, isOpen) => {
        setIsOpen(isOpen);
    };
    const selectOptions = [];
    react_1.default.Children.toArray(children).forEach((child) => {
        if (isChildOfType(child, VNC_CONSOLE_TYPE)) {
            selectOptions.push(react_1.default.createElement(deprecated_1.SelectOption, { key: VNC_CONSOLE_TYPE, id: VNC_CONSOLE_TYPE, value: { value: VNC_CONSOLE_TYPE, toString: () => textVncConsole } }));
        }
        else if (isChildOfType(child, SERIAL_CONSOLE_TYPE)) {
            selectOptions.push(react_1.default.createElement(deprecated_1.SelectOption, { key: SERIAL_CONSOLE_TYPE, id: SERIAL_CONSOLE_TYPE, value: { value: SERIAL_CONSOLE_TYPE, toString: () => textSerialConsole } }));
        }
        else if (isChildOfType(child, DESKTOP_VIEWER_CONSOLE_TYPE)) {
            selectOptions.push(react_1.default.createElement(deprecated_1.SelectOption, { key: DESKTOP_VIEWER_CONSOLE_TYPE, id: DESKTOP_VIEWER_CONSOLE_TYPE, value: { value: DESKTOP_VIEWER_CONSOLE_TYPE, toString: () => textDesktopViewerConsole } }));
        }
        else {
            const typeText = getChildTypeName(child);
            selectOptions.push(react_1.default.createElement(deprecated_1.SelectOption, { key: typeText, id: typeText, value: { value: typeText, toString: () => typeText } }));
        }
    });
    return (react_1.default.createElement("div", { className: (0, react_styles_1.css)(AccessConsoles_1.default.console) },
        react_1.default.Children.toArray(children).length > 1 && (react_1.default.createElement("div", { className: (0, react_styles_1.css)(AccessConsoles_1.default.consoleActions) },
            react_1.default.createElement(deprecated_1.Select, { "aria-label": textSelectConsoleType, placeholderText: textSelectConsoleType, toggleId: "pf-v5-c-console__type-selector", variant: deprecated_1.SelectVariant.single, onSelect: (_, selection, __) => {
                    setType(selection);
                    setIsOpen(false);
                }, selections: type, isOpen: isOpen, onToggle: onToggle }, selectOptions))),
        type && getConsoleForType(type)));
};
exports.AccessConsoles = AccessConsoles;
exports.AccessConsoles.displayName = 'AccessConsoles';
//# sourceMappingURL=AccessConsoles.js.map