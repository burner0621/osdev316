import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list.mjs';
import { SimpleListContext } from './SimpleList';
class SimpleListItem extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
    }
    render() {
        const _a = this.props, { children, isActive, className, component: Component, componentClassName, componentProps, onClick, type, href, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        itemId } = _a, props = __rest(_a, ["children", "isActive", "className", "component", "componentClassName", "componentProps", "onClick", "type", "href", "itemId"]);
        return (React.createElement(SimpleListContext.Consumer, null, ({ currentRef, updateCurrentRef, isControlled }) => {
            const isButton = Component === 'button';
            const isCurrentItem = this.ref && currentRef && isControlled ? currentRef.current === this.ref.current : isActive;
            const additionalComponentProps = isButton
                ? {
                    type
                }
                : {
                    tabIndex: 0,
                    href
                };
            return (React.createElement("li", Object.assign({ className: css('pf-v5-c-simple-list__item', className) }, props),
                React.createElement(Component, Object.assign({ className: css(styles.simpleListItemLink, isCurrentItem && styles.modifiers.current, componentClassName), onClick: (evt) => {
                        onClick(evt);
                        updateCurrentRef(this.ref, this.props);
                    }, ref: this.ref }, componentProps, additionalComponentProps), children)));
        }));
    }
}
SimpleListItem.displayName = 'SimpleListItem';
SimpleListItem.defaultProps = {
    children: null,
    className: '',
    isActive: false,
    component: 'button',
    componentClassName: '',
    type: 'button',
    href: '',
    onClick: () => { }
};
export { SimpleListItem };
//# sourceMappingURL=SimpleListItem.js.map