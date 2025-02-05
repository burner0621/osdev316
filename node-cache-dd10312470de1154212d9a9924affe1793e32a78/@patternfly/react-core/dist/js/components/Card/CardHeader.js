"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardHeader = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const card_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Card/card"));
const Card_1 = require("./Card");
const CardHeaderMain_1 = require("./CardHeaderMain");
const CardActions_1 = require("./CardActions");
const CardSelectableActions_1 = require("./CardSelectableActions");
const Button_1 = require("../Button");
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const Radio_1 = require("../Radio");
const Checkbox_1 = require("../Checkbox");
const CardHeader = (_a) => {
    var { children, className, actions, selectableActions, id, onExpand, toggleButtonProps, isToggleRightAligned } = _a, props = tslib_1.__rest(_a, ["children", "className", "actions", "selectableActions", "id", "onExpand", "toggleButtonProps", "isToggleRightAligned"]);
    return (React.createElement(Card_1.CardContext.Consumer, null, ({ cardId, isClickable, isSelectable, isSelected, isClicked, isDisabled: isCardDisabled, hasSelectableInput }) => {
        const cardHeaderToggle = (React.createElement("div", { className: (0, react_styles_1.css)(card_1.default.cardHeaderToggle) },
            React.createElement(Button_1.Button, Object.assign({ variant: "plain", type: "button", onClick: (evt) => {
                    onExpand(evt, cardId);
                } }, toggleButtonProps),
                React.createElement("span", { className: (0, react_styles_1.css)(card_1.default.cardHeaderToggleIcon) },
                    React.createElement(angle_right_icon_1.default, { "aria-hidden": "true" })))));
        const isClickableOrSelectableOnly = (isClickable && !isSelectable) || (isSelectable && !isClickable);
        // TODO: Remove following variable and update if block when deprecated prop is removed
        // We don't want to throw a warning for the deprecated card
        const isDeprecatedSelectableCard = hasSelectableInput;
        if ((actions === null || actions === void 0 ? void 0 : actions.actions) && isClickableOrSelectableOnly && !isDeprecatedSelectableCard) {
            // eslint-disable-next-line no-console
            console.warn(`${isClickable ? 'Clickable' : 'Selectable'} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`);
        }
        const handleActionClick = (event) => {
            if (selectableActions === null || selectableActions === void 0 ? void 0 : selectableActions.onClickAction) {
                selectableActions.onClickAction(event);
            }
            else if (selectableActions === null || selectableActions === void 0 ? void 0 : selectableActions.to) {
                window.open(selectableActions.to, selectableActions.isExternalLink ? '_blank' : '_self');
            }
        };
        const getClickableSelectableProps = () => {
            var _a;
            const baseProps = {
                className: 'pf-m-standalone',
                inputClassName: isClickable && !isSelectable && 'pf-v5-screen-reader',
                label: React.createElement(React.Fragment, null),
                'aria-label': selectableActions.selectableActionAriaLabel,
                'aria-labelledby': selectableActions.selectableActionAriaLabelledby,
                id: selectableActions.selectableActionId,
                name: selectableActions.name,
                isDisabled: isCardDisabled
            };
            const isSelectableInputChecked = (_a = selectableActions.isChecked) !== null && _a !== void 0 ? _a : isSelected;
            if (isClickable && !isSelectable) {
                return Object.assign(Object.assign({}, baseProps), { onClick: handleActionClick, isChecked: isClicked });
            }
            if (isSelectable) {
                return Object.assign(Object.assign({}, baseProps), { onChange: selectableActions.onChange, isChecked: isSelectableInputChecked });
            }
            return baseProps;
        };
        return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(card_1.default.cardHeader, isToggleRightAligned && card_1.default.modifiers.toggleRight, className), id: id }, props),
            onExpand && !isToggleRightAligned && cardHeaderToggle,
            (actions || (selectableActions && (isClickable || isSelectable))) && (React.createElement(CardActions_1.CardActions, { className: actions === null || actions === void 0 ? void 0 : actions.className, hasNoOffset: (actions === null || actions === void 0 ? void 0 : actions.hasNoOffset) || (selectableActions === null || selectableActions === void 0 ? void 0 : selectableActions.hasNoOffset) }, actions === null || actions === void 0 ? void 0 :
                actions.actions,
                selectableActions && (isClickable || isSelectable) && (React.createElement(CardSelectableActions_1.CardSelectableActions, { className: selectableActions === null || selectableActions === void 0 ? void 0 : selectableActions.className }, (selectableActions === null || selectableActions === void 0 ? void 0 : selectableActions.variant) === 'single' || (isClickable && !isSelectable) ? (React.createElement(Radio_1.Radio, Object.assign({}, getClickableSelectableProps()))) : (React.createElement(Checkbox_1.Checkbox, Object.assign({}, getClickableSelectableProps()))))))),
            children && React.createElement(CardHeaderMain_1.CardHeaderMain, null, children),
            onExpand && isToggleRightAligned && cardHeaderToggle));
    }));
};
exports.CardHeader = CardHeader;
exports.CardHeader.displayName = 'CardHeader';
//# sourceMappingURL=CardHeader.js.map