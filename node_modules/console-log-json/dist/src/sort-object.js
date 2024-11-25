"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortObject = void 0;
function sortObject(foo) {
    const keys = Object.keys(foo);
    const objectArray = [];
    keys.forEach((k) => {
        objectArray.push({ key: k, val: foo[k] });
    });
    const sorted = objectArray.sort((a, b) => {
        return a.key === b.key ? 0 : a.key < b.key ? -1 : 1;
    });
    const sortedObject = {};
    sorted.forEach((p) => {
        sortedObject[p.key] = p.val;
    });
    return sortedObject;
}
exports.sortObject = sortObject;
//# sourceMappingURL=sort-object.js.map