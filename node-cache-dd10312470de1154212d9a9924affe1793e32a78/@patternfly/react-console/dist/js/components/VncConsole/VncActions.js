"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VncActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const react_core_1 = require("@patternfly/react-core");
const deprecated_1 = require("@patternfly/react-core/deprecated");
const VncConsole_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Consoles/VncConsole"));
const VncActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', textDisconnect = 'Disconnect', onCtrlAltDel = undefined, onDisconnect, additionalButtons = [] }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const toolbar = (react_1.default.createElement("div", { className: (0, react_styles_1.css)(VncConsole_1.default.consoleActionsVnc) },
        additionalButtons,
        react_1.default.createElement(deprecated_1.Dropdown, { id: "pf-v5-c-console__send-shortcut", onSelect: () => setIsOpen(false), toggle: react_1.default.createElement(deprecated_1.DropdownToggle, { id: "pf-v5-c-console__actions-vnc-toggle-id", onToggle: () => setIsOpen(!isOpen) }, textSendShortcut), isOpen: isOpen, dropdownItems: [
                react_1.default.createElement(deprecated_1.DropdownItem, { onClick: onCtrlAltDel, key: "ctrl-alt-delete" }, textCtrlAltDel)
            ] }),
        react_1.default.createElement(react_core_1.Button, { variant: react_core_1.ButtonVariant.secondary, onClick: onDisconnect }, textDisconnect)));
    return toolbar;
};
exports.VncActions = VncActions;
exports.VncActions.displayName = 'VncActions';
//# sourceMappingURL=VncActions.js.map