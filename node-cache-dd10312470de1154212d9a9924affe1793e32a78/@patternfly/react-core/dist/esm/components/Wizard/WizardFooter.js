import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { Button, ButtonVariant } from '../Button';
import { isCustomWizardFooter } from './types';
export const WizardFooterWrapper = ({ children }) => (React.createElement("footer", { className: css(styles.wizardFooter) }, children));
export const WizardFooter = (_a) => {
    var { activeStep } = _a, internalProps = __rest(_a, ["activeStep"]);
    const activeStepFooter = !isCustomWizardFooter(activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer) && (activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer);
    return React.createElement(InternalWizardFooter, Object.assign({}, internalProps, activeStepFooter));
};
const InternalWizardFooter = ({ onNext, onBack, onClose, isNextDisabled, isBackDisabled, isBackHidden, isCancelHidden, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel', nextButtonProps, backButtonProps, cancelButtonProps }) => (React.createElement(WizardFooterWrapper, null,
    !isBackHidden && (React.createElement(Button, Object.assign({ variant: ButtonVariant.secondary, onClick: onBack, isDisabled: isBackDisabled }, backButtonProps), backButtonText)),
    React.createElement(Button, Object.assign({ variant: ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: isNextDisabled }, nextButtonProps), nextButtonText),
    !isCancelHidden && (React.createElement("div", { className: styles.wizardFooterCancel },
        React.createElement(Button, Object.assign({ variant: ButtonVariant.link, onClick: onClose }, cancelButtonProps), cancelButtonText)))));
WizardFooterWrapper.displayName = 'WizardFooterWrapper';
WizardFooter.displayName = 'WizardFooter';
//# sourceMappingURL=WizardFooter.js.map