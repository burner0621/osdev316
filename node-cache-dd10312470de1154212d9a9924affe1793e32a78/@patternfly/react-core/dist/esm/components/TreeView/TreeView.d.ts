import * as React from 'react';
import { TreeViewCheckProps } from './TreeViewListItem';
/** Properties that make up a tree view data item. These properties should be passed in as an
 * object to one of the various tree view component properties which accept TreeViewDataItem as
 * a type.
 */
export interface TreeViewDataItem {
    /** Action of a tree view item, which can be either a button or dropdown component. */
    action?: React.ReactNode;
    /** Additional properties of the tree view item badge. */
    badgeProps?: any;
    /** Additional properties of the tree view item checkbox. */
    checkProps?: TreeViewCheckProps;
    /** Child nodes of a tree view item. */
    children?: TreeViewDataItem[];
    /** Optional prop for a custom badge. */
    customBadgeContent?: React.ReactNode;
    /** Flag indicating if node is expanded by default. */
    defaultExpanded?: boolean;
    /** Expanded icon of a tree view item. */
    expandedIcon?: React.ReactNode;
    /** Flag indicating if a tree view item has a badge. */
    hasBadge?: boolean;
    /** Flag indicating if a tree view item has a checkbox. */
    hasCheckbox?: boolean;
    /** Default icon of a tree view item. */
    icon?: React.ReactNode;
    /** ID of a tree view item. */
    id?: string;
    /** Internal content of a tree view item. */
    name: React.ReactNode;
    /** Title of a tree view item. Only used in compact presentations. */
    title?: React.ReactNode;
}
/** The main tree view component. */
export interface TreeViewProps {
    /** Active items of tree view. */
    activeItems?: TreeViewDataItem[];
    /** Sets the expanded state on all tree nodes, overriding default behavior and current
     * internal state.
     */
    allExpanded?: boolean;
    /** Class to add if not passed a parentItem property. */
    className?: string;
    /** Comparison function for determining active items. */
    compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
    /** Data of the tree view. */
    data: TreeViewDataItem[];
    /** Sets the default expanded behavior. */
    defaultAllExpanded?: boolean;
    /** Icon for all expanded node items. */
    expandedIcon?: React.ReactNode;
    /** Flag indicating if all nodes in the tree view should have badges. */
    hasBadges?: boolean;
    /** Flag indicating if all nodes in the tree view should have checkboxes. */
    hasCheckboxes?: boolean;
    /** Flag indicating if the tree view has guide lines. */
    hasGuides?: boolean;
    /** Flag indicating if the tree view is nested. */
    isNested?: boolean;
    /** Flag indicating that tree nodes should be independently selectable, even when having
     * children.
     */
    hasSelectableNodes?: boolean;
    /** Icon for all leaf or unexpanded node items. */
    icon?: React.ReactNode;
    /** ID of the tree view. */
    id?: string;
    /** Callback for item checkbox selection. */
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
    /** Callback for item selection. */
    onSelect?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
    /** Callback for expanding a node with children. */
    onExpand?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
    /** Callback for collapsing a node with children. */
    onCollapse?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
    /** Internal. Parent item of a tree view list item. */
    parentItem?: TreeViewDataItem;
    /** Toolbar to display above the tree view. */
    toolbar?: React.ReactNode;
    /** Flag indicating the tree view should utilize memoization to help render large data sets.
     * Setting this property requires that the activeItems property is passed an array containing
     * every node in the selected item's path.
     */
    useMemo?: boolean;
    /** Variant presentation styles for the tree view. */
    variant?: 'default' | 'compact' | 'compactNoBackground';
}
export declare const TreeView: React.FunctionComponent<TreeViewProps>;
//# sourceMappingURL=TreeView.d.ts.map