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
exports.getCallingFilename = void 0;
const app_root_path_1 = __importDefault(require("app-root-path"));
const callsites_1 = __importDefault(require("callsites"));
const path = __importStar(require("path"));
function getCallingFilename() {
    const callsitesList = (0, callsites_1.default)();
    const callsite = callsitesList[3];
    let name = callsite.getFileName();
    if (name) {
        name = name.replace(path.join(app_root_path_1.default.toString(), '..'), '');
    }
    return name;
}
exports.getCallingFilename = getCallingFilename;
//# sourceMappingURL=get-calling-filename.js.map