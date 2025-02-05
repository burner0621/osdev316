"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderCellInfoWrapper = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const help_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/help-icon'));
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const Tooltip_1 = require('@patternfly/react-core/dist/js/components/Tooltip');
const Popover_1 = require('@patternfly/react-core/dist/js/components/Popover');
const Button_1 = require('@patternfly/react-core/dist/js/components/Button');
const TableText_1 = require("./TableText");
const HeaderCellInfoWrapper = ({ children, info, className, variant = 'tooltip', popoverProps, tooltipProps, ariaLabel }) => (React.createElement("div", { className: (0, react_styles_1.css)(table_1.default.tableColumnHelp, className) },
    typeof children === 'string' ? React.createElement(TableText_1.TableText, null, children) : children,
    React.createElement("span", { className: (0, react_styles_1.css)(table_1.default.tableColumnHelpAction) }, variant === 'tooltip' ? (React.createElement(Tooltip_1.Tooltip, Object.assign({ content: info }, tooltipProps),
        React.createElement(Button_1.Button, { variant: "plain", "aria-label": ariaLabel || (typeof info === 'string' && info) || 'More info' },
            React.createElement(help_icon_1.default, null)))) : (React.createElement(Popover_1.Popover, Object.assign({ bodyContent: info }, popoverProps),
        React.createElement(Button_1.Button, { variant: "plain", "aria-label": ariaLabel || (typeof info === 'string' && info) || 'More info' },
            React.createElement(help_icon_1.default, null)))))));
exports.HeaderCellInfoWrapper = HeaderCellInfoWrapper;
exports.HeaderCellInfoWrapper.displayName = 'HeaderCellInfoWrapper';
//# sourceMappingURL=HeaderCellInfoWrapper.js.map