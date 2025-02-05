import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list.mjs';
const gridBreakpointClasses = {
    none: styles.modifiers.gridNone,
    always: 'pf-m-grid',
    sm: styles.modifiers.gridSm,
    md: styles.modifiers.gridMd,
    lg: styles.modifiers.gridLg,
    xl: styles.modifiers.gridXl,
    '2xl': styles.modifiers.grid_2xl
};
export var DataListWrapModifier;
(function (DataListWrapModifier) {
    DataListWrapModifier["nowrap"] = "nowrap";
    DataListWrapModifier["truncate"] = "truncate";
    DataListWrapModifier["breakWord"] = "breakWord";
})(DataListWrapModifier || (DataListWrapModifier = {}));
export const DataListContext = React.createContext({
    isSelectable: false
});
class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.getIndex = (id) => Array.from(this.ref.current.children).findIndex((item) => item.id === id);
    }
    render() {
        const _a = this.props, { className, children, 'aria-label': ariaLabel, onSelectDataListItem, selectedDataListItemId, isCompact, wrapModifier, gridBreakpoint, onSelectableRowChange } = _a, props = __rest(_a, ["className", "children", 'aria-label', "onSelectDataListItem", "selectedDataListItemId", "isCompact", "wrapModifier", "gridBreakpoint", "onSelectableRowChange"]);
        const isSelectable = onSelectDataListItem !== undefined;
        const updateSelectedDataListItem = (event, id) => {
            onSelectDataListItem(event, id);
        };
        return (React.createElement(DataListContext.Provider, { value: {
                isSelectable,
                selectedDataListItemId,
                updateSelectedDataListItem,
                onSelectableRowChange
            } },
            React.createElement("ul", Object.assign({ className: css(styles.dataList, isCompact && styles.modifiers.compact, gridBreakpointClasses[gridBreakpoint], wrapModifier && styles.modifiers[wrapModifier], className), style: props.style, role: "list", "aria-label": ariaLabel }, props, { ref: this.ref }), children)));
    }
}
DataList.displayName = 'DataList';
DataList.defaultProps = {
    children: null,
    className: '',
    selectedDataListItemId: '',
    isCompact: false,
    gridBreakpoint: 'md',
    wrapModifier: null
};
export { DataList };
//# sourceMappingURL=DataList.js.map