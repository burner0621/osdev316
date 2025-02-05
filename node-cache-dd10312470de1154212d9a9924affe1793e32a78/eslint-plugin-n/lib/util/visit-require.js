/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const path = require("path")
const {
    CALL,
    ReferenceTracker,
    getStringIfConstant,
} = require("@eslint-community/eslint-utils")
const isCoreModule = require("is-core-module")
const getResolvePaths = require("./get-resolve-paths")
const getTryExtensions = require("./get-try-extensions")
const ImportTarget = require("./import-target")
const stripImportPathParams = require("./strip-import-path-params")

/**
 * Gets a list of `require()` targets.
 *
 * Core modules of Node.js (e.g. `fs`, `http`) are excluded.
 *
 * @param {RuleContext} context - The rule context.
 * @param {Object} [options] - The flag to include core modules.
 * @param {boolean} [options.includeCore] - The flag to include core modules.
 * @param {function(ImportTarget[]):void} callback The callback function to get result.
 * @returns {Object} The visitor.
 */
module.exports = function visitRequire(
    context,
    { includeCore = false } = {},
    callback
) {
    const targets = []
    const basedir = path.dirname(
        path.resolve(context.filename ?? context.getFilename())
    )
    const paths = getResolvePaths(context)
    const extensions = getTryExtensions(context)
    const options = { basedir, paths, extensions }

    return {
        "Program:exit"(node) {
            const sourceCode = context.sourceCode ?? context.getSourceCode() // TODO: just use context.sourceCode when dropping eslint < v9
            const tracker = new ReferenceTracker(
                sourceCode.getScope?.(node) ?? context.getScope() //TODO: remove context.getScope() when dropping support for ESLint < v9
            )
            const references = tracker.iterateGlobalReferences({
                require: {
                    [CALL]: true,
                    resolve: { [CALL]: true },
                },
            })

            for (const { node } of references) {
                const targetNode = node.arguments[0]
                const rawName = getStringIfConstant(targetNode)
                const name = rawName && stripImportPathParams(rawName)
                // Note: "999" arbitrary to check current/future Node.js version
                if (name && (includeCore || !isCoreModule(name, "999"))) {
                    targets.push(
                        new ImportTarget(targetNode, name, options, "require")
                    )
                }
            }

            callback(targets)
        },
    }
}
