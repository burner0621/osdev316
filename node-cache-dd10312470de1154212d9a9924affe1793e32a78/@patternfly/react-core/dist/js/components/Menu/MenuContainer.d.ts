import React from 'react';
export interface MenuPopperProps {
    /** Vertical direction of the popper. If enableFlip is set to true, this will set the initial direction before the popper flips. */
    direction?: 'up' | 'down';
    /** Horizontal position of the popper */
    position?: 'right' | 'left' | 'center' | 'start' | 'end';
    /** Custom width of the popper. If the value is "trigger", it will set the width to the dropdown toggle's width */
    width?: string | 'trigger';
    /** Minimum width of the popper. If the value is "trigger", it will set the min width to the dropdown toggle's width */
    minWidth?: string | 'trigger';
    /** Maximum width of the popper. If the value is "trigger", it will set the max width to the dropdown toggle's width */
    maxWidth?: string | 'trigger';
    /** Enable to flip the popper when it reaches the boundary */
    enableFlip?: boolean;
    /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
    preventOverflow?: boolean;
}
export interface MenuContainerProps {
    /** Menu to be rendered */
    menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    /** Reference to the menu */
    menuRef: React.RefObject<any>;
    /** Toggle to be rendered */
    toggle: React.ReactNode;
    /** Reference to the toggle */
    toggleRef: React.RefObject<any>;
    /** Flag to indicate if menu is opened.*/
    isOpen: boolean;
    /** Callback to change the open state of the menu.
     * Triggered by clicking outside of the menu, or by pressing any keys specificed in onOpenChangeKeys. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
    onOpenChangeKeys?: string[];
    /** z-index of the dropdown menu */
    zIndex?: number;
    /** Additional properties to pass to the Popper */
    popperProps?: MenuPopperProps;
}
/**
 * Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu.
 * This component is currently in beta and is subject to change.
 */
export declare const MenuContainer: React.FunctionComponent<MenuContainerProps>;
//# sourceMappingURL=MenuContainer.d.ts.map