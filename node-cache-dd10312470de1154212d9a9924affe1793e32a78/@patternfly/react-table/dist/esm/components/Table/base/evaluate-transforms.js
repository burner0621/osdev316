/**
 * evaluate-transforms.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { mergeProps } from './merge-props';
/**
 * @param {transformsType} transforms - transforms type
 * @param {string | object} value - value
 * @param {ExtraParamsType} extraParameters - extra params type
 */
export function evaluateTransforms(transforms = [], value, extraParameters = {}) {
    if (process.env.NODE_ENV !== 'production') {
        if (!transforms.every((f) => typeof f === 'function')) {
            throw new Error("All transforms weren't functions!");
        }
    }
    if (transforms.length === 0) {
        return {};
    }
    return mergeProps(...transforms.map((transform) => transform(value, extraParameters)));
}
//# sourceMappingURL=evaluate-transforms.js.map