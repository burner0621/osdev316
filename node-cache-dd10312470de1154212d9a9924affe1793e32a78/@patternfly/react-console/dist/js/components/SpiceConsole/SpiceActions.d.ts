import React from 'react';
export interface SpiceActionsProps extends React.HTMLProps<HTMLDivElement> {
    /** Callback for when Ctrl+Alt+Delete item is selected */
    onCtrlAltDel?: () => void;
    /** Text for the Dropdown Ctrl+Alt+Delety item */
    textCtrlAltDel?: string;
    /** Text for the Dropdown toggle button */
    textSendShortcut?: string;
}
export declare const SpiceActions: React.FunctionComponent<SpiceActionsProps>;
//# sourceMappingURL=SpiceActions.d.ts.map