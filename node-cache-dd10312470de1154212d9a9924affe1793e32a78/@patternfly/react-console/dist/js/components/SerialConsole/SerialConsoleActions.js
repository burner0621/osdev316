"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialConsoleActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const react_core_1 = require("@patternfly/react-core");
const SerialConsole_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Consoles/SerialConsole"));
const SerialConsoleActions = (_a) => {
    var { textDisconnect = 'Disconnect', textReset = 'Reset' } = _a, props = tslib_1.__rest(_a, ["textDisconnect", "textReset"]);
    return (react_1.default.createElement("div", { className: (0, react_styles_1.css)(SerialConsole_1.default.consoleActionsSerial) },
        react_1.default.createElement(react_core_1.Button, { variant: "secondary", onClick: props.onDisconnect }, textDisconnect),
        react_1.default.createElement(react_core_1.Button, { variant: "secondary", onClick: props.onReset }, textReset)));
};
exports.SerialConsoleActions = SerialConsoleActions;
exports.SerialConsoleActions.displayName = 'SerialConsoleActions';
//# sourceMappingURL=SerialConsoleActions.js.map