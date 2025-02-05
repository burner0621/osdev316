"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataListItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const data_list_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/DataList/data-list"));
const DataList_1 = require("./DataList");
const constants_1 = require("../../helpers/constants");
class DataListItem extends React.Component {
    render() {
        const _a = this.props, { children, isExpanded, className, id, 'aria-labelledby': ariaLabelledBy, selectableInputAriaLabel } = _a, props = tslib_1.__rest(_a, ["children", "isExpanded", "className", "id", 'aria-labelledby', "selectableInputAriaLabel"]);
        return (React.createElement(DataList_1.DataListContext.Consumer, null, ({ isSelectable, selectedDataListItemId, updateSelectedDataListItem, onSelectableRowChange }) => {
            const selectDataListItem = (event) => {
                let target = event.target;
                while (event.currentTarget !== target) {
                    if (('onclick' in target && target.onclick) ||
                        target.parentNode.classList.contains(data_list_1.default.dataListItemAction) ||
                        target.parentNode.classList.contains(data_list_1.default.dataListItemControl)) {
                        // check other event handlers are not present.
                        return;
                    }
                    else {
                        target = target.parentNode;
                    }
                }
                updateSelectedDataListItem(event, id);
            };
            const onKeyDown = (event) => {
                if ([constants_1.KeyTypes.Enter, constants_1.KeyTypes.Space].includes(event.key)) {
                    event.preventDefault();
                    updateSelectedDataListItem(event, id);
                }
            };
            const isSelected = selectedDataListItemId === id;
            const selectableInputAriaProps = selectableInputAriaLabel
                ? { 'aria-label': selectableInputAriaLabel }
                : { 'aria-labelledby': ariaLabelledBy };
            return (React.createElement("li", Object.assign({ id: id, className: (0, react_styles_1.css)(data_list_1.default.dataListItem, isExpanded && data_list_1.default.modifiers.expanded, isSelectable && data_list_1.default.modifiers.clickable, selectedDataListItemId && isSelected && data_list_1.default.modifiers.selected, className), "aria-labelledby": ariaLabelledBy }, (isSelectable && { tabIndex: 0, onClick: selectDataListItem, onKeyDown }), (isSelectable && isSelected && { 'aria-selected': true }), props),
                onSelectableRowChange && (React.createElement("input", Object.assign({ className: "pf-v5-screen-reader", type: "radio", checked: isSelected, onChange: (event) => onSelectableRowChange(event, id), tabIndex: -1 }, selectableInputAriaProps))),
                React.Children.map(children, (child) => React.isValidElement(child) &&
                    React.cloneElement(child, {
                        rowid: ariaLabelledBy
                    }))));
        }));
    }
}
exports.DataListItem = DataListItem;
DataListItem.displayName = 'DataListItem';
DataListItem.defaultProps = {
    isExpanded: false,
    className: '',
    id: '',
    children: null,
    'aria-labelledby': ''
};
//# sourceMappingURL=DataListItem.js.map