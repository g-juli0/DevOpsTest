export declare class FormatStackTrace {
    static readonly divider = "    at";
    static toNewLines(stack: string): string;
    static toArray(stack: string): string[];
}
