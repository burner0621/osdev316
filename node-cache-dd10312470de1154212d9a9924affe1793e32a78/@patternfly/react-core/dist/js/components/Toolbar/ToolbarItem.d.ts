import * as React from 'react';
export declare enum ToolbarItemVariant {
    separator = "separator",
    'bulk-select' = "bulk-select",
    'overflow-menu' = "overflow-menu",
    pagination = "pagination",
    'search-filter' = "search-filter",
    label = "label",
    'chip-group' = "chip-group",
    'expand-all' = "expand-all"
}
export interface ToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes applied to root element of the data toolbar item */
    className?: string;
    /** A type modifier which modifies spacing specifically depending on the type of item */
    variant?: ToolbarItemVariant | 'bulk-select' | 'overflow-menu' | 'pagination' | 'search-filter' | 'label' | 'chip-group' | 'separator' | 'expand-all';
    /** Visibility at various breakpoints. */
    visibility?: {
        default?: 'hidden' | 'visible';
        md?: 'hidden' | 'visible';
        lg?: 'hidden' | 'visible';
        xl?: 'hidden' | 'visible';
        '2xl'?: 'hidden' | 'visible';
    };
    /** Applies to a child of a flex layout, and aligns that child (and any adjacent children on the other side of it) to one side of the main axis */
    align?: {
        default?: 'alignRight' | 'alignLeft';
        md?: 'alignRight' | 'alignLeft';
        lg?: 'alignRight' | 'alignLeft';
        xl?: 'alignRight' | 'alignLeft';
        '2xl'?: 'alignRight' | 'alignLeft';
    };
    /** Vertical alignment of children */
    alignItems?: 'start' | 'center' | 'baseline' | 'default';
    /** Vertical alignment */
    alignSelf?: 'start' | 'center' | 'baseline' | 'default';
    /** Spacers at various breakpoints. */
    spacer?: {
        default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
        md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
        lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
        xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
        '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    };
    /** Widths at various breakpoints. */
    widths?: {
        default?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        '2xl'?: string;
    };
    /** id for this data toolbar item */
    id?: string;
    /** Flag indicating if the expand-all variant is expanded or not */
    isAllExpanded?: boolean;
    /** Flag that modifies the toolbar item to hide overflow and respond to available space. Used for horizontal navigation. */
    isOverflowContainer?: boolean;
    /** Content to be rendered inside the data toolbar item */
    children?: React.ReactNode;
}
export declare const ToolbarItem: React.FunctionComponent<ToolbarItemProps>;
//# sourceMappingURL=ToolbarItem.d.ts.map