export declare class ErrorWithContext extends Error {
    constructor(error: Error | string, extraContext?: {
        [_: string]: any;
    });
}
