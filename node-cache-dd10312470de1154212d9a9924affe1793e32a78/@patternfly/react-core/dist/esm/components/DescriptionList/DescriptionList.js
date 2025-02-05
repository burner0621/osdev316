import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list.mjs';
import { formatBreakpointMods } from '../../helpers';
import cssGridTemplateColumnsMin from '@patternfly/react-tokens/dist/esm/c_description_list_GridTemplateColumns_min';
import cssTermWidth from '@patternfly/react-tokens/dist/esm/c_description_list__term_width';
import cssHorizontalTermWidth from '@patternfly/react-tokens/dist/esm/c_description_list_m_horizontal__term_width';
const setBreakpointModifiers = (prefix, modifiers) => {
    const mods = modifiers;
    return Object.keys(mods || {}).reduce((acc, curr) => curr === 'default' ? Object.assign(Object.assign({}, acc), { [prefix]: mods[curr] }) : Object.assign(Object.assign({}, acc), { [`${prefix}-on-${curr}`]: mods[curr] }), {});
};
export const DescriptionList = (_a) => {
    var { className = '', children = null, isHorizontal = false, isAutoColumnWidths, isAutoFit, isInlineGrid, isCompact, isFluid, isFillColumns, displaySize = 'default', columnModifier, autoFitMinModifier, termWidth, horizontalTermWidthModifier, orientation, style } = _a, props = __rest(_a, ["className", "children", "isHorizontal", "isAutoColumnWidths", "isAutoFit", "isInlineGrid", "isCompact", "isFluid", "isFillColumns", "displaySize", "columnModifier", "autoFitMinModifier", "termWidth", "horizontalTermWidthModifier", "orientation", "style"]);
    if (isAutoFit && autoFitMinModifier) {
        style = Object.assign(Object.assign({}, style), setBreakpointModifiers(cssGridTemplateColumnsMin.name, autoFitMinModifier));
    }
    if (termWidth) {
        style = Object.assign(Object.assign({}, style), { [cssTermWidth.name]: termWidth });
    }
    if (isHorizontal && horizontalTermWidthModifier) {
        style = Object.assign(Object.assign({}, style), setBreakpointModifiers(cssHorizontalTermWidth.name, horizontalTermWidthModifier));
    }
    return (React.createElement("dl", Object.assign({ className: css(styles.descriptionList, (isHorizontal || isFluid) && styles.modifiers.horizontal, isAutoColumnWidths && styles.modifiers.autoColumnWidths, isAutoFit && styles.modifiers.autoFit, formatBreakpointMods(columnModifier, styles), formatBreakpointMods(orientation, styles), isInlineGrid && styles.modifiers.inlineGrid, isCompact && styles.modifiers.compact, isFluid && styles.modifiers.fluid, isFillColumns && styles.modifiers.fillColumns, displaySize === 'lg' && styles.modifiers.displayLg, displaySize === '2xl' && styles.modifiers.display_2xl, className), style: style }, props), children));
};
DescriptionList.displayName = 'DescriptionList';
//# sourceMappingURL=DescriptionList.js.map