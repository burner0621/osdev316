"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = exports.PopoverPosition = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-console */
const React = tslib_1.__importStar(require("react"));
const constants_1 = require("../../helpers/constants");
const popover_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Popover/popover"));
const react_styles_1 = require("@patternfly/react-styles");
const PopoverContext_1 = require("./PopoverContext");
const PopoverContent_1 = require("./PopoverContent");
const PopoverBody_1 = require("./PopoverBody");
const PopoverHeader_1 = require("./PopoverHeader");
const PopoverFooter_1 = require("./PopoverFooter");
const PopoverCloseButton_1 = require("./PopoverCloseButton");
const PopoverArrow_1 = require("./PopoverArrow");
const c_popover_MaxWidth_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_popover_MaxWidth'));
const c_popover_MinWidth_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_popover_MinWidth'));
const helpers_1 = require("../../helpers");
const Popper_1 = require("../../helpers/Popper/Popper");
const util_1 = require("../../helpers/util");
var PopoverPosition;
(function (PopoverPosition) {
    PopoverPosition["auto"] = "auto";
    PopoverPosition["top"] = "top";
    PopoverPosition["bottom"] = "bottom";
    PopoverPosition["left"] = "left";
    PopoverPosition["right"] = "right";
    PopoverPosition["topStart"] = "top-start";
    PopoverPosition["topEnd"] = "top-end";
    PopoverPosition["bottomStart"] = "bottom-start";
    PopoverPosition["bottomEnd"] = "bottom-end";
    PopoverPosition["leftStart"] = "left-start";
    PopoverPosition["leftEnd"] = "left-end";
    PopoverPosition["rightStart"] = "right-start";
    PopoverPosition["rightEnd"] = "right-end";
})(PopoverPosition = exports.PopoverPosition || (exports.PopoverPosition = {}));
const alertStyle = {
    custom: popover_1.default.modifiers.custom,
    info: popover_1.default.modifiers.info,
    success: popover_1.default.modifiers.success,
    warning: popover_1.default.modifiers.warning,
    danger: popover_1.default.modifiers.danger
};
const Popover = (_a) => {
    var { children, position = 'top', enableFlip = true, className = '', isVisible = null, shouldClose = () => null, shouldOpen = () => null, 'aria-label': ariaLabel = '', bodyContent, headerContent = null, headerComponent = 'h6', headerIcon = null, alertSeverityVariant, alertSeverityScreenReaderText, footerContent = null, appendTo = () => document.body, hideOnOutsideClick = true, onHide = () => null, onHidden = () => null, onShow = () => null, onShown = () => null, onMount = () => null, zIndex = 9999, triggerAction = 'click', minWidth = c_popover_MinWidth_1.default && c_popover_MinWidth_1.default.value, maxWidth = c_popover_MaxWidth_1.default && c_popover_MaxWidth_1.default.value, closeBtnAriaLabel = 'Close', showClose = true, distance = 25, flipBehavior = [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end'
    ], animationDuration = 300, id, withFocusTrap: propWithFocusTrap, triggerRef, hasNoPadding = false, hasAutoWidth = false, elementToFocus } = _a, rest = tslib_1.__rest(_a, ["children", "position", "enableFlip", "className", "isVisible", "shouldClose", "shouldOpen", 'aria-label', "bodyContent", "headerContent", "headerComponent", "headerIcon", "alertSeverityVariant", "alertSeverityScreenReaderText", "footerContent", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "triggerAction", "minWidth", "maxWidth", "closeBtnAriaLabel", "showClose", "distance", "flipBehavior", "animationDuration", "id", "withFocusTrap", "triggerRef", "hasNoPadding", "hasAutoWidth", "elementToFocus"]);
    // could make this a prop in the future (true | false | 'toggle')
    // const hideOnClick = true;
    const uniqueId = id || (0, util_1.getUniqueId)();
    const triggerManually = isVisible !== null;
    const [visible, setVisible] = React.useState(false);
    const [focusTrapActive, setFocusTrapActive] = React.useState(Boolean(propWithFocusTrap));
    const popoverRef = React.useRef(null);
    React.useEffect(() => {
        onMount();
    }, []);
    React.useEffect(() => {
        if (triggerManually) {
            if (isVisible) {
                show(undefined, true);
            }
            else {
                hide();
            }
        }
    }, [isVisible, triggerManually]);
    const show = (event, withFocusTrap) => {
        event && onShow(event);
        setVisible(true);
        propWithFocusTrap !== false && withFocusTrap && setFocusTrapActive(true);
    };
    const hide = (event) => {
        event && onHide(event);
        setVisible(false);
    };
    const positionModifiers = {
        top: popover_1.default.modifiers.top,
        bottom: popover_1.default.modifiers.bottom,
        left: popover_1.default.modifiers.left,
        right: popover_1.default.modifiers.right,
        'top-start': popover_1.default.modifiers.topLeft,
        'top-end': popover_1.default.modifiers.topRight,
        'bottom-start': popover_1.default.modifiers.bottomLeft,
        'bottom-end': popover_1.default.modifiers.bottomRight,
        'left-start': popover_1.default.modifiers.leftTop,
        'left-end': popover_1.default.modifiers.leftBottom,
        'right-start': popover_1.default.modifiers.rightTop,
        'right-end': popover_1.default.modifiers.rightBottom
    };
    const hasCustomMinWidth = minWidth !== c_popover_MinWidth_1.default.value;
    const hasCustomMaxWidth = maxWidth !== c_popover_MaxWidth_1.default.value;
    const onDocumentKeyDown = (event) => {
        if (event.key === constants_1.KeyTypes.Escape && visible) {
            if (triggerManually) {
                shouldClose(event, hide);
            }
            else {
                hide(event);
            }
        }
    };
    const onDocumentClick = (event, triggerElement, popperElement) => {
        if (hideOnOutsideClick && visible) {
            const isFromChild = popperElement && popperElement.contains(event.target);
            const isFromTrigger = triggerElement && triggerElement.contains(event.target);
            if (isFromChild || isFromTrigger) {
                // if clicked within the popper or on the trigger, ignore this event
                return;
            }
            if (triggerManually) {
                shouldClose(event, hide);
            }
            else {
                hide(event);
            }
        }
    };
    const onTriggerClick = (event) => {
        if (triggerManually) {
            if (visible) {
                shouldClose(event, hide);
            }
            else {
                shouldOpen(event, show);
            }
        }
        else {
            if (visible) {
                hide(event);
            }
            else {
                show(event, true);
            }
        }
    };
    const onContentMouseDown = () => {
        if (focusTrapActive) {
            setFocusTrapActive(false);
        }
    };
    const onMouseEnter = (event) => {
        if (triggerManually) {
            shouldOpen(event, show);
        }
        else {
            show(event, false);
        }
    };
    const onMouseLeave = (event) => {
        if (triggerManually) {
            shouldClose(event, hide);
        }
        else {
            hide(event);
        }
    };
    const onFocus = (event) => {
        if (triggerManually) {
            shouldOpen(event, show);
        }
        else {
            show(event, false);
        }
    };
    const onBlur = (event) => {
        if (triggerManually) {
            shouldClose(event, hide);
        }
        else {
            hide(event);
        }
    };
    const closePopover = (event) => {
        event.stopPropagation();
        if (triggerManually) {
            shouldClose(event, hide);
        }
        else {
            hide(event);
        }
    };
    const content = (React.createElement(helpers_1.FocusTrap, Object.assign({ ref: popoverRef, active: focusTrapActive, focusTrapOptions: {
            returnFocusOnDeactivate: propWithFocusTrap !== false,
            clickOutsideDeactivates: true,
            // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
            // We want to prevent this in case false is ever passed in.
            initialFocus: elementToFocus || undefined,
            checkCanFocusTrap: (containers) => new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (containers.every((container) => getComputedStyle(container).visibility !== 'hidden')) {
                        resolve();
                        clearInterval(interval);
                    }
                }, 10);
            }),
            tabbableOptions: { displayCheck: 'none' },
            fallbackFocus: () => {
                // If the popover's trigger is focused but scrolled out of view,
                // FocusTrap will throw an error when the Enter button is used on the trigger.
                // That is because the Popover is hidden when its trigger is out of view.
                // Provide a fallback in that case.
                let node = null;
                if (document && document.activeElement) {
                    node = document.activeElement;
                }
                return node;
            }
        }, preventScrollOnDeactivate: true, className: (0, react_styles_1.css)(popover_1.default.popover, alertSeverityVariant && alertStyle[alertSeverityVariant], hasNoPadding && popover_1.default.modifiers.noPadding, hasAutoWidth && popover_1.default.modifiers.widthAuto, className), role: "dialog", "aria-modal": "true", "aria-label": headerContent ? undefined : ariaLabel, "aria-labelledby": headerContent ? `popover-${uniqueId}-header` : undefined, "aria-describedby": `popover-${uniqueId}-body`, onMouseDown: onContentMouseDown, style: {
            minWidth: hasCustomMinWidth ? minWidth : null,
            maxWidth: hasCustomMaxWidth ? maxWidth : null
        } }, rest),
        React.createElement(PopoverArrow_1.PopoverArrow, null),
        React.createElement(PopoverContent_1.PopoverContent, null,
            showClose && triggerAction === 'click' && (React.createElement(PopoverCloseButton_1.PopoverCloseButton, { onClose: closePopover, "aria-label": closeBtnAriaLabel })),
            headerContent && (React.createElement(PopoverHeader_1.PopoverHeader, { id: `popover-${uniqueId}-header`, icon: headerIcon, alertSeverityVariant: alertSeverityVariant, alertSeverityScreenReaderText: alertSeverityScreenReaderText || `${alertSeverityVariant} alert:`, titleHeadingLevel: headerComponent }, typeof headerContent === 'function' ? headerContent(hide) : headerContent)),
            React.createElement(PopoverBody_1.PopoverBody, { id: `popover-${uniqueId}-body` }, typeof bodyContent === 'function' ? bodyContent(hide) : bodyContent),
            footerContent && (React.createElement(PopoverFooter_1.PopoverFooter, { id: `popover-${uniqueId}-footer` }, typeof footerContent === 'function' ? footerContent(hide) : footerContent)))));
    return (React.createElement(PopoverContext_1.PopoverContext.Provider, { value: { headerComponent } },
        React.createElement(Popper_1.Popper, { trigger: children, triggerRef: triggerRef, popper: content, popperRef: popoverRef, minWidth: minWidth, appendTo: appendTo, isVisible: visible, onMouseEnter: triggerAction === 'hover' && onMouseEnter, onMouseLeave: triggerAction === 'hover' && onMouseLeave, onPopperMouseEnter: triggerAction === 'hover' && onMouseEnter, onPopperMouseLeave: triggerAction === 'hover' && onMouseLeave, onFocus: triggerAction === 'hover' && onFocus, onBlur: triggerAction === 'hover' && onBlur, positionModifiers: positionModifiers, distance: distance, placement: position, onTriggerClick: triggerAction === 'click' && onTriggerClick, onDocumentClick: onDocumentClick, onDocumentKeyDown: onDocumentKeyDown, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior, animationDuration: animationDuration, onHidden: onHidden, onShown: onShown, onHide: () => setFocusTrapActive(false) })));
};
exports.Popover = Popover;
exports.Popover.displayName = 'Popover';
//# sourceMappingURL=Popover.js.map