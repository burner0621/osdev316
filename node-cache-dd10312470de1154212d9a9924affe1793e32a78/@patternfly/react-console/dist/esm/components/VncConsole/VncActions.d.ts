import React from 'react';
export interface VncActionProps {
    onDisconnect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onCtrlAltDel: () => void;
    textCtrlAltDel?: string;
    textSendShortcut?: string;
    textDisconnect?: string;
    /** VNC console additional action elements */
    additionalButtons?: React.ReactNode[];
}
export declare const VncActions: React.FunctionComponent<VncActionProps>;
//# sourceMappingURL=VncActions.d.ts.map