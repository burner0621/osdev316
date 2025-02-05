import React from 'react';
import { MenuItemProps } from '../Menu';
import { TooltipProps } from '../Tooltip';
import { OUIAProps } from '../../helpers';
/**
 * See the MenuItem section of the Menu documentation for additional props that may be passed.
 */
export interface DropdownItemProps extends Omit<MenuItemProps, 'ref'>, OUIAProps {
    /** Anything which can be rendered in a dropdown item */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown item */
    className?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
    /** Description of the dropdown item */
    description?: React.ReactNode;
    /** Render item as disabled option */
    isDisabled?: boolean;
    /** Render item as aria-disabled option */
    isAriaDisabled?: boolean;
    /** Identifies the component in the dropdown onSelect callback */
    value?: any;
    /** Callback for item click */
    onClick?: (event?: any) => void;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
    /** Props for adding a tooltip to a menu item */
    tooltipProps?: TooltipProps;
}
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
//# sourceMappingURL=DropdownItem.d.ts.map