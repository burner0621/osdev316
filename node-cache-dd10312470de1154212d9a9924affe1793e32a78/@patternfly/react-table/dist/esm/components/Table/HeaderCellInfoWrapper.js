import * as React from 'react';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { Popover } from '@patternfly/react-core/dist/esm/components/Popover';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { TableText } from './TableText';
export const HeaderCellInfoWrapper = ({ children, info, className, variant = 'tooltip', popoverProps, tooltipProps, ariaLabel }) => (React.createElement("div", { className: css(styles.tableColumnHelp, className) },
    typeof children === 'string' ? React.createElement(TableText, null, children) : children,
    React.createElement("span", { className: css(styles.tableColumnHelpAction) }, variant === 'tooltip' ? (React.createElement(Tooltip, Object.assign({ content: info }, tooltipProps),
        React.createElement(Button, { variant: "plain", "aria-label": ariaLabel || (typeof info === 'string' && info) || 'More info' },
            React.createElement(HelpIcon, null)))) : (React.createElement(Popover, Object.assign({ bodyContent: info }, popoverProps),
        React.createElement(Button, { variant: "plain", "aria-label": ariaLabel || (typeof info === 'string' && info) || 'More info' },
            React.createElement(HelpIcon, null)))))));
HeaderCellInfoWrapper.displayName = 'HeaderCellInfoWrapper';
//# sourceMappingURL=HeaderCellInfoWrapper.js.map