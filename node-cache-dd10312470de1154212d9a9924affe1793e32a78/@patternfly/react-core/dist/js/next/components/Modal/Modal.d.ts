import * as React from 'react';
import { PickOptional } from '../../../helpers';
import { OUIAProps } from '../../../helpers';
export interface ModalProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
    /** The parent container to append the modal to. Defaults to "document.body". */
    appendTo?: HTMLElement | (() => HTMLElement);
    /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId. */
    'aria-describedby'?: string;
    /**   Adds an accessible name to the modal when there is no title in the ModalHeader. */
    'aria-label'?: string;
    /** Id to use for the modal box label. This should include the ModalHeader labelId. */
    'aria-labelledby'?: string;
    /** Content rendered inside the modal. */
    children: React.ReactNode;
    /** Additional classes added to the modal. */
    className?: string;
    /** Flag to disable focus trap. */
    disableFocusTrap?: boolean;
    /** The element to focus when the modal opens. By default the first
     * focusable element will receive focus.
     */
    elementToFocus?: HTMLElement | SVGElement | string;
    /** An id to use for the modal box container. */
    id?: string;
    /** Flag to show the modal. */
    isOpen?: boolean;
    /** Add callback for when the close button is clicked. This prop needs to be passed to render the close button */
    onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
    /** Modal handles pressing of the escape key and closes the modal. If you want to handle
     * this yourself you can use this callback function. */
    onEscapePress?: (event: KeyboardEvent) => void;
    /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
    position?: 'default' | 'top';
    /** Offset from alternate position. Can be any valid CSS length/percentage. */
    positionOffset?: string;
    /** Variant of the modal. */
    variant?: 'small' | 'medium' | 'large' | 'default';
    /** Default width of the modal. */
    width?: number | string;
    /** Maximum width of the modal. */
    maxWidth?: number | string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare enum ModalVariant {
    small = "small",
    medium = "medium",
    large = "large",
    default = "default"
}
interface ModalState {
    container: HTMLElement;
    ouiaStateId: string;
}
declare class Modal extends React.Component<ModalProps, ModalState> {
    static displayName: string;
    static currentId: number;
    boxId: string;
    static defaultProps: PickOptional<ModalProps>;
    constructor(props: ModalProps);
    handleEscKeyClick: (event: KeyboardEvent) => void;
    getElement: (appendTo: HTMLElement | (() => HTMLElement)) => HTMLElement;
    toggleSiblingsFromScreenReaders: (hide: boolean) => void;
    isEmpty: (value: string | null | undefined) => boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export { Modal };
//# sourceMappingURL=Modal.d.ts.map