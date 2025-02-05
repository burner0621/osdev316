import React from 'react';
import '@patternfly/react-styles/css/components/Consoles/AccessConsoles.css';
export interface AccessConsolesProps {
    /**
     * Child element can be either
     *   - <SerialConsole>, <VncConsole> or <DesktopViewer>
     *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
     */
    children?: React.ReactElement[] | React.ReactNode;
    /** Placeholder text for the console selection */
    textSelectConsoleType?: string;
    /** The value for the Serial Console option. This can be overriden by the type property of the child component */
    textSerialConsole?: string;
    /** The value for the VNC Console option. This can be overriden by the type property of the child component */
    textVncConsole?: string;
    /** The value for the Desktop Viewer Console option. This can be overriden by the type property of the child component */
    textDesktopViewerConsole?: string;
    /** Initial selection of the Select */
    preselectedType?: string;
}
export declare const AccessConsoles: React.FunctionComponent<AccessConsolesProps>;
//# sourceMappingURL=AccessConsoles.d.ts.map