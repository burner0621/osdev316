"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
const slider_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Slider/slider"));
const react_styles_1 = require("@patternfly/react-styles");
const SliderStep_1 = require("./SliderStep");
const InputGroup_1 = require("../InputGroup");
const TextInput_1 = require("../TextInput");
const Tooltip_1 = require("../Tooltip");
const c_slider_value_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_slider_value'));
const c_slider__value_c_form_control_width_chars_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_slider__value_c_form_control_width_chars'));
const util_1 = require("../../helpers/util");
const getPercentage = (current, max) => (100 * current) / max;
const Slider = (_a) => {
    var { className, value = 0, customSteps, areCustomStepsContinuous = false, isDisabled = false, isInputVisible = false, inputValue = 0, inputLabel, inputAriaLabel = 'Slider value input', thumbAriaLabel = 'Value', hasTooltipOverThumb = false, inputPosition = 'end', onChange, leftActions, startActions, rightActions, endActions, step = 1, min = 0, max = 100, showTicks = false, showBoundaries = true, 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby } = _a, props = tslib_1.__rest(_a, ["className", "value", "customSteps", "areCustomStepsContinuous", "isDisabled", "isInputVisible", "inputValue", "inputLabel", "inputAriaLabel", "thumbAriaLabel", "hasTooltipOverThumb", "inputPosition", "onChange", "leftActions", "startActions", "rightActions", "endActions", "step", "min", "max", "showTicks", "showBoundaries", 'aria-describedby', 'aria-labelledby']);
    const sliderRailRef = React.useRef();
    const thumbRef = React.useRef();
    const [localValue, setValue] = (0, react_1.useState)(value);
    const [localInputValue, setLocalInputValue] = (0, react_1.useState)(inputValue);
    let isRTL;
    React.useEffect(() => {
        isRTL = (0, util_1.getLanguageDirection)(sliderRailRef.current) === 'rtl';
    });
    React.useEffect(() => {
        setValue(value);
    }, [value]);
    React.useEffect(() => {
        setLocalInputValue(inputValue);
    }, [inputValue]);
    let diff = 0;
    let snapValue;
    // calculate style value percentage
    const stylePercent = ((localValue - min) * 100) / (max - min);
    const style = { [c_slider_value_1.default.name]: `${stylePercent}%` };
    const widthChars = React.useMemo(() => localInputValue.toString().length, [localInputValue]);
    const inputStyle = { [c_slider__value_c_form_control_width_chars_1.default.name]: widthChars };
    const onChangeHandler = (_event, value) => {
        setLocalInputValue(Number(value));
    };
    const handleKeyPressOnInput = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (onChange) {
                onChange(event, localValue, localInputValue, setLocalInputValue);
            }
        }
    };
    const onInputFocus = (e) => {
        e.stopPropagation();
    };
    const onThumbClick = () => {
        thumbRef.current.focus();
    };
    const onBlur = (event) => {
        if (onChange) {
            onChange(event, localValue, localInputValue, setLocalInputValue);
        }
    };
    const findAriaTextValue = () => {
        if (!areCustomStepsContinuous && customSteps) {
            const matchingStep = customSteps.find((stepObj) => stepObj.value === localValue);
            if (matchingStep) {
                return matchingStep.label;
            }
        }
        // For continuous steps default to showing 2 decimals in tooltip
        // Consider making it configurable via a property
        return Number(Number(localValue).toFixed(2)).toString();
    };
    const handleThumbDragEnd = () => {
        document.removeEventListener('mousemove', callbackThumbMove);
        document.removeEventListener('mouseup', callbackThumbUp);
        document.removeEventListener('touchmove', callbackThumbMove);
        document.removeEventListener('touchend', callbackThumbUp);
        document.removeEventListener('touchcancel', callbackThumbUp);
    };
    const handleMouseDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isRTL) {
            diff = thumbRef.current.getBoundingClientRect().right - e.clientX;
        }
        else {
            diff = e.clientX - thumbRef.current.getBoundingClientRect().left;
        }
        document.addEventListener('mousemove', callbackThumbMove);
        document.addEventListener('mouseup', callbackThumbUp);
    };
    const handleTouchStart = (e) => {
        e.stopPropagation();
        if (isRTL) {
            diff = thumbRef.current.getBoundingClientRect().right - e.touches[0].clientX;
        }
        else {
            diff = e.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;
        }
        document.addEventListener('touchmove', callbackThumbMove, { passive: false });
        document.addEventListener('touchend', callbackThumbUp);
        document.addEventListener('touchcancel', callbackThumbUp);
    };
    const onSliderRailClick = (e) => {
        handleThumbMove(e);
        if (snapValue && !areCustomStepsContinuous) {
            thumbRef.current.style.setProperty(c_slider_value_1.default.name, `${snapValue}%`);
            setValue(snapValue);
            if (onChange) {
                onChange(e, snapValue);
            }
        }
    };
    const handleThumbMove = (e) => {
        if (e.type === 'touchmove') {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        const clientPosition = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        let newPosition;
        if (isRTL) {
            newPosition = sliderRailRef.current.getBoundingClientRect().right - clientPosition - diff;
        }
        else {
            newPosition = clientPosition - diff - sliderRailRef.current.getBoundingClientRect().left;
        }
        const end = sliderRailRef.current.offsetWidth - thumbRef.current.offsetWidth;
        const start = 0;
        if (newPosition < start) {
            newPosition = 0;
        }
        if (newPosition > end) {
            newPosition = end;
        }
        const newPercentage = getPercentage(newPosition, end);
        thumbRef.current.style.setProperty(c_slider_value_1.default.name, `${newPercentage}%`);
        // convert percentage to value
        const newValue = Math.round(((newPercentage * (max - min)) / 100 + min) * 100) / 100;
        setValue(newValue);
        if (!customSteps) {
            // snap to new value if not custom steps
            snapValue = Math.round((Math.round((newValue - min) / step) * step + min) * 100) / 100;
            thumbRef.current.style.setProperty(c_slider_value_1.default.name, `${snapValue}%`);
            setValue(snapValue);
        }
        /* If custom steps are discrete, snap to closest step value */
        if (!areCustomStepsContinuous && customSteps) {
            let percentage = newPercentage;
            if (customSteps[customSteps.length - 1].value !== 100) {
                percentage = (newPercentage * (max - min)) / 100 + min;
            }
            const stepIndex = customSteps.findIndex((stepObj) => stepObj.value >= percentage);
            if (customSteps[stepIndex].value === percentage) {
                snapValue = customSteps[stepIndex].value;
            }
            else {
                const midpoint = (customSteps[stepIndex].value + customSteps[stepIndex - 1].value) / 2;
                if (midpoint > percentage) {
                    snapValue = customSteps[stepIndex - 1].value;
                }
                else {
                    snapValue = customSteps[stepIndex].value;
                }
            }
            setValue(snapValue);
        }
        // Call onchange callback
        if (onChange) {
            if (snapValue !== undefined) {
                onChange(e, snapValue);
            }
            else {
                onChange(e, newValue);
            }
        }
    };
    const callbackThumbMove = React.useCallback(handleThumbMove, [min, max, customSteps, onChange]);
    const callbackThumbUp = React.useCallback(handleThumbDragEnd, [min, max, customSteps, onChange]);
    const handleThumbKeys = (e) => {
        const key = e.key;
        if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
            return;
        }
        e.preventDefault();
        let newValue = localValue;
        if (!areCustomStepsContinuous && customSteps) {
            const stepIndex = customSteps.findIndex((stepObj) => stepObj.value === localValue);
            if (key === 'ArrowRight') {
                if (isRTL) {
                    if (stepIndex - 1 >= 0) {
                        newValue = customSteps[stepIndex - 1].value;
                    }
                }
                else {
                    if (stepIndex + 1 < customSteps.length) {
                        {
                            newValue = customSteps[stepIndex + 1].value;
                        }
                    }
                }
            }
            else if (key === 'ArrowLeft') {
                if (isRTL) {
                    if (stepIndex + 1 < customSteps.length) {
                        {
                            newValue = customSteps[stepIndex + 1].value;
                        }
                    }
                }
                else {
                    if (stepIndex - 1 >= 0) {
                        newValue = customSteps[stepIndex - 1].value;
                    }
                }
            }
        }
        else {
            if (key === 'ArrowRight') {
                if (isRTL) {
                    newValue = localValue - step >= min ? localValue - step : min;
                }
                else {
                    newValue = localValue + step <= max ? localValue + step : max;
                }
            }
            else if (key === 'ArrowLeft') {
                if (isRTL) {
                    newValue = localValue + step <= max ? localValue + step : max;
                }
                else {
                    newValue = localValue - step >= min ? localValue - step : min;
                }
            }
        }
        if (newValue !== localValue) {
            thumbRef.current.style.setProperty(c_slider_value_1.default.name, `${newValue}%`);
            setValue(newValue);
            if (onChange) {
                onChange(e, newValue);
            }
        }
    };
    const displayInput = () => {
        const textInput = (React.createElement(TextInput_1.TextInput, { isDisabled: isDisabled, type: "number", value: localInputValue, "aria-label": inputAriaLabel, onKeyDown: handleKeyPressOnInput, onChange: onChangeHandler, onClick: onInputFocus, onFocus: onInputFocus, onBlur: onBlur }));
        if (inputLabel) {
            return (React.createElement(InputGroup_1.InputGroup, null,
                React.createElement(InputGroup_1.InputGroupItem, { isFill: true }, textInput),
                React.createElement(InputGroup_1.InputGroupText, { isDisabled: isDisabled }, inputLabel)));
        }
        else {
            return textInput;
        }
    };
    const getStepValue = (val, min, max) => ((val - min) * 100) / (max - min);
    const buildSteps = () => {
        const builtSteps = [];
        for (let i = min; i <= max; i = i + step) {
            const stepValue = getStepValue(i, min, max);
            // If boundaries but not ticks just generate the needed steps
            // so that we don't pollute them DOM with empty divs
            if (!showTicks && showBoundaries && i !== min && i !== max) {
                continue;
            }
            builtSteps.push(React.createElement(SliderStep_1.SliderStep, { key: i, value: stepValue, label: i.toString(), isTickHidden: !showTicks, isLabelHidden: (i === min || i === max) && showBoundaries ? false : true, isActive: i <= localValue }));
        }
        return builtSteps;
    };
    const thumbComponent = (React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderThumb), ref: thumbRef, tabIndex: isDisabled ? -1 : 0, role: "slider", "aria-valuemin": customSteps ? customSteps[0].value : min, "aria-valuemax": customSteps ? customSteps[customSteps.length - 1].value : max, "aria-valuenow": localValue, "aria-valuetext": findAriaTextValue(), "aria-label": thumbAriaLabel, "aria-disabled": isDisabled, "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, onMouseDown: !isDisabled ? handleMouseDown : null, onTouchStart: !isDisabled ? handleTouchStart : null, onKeyDown: !isDisabled ? handleThumbKeys : null, onClick: !isDisabled ? onThumbClick : null }));
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(slider_1.default.slider, className, isDisabled && slider_1.default.modifiers.disabled), style: Object.assign(Object.assign({}, style), inputStyle) }, props),
        (leftActions || startActions) && React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderActions) }, leftActions || startActions),
        React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderMain) },
            React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderRail), ref: sliderRailRef, onClick: !isDisabled ? onSliderRailClick : null },
                React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderRailTrack) })),
            customSteps && (React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderSteps), "aria-hidden": "true" }, customSteps.map((stepObj) => {
                const minValue = customSteps[0].value;
                const maxValue = customSteps[customSteps.length - 1].value;
                const stepValue = getStepValue(stepObj.value, minValue, maxValue);
                return (React.createElement(SliderStep_1.SliderStep, { key: stepObj.value, value: stepValue, label: stepObj.label, isLabelHidden: stepObj.isLabelHidden, isActive: stepObj.value <= localValue }));
            }))),
            !customSteps && (showTicks || showBoundaries) && (React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderSteps), "aria-hidden": "true" }, buildSteps())),
            hasTooltipOverThumb ? (React.createElement(Tooltip_1.Tooltip, { triggerRef: thumbRef, entryDelay: 0, content: findAriaTextValue() }, thumbComponent)) : (thumbComponent),
            isInputVisible && inputPosition === 'aboveThumb' && (React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderValue, slider_1.default.modifiers.floating) }, displayInput()))),
        isInputVisible && (inputPosition === 'right' || inputPosition === 'end') && (React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderValue) }, displayInput())),
        (rightActions || endActions) && React.createElement("div", { className: (0, react_styles_1.css)(slider_1.default.sliderActions) }, rightActions || endActions)));
};
exports.Slider = Slider;
exports.Slider.displayName = 'Slider';
//# sourceMappingURL=Slider.js.map