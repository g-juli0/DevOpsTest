"use strict";
// import callsites from 'callsites';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallStack = void 0;
const format_stack_trace_1 = require("./format-stack-trace");
const new_line_character_1 = require("./new-line-character");
function getCallStack() {
    var _a;
    const callStack = format_stack_trace_1.FormatStackTrace.toArray((_a = new Error().stack) !== null && _a !== void 0 ? _a : '');
    // remove the "error" line for call stack since this is not used for error reporting
    if (callStack && callStack.length >= 1 && callStack[0].startsWith('Error:')) {
        callStack.splice(0, 1);
    }
    return callStack.join(`${(0, new_line_character_1.NewLineCharacter)()}${format_stack_trace_1.FormatStackTrace.divider}`);
    /*
    const callsiteArray: callsites.CallSite[] = callsites();
  
    return callsiteArray.map(
      m => `${m.getFileName()}:${m.getLineNumber()},${m.getColumnNumber()} ${m.getFunctionName()}`,
    );
  */
}
exports.getCallStack = getCallStack;
//# sourceMappingURL=get-call-stack.js.map