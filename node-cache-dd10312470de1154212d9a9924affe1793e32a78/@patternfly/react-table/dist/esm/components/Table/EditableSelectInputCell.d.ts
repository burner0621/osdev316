import * as React from 'react';
import { SelectOptionObject } from '@patternfly/react-core/dist/esm/deprecated/components/Select';
import { EditableSelectInputProps } from './base/types';
export interface IEditableSelectInputCell extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
    /** Row index of this select input cell */
    rowIndex: number;
    /** Cell index of this select input cell */
    cellIndex: number;
    /** Props to build the select component */
    props: EditableSelectInputProps;
    /** Event handler which fires when user selects an option in this cell */
    onSelect: (event: React.MouseEvent | React.ChangeEvent, newValue: string | SelectOptionObject, rowIndex: number, cellIndex: number, isPlaceholder?: boolean) => void;
    /** Options to display in the expandable select menu */
    options?: React.ReactElement[];
    /** Flag indicating the select input is disabled */
    isDisabled?: boolean;
    /** Current selected options to display as the read only value of the table cell */
    selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
    /** Flag indicating the select menu is open */
    isOpen?: boolean;
    /** Event handler which fires when the select toggle is toggled */
    onToggle?: (event: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent | Event, isExpanded: boolean) => void;
    /** Event handler which fires when the user clears the selections */
    clearSelection?: (event: React.MouseEvent, rowIndex: number, cellIndex: number) => void;
}
export declare const EditableSelectInputCell: React.FunctionComponent<IEditableSelectInputCell>;
//# sourceMappingURL=EditableSelectInputCell.d.ts.map