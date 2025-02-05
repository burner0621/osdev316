"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataList = exports.DataListContext = exports.DataListWrapModifier = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const data_list_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/DataList/data-list"));
const gridBreakpointClasses = {
    none: data_list_1.default.modifiers.gridNone,
    always: 'pf-m-grid',
    sm: data_list_1.default.modifiers.gridSm,
    md: data_list_1.default.modifiers.gridMd,
    lg: data_list_1.default.modifiers.gridLg,
    xl: data_list_1.default.modifiers.gridXl,
    '2xl': data_list_1.default.modifiers.grid_2xl
};
var DataListWrapModifier;
(function (DataListWrapModifier) {
    DataListWrapModifier["nowrap"] = "nowrap";
    DataListWrapModifier["truncate"] = "truncate";
    DataListWrapModifier["breakWord"] = "breakWord";
})(DataListWrapModifier = exports.DataListWrapModifier || (exports.DataListWrapModifier = {}));
exports.DataListContext = React.createContext({
    isSelectable: false
});
class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.getIndex = (id) => Array.from(this.ref.current.children).findIndex((item) => item.id === id);
    }
    render() {
        const _a = this.props, { className, children, 'aria-label': ariaLabel, onSelectDataListItem, selectedDataListItemId, isCompact, wrapModifier, gridBreakpoint, onSelectableRowChange } = _a, props = tslib_1.__rest(_a, ["className", "children", 'aria-label', "onSelectDataListItem", "selectedDataListItemId", "isCompact", "wrapModifier", "gridBreakpoint", "onSelectableRowChange"]);
        const isSelectable = onSelectDataListItem !== undefined;
        const updateSelectedDataListItem = (event, id) => {
            onSelectDataListItem(event, id);
        };
        return (React.createElement(exports.DataListContext.Provider, { value: {
                isSelectable,
                selectedDataListItemId,
                updateSelectedDataListItem,
                onSelectableRowChange
            } },
            React.createElement("ul", Object.assign({ className: (0, react_styles_1.css)(data_list_1.default.dataList, isCompact && data_list_1.default.modifiers.compact, gridBreakpointClasses[gridBreakpoint], wrapModifier && data_list_1.default.modifiers[wrapModifier], className), style: props.style, role: "list", "aria-label": ariaLabel }, props, { ref: this.ref }), children)));
    }
}
exports.DataList = DataList;
DataList.displayName = 'DataList';
DataList.defaultProps = {
    children: null,
    className: '',
    selectedDataListItemId: '',
    isCompact: false,
    gridBreakpoint: 'md',
    wrapModifier: null
};
//# sourceMappingURL=DataList.js.map