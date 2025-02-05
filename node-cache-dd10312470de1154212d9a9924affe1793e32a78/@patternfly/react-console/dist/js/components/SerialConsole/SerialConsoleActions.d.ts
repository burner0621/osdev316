import React from 'react';
export interface SerialConsoleActionsProps extends React.HTMLProps<HTMLDivElement> {
    onDisconnect: () => void;
    onReset: () => void;
    textDisconnect?: string;
    textReset?: string;
}
export declare const SerialConsoleActions: React.FunctionComponent<SerialConsoleActionsProps>;
//# sourceMappingURL=SerialConsoleActions.d.ts.map