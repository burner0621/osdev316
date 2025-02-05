import React from 'react';
export interface XTermProps {
    /** The number of columns to resize to */
    cols?: number;
    /** The number of rows to resize to */
    rows?: number;
    fontFamily?: string;
    fontSize?: number;
    /** Terminal title has been changed. */
    onTitleChanged?: (title: string) => void;
    /** Data to be sent from terminal to backend; (data) => {} */
    onData?: (e: string) => void;
    /** A reference object to attach to the xterm */
    innerRef?: React.RefObject<any>;
}
export declare const XTerm: React.FunctionComponent<XTermProps>;
//# sourceMappingURL=XTerm.d.ts.map