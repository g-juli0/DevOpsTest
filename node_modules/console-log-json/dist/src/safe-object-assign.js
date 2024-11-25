"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeObjectAssign = void 0;
const json_stringify_safe_1 = __importDefault(require("json-stringify-safe"));
const sort_object_1 = require("./sort-object");
// tslint:disable-next-line:no-var-requires
/* tslint:disable:only-arrow-functions */
/**
 * Safe deep merge two objects by handling circular references and conflicts
 *
 * in case of conflicting property, it will be merged with a modified property by adding a prefix
 * @param target
 * @param mergeStringProperties
 * @param sources
 */
function safeObjectAssign(target, mergeStringProperties, ...sources) {
    const traversedProps = new Set();
    function mergeDeep(theTarget, ...theSources) {
        if (!theSources.length) {
            return theTarget;
        }
        let source = theSources.shift();
        if (traversedProps.has(source)) {
            source = { circular: 'circular' };
        }
        traversedProps.add(source);
        if (isObject(theTarget) && isObject(source)) {
            for (const key in source) {
                // noinspection JSUnfilteredForInLoop
                if (isObject(source[key])) {
                    // noinspection JSUnfilteredForInLoop
                    if (!theTarget[key]) {
                        // noinspection JSUnfilteredForInLoop
                        Object.assign(theTarget, { [key]: {} });
                        theTarget = (0, sort_object_1.sortObject)(theTarget);
                    }
                    // noinspection JSUnfilteredForInLoop
                    mergeDeep(theTarget[key], source[key]);
                }
                else {
                    const targetMatchedKey = Object.keys(target).find((k) => k.toLowerCase() === key);
                    if (targetMatchedKey != null &&
                        mergeStringProperties != null &&
                        mergeStringProperties.includes(targetMatchedKey) &&
                        typeof theTarget[targetMatchedKey] === 'string' &&
                        typeof source[targetMatchedKey] === 'string') {
                        // merge the two strings together
                        theTarget[targetMatchedKey] = `${theTarget[targetMatchedKey]} - ${source[targetMatchedKey]}`;
                    }
                    else {
                        // noinspection JSUnfilteredForInLoop
                        const targetKey = findNonConflictingKeyInTarget(theTarget, key);
                        // noinspection JSUnfilteredForInLoop
                        Object.assign(theTarget, { [targetKey]: source[key] });
                    }
                    theTarget = (0, sort_object_1.sortObject)(theTarget);
                }
            }
        }
        return mergeDeep(theTarget, ...theSources);
    }
    const targetCopy = JSON.parse((0, json_stringify_safe_1.default)(target));
    const sourcesCopy = JSON.parse((0, json_stringify_safe_1.default)(sources));
    return mergeDeep(targetCopy, ...sourcesCopy);
}
exports.safeObjectAssign = safeObjectAssign;
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
function findNonConflictingKeyInTarget(target, key) {
    const targetContainsKey = Object.keys(target).find((k) => k.toLowerCase() === key);
    if (targetContainsKey != null) {
        return findNonConflictingKeyInTarget(target, `${conflictResolutionPrefix}${key}`);
    }
    else {
        return key;
    }
}
const conflictResolutionPrefix = '_';
//# sourceMappingURL=safe-object-assign.js.map