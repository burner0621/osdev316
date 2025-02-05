import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown.mjs';
import { DropdownContext } from './dropdownConstants';
import { css } from '@patternfly/react-styles';
import { KeyTypes } from '../../../helpers/constants';
const buttonVariantStyles = {
    default: '',
    primary: styles.modifiers.primary,
    secondary: styles.modifiers.secondary
};
class Toggle extends React.Component {
    constructor() {
        super(...arguments);
        this.buttonRef = React.createRef();
        this.componentDidMount = () => {
            document.addEventListener('click', this.onDocClick);
            document.addEventListener('touchstart', this.onDocClick);
            document.addEventListener('keydown', this.onEscPress);
        };
        this.componentWillUnmount = () => {
            document.removeEventListener('click', this.onDocClick);
            document.removeEventListener('touchstart', this.onDocClick);
            document.removeEventListener('keydown', this.onEscPress);
        };
        this.onDocClick = (event) => {
            const { isOpen, parentRef, onToggle, getMenuRef } = this.props;
            const menuRef = getMenuRef && getMenuRef();
            const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const clickedWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
            if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                onToggle === null || onToggle === void 0 ? void 0 : onToggle(event, false);
            }
        };
        this.onEscPress = (event) => {
            var _a, _b, _c;
            const { parentRef, getMenuRef } = this.props;
            const menuRef = getMenuRef && getMenuRef();
            const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const escFromWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
            if (this.props.isOpen &&
                (event.key === KeyTypes.Escape || event.key === 'Tab') &&
                (escFromToggle || escFromWithinMenu)) {
                (_b = (_a = this.props).onToggle) === null || _b === void 0 ? void 0 : _b.call(_a, event, false);
                (_c = this.buttonRef.current) === null || _c === void 0 ? void 0 : _c.focus();
            }
        };
        this.onKeyDown = (event) => {
            var _a, _b, _c, _d, _e, _f;
            if (event.key === 'Tab' && !this.props.isOpen) {
                return;
            }
            if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.props.isOpen) {
                if (!this.props.bubbleEvent) {
                    event.stopPropagation();
                }
                event.preventDefault();
                (_b = (_a = this.props).onToggle) === null || _b === void 0 ? void 0 : _b.call(_a, event, !this.props.isOpen);
            }
            else if ((event.key === 'Enter' || event.key === ' ') && !this.props.isOpen) {
                if (!this.props.bubbleEvent) {
                    event.stopPropagation();
                }
                event.preventDefault();
                (_d = (_c = this.props).onToggle) === null || _d === void 0 ? void 0 : _d.call(_c, event, !this.props.isOpen);
                (_f = (_e = this.props).onEnter) === null || _f === void 0 ? void 0 : _f.call(_e);
            }
        };
    }
    render() {
        const _a = this.props, { className, children, isOpen, isDisabled, isPlain, isText, isSplitButton, toggleVariant, onToggle, 'aria-haspopup': ariaHasPopup, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        isActive, bubbleEvent, onEnter, parentRef, getMenuRef, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        id, type } = _a, props = __rest(_a, ["className", "children", "isOpen", "isDisabled", "isPlain", "isText", "isSplitButton", "toggleVariant", "onToggle", 'aria-haspopup', "isActive", "bubbleEvent", "onEnter", "parentRef", "getMenuRef", "id", "type"]);
        return (React.createElement(DropdownContext.Consumer, null, ({ toggleClass }) => (React.createElement("button", Object.assign({}, props, { id: id, ref: this.buttonRef, className: css(isSplitButton ? styles.dropdownToggleButton : toggleClass || styles.dropdownToggle, isActive && styles.modifiers.active, isPlain && styles.modifiers.plain, isText && styles.modifiers.text, toggleVariant && buttonVariantStyles[toggleVariant], className), type: type || 'button', onClick: (event) => onToggle === null || onToggle === void 0 ? void 0 : onToggle(event, !isOpen), "aria-expanded": isOpen, "aria-haspopup": ariaHasPopup, onKeyDown: (event) => this.onKeyDown(event), disabled: isDisabled }), children))));
    }
}
Toggle.displayName = 'Toggle';
Toggle.defaultProps = {
    className: '',
    isOpen: false,
    isActive: false,
    isDisabled: false,
    isPlain: false,
    isText: false,
    isSplitButton: false,
    onToggle: () => { },
    onEnter: () => { },
    bubbleEvent: false
};
export { Toggle };
//# sourceMappingURL=Toggle.js.map