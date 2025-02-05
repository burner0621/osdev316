"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardCopy = exports.ClipboardCopyVariant = exports.clipboardCopyFunc = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const clipboard_copy_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy"));
const react_styles_1 = require("@patternfly/react-styles");
const Tooltip_1 = require("../Tooltip");
const TextInput_1 = require("../TextInput");
const GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
const ClipboardCopyButton_1 = require("./ClipboardCopyButton");
const ClipboardCopyToggle_1 = require("./ClipboardCopyToggle");
const ClipboardCopyExpanded_1 = require("./ClipboardCopyExpanded");
const helpers_1 = require("../../helpers");
const clipboardCopyFunc = (_event, text) => {
    try {
        navigator.clipboard.writeText(text.toString());
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.warn("Clipboard API not found, this copy function will not work. This is likely because you're using an", "unsupported browser or you're not using HTTPS. \n\nIf you're a developer building an application which needs", "to support copying to the clipboard without the clipboard API, you'll have to create your own copy", 'function and pass it to the ClipboardCopy component as the onCopy prop. For more information see', 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard');
        // eslint-disable-next-line no-console
        console.error(error);
    }
};
exports.clipboardCopyFunc = clipboardCopyFunc;
var ClipboardCopyVariant;
(function (ClipboardCopyVariant) {
    ClipboardCopyVariant["inline"] = "inline";
    ClipboardCopyVariant["expansion"] = "expansion";
    ClipboardCopyVariant["inlineCompact"] = "inline-compact";
})(ClipboardCopyVariant = exports.ClipboardCopyVariant || (exports.ClipboardCopyVariant = {}));
class ClipboardCopy extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.componentDidUpdate = (prevProps, prevState) => {
            if (prevProps.children !== this.props.children) {
                const newText = this.props.children;
                this.setState({ text: newText, textWhenExpanded: newText });
            }
        };
        this.componentWillUnmount = () => {
            if (this.timer) {
                window.clearTimeout(this.timer);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.expandContent = (_event) => {
            this.setState((prevState) => ({
                expanded: !prevState.expanded
            }));
        };
        this.updateText = (event, text) => {
            this.setState({ text });
            this.props.onChange(event, text);
        };
        this.updateTextWhenExpanded = (event, text) => {
            this.setState({ textWhenExpanded: text });
            this.props.onChange(event, text);
        };
        this.render = () => {
            const _a = this.props, { 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            isExpanded, onChange, // Don't pass to <div>
            /* eslint-enable @typescript-eslint/no-unused-vars */
            isReadOnly, isCode, isBlock, exitDelay, maxWidth, entryDelay, onCopy, hoverTip, clickTip, textAriaLabel, toggleAriaLabel, variant, position, className, additionalActions, ouiaId, ouiaSafe } = _a, divProps = tslib_1.__rest(_a, ["isExpanded", "onChange", "isReadOnly", "isCode", "isBlock", "exitDelay", "maxWidth", "entryDelay", "onCopy", "hoverTip", "clickTip", "textAriaLabel", "toggleAriaLabel", "variant", "position", "className", "additionalActions", "ouiaId", "ouiaSafe"]);
            const textIdPrefix = 'text-input-';
            const toggleIdPrefix = 'toggle-';
            const contentIdPrefix = 'content-';
            return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopy, variant === 'inline-compact' && clipboard_copy_1.default.modifiers.inline, isBlock && clipboard_copy_1.default.modifiers.block, this.state.expanded && clipboard_copy_1.default.modifiers.expanded, className) }, divProps, (0, helpers_1.getOUIAProps)(ClipboardCopy.displayName, ouiaId, ouiaSafe)),
                variant === 'inline-compact' && (React.createElement(GenerateId_1.GenerateId, { prefix: "" }, (id) => (React.createElement(React.Fragment, null,
                    !isCode && (React.createElement("span", { className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopyText), id: `${textIdPrefix}${id}` }, this.state.text)),
                    isCode && (React.createElement("code", { className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopyText, clipboard_copy_1.default.modifiers.code), id: `${textIdPrefix}${id}` }, this.state.text)),
                    React.createElement("span", { className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopyActions) },
                        React.createElement("span", { className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopyActionsItem) },
                            React.createElement(ClipboardCopyButton_1.ClipboardCopyButton, { variant: "plain", exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, id: `copy-button-${id}`, textId: `text-input-${id}`, "aria-label": hoverTip, onClick: (event) => {
                                    onCopy(event, this.state.text);
                                    this.setState({ copied: true });
                                }, onTooltipHidden: () => this.setState({ copied: false }) }, this.state.copied ? clickTip : hoverTip)),
                        additionalActions && additionalActions))))),
                variant !== 'inline-compact' && (React.createElement(GenerateId_1.GenerateId, { prefix: "" }, (id) => (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopyGroup) },
                        variant === 'expansion' && (React.createElement(ClipboardCopyToggle_1.ClipboardCopyToggle, { isExpanded: this.state.expanded, onClick: (_event) => {
                                this.expandContent(_event);
                                if (this.state.expanded) {
                                    this.setState({ text: this.state.textWhenExpanded });
                                }
                                else {
                                    this.setState({ textWhenExpanded: this.state.text });
                                }
                            }, id: `${toggleIdPrefix}${id}`, textId: `${textIdPrefix}${id}`, contentId: `${contentIdPrefix}${id}`, "aria-label": toggleAriaLabel })),
                        React.createElement(TextInput_1.TextInput, Object.assign({ readOnlyVariant: isReadOnly || this.state.expanded ? 'default' : undefined, onChange: this.updateText, value: this.state.expanded ? this.state.textWhenExpanded : this.state.text, id: `text-input-${id}`, "aria-label": textAriaLabel }, (isCode && { dir: 'ltr' }))),
                        React.createElement(ClipboardCopyButton_1.ClipboardCopyButton, { exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, id: `copy-button-${id}`, textId: `text-input-${id}`, "aria-label": hoverTip, onClick: (event) => {
                                onCopy(event, this.state.expanded ? this.state.textWhenExpanded : this.state.text);
                                this.setState({ copied: true });
                            }, onTooltipHidden: () => this.setState({ copied: false }) }, this.state.copied ? clickTip : hoverTip)),
                    this.state.expanded && (React.createElement(ClipboardCopyExpanded_1.ClipboardCopyExpanded, { isReadOnly: isReadOnly, isCode: isCode, id: `content-${id}`, onChange: this.updateTextWhenExpanded }, this.state.text))))))));
        };
        const text = Array.isArray(this.props.children) ? this.props.children.join('') : this.props.children;
        this.state = {
            text,
            expanded: this.props.isExpanded,
            copied: false,
            textWhenExpanded: text
        };
    }
}
exports.ClipboardCopy = ClipboardCopy;
ClipboardCopy.displayName = 'ClipboardCopy';
ClipboardCopy.defaultProps = {
    hoverTip: 'Copy to clipboard',
    clickTip: 'Successfully copied to clipboard!',
    isReadOnly: false,
    isExpanded: false,
    isCode: false,
    variant: 'inline',
    position: Tooltip_1.TooltipPosition.top,
    maxWidth: '150px',
    exitDelay: 1500,
    entryDelay: 300,
    onCopy: exports.clipboardCopyFunc,
    onChange: () => undefined,
    textAriaLabel: 'Copyable input',
    toggleAriaLabel: 'Show content',
    additionalActions: null,
    ouiaSafe: true
};
//# sourceMappingURL=ClipboardCopy.js.map