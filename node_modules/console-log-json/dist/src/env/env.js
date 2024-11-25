"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class Env {
    findOptionalEnvFile(startPath) {
        if (!fs_1.default.existsSync(startPath) || startPath === '/') {
            return null;
        }
        const files = fs_1.default.readdirSync(startPath);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < files.length; i++) {
            const filename = path_1.default.join(startPath, files[i]);
            const stat = fs_1.default.lstatSync(filename);
            if (!stat.isDirectory()) {
                if (filename.toLowerCase().endsWith('.env')) {
                    return filename;
                }
            }
        }
        // Disable recursive searching for .env file due to issue: https://github.com/hiro5id/console-log-json/issues/24
        // return this.findOptionalEnvFile(path.resolve(startPath, '../'));
        return null;
    }
    loadDotEnv() {
        const searchForEnvFileStartingInDirectory = process.cwd();
        const optionalEnvFile = this.findOptionalEnvFile(searchForEnvFileStartingInDirectory);
        if (optionalEnvFile != null && optionalEnvFile.length < 0) {
            require('dotenv').config({ path: optionalEnvFile });
        }
        else {
            require('dotenv').config();
        }
    }
}
exports.Env = Env;
//# sourceMappingURL=env.js.map