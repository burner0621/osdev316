import { ConsoleDetailPropType } from './ConsoleDetailPropType';
export declare type onDownloadFunctionType = (fileName: string, content: string, mimeType: string) => void;
/**
 * @param {string} fileName Default vv filename
 * @param {string} content  Content of the file
 * @param {string} mimeType Defaylt vv mimeType
 */
export declare function downloadFile(fileName: string, content: string, mimeType: string): void;
export declare type onGenerateFunctionType = (_console: ConsoleDetailPropType, type: string) => {
    content: string;
    mimeType: string;
};
/**
 * @param {string} _console Object describing the console file content
 * @param {string} type VNC_CONSOLE_TYPE | SPICE_CONSOLE_TYPE
 */
export declare function generateDescriptorFile(_console: ConsoleDetailPropType, type: string): {
    content: string;
    mimeType: string;
};
//# sourceMappingURL=consoleDescriptorGenerator.d.ts.map