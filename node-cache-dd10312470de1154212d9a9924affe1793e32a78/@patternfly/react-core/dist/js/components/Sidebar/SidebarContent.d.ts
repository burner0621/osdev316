import * as React from 'react';
export interface SidebarContentProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    /** Removes the background color. */
    hasNoBackground?: boolean;
    /** Adds padding to the content. */
    hasPadding?: boolean;
}
export declare const SidebarContent: React.FunctionComponent<SidebarContentProps>;
//# sourceMappingURL=SidebarContent.d.ts.map