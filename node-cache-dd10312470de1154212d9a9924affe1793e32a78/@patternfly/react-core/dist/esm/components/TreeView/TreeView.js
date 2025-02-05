import { __rest } from "tslib";
import * as React from 'react';
import { TreeViewList } from './TreeViewList';
import { TreeViewListItem } from './TreeViewListItem';
import { TreeViewRoot } from './TreeViewRoot';
export const TreeView = (_a) => {
    var { data, isNested = false, hasCheckboxes = false, hasBadges = false, hasGuides = false, hasSelectableNodes = false, variant = 'default', defaultAllExpanded = false, allExpanded, icon, expandedIcon, parentItem, onSelect, onCheck, onExpand, onCollapse, toolbar, activeItems, compareItems = (item, itemToCheck) => item.id === itemToCheck.id, className, useMemo } = _a, props = __rest(_a, ["data", "isNested", "hasCheckboxes", "hasBadges", "hasGuides", "hasSelectableNodes", "variant", "defaultAllExpanded", "allExpanded", "icon", "expandedIcon", "parentItem", "onSelect", "onCheck", "onExpand", "onCollapse", "toolbar", "activeItems", "compareItems", "className", "useMemo"]);
    const treeViewList = (React.createElement(TreeViewList, { isNested: isNested, toolbar: toolbar }, data.map((item) => {
        var _a, _b;
        return (React.createElement(TreeViewListItem, Object.assign({ key: ((_a = item.id) === null || _a === void 0 ? void 0 : _a.toString()) || ((_b = item.name) === null || _b === void 0 ? void 0 : _b.toString()), name: item.name, title: item.title, id: item.id, isExpanded: allExpanded, isSelectable: hasSelectableNodes, defaultExpanded: item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded, onSelect: onSelect, onCheck: onCheck, onExpand: onExpand, onCollapse: onCollapse, hasCheckbox: item.hasCheckbox !== undefined ? item.hasCheckbox : hasCheckboxes, checkProps: item.checkProps, hasBadge: item.hasBadge !== undefined ? item.hasBadge : hasBadges, customBadgeContent: item.customBadgeContent, badgeProps: item.badgeProps, activeItems: activeItems, parentItem: parentItem, itemData: item, icon: item.icon !== undefined ? item.icon : icon, expandedIcon: item.expandedIcon !== undefined ? item.expandedIcon : expandedIcon, action: item.action, compareItems: compareItems, isCompact: variant === 'compact' || variant === 'compactNoBackground', useMemo: useMemo }, (item.children && {
            children: (React.createElement(TreeView, { data: item.children, isNested: true, parentItem: item, hasCheckboxes: hasCheckboxes, hasBadges: hasBadges, hasGuides: hasGuides, hasSelectableNodes: hasSelectableNodes, variant: variant, allExpanded: allExpanded, defaultAllExpanded: defaultAllExpanded, onSelect: onSelect, onCheck: onCheck, onExpand: onExpand, onCollapse: onCollapse, activeItems: activeItems, icon: icon, expandedIcon: expandedIcon }))
        }))));
    })));
    return (React.createElement(React.Fragment, null, parentItem ? (treeViewList) : (React.createElement(TreeViewRoot, Object.assign({ hasSelectableNodes: hasSelectableNodes, hasCheckboxes: hasCheckboxes, hasGuides: hasGuides, variant: variant, className: className }, props), treeViewList))));
};
TreeView.displayName = 'TreeView';
//# sourceMappingURL=TreeView.js.map