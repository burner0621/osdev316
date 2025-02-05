import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Select } from '@patternfly/react-core/dist/esm/deprecated/components/Select';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit.mjs';
import formStyles from '@patternfly/react-styles/css/components/Form/form.mjs';
export const EditableSelectInputCell = ({ value, rowIndex, cellIndex, onSelect = () => { }, clearSelection, isOpen = false, onToggle = () => { }, selections = [''], options = [], props }) => {
    const onSelectHandler = (event, newValue, isPlaceholder) => {
        onSelect(event, newValue, rowIndex, cellIndex, isPlaceholder);
    };
    const onClear = (event) => {
        clearSelection(event, rowIndex, cellIndex);
    };
    const select = (React.createElement(Select, Object.assign({}, props.editableSelectProps, { onSelect: onSelectHandler }, (clearSelection && { onClear }), { isOpen: isOpen, onToggle: onToggle, selections: selections }), options));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: inlineStyles.inlineEditValue }, Array.isArray(value) ? value.join(', ') : value),
        React.createElement("div", { className: inlineStyles.inlineEditInput },
            select,
            React.createElement("div", { className: css(formStyles.formHelperText, formStyles.modifiers.error), "aria-live": "polite" }, props.errorText))));
};
EditableSelectInputCell.displayName = 'EditableSelectInputCell';
//# sourceMappingURL=EditableSelectInputCell.js.map