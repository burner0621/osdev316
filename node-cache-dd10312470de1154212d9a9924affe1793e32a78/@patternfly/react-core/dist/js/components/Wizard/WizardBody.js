"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardBody = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const WizardContext_1 = require("./WizardContext");
const util_1 = require("../../helpers/util");
const resizeObserver_1 = require("../../helpers/resizeObserver");
const WizardBody = ({ children, hasNoPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, component = 'div' }) => {
    const [hasScrollbar, setHasScrollbar] = react_1.default.useState(false);
    const [previousWidth, setPreviousWidth] = react_1.default.useState(undefined);
    const wrapperRef = react_1.default.useRef(null);
    const WrapperComponent = component;
    const { activeStep } = react_1.default.useContext(WizardContext_1.WizardContext);
    const defaultAriaLabel = ariaLabel || `${activeStep === null || activeStep === void 0 ? void 0 : activeStep.name} content`;
    react_1.default.useEffect(() => {
        const resize = () => {
            if (wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) {
                const { offsetWidth, offsetHeight, scrollHeight } = wrapperRef.current;
                if (previousWidth !== offsetWidth) {
                    setPreviousWidth(offsetWidth);
                    setHasScrollbar(offsetHeight < scrollHeight);
                }
            }
        };
        const handleResizeWithDelay = (0, util_1.debounce)(resize, 250);
        let observer = () => { };
        if (wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) {
            observer = (0, resizeObserver_1.getResizeObserver)(wrapperRef.current, handleResizeWithDelay);
            const { offsetHeight, scrollHeight } = wrapperRef.current;
            setHasScrollbar(offsetHeight < scrollHeight);
            setPreviousWidth(wrapperRef.current.offsetWidth);
        }
        return () => {
            observer();
        };
    }, [previousWidth]);
    return (react_1.default.createElement(WrapperComponent, Object.assign({ ref: wrapperRef }, (component === 'div' && hasScrollbar && { role: 'region' }), (hasScrollbar && { 'aria-label': defaultAriaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 }), { className: (0, react_styles_1.css)(wizard_1.default.wizardMain) }),
        react_1.default.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardMainBody, hasNoPadding && wizard_1.default.modifiers.noPadding) }, children)));
};
exports.WizardBody = WizardBody;
exports.WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map