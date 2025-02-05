"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputGroupMain = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const text_input_group_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/TextInputGroup/text-input-group"));
const react_styles_1 = require("@patternfly/react-styles");
const TextInputGroup_1 = require("./TextInputGroup");
const TextInputGroupMainBase = (_a) => {
    var { children, className, icon, type = 'text', hint, onChange = () => undefined, onFocus, onBlur, 'aria-label': ariaLabel = 'Type to filter', value: inputValue, placeholder: inputPlaceHolder, innerRef, name, 'aria-activedescendant': ariaActivedescendant, role, isExpanded, 'aria-controls': ariaControls, inputId } = _a, props = tslib_1.__rest(_a, ["children", "className", "icon", "type", "hint", "onChange", "onFocus", "onBlur", 'aria-label', "value", "placeholder", "innerRef", "name", 'aria-activedescendant', "role", "isExpanded", 'aria-controls', "inputId"]);
    const { isDisabled } = React.useContext(TextInputGroup_1.TextInputGroupContext);
    const ref = React.useRef(null);
    const textInputGroupInputInputRef = innerRef || ref;
    const handleChange = (event) => {
        onChange(event, event.currentTarget.value);
    };
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(text_input_group_1.default.textInputGroupMain, icon && text_input_group_1.default.modifiers.icon, className) }, props),
        children,
        React.createElement("span", { className: (0, react_styles_1.css)(text_input_group_1.default.textInputGroupText) },
            hint && (React.createElement("input", { className: (0, react_styles_1.css)(text_input_group_1.default.textInputGroupTextInput, text_input_group_1.default.modifiers.hint), type: "text", disabled: true, "aria-hidden": "true", value: hint, id: inputId })),
            icon && React.createElement("span", { className: (0, react_styles_1.css)(text_input_group_1.default.textInputGroupIcon) }, icon),
            React.createElement("input", Object.assign({ ref: textInputGroupInputInputRef, type: type, className: (0, react_styles_1.css)(text_input_group_1.default.textInputGroupTextInput), "aria-label": ariaLabel, disabled: isDisabled, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, value: inputValue || '', placeholder: inputPlaceHolder, name: name, "aria-activedescendant": ariaActivedescendant, id: inputId }, (role && { role }), (isExpanded !== undefined && { 'aria-expanded': isExpanded }), (ariaControls && { 'aria-controls': ariaControls }))))));
};
exports.TextInputGroupMain = React.forwardRef((props, ref) => (React.createElement(TextInputGroupMainBase, Object.assign({ innerRef: ref }, props))));
exports.TextInputGroupMain.displayName = 'TextInputGroupMain';
//# sourceMappingURL=TextInputGroupMain.js.map