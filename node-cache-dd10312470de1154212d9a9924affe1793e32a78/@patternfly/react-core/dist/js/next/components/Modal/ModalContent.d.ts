import * as React from 'react';
import { OUIAProps } from '../../../helpers';
export interface ModalContentProps extends OUIAProps {
    /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId. */
    'aria-describedby'?: string;
    /** Accessible descriptor of the modal. */
    'aria-label'?: string;
    /** Id to use for the modal box label. This should include the ModalHeader labelId. */
    'aria-labelledby'?: string;
    /** Id of the modal box container. */
    boxId: string;
    /** Content rendered inside the modal. */
    children: React.ReactNode;
    /** Additional classes added to the modal box. */
    className?: string;
    /** Flag to disable focus trap. */
    disableFocusTrap?: boolean;
    /** The element to focus when the modal opens. By default the first
     * focusable element will receive focus.
     */
    elementToFocus?: HTMLElement | SVGElement | string;
    /** Flag to show the modal. */
    isOpen?: boolean;
    /** A callback for when the close button is clicked. */
    onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
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
export declare const ModalContent: React.FunctionComponent<ModalContentProps>;
//# sourceMappingURL=ModalContent.d.ts.map