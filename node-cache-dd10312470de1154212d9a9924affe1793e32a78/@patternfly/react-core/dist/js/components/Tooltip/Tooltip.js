"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = exports.TooltipPosition = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-console */
const React = tslib_1.__importStar(require("react"));
const tooltip_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Tooltip/tooltip"));
const react_styles_1 = require("@patternfly/react-styles");
const TooltipContent_1 = require("./TooltipContent");
const TooltipArrow_1 = require("./TooltipArrow");
const constants_1 = require("../../helpers/constants");
const c_tooltip_MaxWidth_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_tooltip_MaxWidth'));
const Popper_1 = require("../../helpers/Popper/Popper");
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["auto"] = "auto";
    TooltipPosition["top"] = "top";
    TooltipPosition["bottom"] = "bottom";
    TooltipPosition["left"] = "left";
    TooltipPosition["right"] = "right";
    TooltipPosition["topStart"] = "top-start";
    TooltipPosition["topEnd"] = "top-end";
    TooltipPosition["bottomStart"] = "bottom-start";
    TooltipPosition["bottomEnd"] = "bottom-end";
    TooltipPosition["leftStart"] = "left-start";
    TooltipPosition["leftEnd"] = "left-end";
    TooltipPosition["rightStart"] = "right-start";
    TooltipPosition["rightEnd"] = "right-end";
})(TooltipPosition = exports.TooltipPosition || (exports.TooltipPosition = {}));
// id for associating trigger with the content aria-describedby or aria-labelledby
let pfTooltipIdCounter = 1;
const Tooltip = (_a) => {
    var { content: bodyContent, position = 'top', trigger = 'mouseenter focus', isVisible = false, isContentLeftAligned = false, enableFlip = true, className = '', entryDelay = 300, exitDelay = 300, appendTo = () => document.body, zIndex = 9999, minWidth, maxWidth = c_tooltip_MaxWidth_1.default.value, distance = 15, aria = 'describedby', 
    // For every initial starting position, there are 3 escape positions
    flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'], id = `pf-tooltip-${pfTooltipIdCounter++}`, children, animationDuration = 300, triggerRef, 'aria-live': ariaLive = triggerRef ? 'polite' : 'off', onTooltipHidden = () => { } } = _a, rest = tslib_1.__rest(_a, ["content", "position", "trigger", "isVisible", "isContentLeftAligned", "enableFlip", "className", "entryDelay", "exitDelay", "appendTo", "zIndex", "minWidth", "maxWidth", "distance", "aria", "flipBehavior", "id", "children", "animationDuration", "triggerRef", 'aria-live', "onTooltipHidden"]);
    // could make this a prop in the future (true | false | 'toggle')
    const hideOnClick = true;
    const triggerOnMouseenter = trigger.includes('mouseenter');
    const triggerOnFocus = trigger.includes('focus');
    const triggerOnClick = trigger.includes('click');
    const triggerManually = trigger === 'manual';
    const [visible, setVisible] = React.useState(false);
    const popperRef = React.createRef();
    const onDocumentKeyDown = (event) => {
        if (!triggerManually) {
            if (event.key === constants_1.KeyTypes.Escape && visible) {
                hide();
            }
        }
    };
    const onTriggerEnter = (event) => {
        if (event.key === constants_1.KeyTypes.Enter) {
            if (!visible) {
                show();
            }
            else {
                hide();
            }
        }
    };
    React.useEffect(() => {
        if (isVisible) {
            show();
        }
        else {
            hide();
        }
    }, [isVisible]);
    const show = () => {
        setVisible(true);
    };
    const hide = () => {
        setVisible(false);
    };
    const positionModifiers = {
        top: tooltip_1.default.modifiers.top,
        bottom: tooltip_1.default.modifiers.bottom,
        left: tooltip_1.default.modifiers.left,
        right: tooltip_1.default.modifiers.right,
        'top-start': tooltip_1.default.modifiers.topLeft,
        'top-end': tooltip_1.default.modifiers.topRight,
        'bottom-start': tooltip_1.default.modifiers.bottomLeft,
        'bottom-end': tooltip_1.default.modifiers.bottomRight,
        'left-start': tooltip_1.default.modifiers.leftTop,
        'left-end': tooltip_1.default.modifiers.leftBottom,
        'right-start': tooltip_1.default.modifiers.rightTop,
        'right-end': tooltip_1.default.modifiers.rightBottom
    };
    const hasCustomMaxWidth = maxWidth !== c_tooltip_MaxWidth_1.default.value;
    const content = (React.createElement("div", Object.assign({ "aria-live": ariaLive, className: (0, react_styles_1.css)(tooltip_1.default.tooltip, className), role: "tooltip", id: id, style: {
            maxWidth: hasCustomMaxWidth ? maxWidth : null
        }, ref: popperRef }, rest),
        React.createElement(TooltipArrow_1.TooltipArrow, null),
        React.createElement(TooltipContent_1.TooltipContent, { isLeftAligned: isContentLeftAligned }, bodyContent)));
    const onDocumentClick = (event, triggerElement) => {
        // event.currentTarget = document
        // event.target could be triggerElement or something else
        if (hideOnClick === true) {
            // hide on inside the toggle as well as on outside clicks
            if (visible) {
                hide();
            }
            else if (event.target === triggerElement) {
                show();
            }
        }
        else if (hideOnClick === 'toggle' && event.target === triggerElement) {
            // prevent outside clicks from hiding but allow it to still be toggled on toggle click
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }
        else if (hideOnClick === false && !visible && event.target === triggerElement) {
            show();
        }
    };
    const addAriaToTrigger = () => {
        if (aria === 'describedby' && children && children.props && !children.props['aria-describedby']) {
            return React.cloneElement(children, { 'aria-describedby': id });
        }
        else if (aria === 'labelledby' && children.props && !children.props['aria-labelledby']) {
            return React.cloneElement(children, { 'aria-labelledby': id });
        }
        return children;
    };
    return (React.createElement(Popper_1.Popper, { trigger: aria !== 'none' && visible ? addAriaToTrigger() : children, triggerRef: triggerRef, popper: content, popperRef: popperRef, minWidth: minWidth !== undefined ? minWidth : 'revert', appendTo: appendTo, isVisible: visible, positionModifiers: positionModifiers, distance: distance, placement: position, onMouseEnter: triggerOnMouseenter && show, onMouseLeave: triggerOnMouseenter && hide, onPopperMouseEnter: triggerOnMouseenter && show, onPopperMouseLeave: triggerOnMouseenter && hide, onFocus: triggerOnFocus && show, onBlur: triggerOnFocus && hide, onDocumentClick: triggerOnClick && onDocumentClick, onDocumentKeyDown: triggerManually ? null : onDocumentKeyDown, onTriggerEnter: triggerManually ? null : onTriggerEnter, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior, animationDuration: animationDuration, entryDelay: entryDelay, exitDelay: exitDelay, onHidden: onTooltipHidden }));
};
exports.Tooltip = Tooltip;
exports.Tooltip.displayName = 'Tooltip';
//# sourceMappingURL=Tooltip.js.map