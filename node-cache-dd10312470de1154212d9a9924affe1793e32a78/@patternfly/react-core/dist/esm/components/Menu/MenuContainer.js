import React from 'react';
import { Popper } from '../../helpers/Popper/Popper';
/**
 * Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu.
 * This component is currently in beta and is subject to change.
 */
export const MenuContainer = ({ menu, menuRef, isOpen, toggle, toggleRef, onOpenChange, zIndex = 9999, popperProps, onOpenChangeKeys = ['Escape', 'Tab'] }) => {
    React.useEffect(() => {
        const handleMenuKeys = (event) => {
            var _a, _b, _c;
            // Close the menu on tab or escape if onOpenChange is provided
            if ((isOpen && onOpenChange && ((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) ||
                ((_b = toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                if (onOpenChangeKeys.includes(event.key)) {
                    onOpenChange(false);
                    (_c = toggleRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                }
            }
        };
        const handleClick = (event) => {
            var _a, _b, _c;
            // toggle was opened, focus on first menu item
            if (isOpen && ((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setTimeout(() => {
                    var _a;
                    const firstElement = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');
                    firstElement && firstElement.focus();
                }, 0);
            }
            // If the event is not on the toggle and onOpenChange callback is provided, close the menu
            if (isOpen && onOpenChange && !((_b = toggleRef === null || toggleRef === void 0 ? void 0 : toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                if (isOpen && !((_c = menuRef.current) === null || _c === void 0 ? void 0 : _c.contains(event.target))) {
                    onOpenChange(false);
                }
            }
        };
        window.addEventListener('keydown', handleMenuKeys);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('keydown', handleMenuKeys);
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, menuRef, onOpenChange, onOpenChangeKeys, toggleRef]);
    return (React.createElement(Popper, Object.assign({ trigger: toggle, triggerRef: toggleRef, popper: menu, popperRef: menuRef, isVisible: isOpen, zIndex: zIndex }, popperProps)));
};
MenuContainer.displayName = 'MenuContainer';
//# sourceMappingURL=MenuContainer.js.map