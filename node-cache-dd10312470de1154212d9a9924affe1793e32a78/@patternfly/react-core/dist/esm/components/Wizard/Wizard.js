import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { isWizardParentStep, isCustomWizardNav, WizardStepChangeScope } from './types';
import { buildSteps, isStepEnabled } from './utils';
import { useWizardContext, WizardContextProvider } from './WizardContext';
import { WizardToggle } from './WizardToggle';
import { WizardNavInternal } from './WizardNavInternal';
export const Wizard = (_a) => {
    var { children, footer, height, width, className, header, nav, navAriaLabel, startIndex = 1, isVisitRequired = false, isProgressive = false, onStepChange, onSave, onClose } = _a, wrapperProps = __rest(_a, ["children", "footer", "height", "width", "className", "header", "nav", "navAriaLabel", "startIndex", "isVisitRequired", "isProgressive", "onStepChange", "onSave", "onClose"]);
    const [activeStepIndex, setActiveStepIndex] = React.useState(startIndex);
    const initialSteps = buildSteps(children);
    const firstStepRef = React.useRef(initialSteps[startIndex - 1]);
    // When the startIndex maps to a parent step, focus on the first sub-step
    React.useEffect(() => {
        if (isWizardParentStep(firstStepRef.current)) {
            setActiveStepIndex(startIndex + 1);
        }
    }, [startIndex]);
    const goToNextStep = (event, steps = initialSteps) => {
        const newStep = steps.find((step) => step.index > activeStepIndex && isStepEnabled(steps, step));
        if (activeStepIndex >= steps.length || !(newStep === null || newStep === void 0 ? void 0 : newStep.index)) {
            return onSave ? onSave(event) : onClose === null || onClose === void 0 ? void 0 : onClose(event);
        }
        setActiveStepIndex(newStep === null || newStep === void 0 ? void 0 : newStep.index);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(event, newStep, steps[activeStepIndex - 1], WizardStepChangeScope.Next);
    };
    const goToPrevStep = (event, steps = initialSteps) => {
        const newStep = [...steps]
            .reverse()
            .find((step) => step.index < activeStepIndex && isStepEnabled(steps, step));
        setActiveStepIndex(newStep === null || newStep === void 0 ? void 0 : newStep.index);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(event, newStep, steps[activeStepIndex - 1], WizardStepChangeScope.Back);
    };
    const goToStepByIndex = (event, steps = initialSteps, index) => {
        const lastStepIndex = steps.length + 1;
        // Handle index when out of bounds or hidden
        if (index < 1) {
            index = 1;
        }
        else if (index > lastStepIndex) {
            index = lastStepIndex;
        }
        const currStep = steps[index - 1];
        const prevStep = steps[activeStepIndex - 1];
        setActiveStepIndex(index);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(event, currStep, prevStep, WizardStepChangeScope.Nav);
    };
    const goToStepById = (steps = initialSteps, id) => {
        const step = steps.find((step) => step.id === id);
        const stepIndex = step === null || step === void 0 ? void 0 : step.index;
        const lastStepIndex = steps.length + 1;
        if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
            setActiveStepIndex(stepIndex);
        }
    };
    const goToStepByName = (steps = initialSteps, name) => {
        const step = steps.find((step) => step.name === name);
        const stepIndex = step === null || step === void 0 ? void 0 : step.index;
        const lastStepIndex = steps.length + 1;
        if (stepIndex > 0 && stepIndex < lastStepIndex && !step.isDisabled && !step.isHidden) {
            setActiveStepIndex(stepIndex);
        }
    };
    return (React.createElement(WizardContextProvider, { steps: initialSteps, activeStepIndex: activeStepIndex, footer: footer, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, goToStepById: goToStepById, goToStepByName: goToStepByName, goToStepByIndex: goToStepByIndex },
        React.createElement("div", Object.assign({ className: css(styles.wizard, className), style: Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {})) }, wrapperProps),
            header,
            React.createElement(WizardInternal, { nav: nav, navAriaLabel: navAriaLabel, isVisitRequired: isVisitRequired, isProgressive: isProgressive }))));
};
const WizardInternal = ({ nav, navAriaLabel, isVisitRequired, isProgressive }) => {
    const { activeStep, steps, footer, goToStepByIndex } = useWizardContext();
    const [isNavExpanded, setIsNavExpanded] = React.useState(false);
    const wizardNav = React.useMemo(() => {
        if (isCustomWizardNav(nav)) {
            return typeof nav === 'function' ? nav(isNavExpanded, steps, activeStep, goToStepByIndex) : nav;
        }
        return (React.createElement(WizardNavInternal, { nav: nav, navAriaLabel: navAriaLabel, isNavExpanded: isNavExpanded, isVisitRequired: isVisitRequired, isProgressive: isProgressive }));
    }, [activeStep, isVisitRequired, isProgressive, goToStepByIndex, isNavExpanded, nav, navAriaLabel, steps]);
    return (React.createElement(WizardToggle, { nav: wizardNav, footer: footer, steps: steps, activeStep: activeStep, isNavExpanded: isNavExpanded, toggleNavExpanded: () => setIsNavExpanded((prevIsExpanded) => !prevIsExpanded) }));
};
Wizard.displayName = 'Wizard';
//# sourceMappingURL=Wizard.js.map