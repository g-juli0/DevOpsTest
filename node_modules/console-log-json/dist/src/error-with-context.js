"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorWithContext = void 0;
const capture_nested_stack_trace_1 = require("./capture-nested-stack-trace");
const safe_object_assign_1 = require("./safe-object-assign");
class ErrorWithContext extends Error {
    constructor(error, extraContext = {}) {
        if (typeof extraContext === 'string') {
            if (typeof error === 'object') {
                error.message += ` - ${extraContext}`;
            }
            else {
                if (error == null) {
                    error = extraContext;
                }
                else {
                    error += ` - ${extraContext}`;
                }
            }
            extraContext = {};
        }
        super(typeof error === 'string' ? error : error.message);
        this.extraContext = extraContext;
        if (typeof error !== 'string') {
            const nestedStackTrace = new capture_nested_stack_trace_1.CaptureNestedStackTrace();
            nestedStackTrace.capture(this, error);
            if (error.extraContext != null) {
                if (typeof error.extraContext === 'string') {
                    // noinspection SuspiciousTypeOfGuard
                    if (typeof extraContext === 'string') {
                        this.extraContext = (0, safe_object_assign_1.safeObjectAssign)({ message: error.extraContext }, [], { message2: extraContext });
                    }
                    else {
                        this.extraContext = (0, safe_object_assign_1.safeObjectAssign)({ message: error.extraContext }, [], extraContext);
                    }
                }
                else {
                    // noinspection SuspiciousTypeOfGuard
                    if (typeof extraContext === 'string') {
                        this.extraContext = (0, safe_object_assign_1.safeObjectAssign)(error.extraContext, [], { message: extraContext });
                    }
                    else {
                        this.extraContext = (0, safe_object_assign_1.safeObjectAssign)(error.extraContext, [], extraContext);
                    }
                }
            }
        }
    }
}
exports.ErrorWithContext = ErrorWithContext;
//# sourceMappingURL=error-with-context.js.map