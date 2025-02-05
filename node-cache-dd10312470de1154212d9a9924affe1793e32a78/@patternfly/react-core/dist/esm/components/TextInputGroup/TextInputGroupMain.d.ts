import * as React from 'react';
export interface TextInputGroupMainProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    /** Content rendered inside the text input group main div */
    children?: React.ReactNode;
    /** Additional classes applied to the text input group main container */
    className?: string;
    /** Icon to be shown on the left side of the text input group main container */
    icon?: React.ReactNode;
    /** Type that the input accepts. */
    type?: 'text' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';
    /** Suggestion that will show up like a placeholder even with text in the input */
    hint?: string;
    /** Callback for when there is a change in the input field*/
    onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
    /** Callback for when the input field is focused*/
    onFocus?: (event?: any) => void;
    /** Callback for when focus is lost on the input field*/
    onBlur?: (event?: any) => void;
    /** Accessibility label for the input */
    'aria-label'?: string;
    /** Value for the input */
    value?: string | number;
    /** Placeholder value for the input */
    placeholder?: string;
    /** @hide A reference object to attach to the input box */
    innerRef?: React.RefObject<any>;
    /** Name for the input */
    name?: string;
    /** @beta The id of the active element. Required if role has a value of "combobox", and focus
     * should remain on the input.
     */
    'aria-activedescendant'?: string;
    /** @beta Determines the accessible role of the input. */
    role?: string;
    /** @beta Flag for whether an associated element controlled by the input is visible. Required if
     * role has a value of "combobox".
     */
    isExpanded?: boolean;
    /** @beta The id of the element(s) controlled by the input. Required if role has a value of "combobox". */
    'aria-controls'?: string;
    /** The id of the input element */
    inputId?: string;
}
export declare const TextInputGroupMain: React.ForwardRefExoticComponent<Omit<TextInputGroupMainProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextInputGroupMain.d.ts.map