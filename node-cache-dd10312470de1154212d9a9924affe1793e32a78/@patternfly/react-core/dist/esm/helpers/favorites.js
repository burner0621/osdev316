import * as React from 'react';
import { ApplicationLauncherSeparator } from '../deprecated/components/ApplicationLauncher/ApplicationLauncherSeparator';
import { Divider } from '../components/Divider/Divider';
/**
 * This function is a helper for creating an array of renderable favorite items for the Application launcher or Select
 *
 * @param {object} items The items rendered in Select or Application aLauncher
 * @param {boolean} isGrouped Flag indicating if items are grouped
 * @param {any[]} favorites Array of ids of favorited items
 * @param {boolean} isEnterTriggersArrowDown Flag indicating if we should add isEnterTriggersArrowDown to favorited item
 */
export const createRenderableFavorites = (items, isGrouped, favorites, isEnterTriggersArrowDown) => {
    if (isGrouped) {
        const favoriteItems = [];
        items.forEach((group) => {
            if (favorites.length > 0) {
                return (group.props.children &&
                    group.props.children
                        .filter((item) => favorites.includes(item.props.id))
                        .map((item) => {
                        if (isEnterTriggersArrowDown) {
                            return favoriteItems.push(React.cloneElement(item, {
                                isFavorite: true,
                                enterTriggersArrowDown: isEnterTriggersArrowDown,
                                id: `favorite-${item.props.id}`
                            }));
                        }
                        else {
                            return favoriteItems.push(React.cloneElement(item, { isFavorite: true, id: `favorite-${item.props.id}` }));
                        }
                    }));
            }
        });
        return favoriteItems;
    }
    return items
        .filter((item) => favorites.includes(item.props.id))
        .map((item) => React.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: isEnterTriggersArrowDown }));
};
/**
 * This function is a helper for extending the array of renderable favorite with the select/application launcher items to  render in the Application launcher or Select
 *
 * @param {object} items The items rendered in Select or Application aLauncher
 * @param {boolean} isGrouped Flag indicating if items are grouped
 * @param {any[]} favorites Array of ids of favorited items
 */
export const extendItemsWithFavorite = (items, isGrouped, favorites) => {
    if (isGrouped) {
        return items.map((group) => React.cloneElement(group, {
            children: React.Children.map(group.props.children, (item) => {
                if (item.type === ApplicationLauncherSeparator || item.type === Divider) {
                    return item;
                }
                return React.cloneElement(item, {
                    isFavorite: favorites.some((favoriteId) => favoriteId === item.props.id || `favorite-${favoriteId}` === item.props.id)
                });
            })
        }));
    }
    return items.map((item) => React.cloneElement(item, {
        isFavorite: favorites.some((favoriteId) => favoriteId === item.props.id)
    }));
};
//# sourceMappingURL=favorites.js.map