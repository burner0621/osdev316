"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const deprecated_1 = require("@patternfly/react-core/deprecated");
const SpiceActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', onCtrlAltDel }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    return (react_1.default.createElement(deprecated_1.Dropdown, { id: "console-send-shortcut", onSelect: () => {
            setIsOpen(!isOpen);
            onCtrlAltDel();
        }, isOpen: isOpen, toggle: react_1.default.createElement(deprecated_1.DropdownToggle, { onToggle: (_event, isDropdownOpen) => setIsOpen(isDropdownOpen) }, textSendShortcut), dropdownItems: [react_1.default.createElement(deprecated_1.DropdownItem, { key: "ctrl-alt-delete" }, textCtrlAltDel)] }));
};
exports.SpiceActions = SpiceActions;
exports.SpiceActions.displayName = 'SpiceActions';
//# sourceMappingURL=SpiceActions.js.map