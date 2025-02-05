import { __rest } from "tslib";
import * as React from 'react';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box.mjs';
import { css } from '@patternfly/react-styles';
import { capitalize } from '../../../helpers';
import { Tooltip } from '../../../components/Tooltip';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import { useIsomorphicLayoutEffect } from '../../../helpers';
export const isVariantIcon = (icon) => ['success', 'danger', 'warning', 'info', 'custom'].includes(icon);
export const ModalBoxTitle = (_a) => {
    var { className, id, title, titleIconVariant, titleScreenReaderText } = _a, props = __rest(_a, ["className", "id", "title", "titleIconVariant", "titleScreenReaderText"]);
    const [hasTooltip, setHasTooltip] = React.useState(false);
    const h1 = React.useRef(null);
    const label = titleScreenReaderText ||
        (isVariantIcon(titleIconVariant) ? `${capitalize(titleIconVariant)} alert:` : titleScreenReaderText);
    const variantIcons = {
        success: React.createElement(CheckCircleIcon, null),
        danger: React.createElement(ExclamationCircleIcon, null),
        warning: React.createElement(ExclamationTriangleIcon, null),
        info: React.createElement(InfoCircleIcon, null),
        custom: React.createElement(BellIcon, null)
    };
    const CustomIcon = !isVariantIcon(titleIconVariant) && titleIconVariant;
    useIsomorphicLayoutEffect(() => {
        setHasTooltip(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
    }, []);
    const content = (React.createElement("h1", Object.assign({ id: id, ref: h1, className: css(modalStyles.modalBoxTitle, titleIconVariant && modalStyles.modifiers.icon, className) }, props),
        titleIconVariant && (React.createElement("span", { className: css(modalStyles.modalBoxTitleIcon) }, isVariantIcon(titleIconVariant) ? variantIcons[titleIconVariant] : React.createElement(CustomIcon, null))),
        label && React.createElement("span", { className: "pf-v5-screen-reader" }, label),
        React.createElement("span", { className: css(modalStyles.modalBoxTitleText) }, title)));
    return hasTooltip ? React.createElement(Tooltip, { content: title }, content) : content;
};
ModalBoxTitle.displayName = 'ModalBoxTitle';
//# sourceMappingURL=ModalBoxTitle.js.map