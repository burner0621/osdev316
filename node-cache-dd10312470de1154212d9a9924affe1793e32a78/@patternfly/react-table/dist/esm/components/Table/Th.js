import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable.mjs';
import { info, sortable, sortableFavorites, selectable, collapsible, cellWidth, Visibility, classNames } from './utils';
import { mergeProps } from './base/merge-props';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';
import cssStickyCellMinWidth from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_MinWidth';
import cssStickyCellLeft from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_Left';
import cssStickyCellRight from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_Right';
const ThBase = (_a) => {
    var { children, className, component = 'th', dataLabel, scope = 'col', textCenter = false, sort = null, modifier, select = null, expand: collapse = null, tooltip = '', tooltipProps, onMouseEnter: onMouseEnterProp = () => { }, width, visibility, innerRef, info: infoProps, isStickyColumn = false, hasRightBorder = false, hasLeftBorder = false, stickyMinWidth = '120px', stickyLeftOffset, stickyRightOffset, isSubheader = false, screenReaderText, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["children", "className", "component", "dataLabel", "scope", "textCenter", "sort", "modifier", "select", "expand", "tooltip", "tooltipProps", "onMouseEnter", "width", "visibility", "innerRef", "info", "isStickyColumn", "hasRightBorder", "hasLeftBorder", "stickyMinWidth", "stickyLeftOffset", "stickyRightOffset", "isSubheader", "screenReaderText", 'aria-label']);
    if (!children && !screenReaderText && !ariaLabel) {
        // eslint-disable-next-line no-console
        console.warn('Th: Table headers must have an accessible name. If the Th is intended to be visually empty, pass in screenReaderText. If the Th contains only non-text, interactive content such as a checkbox or expand toggle, pass in an aria-label.');
    }
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [truncated, setTruncated] = React.useState(false);
    const cellRef = innerRef ? innerRef : React.createRef();
    const onMouseEnter = (event) => {
        if (event.target.offsetWidth < event.target.scrollWidth) {
            !showTooltip && setShowTooltip(true);
        }
        else {
            showTooltip && setShowTooltip(false);
        }
        onMouseEnterProp(event);
    };
    let sortParams = null;
    if (sort) {
        if (sort.isFavorites) {
            sortParams = sortableFavorites({
                onSort: sort === null || sort === void 0 ? void 0 : sort.onSort,
                columnIndex: sort.columnIndex,
                sortBy: sort.sortBy,
                tooltip: tooltip,
                tooltipProps
            })();
        }
        else {
            sortParams = sortable(children, {
                columnIndex: sort.columnIndex,
                column: {
                    extraParams: {
                        sortBy: sort.sortBy,
                        onSort: sort === null || sort === void 0 ? void 0 : sort.onSort
                    }
                },
                tooltip: tooltip,
                tooltipProps
            });
        }
    }
    const selectParams = select
        ? selectable(children, {
            rowData: {
                selected: select.isSelected,
                disableSelection: select === null || select === void 0 ? void 0 : select.isDisabled,
                props: select === null || select === void 0 ? void 0 : select.props
            },
            column: {
                extraParams: {
                    onSelect: select === null || select === void 0 ? void 0 : select.onSelect,
                    selectVariant: 'checkbox',
                    allRowsSelected: select.isSelected,
                    isHeaderSelectDisabled: !!select.isHeaderSelectDisabled
                }
            },
            tooltip: tooltip,
            tooltipProps
        })
        : null;
    const collapseParams = collapse
        ? collapsible(children, {
            column: {
                extraParams: {
                    onCollapse: collapse === null || collapse === void 0 ? void 0 : collapse.onToggle,
                    allRowsExpanded: !collapse.areAllExpanded,
                    collapseAllAriaLabel: ''
                }
            }
        })
        : null;
    const widthParams = width ? cellWidth(width)() : null;
    const visibilityParams = visibility
        ? classNames(...visibility.map((vis) => Visibility[vis]))()
        : null;
    let transformedChildren = (sortParams === null || sortParams === void 0 ? void 0 : sortParams.children) || (selectParams === null || selectParams === void 0 ? void 0 : selectParams.children) || (collapseParams === null || collapseParams === void 0 ? void 0 : collapseParams.children) || children;
    // info can wrap other transformedChildren
    let infoParams = null;
    if (infoProps) {
        infoParams = info(infoProps)(transformedChildren);
        transformedChildren = infoParams.children;
    }
    const merged = mergeProps(sortParams, selectParams, collapseParams, widthParams, visibilityParams, infoParams);
    const { 
    // ignore the merged children since we transform them ourselves so we can wrap it with info
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: mergedChildren = null, 
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null, className: mergedClassName = '', component: MergedComponent = component } = merged, mergedProps = __rest(merged, ["children", "isVisible", "className", "component"]);
    React.useEffect(() => {
        setTruncated(cellRef.current.offsetWidth <
            cellRef.current.scrollWidth);
    }, [cellRef]);
    const cell = (React.createElement(MergedComponent, Object.assign({ tabIndex: sort || select || !truncated ? -1 : 0, onFocus: tooltip !== null ? onMouseEnter : onMouseEnterProp, onBlur: () => setShowTooltip(false), "data-label": dataLabel, onMouseEnter: tooltip !== null ? onMouseEnter : onMouseEnterProp, scope: component === 'th' ? scope : null, ref: cellRef, "aria-label": ariaLabel, className: css(styles.tableTh, className, textCenter && styles.modifiers.center, isSubheader && styles.tableSubhead, isStickyColumn && scrollStyles.tableStickyCell, hasRightBorder && scrollStyles.modifiers.borderRight, hasLeftBorder && scrollStyles.modifiers.borderLeft, modifier && styles.modifiers[modifier], mergedClassName) }, mergedProps, props, (isStickyColumn && {
        style: Object.assign({ [cssStickyCellMinWidth.name]: stickyMinWidth ? stickyMinWidth : undefined, [cssStickyCellLeft.name]: stickyLeftOffset ? stickyLeftOffset : 0, [cssStickyCellRight.name]: stickyRightOffset ? stickyRightOffset : 0 }, props.style)
    })), transformedChildren || (screenReaderText && React.createElement("span", { className: "pf-v5-screen-reader" }, screenReaderText))));
    const canMakeDefaultTooltip = tooltip === '' ? typeof transformedChildren === 'string' : true;
    const childControlsTooltip = sortParams || selectParams;
    return tooltip !== null && canMakeDefaultTooltip && !childControlsTooltip && showTooltip ? (React.createElement(React.Fragment, null,
        cell,
        React.createElement(Tooltip, Object.assign({ triggerRef: cellRef, content: tooltip || (tooltip === '' && children), isVisible: true }, tooltipProps)))) : (cell);
};
export const Th = React.forwardRef((props, ref) => (React.createElement(ThBase, Object.assign({}, props, { innerRef: ref }))));
Th.displayName = 'Th';
//# sourceMappingURL=Th.js.map