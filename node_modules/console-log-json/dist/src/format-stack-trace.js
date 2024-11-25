"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatStackTrace = void 0;
const app_root_path_1 = __importDefault(require("app-root-path"));
const path = __importStar(require("path"));
const new_line_character_1 = require("./new-line-character");
class FormatStackTrace {
    static toNewLines(stack) {
        const lines = this.toArray(stack);
        return lines.join(`${(0, new_line_character_1.NewLineCharacter)()}${this.divider}`);
    }
    static toArray(stack) {
        let noNewLines = stack.replace(/\n/gi, '');
        noNewLines = noNewLines.replace(/\r/gi, '');
        const lines = noNewLines.split(this.divider);
        // this filters out lines relating to this package when referenced from other projects
        const linesWithoutLocalFiles = lines.filter((m) => m.match(/node_modules\/.*console-log-json\/.*/gi) == null);
        // noinspection UnnecessaryLocalVariableJS
        const linesWithoutFullPath = linesWithoutLocalFiles.map((m) => m.replace(path.join(app_root_path_1.default.toString(), '..'), ''));
        return linesWithoutFullPath;
    }
}
exports.FormatStackTrace = FormatStackTrace;
FormatStackTrace.divider = '    at';
//# sourceMappingURL=format-stack-trace.js.map