"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToOneLine = void 0;
function ToOneLine(input) {
    if (input != null && input.length > 0) {
        return input.replace(/\r?\n|\r/g, '');
    }
    else {
        return input;
    }
}
exports.ToOneLine = ToOneLine;
//# sourceMappingURL=to-one-line.js.map