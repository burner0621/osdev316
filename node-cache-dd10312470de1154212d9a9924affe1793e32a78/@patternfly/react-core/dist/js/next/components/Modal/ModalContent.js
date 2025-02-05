"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const helpers_1 = require("../../../helpers");
const bullseye_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/layouts/Bullseye/bullseye"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_2 = require("../../../helpers");
const Backdrop_1 = require("../../../components/Backdrop");
const ModalBoxCloseButton_1 = require("./ModalBoxCloseButton");
const ModalBox_1 = require("./ModalBox");
const ModalContent = (_a) => {
    var { children, className, isOpen = false, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby, onClose, variant = 'default', position, positionOffset, width, maxWidth, boxId, disableFocusTrap = false, ouiaId, ouiaSafe = true, elementToFocus } = _a, props = tslib_1.__rest(_a, ["children", "className", "isOpen", 'aria-label', 'aria-describedby', 'aria-labelledby', "onClose", "variant", "position", "positionOffset", "width", "maxWidth", "boxId", "disableFocusTrap", "ouiaId", "ouiaSafe", "elementToFocus"]);
    if (!isOpen) {
        return null;
    }
    const ariaLabelledbyFormatted = () => {
        const idRefList = [];
        if (ariaLabel && boxId) {
            idRefList.push(ariaLabel && boxId);
        }
        if (ariaLabelledby) {
            idRefList.push(ariaLabelledby);
        }
        if (idRefList.length === 0) {
            return undefined;
        }
        else {
            return idRefList.join(' ');
        }
    };
    const modalBox = (React.createElement(ModalBox_1.ModalBox, Object.assign({ className: (0, react_styles_1.css)(className), variant: variant, position: position, positionOffset: positionOffset, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledbyFormatted(), "aria-describedby": ariaDescribedby }, (0, helpers_2.getOUIAProps)(exports.ModalContent.displayName, ouiaId, ouiaSafe), { style: Object.assign(Object.assign({}, (width && { '--pf-v5-c-modal-box--Width': typeof width !== 'number' ? width : `${width}px` })), (maxWidth && {
            '--pf-v5-c-modal-box--MaxWidth': typeof maxWidth !== 'number' ? maxWidth : `${maxWidth}px`
        })) }, props, { id: boxId }),
        onClose && React.createElement(ModalBoxCloseButton_1.ModalBoxCloseButton, { onClose: (event) => onClose(event), ouiaId: ouiaId }),
        children));
    return (React.createElement(Backdrop_1.Backdrop, null,
        React.createElement(helpers_1.FocusTrap, { active: !disableFocusTrap, focusTrapOptions: {
                clickOutsideDeactivates: true,
                tabbableOptions: { displayCheck: 'none' },
                // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
                // We want to prevent this in case false is ever passed in.
                initialFocus: elementToFocus || undefined
            }, className: (0, react_styles_1.css)(bullseye_1.default.bullseye) }, modalBox)));
};
exports.ModalContent = ModalContent;
exports.ModalContent.displayName = 'ModalContent';
//# sourceMappingURL=ModalContent.js.map