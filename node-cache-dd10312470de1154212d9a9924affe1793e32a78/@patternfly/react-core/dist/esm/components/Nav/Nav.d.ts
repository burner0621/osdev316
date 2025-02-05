import * as React from 'react';
import { OUIAProps } from '../../helpers';
export declare type NavSelectClickHandler = (event: React.FormEvent<HTMLInputElement>, itemId: number | string, groupId: number | string, to: string) => void;
export interface NavProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'onSelect'>, OUIAProps {
    /** Anything that can be rendered inside of the nav */
    children?: React.ReactNode;
    /** Additional classes added to the container */
    className?: string;
    /** Callback for updating when item selection changes */
    onSelect?: (event: React.FormEvent<HTMLInputElement>, selectedItem: {
        groupId: number | string;
        itemId: number | string;
        to: string;
    }) => void;
    /** Callback for when a list is expanded or collapsed */
    onToggle?: (event: React.MouseEvent<HTMLButtonElement>, toggledItem: {
        groupId: number | string;
        isExpanded: boolean;
    }) => void;
    /** Accessible label for the nav when there are multiple navs on the page */
    'aria-label'?: string;
    /** Indicates which theme color to use */
    theme?: 'dark' | 'light';
    /** For horizontal navs */
    variant?: 'default' | 'horizontal' | 'tertiary' | 'horizontal-subnav';
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export interface NavContextProps {
    onSelect?: (event: React.FormEvent<HTMLInputElement>, groupId: number | string, itemId: number | string, to: string, preventDefault: boolean, onClick: NavSelectClickHandler) => void;
    onToggle?: (event: React.MouseEvent<HTMLButtonElement>, groupId: number | string, expanded: boolean) => void;
    updateIsScrollable?: (isScrollable: boolean) => void;
    isHorizontal?: boolean;
    flyoutRef?: React.Ref<HTMLLIElement>;
    setFlyoutRef?: (ref: React.Ref<HTMLLIElement>) => void;
    navRef?: React.RefObject<HTMLElement>;
}
export declare const navContextDefaults: {};
export declare const NavContext: React.Context<NavContextProps>;
declare class Nav extends React.Component<NavProps, {
    isScrollable: boolean;
    ouiaStateId: string;
    flyoutRef: React.Ref<HTMLLIElement> | null;
}> {
    static displayName: string;
    static defaultProps: NavProps;
    state: {
        isScrollable: boolean;
        ouiaStateId: string;
        flyoutRef: React.Ref<HTMLLIElement>;
    };
    navRef: React.RefObject<HTMLElement>;
    onSelect(event: React.FormEvent<HTMLInputElement>, groupId: number | string, itemId: number | string, to: string, preventDefault: boolean, onClick: NavSelectClickHandler): void;
    onToggle(event: React.MouseEvent<HTMLButtonElement>, groupId: number | string, toggleValue: boolean): void;
    render(): React.JSX.Element;
}
export { Nav };
//# sourceMappingURL=Nav.d.ts.map