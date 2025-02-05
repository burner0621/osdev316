"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStepEnabled = exports.normalizeStepProps = exports.isWizardStep = exports.buildSteps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("./types");
const WizardStep_1 = require("./WizardStep");
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardStepType[]
 */
const buildSteps = (children) => react_1.default.Children.toArray(children).reduce((acc, child, index) => {
    if (isWizardStep(child)) {
        const { props: childProps } = child;
        const { steps: childStepComponents, id } = childProps;
        const stepIndex = acc.length + 1;
        const subSteps = [];
        acc.push(Object.assign(Object.assign(Object.assign({ index: stepIndex, component: child }, (index === 0 && !(childStepComponents === null || childStepComponents === void 0 ? void 0 : childStepComponents.length) && { isVisited: true })), (childStepComponents && {
            subStepIds: childStepComponents === null || childStepComponents === void 0 ? void 0 : childStepComponents.map((childStepComponent, subStepIndex) => {
                subSteps.push(Object.assign(Object.assign({ index: stepIndex + subStepIndex + 1, component: childStepComponent, parentId: id }, (index === 0 && subStepIndex === 0 && { isVisited: true })), (0, exports.normalizeStepProps)(childStepComponent.props)));
                return childStepComponent.props.id;
            })
        })), (0, exports.normalizeStepProps)(childProps)), ...subSteps);
    }
    else {
        throw new Error('Wizard only accepts children of type WizardStep.');
    }
    return acc;
}, []);
exports.buildSteps = buildSteps;
function isWizardStep(child) {
    return react_1.default.isValidElement(child) && child.type === WizardStep_1.WizardStep;
}
exports.isWizardStep = isWizardStep;
// Omit "children" and "steps" when building steps for the Wizard's context
const normalizeStepProps = (_a) => {
    var { children: _children, steps: _steps } = _a, controlStep = tslib_1.__rest(_a, ["children", "steps"]);
    return controlStep;
};
exports.normalizeStepProps = normalizeStepProps;
/**
 * Determines whether a step is navigable based on disabled/hidden properties
 * @param steps All steps
 * @param step
 * @returns boolean
 */
const isStepEnabled = (steps, step) => {
    // Skip over parent steps since they are merely containers of sub-steps
    if (!(0, types_1.isWizardParentStep)(step) && !step.isHidden && !step.isDisabled) {
        if ((0, types_1.isWizardSubStep)(step)) {
            const parentStep = steps.find((otherStep) => otherStep.id === step.parentId);
            if (!parentStep.isHidden && !parentStep.isDisabled) {
                return true;
            }
        }
        else {
            return true;
        }
    }
    return false;
};
exports.isStepEnabled = isStepEnabled;
//# sourceMappingURL=utils.js.map