import { __rest } from "tslib";
import * as React from 'react';
import { ToggleTemplate } from './ToggleTemplate';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination.mjs';
import { css } from '@patternfly/react-styles';
import { fillTemplate } from '../../helpers';
import { Navigation } from './Navigation';
import { PaginationOptionsMenu } from './PaginationOptionsMenu';
import { useOUIAProps } from '../../helpers';
import { formatBreakpointMods } from '../../helpers/util';
import widthChars from '@patternfly/react-tokens/dist/esm/c_pagination__nav_page_select_c_form_control_width_chars';
export var PaginationVariant;
(function (PaginationVariant) {
    PaginationVariant["bottom"] = "bottom";
    PaginationVariant["top"] = "top";
})(PaginationVariant || (PaginationVariant = {}));
const defaultPerPageOptions = [
    {
        title: '10',
        value: 10
    },
    {
        title: '20',
        value: 20
    },
    {
        title: '50',
        value: 50
    },
    {
        title: '100',
        value: 100
    }
];
const handleInputWidth = (lastPage, node) => {
    if (!node) {
        return;
    }
    const len = String(lastPage).length;
    if (len >= 3) {
        node.style.setProperty(widthChars.name, `${len}`);
    }
    else {
        node.style.setProperty(widthChars.name, '2');
    }
};
export const Pagination = (_a) => {
    var { children, className = '', variant = PaginationVariant.top, isDisabled = false, isCompact = false, isSticky = false, isStatic = false, dropDirection: dropDirectionProp, toggleTemplate, perPage = defaultPerPageOptions[0].value, titles = {
        items: '',
        page: '',
        pages: '',
        itemsPerPage: 'Items per page',
        perPageSuffix: 'per page',
        toFirstPageAriaLabel: 'Go to first page',
        toPreviousPageAriaLabel: 'Go to previous page',
        toLastPageAriaLabel: 'Go to last page',
        toNextPageAriaLabel: 'Go to next page',
        optionsToggleAriaLabel: '',
        currPageAriaLabel: 'Current page',
        paginationAriaLabel: 'Pagination',
        ofWord: 'of'
    }, firstPage = 1, page: pageProp = 1, offset = null, isLastFullPageShown = false, itemsStart = null, itemsEnd = null, itemCount, perPageOptions = defaultPerPageOptions, widgetId = 'options-menu', onSetPage = () => undefined, onPerPageSelect = () => undefined, onFirstClick = () => undefined, onPreviousClick = () => undefined, onNextClick = () => undefined, onPageInput = () => undefined, onLastClick = () => undefined, ouiaId, ouiaSafe = true, usePageInsets, inset } = _a, props = __rest(_a, ["children", "className", "variant", "isDisabled", "isCompact", "isSticky", "isStatic", "dropDirection", "toggleTemplate", "perPage", "titles", "firstPage", "page", "offset", "isLastFullPageShown", "itemsStart", "itemsEnd", "itemCount", "perPageOptions", "widgetId", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaId", "ouiaSafe", "usePageInsets", "inset"]);
    const paginationRef = React.useRef(null);
    const getLastPage = () => 
    // when itemCount is not known let's set lastPage as page+1 as we don't know the total count
    itemCount || itemCount === 0 ? Math.ceil(itemCount / perPage) || 0 : page + 1;
    React.useEffect(() => {
        const node = paginationRef.current;
        handleInputWidth(getLastPage(), node);
    }, [perPage, itemCount]);
    const dropDirection = dropDirectionProp || (variant === 'bottom' && !isStatic ? 'up' : 'down');
    let page = pageProp;
    if (offset !== null) {
        itemsStart = offset + 1;
        page = Math.max(Math.ceil(itemsStart / perPage), 1);
        itemsEnd = offset + perPage;
    }
    const lastPage = getLastPage();
    let firstIndex = (page - 1) * perPage + 1;
    let lastIndex = page * perPage;
    if (itemCount || itemCount === 0) {
        firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
        if (page < firstPage && itemCount > 0) {
            page = firstPage;
        }
        else if (page > lastPage) {
            page = lastPage;
        }
        if (itemCount >= 0) {
            lastIndex = page === lastPage || itemCount === 0 ? itemCount : page * perPage;
        }
    }
    const PaginationToggleTemplateProps = {
        firstIndex,
        lastIndex,
        itemCount,
        itemsTitle: titles.items,
        ofWord: titles.ofWord
    };
    return (React.createElement("div", Object.assign({ ref: paginationRef, className: css(styles.pagination, variant === PaginationVariant.bottom && styles.modifiers.bottom, usePageInsets && styles.modifiers.pageInsets, formatBreakpointMods(inset, styles), isCompact && styles.modifiers.compact, isStatic && styles.modifiers.static, isSticky && styles.modifiers.sticky, className) }, (widgetId && { id: `${widgetId}-${variant}-pagination` }), useOUIAProps(Pagination.displayName, ouiaId, ouiaSafe, variant), props),
        variant === PaginationVariant.top && (React.createElement("div", { className: css(styles.paginationTotalItems) },
            toggleTemplate &&
                typeof toggleTemplate === 'string' &&
                fillTemplate(toggleTemplate, PaginationToggleTemplateProps),
            toggleTemplate &&
                typeof toggleTemplate !== 'string' &&
                toggleTemplate(PaginationToggleTemplateProps),
            !toggleTemplate && (React.createElement(ToggleTemplate, { firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: titles.items, ofWord: titles.ofWord })))),
        perPageOptions && perPageOptions.length > 0 && (React.createElement(PaginationOptionsMenu, { itemsPerPageTitle: titles.itemsPerPage, perPageSuffix: titles.perPageSuffix, itemsTitle: isCompact ? '' : titles.items, optionsToggleAriaLabel: titles.optionsToggleAriaLabel, perPageOptions: perPageOptions, firstIndex: itemsStart !== null ? itemsStart : firstIndex, lastIndex: itemsEnd !== null ? itemsEnd : lastIndex, ofWord: titles.ofWord, isLastFullPageShown: isLastFullPageShown, itemCount: itemCount, page: page, perPage: perPage, lastPage: lastPage, onPerPageSelect: onPerPageSelect, dropDirection: dropDirection, widgetId: `${widgetId}-${variant}`, toggleTemplate: toggleTemplate, isDisabled: isDisabled })),
        React.createElement(Navigation, { pagesTitle: titles.page, pagesTitlePlural: titles.pages, toLastPageAriaLabel: titles.toLastPageAriaLabel, toPreviousPageAriaLabel: titles.toPreviousPageAriaLabel, toNextPageAriaLabel: titles.toNextPageAriaLabel, toFirstPageAriaLabel: titles.toFirstPageAriaLabel, currPageAriaLabel: titles.currPageAriaLabel, paginationAriaLabel: titles.paginationAriaLabel, ofWord: titles.ofWord, page: itemCount && itemCount <= 0 ? 0 : page, perPage: perPage, itemCount: itemCount, firstPage: itemsStart !== null ? itemsStart : 1, lastPage: lastPage, onSetPage: onSetPage, onFirstClick: onFirstClick, onPreviousClick: onPreviousClick, onNextClick: onNextClick, onLastClick: onLastClick, onPageInput: onPageInput, isDisabled: isDisabled, isCompact: isCompact }),
        children));
};
Pagination.displayName = 'Pagination';
//# sourceMappingURL=Pagination.js.map